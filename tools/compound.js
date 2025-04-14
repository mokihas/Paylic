// Global chart instance
let compoundChart = null;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
});

function initializeCalculator() {
    setDefaultValues();
    setupEventListeners();
    document.getElementById('compoundResult').innerHTML = ''; // Clear result on load
    document.getElementById('myChart').style.display = 'none'; // Hide chart on load
}

function setDefaultValues() {
    const defaults = {
        principal: 1000,
        rate: 5,
        time: 5,
        frequency: 1
    };

    Object.keys(defaults).forEach(key => {
        document.getElementById(key).value = defaults[key];
        const slider = document.getElementById(`${key}Slider`);
        if (slider) {
            slider.value = defaults[key];
        }
    });
}

function setupEventListeners() {
    document.getElementById('calculateCompound').addEventListener('click', function(e) {
        e.preventDefault();
        calculateCompound();
    });

    document.getElementById('resetCompound').addEventListener('click', function(e) {
        e.preventDefault();
        resetCalculator();
    });

    syncInputs('principal');
    syncInputs('rate');
    syncInputs('time');
    syncInputs('frequency');
}

function syncInputs(baseId) {
    const input = document.getElementById(baseId);
    const slider = document.getElementById(`${baseId}Slider`);

    if (!input || !slider) return;

    input.addEventListener('input', function() {
        slider.value = this.value;
        // calculateCompound(); // Removed this line
    });

    slider.addEventListener('input', function() {
        input.value = this.value;
        // calculateCompound(); // Removed this line
    });
}

function calculateCompound() {
    try {
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value) / 100;
        const time = parseFloat(document.getElementById('time').value);
        const frequency = parseFloat(document.getElementById('frequency').value);
        const currency = document.getElementById('currency').value;

        if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(frequency)) {
            throw new Error("Please enter valid numbers");
        }

        const amount = principal * Math.pow(1 + (rate / frequency), frequency * time);
        const interest = amount - principal;
        const currencySymbol = getCurrencySymbol(currency);

        document.getElementById('compoundResult').innerHTML = `
            <h4>Compound Interest Results</h4>
            <p><strong>Principal:</strong> ${currencySymbol}${principal.toFixed(2)}</p>
            <p><strong>Future Value:</strong> ${currencySymbol}${amount.toFixed(2)}</p>
            <p><strong>Total Interest:</strong> ${currencySymbol}${interest.toFixed(2)}</p>
        `;

        updateChart(principal, rate, time, frequency, currencySymbol);
        document.getElementById('myChart').style.display = 'block'; // Make chart visible after calculation

    } catch (error) {
        console.error("Calculation error:", error);
        document.getElementById('compoundResult').innerHTML = `
            <p class="error">${error.message}</p>
        `;
    }
}

function updateChart(principal, rate, time, frequency, currencySymbol) {
    const ctx = document.getElementById('myChart');
    if (!ctx) return;

    const labels = Array.from({length: time + 1}, (_, i) => i);
    const data = labels.map(year => {
        return principal * Math.pow(1 + (rate / frequency), frequency * year);
    });

    if (compoundChart) {
        compoundChart.destroy();
    }

    compoundChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Investment Growth',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Added Line
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            family: "'Montserrat', sans-serif"
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${currencySymbol}${context.raw.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years',
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount',
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white',
                        callback: function(value) {
                            return currencySymbol + value.toFixed(2);
                        }
                    }
                }
            }
        }
    });
}

function resetCalculator() {
    setDefaultValues();
    document.getElementById('compoundResult').innerHTML = '';

    if (compoundChart) {
        compoundChart.destroy();
        compoundChart = null;
    }
    document.getElementById('myChart').style.display = 'none'; // Hide chart on reset
}

function getCurrencySymbol(currency) {
    const symbols = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
        'INR': '₹'
    };
    return symbols[currency] || '$';
}

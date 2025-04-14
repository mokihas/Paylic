document.addEventListener('DOMContentLoaded', initializeFDRD);

let fdrdChart; // Store chart instance

function initializeFDRD() {
    // Event listeners for sliders
    document.getElementById('principalSlider').addEventListener('input', updatePrincipal);
    document.getElementById('rateSlider').addEventListener('input', updateRate);
    document.getElementById('timeSlider').addEventListener('input', updateTime);

    // Event listeners for buttons
    document.getElementById('calculateFDRD').addEventListener('click', calculateFDRD);
    document.getElementById('resetFDRD').addEventListener('click', resetFDRD);

    // Hide the chart on load
    document.getElementById('myChart').style.display = 'none';
}

// Slider update functions
function updatePrincipal() {
    document.getElementById('principal').value = document.getElementById('principalSlider').value;
}

function updateRate() {
    document.getElementById('rate').value = document.getElementById('rateSlider').value;
}

function updateTime() {
    document.getElementById('time').value = document.getElementById('timeSlider').value;
}

function calculateFDRD() {
    console.log('calculateFDRD function called!');
    const principal = parseFloat(document.getElementById('principal').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) / 100 || 0;
    const time = parseInt(document.getElementById('time').value) || 0;
    const type = document.getElementById('type').value;
    const currency = document.getElementById('currency').value; // Get the selected currency

    let totalAmount = 0;
    let labels = [];
    let data = [];

    if (type === 'FD') {
        totalAmount = principal * Math.pow(1 + rate, time);
        for (let i = 0; i <= time; i++) {
            labels.push(`Year ${i}`);
            data.push(principal * Math.pow(1 + rate, i));
        }
    } else if (type === 'RD') {
        totalAmount = principal * (((Math.pow(1 + rate / 12, time * 12) - 1) * (1 + rate / 12)) / (rate / 12));
        let runningTotal = 0;
        for (let i = 0; i <= time * 12; i++) {
            labels.push(`Month ${i}`);
            runningTotal += principal;
            data.push(runningTotal * Math.pow(1 + rate / 12, time * 12 - i));
        }
    }

    const interestEarned = totalAmount - (type === 'FD' ? principal : principal * time * 12);

    // Get the currency symbol
    let currencySymbol = '';
    switch (currency) {
        case 'USD':
            currencySymbol = '$';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
        case 'GBP':
            currencySymbol = '£';
            break;
        case 'INR':
            currencySymbol = '₹';
            break;
        default:
            currencySymbol = '$'; // Default to USD if currency is unknown
    }

    document.getElementById('fdrdResult').innerHTML = `
        <h4>Total Amount: ${currencySymbol} ${totalAmount.toFixed(2)}</h4>
        <h4>Interest Earned: ${currencySymbol} ${interestEarned.toFixed(2)}</h4>
    `;

    updateChart(labels, data);
    document.getElementById('myChart').style.display = 'block'; // Show Chart after calculate
}

function updateChart(labels, data) {
    console.log('updateChart called');
    const ctx = document.getElementById('myChart').getContext('2d');
    const chartCanvas = document.getElementById('myChart');

    if (fdrdChart) {
        fdrdChart.destroy();
    }

    fdrdChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'FDRD Growth',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: document.getElementById('type').value === 'FD' ? 'Years' : 'Months',
                        color: 'white' // Set x-axis title color to white
                    },
                    ticks: {
                        color: 'white' // Set x-axis tick color to white
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount',
                        color: 'white' // Set y-axis title color to white
                    },
                    ticks: {
                        color: 'white' // Set y-axis tick color to white
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Set legend label color to white
                    }
                }
            }
        }
    });

    if (chartCanvas) {
        chartCanvas.style.display = 'block';
    }
}

function resetFDRD() {
    document.getElementById('principal').value = '1000';
    document.getElementById('rate').value = '5';
    document.getElementById('time').value = '5';
    document.getElementById('type').value = 'FD';
    document.getElementById('currency').value = 'USD'; // Reset the currency
    document.getElementById('fdrdResult').innerHTML = '';

    document.getElementById('principalSlider').value = '1000';
    document.getElementById('rateSlider').value = '5';
    document.getElementById('timeSlider').value = '5';

    document.getElementById('myChart').style.display = 'none'; // Hide the chart on reset

    if (fdrdChart) {
        fdrdChart.destroy();
        fdrdChart = null;
    }
}

// Global chart instance
let budgetChart = null;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeBudget();
});

function initializeBudget() {
    setDefaultValues();
    setupEventListeners();
    document.getElementById('budgetResult').innerHTML = ''; // Clear result on load
    document.getElementById('myChart').style.display = 'none'; // Hide chart on load
}

function setDefaultValues() {
    document.getElementById('income').value = '3000';
    document.getElementById('expenses').value = '2000';
    document.getElementById('incomeSlider').value = '3000';
    document.getElementById('expensesSlider').value = '2000';
}

function setupEventListeners() {
    document.getElementById('calculateBudget').addEventListener('click', calculateBudget);
    document.getElementById('resetBudget').addEventListener('click', resetBudget);

    syncInputs('income');
    syncInputs('expenses');
}

function syncInputs(baseId) {
    const input = document.getElementById(baseId);
    const slider = document.getElementById(`${baseId}Slider`);

    if (!input || !slider) return;

    input.addEventListener('input', function() {
        slider.value = this.value;
        // calculateBudget();  // REMOVED THIS LINE
    });

    slider.addEventListener('input', function() {
        input.value = this.value;
        // calculateBudget(); // REMOVED THIS LINE
    });
}

function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const expenses = parseFloat(document.getElementById('expenses').value) || 0;
    const savings = Math.max(income - expenses, 0);
    const currency = document.getElementById('currency').value;

    const currencySymbol = getCurrencySymbol(currency);

    // Update results display
    document.getElementById('budgetResult').innerHTML = `
        <h4>Budget Summary</h4>
        <p><strong>Income:</strong> ${currencySymbol}${income.toFixed(2)}</p>
        <p><strong>Expenses:</strong> ${currencySymbol}${expenses.toFixed(2)}</p>
        <p><strong>Savings:</strong> ${currencySymbol}${savings.toFixed(2)}</p>
    `;

    // Update chart
    updateChart(income, expenses, savings, currencySymbol);
    document.getElementById('myChart').style.display = 'block'; // Make chart visible after calculation
}

function updateChart(income, expenses, savings, currencySymbol) {
    const ctx = document.getElementById('myChart');
    if (!ctx) return;

    // Destroy previous chart if exists
    if (budgetChart) {
        budgetChart.destroy();
    }

    // Create new chart
    budgetChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Income', 'Expenses', 'Savings'],
            datasets: [{
                data: [income, expenses, savings],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, //Added Line
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
                            return `${context.label}: ${currencySymbol}${context.raw.toFixed(2)}`;
                        }
                    }
                }
            }
        }
    });
}

function resetBudget() {
    setDefaultValues();
    document.getElementById('budgetResult').innerHTML = '';

    if (budgetChart) {
        budgetChart.destroy();
        budgetChart = null;
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

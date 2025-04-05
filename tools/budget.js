// tools/budget.js

document.getElementById('calculateBudget').addEventListener('click', () => {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = income - expenses;
    const currency = document.getElementById('currency').value;

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('budgetResult').innerHTML = `
        <p>Savings: ${currencySymbol}${savings.toFixed(2)}</p>
    `;

    // Create Chart
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie', // Or 'bar', 'line', etc.
        data: {
            labels: ['Income', 'Expenses', 'Savings'],
            datasets: [{
                label: 'Budget Breakdown',
                data: [income, expenses, savings],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)', // Income color
                    'rgba(255, 99, 132, 0.2)', // Expenses color
                    'rgba(54, 162, 235, 0.2)' // Savings color
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
            maintainAspectRatio: false,
        }
    });

    //make chart visible
    document.getElementById('myChart').style.display = 'block';

});

document.getElementById('resetBudget').addEventListener('click', () => {
    document.getElementById('income').value = '3000';
    document.getElementById('expenses').value = '2000';
    document.getElementById('budgetResult').innerHTML = '';

    //clear chart and hide it
    const ctx = document.getElementById('myChart').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('myChart').width, document.getElementById('myChart').height);
    document.getElementById('myChart').style.display = 'none';
});

// Sync number input and slider
document.getElementById('income').addEventListener('input', () => {
    document.getElementById('incomeSlider').value = document.getElementById('income').value;
});

document.getElementById('incomeSlider').addEventListener('input', () => {
    document.getElementById('income').value = document.getElementById('incomeSlider').value;
});

document.getElementById('expenses').addEventListener('input', () => {
    document.getElementById('expensesSlider').value = document.getElementById('expenses').value;
});

document.getElementById('expensesSlider').addEventListener('input', () => {
    document.getElementById('expenses').value = document.getElementById('expensesSlider').value;
});

//hide chart on load
document.getElementById('myChart').style.display = 'none';

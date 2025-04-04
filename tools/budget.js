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
});

document.getElementById('resetBudget').addEventListener('click', () => {
    document.getElementById('income').value = '3000';
    document.getElementById('expenses').value = '2000';
    document.getElementById('budgetResult').innerHTML = '';
});

// Sync number input and slider
let incomeUpdating = false;
let expensesUpdating = false;

document.getElementById('income').addEventListener('input', () => {
    if (!incomeUpdating) {
        document.getElementById('incomeSlider').value = document.getElementById('income').value;
    }
});

document.getElementById('incomeSlider').addEventListener('input', () => {
    incomeUpdating = true;
    document.getElementById('income').value = document.getElementById('incomeSlider').value;
    incomeUpdating = false;
});

document.getElementById('expenses').addEventListener('input', () => {
    if (!expensesUpdating) {
        document.getElementById('expensesSlider').value = document.getElementById('expenses').value;
    }
});

document.getElementById('expensesSlider').addEventListener('input', () => {
    expensesUpdating = true;
    document.getElementById('expenses').value = document.getElementById('expensesSlider').value;
    expensesUpdating = false;
});

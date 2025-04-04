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

// tools/retirement.js

document.getElementById('calculateRetirement').addEventListener('click', () => {
    const currentAge = parseFloat(document.getElementById('currentAge').value);
    const retirementAge = parseFloat(document.getElementById('retirementAge').value);
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const returnRate = parseFloat(document.getElementById('returnRate').value) / 100;
    const currency = document.getElementById('currency').value;

    const yearsToRetirement = retirementAge - currentAge;
    const totalSavings = monthlyExpenses * 12 * yearsToRetirement * Math.pow(1 + returnRate, yearsToRetirement);

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('retirementResult').innerHTML = `
        <p>Total Savings Needed: ${currencySymbol}${totalSavings.toFixed(2)}</p>
    `;
});

document.getElementById('resetRetirement').addEventListener('click', () => {
    document.getElementById('currentAge').value = '30';
    document.getElementById('retirementAge').value = '65';
    document.getElementById('monthlyExpenses').value = '2000';
    document.getElementById('returnRate').value = '5';
    document.getElementById('retirementResult').innerHTML = '';
});

// Sync number input and slider
document.getElementById('currentAge').addEventListener('input', () => {
    document.getElementById('currentAgeSlider').value = document.getElementById('currentAge').value;
});

document.getElementById('currentAgeSlider').addEventListener('input', () => {
    document.getElementById('currentAge').value = document.getElementById('currentAgeSlider').value;
});

document.getElementById('retirementAge').addEventListener('input', () => {
    document.getElementById('retirementAgeSlider').value = document.getElementById('retirementAge').value;
});

document.getElementById('retirementAgeSlider').addEventListener('input', () => {
    document.getElementById('retirementAge').value = document.getElementById('retirementAgeSlider').value;
});

document.getElementById('monthlyExpenses').addEventListener('input', () => {
    document.getElementById('monthlyExpensesSlider').value = document.getElementById('monthlyExpenses').value;
});

document.getElementById('monthlyExpensesSlider').addEventListener('input', () => {
    document.getElementById('monthlyExpenses').value = document.getElementById('monthlyExpensesSlider').value;
});

document.getElementById('returnRate').addEventListener('input', () => {
    document.getElementById('returnRateSlider').value = document.getElementById('returnRate').value;
});

document.getElementById('returnRateSlider').addEventListener('input', () => {
    document.getElementById('returnRate').value = document.getElementById('returnRateSlider').value;
});

document.getElementById('calculateRetirement').addEventListener('click', () => {
    const currentAge = parseFloat(document.getElementById('currentAge').value);
    const retirementAge = parseFloat(document.getElementById('retirementAge').value);
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const returnRate = parseFloat(document.getElementById('returnRate').value) / 100;

    const yearsToRetirement = retirementAge - currentAge;
    const totalSavings = monthlyExpenses * 12 * yearsToRetirement * Math.pow(1 + returnRate, yearsToRetirement);
const currency = document.getElementById('currency').value;

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';
    document.getElementById('retirementResult').innerHTML = `<p>Total Savings Needed: ${currencySymbol}${totalSavings.toFixed(2)}</p>`;
});
document.getElementById('resetLoan').addEventListener('click', () => {
    document.getElementById('currentAge').value = '';
    document.getElementById('retirementAge').value = '';
    document.getElementById('monthlyExpenses').value = '';
    document.getElementById('returnRate').value = '';
    document.getElementById('currency').value = '';
    document.getElementById('retirementResult').innerHTML = '';
});

document.getElementById('calculateRetirement').addEventListener('click', () => {
    const currentAge = parseFloat(document.getElementById('currentAge').value);
    const retirementAge = parseFloat(document.getElementById('retirementAge').value);
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const returnRate = parseFloat(document.getElementById('returnRate').value) / 100;

    const yearsToRetirement = retirementAge - currentAge;
    const totalSavings = monthlyExpenses * 12 * yearsToRetirement * Math.pow(1 + returnRate, yearsToRetirement);

    document.getElementById('retirementResult').innerHTML = `<p>Total Savings Needed: $${totalSavings.toFixed(2)}</p>`;
});
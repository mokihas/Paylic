// tools/investment.js
document.getElementById('calculateInvestment').addEventListener('click', () => {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const annualContribution = parseFloat(document.getElementById('annualContribution').value);
    const growthRate = parseFloat(document.getElementById('growthRate').value) / 100;
    const investmentYears = parseFloat(document.getElementById('investmentYears').value);

    let futureValue = initialInvestment;
    for (let i = 0; i < investmentYears; i++) {
        futureValue = (futureValue + annualContribution) * (1 + growthRate);
    }

    document.getElementById('investmentResult').innerHTML = `
        <p>Future Value: $${futureValue.toFixed(2)}</p>
    `;
});
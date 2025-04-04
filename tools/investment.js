// tools/investment.js

document.getElementById('calculateInvestment').addEventListener('click', () => {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const annualContribution = parseFloat(document.getElementById('annualContribution').value);
    const growthRate = parseFloat(document.getElementById('growthRate').value) / 100;
    const investmentYears = parseFloat(document.getElementById('investmentYears').value);
    const currency = document.getElementById('currency').value;

    let futureValue = initialInvestment;
    for (let i = 0; i < investmentYears; i++) {
        futureValue = (futureValue + annualContribution) * (1 + growthRate);
    }

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('investmentResult').innerHTML = `
        <p>Future Value: ${currencySymbol}${futureValue.toFixed(2)}</p>
    `;
});

document.getElementById('resetInvestment').addEventListener('click', () => {
    document.getElementById('initialInvestment').value = '1000';
    document.getElementById('annualContribution').value = '1000';
    document.getElementById('growthRate').value = '5';
    document.getElementById('investmentYears').value = '5';
    document.getElementById('investmentResult').innerHTML = '';
});

// Sync number input and slider
document.getElementById('initialInvestment').addEventListener('input', () => {
    document.getElementById('initialInvestmentSlider').value = document.getElementById('initialInvestment').value;
});

document.getElementById('initialInvestmentSlider').addEventListener('input', () => {
    document.getElementById('initialInvestment').value = document.getElementById('initialInvestmentSlider').value;
});

document.getElementById('annualContribution').addEventListener('input', () => {
    document.getElementById('annualContributionSlider').value = document.getElementById('annualContribution').value;
});

document.getElementById('annualContributionSlider').addEventListener('input', () => {
    document.getElementById('annualContribution').value = document.getElementById('annualContributionSlider').value;
});

document.getElementById('growthRate').addEventListener('input', () => {
    document.getElementById('growthRateSlider').value = document.getElementById('growthRate').value;
});

document.getElementById('growthRateSlider').addEventListener('input', () => {
    document.getElementById('growthRate').value = document.getElementById('growthRateSlider').value;
});

document.getElementById('investmentYears').addEventListener('input', () => {
    document.getElementById('investmentYearsSlider').value = document.getElementById('investmentYears').value;
});

document.getElementById('investmentYearsSlider').addEventListener('input', () => {
    document.getElementById('investmentYears').value = document.getElementById('investmentYearsSlider').value;
});

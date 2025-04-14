// tools/investment.js

let investmentChart; // Declare chart variable globally

document.getElementById('calculateInvestment').addEventListener('click', () => {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const annualContribution = parseFloat(document.getElementById('annualContribution').value);
    const rate = parseFloat(document.getElementById('growthRate').value) / 100;
    const years = parseFloat(document.getElementById('investmentYears').value);

    let futureValue = initialInvestment;
    const yearlyValues = [initialInvestment];

    for (let i = 1; i <= years; i++) {
        futureValue = (futureValue + annualContribution) * (1 + rate);
        yearlyValues.push(futureValue);
    }

    const totalInvestment = initialInvestment + (annualContribution * years);
    const totalEarnings = futureValue - totalInvestment;

    const currency = document.getElementById('currency').value;
    let currencySymbol = '$';
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('investmentResult').innerHTML = `
        <p>Future Value: ${currencySymbol}${futureValue.toFixed(2)}</p>
        <p>Total Earnings: ${currencySymbol}${totalEarnings.toFixed(2)}</p>
    `;

    // Create or update chart
    const ctx = document.getElementById('myChart').getContext('2d');

    if (investmentChart) {
        investmentChart.destroy(); // Destroy previous chart if it exists
    }

    investmentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: years + 1 }, (_, i) => i),
            datasets: [{
                label: 'Investment Growth',
                data: yearlyValues,
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
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount'
                    }
                }
            }
        }
    });

    // Make chart visible
    document.getElementById('myChart').style.display = 'block';
});

document.getElementById('resetInvestment').addEventListener('click', () => {
    document.getElementById('initialInvestment').value = '';
    document.getElementById('annualContribution').value = '';
    document.getElementById('growthRate').value = '';
    document.getElementById('investmentYears').value = '';
    document.getElementById('investmentResult').innerHTML = '';

    // Clear chart and hide it
    if (investmentChart) {
        investmentChart.destroy();
        investmentChart = null;
    }
    document.getElementById('myChart').style.display = 'none';
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

// Hide chart on load
document.getElementById('myChart').style.display = 'none';

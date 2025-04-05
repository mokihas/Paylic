// tools/investment.js

document.getElementById('calculateInvestment').addEventListener('click', () => {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const annualContribution = parseFloat(document.getElementById('annualContribution').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);

    let futureValue = initialInvestment;
    const yearlyValues = [initialInvestment]; // Store yearly values for the chart

    for (let i = 1; i <= years; i++) {
        futureValue = (futureValue + annualContribution) * (1 + rate);
        yearlyValues.push(futureValue);
    }

    const totalInvestment = initialInvestment + (annualContribution * years);
    const totalEarnings = futureValue - totalInvestment;

    const currency = document.getElementById('currency').value;
    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('investmentResult').innerHTML = `
        <p>Future Value: ${currencySymbol}${futureValue.toFixed(2)}</p>
        <p>Total Earnings: ${currencySymbol}${totalEarnings.toFixed(2)}</p>
    `;

    // Create Chart
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line', // Line chart for investment growth
        data: {
            labels: Array.from({ length: years + 1 }, (_, i) => i), // Years as labels
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

    //make chart visible
    document.getElementById('myChart').style.display = 'block';

});

document.getElementById('resetInvestment').addEventListener('click', () => {
    document.getElementById('initialInvestment').value = '';
    document.getElementById('annualContribution').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('years').value = '';
    document.getElementById('investmentResult').innerHTML = '';

    //clear chart and hide it
    const ctx = document.getElementById('myChart').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('myChart').width, document.getElementById('myChart').height);
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

document.getElementById('rate').addEventListener('input', () => {
    document.getElementById('rateSlider').value = document.getElementById('rate').value;
});

document.getElementById('rateSlider').addEventListener('input', () => {
    document.getElementById('rate').value = document.getElementById('rateSlider').value;
});

document.getElementById('years').addEventListener('input', () => {
    document.getElementById('yearsSlider').value = document.getElementById('years').value;
});

document.getElementById('yearsSlider').addEventListener('input', () => {
    document.getElementById('years').value = document.getElementById('yearsSlider').value;
});

//hide chart on load
document.getElementById('myChart').style.display = 'none';

// tools/retirement.js

document.getElementById('calculateRetirement').addEventListener('click', () => {
    const currentAge = parseInt(document.getElementById('currentAge').value);
    const retirementAge = parseInt(document.getElementById('retirementAge').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100;

    const yearsToRetirement = retirementAge - currentAge;
    let futureSavings = currentSavings;
    const yearlySavings = [currentSavings]; // Store yearly savings for the chart

    for (let i = 1; i <= yearsToRetirement; i++) {
        futureSavings = (futureSavings + (monthlyContribution * 12)) * (1 + annualReturn);
        yearlySavings.push(futureSavings);
    }

    const currency = document.getElementById('currency').value;
    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('retirementResult').innerHTML = `
        <p>Savings at Retirement: ${currencySymbol}${futureSavings.toFixed(2)}</p>
    `;

    // Create Chart
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line', // Line chart for retirement savings growth
        data: {
            labels: Array.from({ length: yearsToRetirement + 1 }, (_, i) => currentAge + i), // Years as labels
            datasets: [{
                label: 'Retirement Savings Growth',
                data: yearlySavings,
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
                        text: 'Age'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Savings'
                    }
                }
            }
        }
    });

    //make chart visible
    document.getElementById('myChart').style.display = 'block';
});

document.getElementById('resetRetirement').addEventListener('click', () => {
    document.getElementById('currentAge').value = '';
    document.getElementById('retirementAge').value = '';
    document.getElementById('currentSavings').value = '';
    document.getElementById('monthlyContribution').value = '';
    document.getElementById('annualReturn').value = '';
    document.getElementById('retirementResult').innerHTML = '';

    //clear chart and hide it
    const ctx = document.getElementById('myChart').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('myChart').width, document.getElementById('myChart').height);
    document.getElementById('myChart').style.display = 'none';
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

document.getElementById('currentSavings').addEventListener('input', () => {
    document.getElementById('currentSavingsSlider').value = document.getElementById('currentSavings').value;
});

document.getElementById('currentSavingsSlider').addEventListener('input', () => {
    document.getElementById('currentSavings').value = document.getElementById('currentSavingsSlider').value;
});

document.getElementById('monthlyContribution').addEventListener('input', () => {
    document.getElementById('monthlyContributionSlider').value = document.getElementById('monthlyContribution').value;
});

document.getElementById('monthlyContributionSlider').addEventListener('input', () => {
    document.getElementById('monthlyContribution').value = document.getElementById('monthlyContributionSlider').value;
});

document.getElementById('annualReturn').addEventListener('input', () => {
    document.getElementById('annualReturnSlider').value = document.getElementById('annualReturn').value;
});

document.getElementById('annualReturnSlider').addEventListener('input', () => {
    document.getElementById('annualReturn').value = document.getElementById('annualReturnSlider').value;
});

//hide chart on load
document.getElementById('myChart').style.display = 'none';

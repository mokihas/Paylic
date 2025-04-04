// tools/sip.js

document.getElementById('calculateSIP').addEventListener('click', () => {
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const time = parseFloat(document.getElementById('time').value);
    const currency = document.getElementById('currency').value;

    let futureValue = 0;
    for (let i = 1; i <= time * 12; i++) {
        futureValue = futureValue * (1 + rate) + monthlyInvestment;
    }

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('sipResult').innerHTML = `
        <p>Future Value: ${currencySymbol}${futureValue.toFixed(2)}</p>
    `;
});

document.getElementById('resetSIP').addEventListener('click', () => {
    document.getElementById('monthlyInvestment').value = '1000';
    document.getElementById('rate').value = '12';
    document.getElementById('time').value = '10';
    document.getElementById('sipResult').innerHTML = '';
});

// Sync number input and slider
document.getElementById('monthlyInvestment').addEventListener('input', () => {
    document.getElementById('monthlyInvestmentSlider').value = document.getElementById('monthlyInvestment').value;
});

document.getElementById('monthlyInvestmentSlider').addEventListener('input', () => {
    document.getElementById('monthlyInvestment').value = document.getElementById('monthlyInvestmentSlider').value;
});

document.getElementById('rate').addEventListener('input', () => {
    document.getElementById('rateSlider').value = document.getElementById('rate').value;
});

document.getElementById('rateSlider').addEventListener('input', () => {
    document.getElementById('rate').value = document.getElementById('rateSlider').value;
});

document.getElementById('time').addEventListener('input', () => {
    document.getElementById('timeSlider').value = document.getElementById('time').value;
});

document.getElementById('timeSlider').addEventListener('input', () => {
    document.getElementById('time').value = document.getElementById('timeSlider').value;
});

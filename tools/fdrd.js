// tools/fdrd.js

document.getElementById('calculateFDRD').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const currency = document.getElementById('currency').value;

    const fdAmount = principal * Math.pow(1 + rate, time);
    const rdAmount = (principal * time) + (principal * rate * (time * (time + 1)) / 2);

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('fdrdResult').innerHTML = `
        <p>FD Amount: ${currencySymbol}${fdAmount.toFixed(2)}</p>
        <p>RD Amount: ${currencySymbol}${rdAmount.toFixed(2)}</p>
    `;
});

document.getElementById('resetFDRD').addEventListener('click', () => {
    document.getElementById('principal').value = '1000';
    document.getElementById('rate').value = '5';
    document.getElementById('time').value = '5';
    document.getElementById('fdrdResult').innerHTML = '';
});

// Sync number input and slider
document.getElementById('principal').addEventListener('input', () => {
    document.getElementById('principalSlider').value = document.getElementById('principal').value;
});

document.getElementById('principalSlider').addEventListener('input', () => {
    document.getElementById('principal').value = document.getElementById('principalSlider').value;
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

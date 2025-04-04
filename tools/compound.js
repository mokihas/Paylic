// tools/compound.js

document.getElementById('calculateCompound').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseFloat(document.getElementById('frequency').value);
    const currency = document.getElementById('currency').value;

    const amount = principal * Math.pow(1 + (rate / frequency), frequency * time);
    const interest = amount - principal;

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('compoundResult').innerHTML = `
        <p>Total Amount: ${currencySymbol}${amount.toFixed(2)}</p>
        <p>Total Interest: ${currencySymbol}${interest.toFixed(2)}</p>
    `;
});

document.getElementById('resetCompound').addEventListener('click', () => {
    document.getElementById('principal').value = '1000';
    document.getElementById('rate').value = '5';
    document.getElementById('time').value = '5';
    document.getElementById('frequency').value = '1';
    document.getElementById('compoundResult').innerHTML = '';
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

document.getElementById('frequency').addEventListener('input', () => {
    document.getElementById('frequencySlider').value = document.getElementById('frequency').value;
});

document.getElementById('frequencySlider').addEventListener('input', () => {
    document.getElementById('frequency').value = document.getElementById('frequencySlider').value;
});

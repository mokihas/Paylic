document.getElementById('calculateFDRD').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);

    const fdAmount = principal * Math.pow(1 + rate, time);
    const rdAmount = (principal * time) + (principal * rate * (time * (time + 1)) / 2);
const currency = document.getElementById('currency').value;

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';
    document.getElementById('fdrdResult').innerHTML = `
        <p>FD Amount: ${currencySymbol}${fdAmount.toFixed(2)}</p>
        <p>RD Amount: ${currencySymbol}${rdAmount.toFixed(2)}</p>
    `;
});
document.getElementById('resetLoan').addEventListener('click', () => {
    document.getElementById('principal').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('time').value = '';
    document.getElementById('currency').value = '';
    document.getElementById('fdrdResult').innerHTML = '';
});

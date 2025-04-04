document.getElementById('calculateCompound').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    const amount = principal * Math.pow(1 + (rate / frequency), frequency * time);
    const interest = amount - principal;
    const currency = document.getElementById('currency').value;

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';
    document.getElementById('compoundResult').innerHTML = `
        <p>Total Amount: ${currencySymbol}${amount.toFixed(2)}</p>
        <p>Total Interest: ${currencySymbol}${interest.toFixed(2)}</p>
    `;
});
document.getElementById('resetLoan').addEventListener('click', () => {
    document.getElementById('principal').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('time').value = '';
    document.getElementById('frequency').value = '';
    document.getElementById('currency').value = '';
    document.getElementById('compoundResult').innerHTML = '';
});

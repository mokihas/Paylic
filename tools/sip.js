document.getElementById('calculateSIP').addEventListener('click', () => {
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const time = parseFloat(document.getElementById('time').value);
const currency = document.getElementById('currency').value;

    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';
    let futureValue = 0;
    for (let i = 1; i <= time * 12; i++) {
        futureValue = futureValue * (1 + rate) + monthlyInvestment;
    }

    document.getElementById('sipResult').innerHTML = `<p>Future Value: ${currencySymbol}${futureValue.toFixed(2)}</p>`;
});

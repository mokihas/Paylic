// tools/currency.js
document.getElementById('convertCurrency').addEventListener('click', () => {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultDiv = document.getElementById('currencyResult');

    const apiKey = 'YOUR_API_KEY'; // Replace with a free API key from exchangerate-api.com

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`)
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                resultDiv.innerHTML = `<p>${amount} ${fromCurrency} = ${data.conversion_result.toFixed(2)} ${toCurrency}</p>`;
            } else {
                resultDiv.innerHTML = `<p>Error: ${data['error-type']}</p>`;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>Error: Could not fetch exchange rates.</p>`;
        });
});
document.getElementById('resetCurrency').addEventListener('click', () => {
    document.getElementById('fromCurrency').value = '';
    document.getElementById('toCurrency').value = '';
    document.getElementById('currencyResult').innerHTML = '';
});

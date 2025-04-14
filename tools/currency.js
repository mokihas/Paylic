// tools/currency.js
document.addEventListener('DOMContentLoaded', function() {
    initializeCurrency();
});

function initializeCurrency() {
    setupEventListeners();
}

function setupEventListeners() {
    document.getElementById('convertCurrency').addEventListener('click', convertCurrency);
    document.getElementById('resetCurrency').addEventListener('click', resetCurrency);
}

async function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultDiv = document.getElementById('currencyResult');

    if (isNaN(amount)) {
        resultDiv.innerHTML = '<p class="error">Please enter a valid amount.</p>';
        return;
    }

    const apiKey = '805206fd4f2eb125087db275'; // Replace with your actual API key from exchangerate-api.com

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        const data = await response.json();

        if (data.result === 'success') {
            resultDiv.innerHTML = `<p>${amount} ${fromCurrency} = ${data.conversion_result.toFixed(2)} ${toCurrency}</p>`;
        } else {
            resultDiv.innerHTML = `<p class="error">Error: ${data['error-type']}</p>`;
        }
    } catch (error) {
        console.error('Currency conversion error:', error);
        resultDiv.innerHTML = '<p class="error">Error: Could not fetch exchange rates.</p>';
    }
}

function resetCurrency() {
    document.getElementById('amount').value = '';
    document.getElementById('currencyResult').innerHTML = '';
}

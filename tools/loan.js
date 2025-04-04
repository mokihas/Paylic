// tools/loan.js
document.getElementById('calculateLoan').addEventListener('click', () => {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;
    const currency = document.getElementById('currency').value;
    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('loanResult').innerHTML = `
        <p>Monthly Payment: ${currencySymbol}${monthlyPayment.toFixed(2)}</p>
        <p>Total Payment: ${currencySymbol}${totalPayment.toFixed(2)}</p>
        <p>Total Interest: ${currencySymbol}${totalInterest.toFixed(2)}</p>
    `;
});

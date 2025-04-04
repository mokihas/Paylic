document.getElementById('calculateCompound').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    const amount = principal * Math.pow(1 + (rate / frequency), frequency * time);
    const interest = amount - principal;

    document.getElementById('compoundResult').innerHTML = `
        <p>Total Amount: $${amount.toFixed(2)}</p>
        <p>Total Interest: $${interest.toFixed(2)}</p>
    `;
});
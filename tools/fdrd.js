document.getElementById('calculateFDRD').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);

    const fdAmount = principal * Math.pow(1 + rate, time);
    const rdAmount = (principal * time) + (principal * rate * (time * (time + 1)) / 2);

    document.getElementById('fdrdResult').innerHTML = `
        <p>FD Amount: $${fdAmount.toFixed(2)}</p>
        <p>RD Amount: $${rdAmount.toFixed(2)}</p>
    `;
});
document.getElementById('calculateSIP').addEventListener('click', () => {
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const time = parseFloat(document.getElementById('time').value);

    let futureValue = 0;
    for (let i = 1; i <= time * 12; i++) {
        futureValue = futureValue * (1 + rate) + monthlyInvestment;
    }

    document.getElementById('sipResult').innerHTML = `<p>Future Value: $${futureValue.toFixed(2)}</p>`;
});
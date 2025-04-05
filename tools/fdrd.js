// tools/fdrd.js

document.getElementById('calculateFDRD').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const type = document.getElementById('type').value; // 'FD' or 'RD'

    let maturityAmount, totalInterest;

    if (type === 'FD') {
        maturityAmount = principal * Math.pow(1 + rate, time);
        totalInterest = maturityAmount - principal;
    } else { // RD
        const monthlyRate = rate / 12;
        const months = time * 12;
        maturityAmount = principal * months * (1 + (months + 1) * monthlyRate / 2);
        totalInterest = maturityAmount - (principal * months);
    }

    const currency = document.getElementById('currency').value;
    let currencySymbol = '$'; // Default to USD
    if (currency === 'EUR') currencySymbol = '€';
    else if (currency === 'GBP') currencySymbol = '£';
    else if (currency === 'INR') currencySymbol = '₹';

    document.getElementById('fdrdResult').innerHTML = `
        <p>Maturity Amount: ${currencySymbol}${maturityAmount.toFixed(2)}</p>
        <p>Total Interest: ${currencySymbol}${totalInterest.toFixed(2)}</p>
    `;

    // Create Chart
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar', // Bar chart for FD/RD comparison
        data: {
            labels: ['Maturity Amount', 'Total Interest'],
            datasets: [{
                label: type === 'FD' ? 'Fixed Deposit (FD)' : 'Recurring Deposit (RD)',
                data: [maturityAmount.toFixed(2), totalInterest.toFixed(2)],
                backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    //make chart visible
    document.getElementById('myChart').style.display = 'block';

});

document.getElementById('resetFDRD').addEventListener('click', () => {
    document.getElementById('principal').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('time').value = '';
    document.getElementById('type').value = 'FD';
    document.getElementById('fdrdResult').innerHTML = '';

    //clear chart and hide it
    const ctx = document.getElementById('myChart').getContext('2d');
    ctx.clearRect(0, 0, document.getElementById('myChart').width, document.getElementById('myChart').height);
    document.getElementById('myChart').style.display = 'none';
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

//hide chart on load
document.getElementById('myChart').style.display = 'none';

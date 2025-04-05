// tools/compound.js

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
        <p>Future Value: ${currencySymbol}${amount.toFixed(2)}</p>
        <p>Total Interest: ${currencySymbol}${interest.toFixed(2)}</p>
    `;

    // Create Chart
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line', // Line chart for compound interest growth
        data: {
            labels: Array.from({ length: time + 1 }, (_, i) => i), // Years as labels
            datasets: [{
                label: 'Compound Interest Growth',
                data: Array.from({ length: time + 1 }, (_, i) => {
                    const yearAmount = principal * Math.pow(1 + (rate / frequency), frequency * i);
                    return yearAmount.toFixed(2);
                }),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount'
                    }
                }
            }
        }
    });

    //make chart visible
    document.getElementById('myChart').style.display = 'block';

});

document.getElementById('resetCompound').addEventListener('click', () => {
    document.getElementById('principal').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('time').value = '';
    document.getElementById('frequency').value = '1';
    document.getElementById('compoundResult').innerHTML = '';

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

document.getElementById('frequency').addEventListener('input', () => {
    document.getElementById('frequencySlider').value = document.getElementById('frequency').value;
});

document.getElementById('frequencySlider').addEventListener('input', () => {
    document.getElementById('frequency').value = document.getElementById('frequencySlider').value;
});

//hide chart on load
document.getElementById('myChart').style.display = 'none';

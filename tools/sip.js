document.addEventListener('DOMContentLoaded', function() {
    // Hide chart on load
    document.getElementById('myChart').style.display = 'none';

    document.getElementById('calculateSIP').addEventListener('click', () => {
        const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
        const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
        const time = parseFloat(document.getElementById('time').value);

        let futureValue = 0;
        const monthlyValues = []; // Store monthly values for the chart

        for (let i = 1; i <= time * 12; i++) {
            futureValue = (futureValue * (1 + rate)) + monthlyInvestment;
            monthlyValues.push(futureValue);
        }

        const totalInvestment = monthlyInvestment * time * 12;
        const totalEarnings = futureValue - totalInvestment;

        const currency = document.getElementById('currency').value;
        let currencySymbol = '$'; // Default to USD
        if (currency === 'EUR') currencySymbol = '€';
        else if (currency === 'GBP') currencySymbol = '£';
        else if (currency === 'INR') currencySymbol = '₹';

        document.getElementById('sipResult').innerHTML = `
            <p>Future Value: ${currencySymbol}${futureValue.toFixed(2)}</p>
            <p>Total Earnings: ${currencySymbol}${totalEarnings.toFixed(2)}</p>
        `;

        // Create Chart
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line', // Line chart for SIP growth
            data: {
                labels: Array.from({ length: time * 12 + 1 }, (_, i) => i), // Months as labels
                datasets: [{
                    label: 'SIP Growth',
                    data: [0, ...monthlyValues], // Include initial 0
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, //Added Line
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Months',
                            color: 'white' // x-axis title color
                        },
                        ticks: {
                            color: 'white' // x-axis tick color
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Amount',
                            color: 'white' // y-axis title color
                        },
                        ticks: {
                            color: 'white' // y-axis tick color
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white' // legend label color
                        }
                    }
                }
            }
        });

        // Make chart visible
        document.getElementById('myChart').style.display = 'block';
    });

    document.getElementById('resetSIP').addEventListener('click', () => {
        document.getElementById('monthlyInvestment').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('time').value = '';
        document.getElementById('sipResult').innerHTML = '';

        // Clear chart and hide it
        const ctx = document.getElementById('myChart').getContext('2d');
        ctx.clearRect(0, 0, document.getElementById('myChart').width, document.getElementById('myChart').height);
        document.getElementById('myChart').style.display = 'none';
    });

    // Sync number input and slider
    document.getElementById('monthlyInvestment').addEventListener('input', () => {
        document.getElementById('monthlyInvestmentSlider').value = document.getElementById('monthlyInvestment').value;
    });

    document.getElementById('monthlyInvestmentSlider').addEventListener('input', () => {
        document.getElementById('monthlyInvestment').value = document.getElementById('monthlyInvestmentSlider').value;
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
});

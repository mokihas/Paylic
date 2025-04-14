document.addEventListener('DOMContentLoaded', function() {
    // Hide chart on load
    document.getElementById('myChart').style.display = 'none';

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

        // Create Chart
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar', // Bar chart for loan breakdown
            data: {
                labels: ['Loan Amount', 'Total Interest'],
                datasets: [{
                    label: 'Loan Breakdown',
                    data: [loanAmount.toFixed(2), totalInterest.toFixed(2)],
                    backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                    borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Added line
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white' // Set y-axis tick color to white
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white' // Set x-axis tick color to white
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white' // Set legend label color to white
                        }
                    }
                }
            }
        });

        // Make chart visible
        document.getElementById('myChart').style.display = 'block';
    });

    document.getElementById('resetLoan').addEventListener('click', () => {
        document.getElementById('loanAmount').value = '';
        document.getElementById('interestRate').value = '';
        document.getElementById('loanTerm').value = '';
        document.getElementById('loanResult').innerHTML = '';

        // Clear chart and hide it
        const ctx = document.getElementById('myChart').getContext('2d');
        ctx.clearRect(0, 0, document.getElementById('myChart').width, document.getElementById('myChart').height);
        document.getElementById('myChart').style.display = 'none';
    });

    // Sync number input and slider
    document.getElementById('loanAmount').addEventListener('input', () => {
        document.getElementById('loanAmountSlider').value = document.getElementById('loanAmount').value;
    });

    document.getElementById('loanAmountSlider').addEventListener('input', () => {
        document.getElementById('loanAmount').value = document.getElementById('loanAmountSlider').value;
    });

    document.getElementById('interestRate').addEventListener('input', () => {
        document.getElementById('interestRateSlider').value = document.getElementById('interestRate').value;
    });

    document.getElementById('interestRateSlider').addEventListener('input', () => {
        document.getElementById('interestRate').value = document.getElementById('interestRateSlider').value;
    });

    document.getElementById('loanTerm').addEventListener('input', () => {
        document.getElementById('loanTermSlider').value = document.getElementById('loanTerm').value;
    });

    document.getElementById('loanTermSlider').addEventListener('input', () => {
        document.getElementById('loanTerm').value = document.getElementById('loanTermSlider').value;
    });
});

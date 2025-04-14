document.addEventListener('DOMContentLoaded', function() {
    const currentAgeInput = document.getElementById('currentAge');
    const currentAgeSlider = document.getElementById('currentAgeSlider');
    const retirementAgeInput = document.getElementById('retirementAge');
    const retirementAgeSlider = document.getElementById('retirementAgeSlider');
    const monthlyExpensesInput = document.getElementById('monthlyExpenses');
    const monthlyExpensesSlider = document.getElementById('monthlyExpensesSlider');
    const returnRateInput = document.getElementById('returnRate');
    const returnRateSlider = document.getElementById('returnRateSlider');
    const currencySelect = document.getElementById('currency');
    const calculateButton = document.getElementById('calculateRetirement');
    const resetButton = document.getElementById('resetRetirement');
    const resultDiv = document.getElementById('retirementResult');
    const chartCanvas = document.getElementById('myChart');
    let myChart;

    // Function to update input values from sliders
    function updateInputFromSlider(input, slider) {
        input.value = slider.value;
    }

    // Function to update slider values from inputs
    function updateSliderFromInput(input, slider) {
        slider.value = input.value;
    }

    // Event listeners for sliders and inputs
    currentAgeSlider.addEventListener('input', () => updateInputFromSlider(currentAgeInput, currentAgeSlider));
    currentAgeInput.addEventListener('input', () => updateSliderFromInput(currentAgeInput, currentAgeSlider));
    retirementAgeSlider.addEventListener('input', () => updateInputFromSlider(retirementAgeInput, retirementAgeSlider));
    retirementAgeInput.addEventListener('input', () => updateSliderFromInput(retirementAgeInput, retirementAgeSlider));
    monthlyExpensesSlider.addEventListener('input', () => updateInputFromSlider(monthlyExpensesInput, monthlyExpensesSlider));
    monthlyExpensesInput.addEventListener('input', () => updateSliderFromInput(monthlyExpensesInput, monthlyExpensesSlider));
    returnRateSlider.addEventListener('input', () => updateInputFromSlider(returnRateInput, returnRateSlider));
    returnRateInput.addEventListener('input', () => updateSliderFromInput(returnRateInput, returnRateSlider));

    // Function to calculate retirement savings
    function calculateRetirement() {
        const currentAge = parseInt(currentAgeInput.value);
        const retirementAge = parseInt(retirementAgeInput.value);
        const monthlyExpenses = parseFloat(monthlyExpensesInput.value);
        const returnRate = parseFloat(returnRateInput.value) / 100;
        const yearsToRetirement = retirementAge - currentAge;

        if (yearsToRetirement <= 0) {
            resultDiv.innerHTML = '<p class="error">Retirement age must be greater than current age.</p>';
            return;
        }

        const monthlyReturnRate = returnRate / 12;
        const totalMonths = yearsToRetirement * 12;
        const futureValue = monthlyExpenses * ((Math.pow(1 + monthlyReturnRate, totalMonths) - 1) / monthlyReturnRate);

        const currency = currencySelect.value;
        const formattedFutureValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(futureValue);

        resultDiv.innerHTML = `<p>Estimated Savings at Retirement: ${formattedFutureValue}</p>`;

        // Chart Data
        const chartLabels = ['Estimated Savings'];
        const chartData = [futureValue];

        // Chart Configuration
        const chartConfig = {
            type: 'bar',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: 'Retirement Savings',
                    data: chartData,
                    backgroundColor: 'rgba(0, 188, 212, 0.7)',
                    borderColor: 'rgba(0, 188, 212, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, //Added Line
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white' //y axis text color
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white' // x axis text color
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white' //legend text color
                        }
                    }
                }
            }
        };

        // Create or Update Chart
        if (myChart) {
            myChart.destroy();
        }
        myChart = new Chart(chartCanvas, chartConfig);
        chartCanvas.style.display = 'block'; // make the chart visible
    }

    // Event listener for calculate button
    calculateButton.addEventListener('click', calculateRetirement);

    // Event listener for reset button
    resetButton.addEventListener('click', function() {
        currentAgeInput.value = 30;
        currentAgeSlider.value = 30;
        retirementAgeInput.value = 65;
        retirementAgeSlider.value = 65;
        monthlyExpensesInput.value = 2000;
        monthlyExpensesSlider.value = 2000;
        returnRateInput.value = 5;
        returnRateSlider.value = 5;
        resultDiv.innerHTML = '';
        if (myChart) {
            myChart.destroy();
            myChart = null;
            chartCanvas.style.display = 'none'; // hide the chart canvas
        } else {
            chartCanvas.style.display = 'none'; // make sure it is hidden on reset.
        }
    });

    //hide chart on load.
    chartCanvas.style.display = 'none';
});

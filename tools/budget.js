// tools/budget.js

document.addEventListener('DOMContentLoaded', () => { // Add DOMContentLoaded event listener

    document.getElementById('calculateBudget').addEventListener('click', () => {
        const income = parseFloat(document.getElementById('income').value);
        const expenses = parseFloat(document.getElementById('expenses').value);
        const savings = income - expenses;
        const currency = document.getElementById('currency').value;

        let currencySymbol = '$'; // Default to USD
        if (currency === 'EUR') currencySymbol = '€';
        else if (currency === 'GBP') currencySymbol = '£';
        else if (currency === 'INR') currencySymbol = '₹';

        document.getElementById('budgetResult').innerHTML = `
            <p>Savings: ${currencySymbol}${savings.toFixed(2)}</p>
        `;
    });

    document.getElementById('resetBudget').addEventListener('click', () => {
        document.getElementById('income').value = '3000';
        document.getElementById('expenses').value = '2000';
        document.getElementById('budgetResult').innerHTML = '';
    });

    // Sync number input and slider
    let incomeUpdating = false;
    let expensesUpdating = false;

    document.getElementById('income').addEventListener('input', () => {
        if (!incomeUpdating) {
            console.log('income input changed:', document.getElementById('income').value);
            document.getElementById('incomeSlider').value = document.getElementById('income').value;
            console.log('incomeSlider value set to:', document.getElementById('incomeSlider').value);
        }
    });

    document.getElementById('incomeSlider').addEventListener('input', () => {
        incomeUpdating = true;
        console.log('incomeSlider input changed:', document.getElementById('incomeSlider').value);
        document.getElementById('income').value = document.getElementById('incomeSlider').value;
        console.log('income input value set to:', document.getElementById('income').value);
        incomeUpdating = false;
    });

    document.getElementById('expenses').addEventListener('input', () => {
        if (!expensesUpdating) {
            console.log('expenses input changed:', document.getElementById('expenses').value);
            document.getElementById('expensesSlider').value = document.getElementById('expenses').value;
            console.log('expensesSlider value set to:', document.getElementById('expensesSlider').value);
        }
    });

    document.getElementById('expensesSlider').addEventListener('input', () => {
        expensesUpdating = true;
        console.log('expensesSlider input changed:', document.getElementById('expensesSlider').value);
        document.getElementById('expenses').value = document.getElementById('expensesSlider').value;
        console.log('expenses input value set to:', document.getElementById('expenses').value);
        expensesUpdating = false;
    });
});

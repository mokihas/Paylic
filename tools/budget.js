// tools/budget.js
document.getElementById('calculateBudget').addEventListener('click', () => {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = income - expenses;

    document.getElementById('budgetResult').innerHTML = `
        <p>Savings: $${savings.toFixed(2)}</p>
    `;
});
// all elements
const mainBalance = document.getElementById('balance-display');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const transactionContainer = document.getElementById('transactions-container');


// data 
const transactions = [
   {id: 1, title: "Salary", amount: 45000, type: "income"},
   {id: 2, title: "Groceries", amount: 3500, type: "expense"},
   {id: 3, title: "Freelance Work", amount: 8000, type: "income"},
   {id: 4, title: "Electricity Bill", amount: 2200, type: "expense"},
];
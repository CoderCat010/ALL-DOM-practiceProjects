// all elements 
const totalBudget = document.getElementById('total-budget');
const searchInputBox = document.getElementById('project-search');
const statusBtnContainer = document.getElementById('status-filter-container');
const projectsContainer = document.getElementById('projects-container');

// data
let projects = [
   {id: 1, title: "Logo Design", client: "Nabila", budget: 8000, status: "ongoing", deadline: "2026-09-01"},
   {id: 2, title: "Website Redesign", client: "Rafi Traders", budget: 25000, status: "completed", deadline: "2026-08-10"},
   {id: 3, title: "App Icon Set", client: "Meem Studio", budget: 4500, status: "ongoing", deadline: "2026-09-15"},
   {id: 4, title: "Brand Guideline", client: "Nabila", budget: 12000, status: "pending", deadline: "2026-10-01"},
];
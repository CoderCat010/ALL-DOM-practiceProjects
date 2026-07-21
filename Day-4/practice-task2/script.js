const employees = [
   {id: 1, name: "Rahim", department: "IT", salary: 40000, active: true},
   {id: 2, name: "Karim", department: "HR", salary: 30000, active: true},
   {id: 3, name: "Jamal", department: "IT", salary: 50000, active: false},
   {id: 4, name: "Sadia", department: "Finance", salary: 35000, active: true},
];

// all elements
const employeesContainer = document.getElementById('employees-container');

// render all items
function renderingAllItems(employeesData){
    employees.forEach((employee) => {
        employeesContainer.innerHTML += `
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex justify-between items-center">
            <!-- employee card content -->
            <div>
                <h2 class="text-lg font-semibold text-slate-800">${employee.name}</h2>
                <p class="text-sm text-slate-500 flex items-center justify-center">
                    <span>Department: ${employee.department}</span>
                    <span class="text-xl mx-2">❚</span>
                    <span>Salary: $${employee.salary}</span>
                </p>
            </div>

            <!-- stats button -->
            <button class="bg-emerald-100 text-emerald-700 text-sm font-medium py-1.5 px-3 rounded-md">Active</button>
        </div>
        `
    })
}
renderingAllItems(employees)
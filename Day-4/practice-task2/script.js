// all elements
const employeesContainer = document.getElementById('employees-container');
const departmentFilterContainer = document.getElementById('department-filter-container');

// data
const employees = [
   {id: 1, name: "Rahim", department: "IT", salary: 40000, active: true},
   {id: 2, name: "Karim", department: "HR", salary: 30000, active: true},
   {id: 3, name: "Jamal", department: "IT", salary: 50000, active: false},
   {id: 4, name: "Sadia", department: "Finance", salary: 35000, active: true},
];

let duplicateButton = [];

// render all items
function renderingAllItems(employeesData){
    //-----> render each one depertment buttons
    const departmentData = employees.map((data) => data.department);
    departmentData.forEach((btns) => {
        if(!duplicateButton.includes(btns)){
            duplicateButton.push(btns)
        }
    });
    departmentFilterContainer.innerHTML += `
    <button class="bg-indigo-100 text-indigo-700 py-2 px-4 font-medium rounded-full shadow-sm">All</button>
    `;
    duplicateButton.forEach((department) => {
        departmentFilterContainer.innerHTML += `
        <button class="bg-white text-slate-600 py-2 px-4 font-medium rounded-full shadow-sm border border-slate-200">${department}</button>
        `;
    });

    //-----> render each one employees card
    employees.forEach((employee) => {
        employeesContainer.innerHTML += `
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex justify-between items-center">
            <!-- employee card content -->
            <div>
                <h2 class="text-lg font-semibold text-slate-800">${employee.name}</h2>
                <p class="text-sm text-slate-500">
                    <span>Department: ${employee.department}</span>
                    <span class="text-[20px] mx-2 text-indigo-500 font-bold">|</span>
                    <span>Salary: $${employee.salary}</span>
                </p>
            </div>

            <!-- stats button -->
            <button class="bg-emerald-100 text-emerald-700 text-sm font-medium py-1.5 px-3 rounded-md">Active</button>
        </div>
        `
    });
}
renderingAllItems(employees)
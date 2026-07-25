// all elements
const employeesContainer = document.getElementById('employees-container');
const departmentFilterContainer = document.getElementById('department-filter-container');
const searchInput = document.getElementById('search-input');
const totalSalary = document.getElementById('total-salary');

// data
const employees = [
   {id: 1, name: "Rahim", department: "IT", salary: 40000, active: true},
   {id: 2, name: "Karim", department: "HR", salary: 30000, active: true},
   {id: 3, name: "Jamal", department: "IT", salary: 50000, active: false},
   {id: 4, name: "Sadia", department: "Finance", salary: 35000, active: true},
];
let duplicateButton = [];
let salaryCounter = 0;

// render all items
function renderingAllItems(employeesData){
    employeesContainer.innerHTML = '';
    departmentFilterContainer.innerHTML = '';
    salaryCounter = 0;

    //-----> render each one depertment buttons
    const departmentData = employees.map((data) => data.department);
    departmentData.forEach((btns) => {
        if(!duplicateButton.includes(btns)){
            duplicateButton.push(btns)
        }
    });
    departmentFilterContainer.innerHTML += `
    <button data-btn="All" class="department-btn bg-indigo-100 text-indigo-700 py-2 px-4 font-medium rounded-full shadow-sm">All</button>
    `;
    duplicateButton.forEach((department) => {
        departmentFilterContainer.innerHTML += `
        <button data-btn=${department} class="department-btn bg-white text-slate-600 py-2 px-4 font-medium rounded-full shadow-sm border border-slate-200">${department}</button>
        `;
    });

    //-----> render each one employees card
    employeesData.forEach((employee) => {
        //----
        let isActive = 'Active';
        let btn = '';
        if(!employee.active){
            isActive = 'Deactivate';
            btn = 'bg-rose-100 text-rose-700';
        }

        // each one employee card
        employeesContainer.innerHTML += `
        <div data-id=${employee.id} class="employee-card bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex justify-between items-center">
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
            <button class="bg-emerald-100 text-emerald-700 text-sm font-medium py-1.5 px-3 rounded-md ${btn}">${isActive}</button>
        </div>
        `;

        // count total salary 
        salaryCounter += employee.salary;
    });
    totalSalary.textContent = `Total Salary: $${salaryCounter}`;
}
renderingAllItems(employees);


// added even listener department filter container for each one button
departmentFilterContainer.addEventListener(('click'), (event) => {
    const selectedBtn = event.target;
    if(!selectedBtn.classList.contains('department-btn')) return;
    
    // get clicked button's data 
    const department = selectedBtn.dataset.btn;
    const filteredBtn = employees.filter((dept) => dept.department === department || department === 'All');
    renderingAllItems(filteredBtn);
});


// added event listener on input box to search employees by name
searchInput.addEventListener(('input'), (event) => {
    const searchText = searchInput.value.toLowerCase();
    const filteredEmployee = employees.filter((name) => name.name.toLocaleLowerCase().includes(searchText));
    renderingAllItems(filteredEmployee);
});

// active/ inactive toggle button
employeesContainer.addEventListener(('click'), (event) => {
    const selectedElm = event.target;
    // clicked button
    if(selectedElm.tagName !== 'BUTTON') return;

    // movie card 
    const employeeCard = selectedElm.closest('.employee-card');
    const employeesId = Number(employeeCard.dataset.id);
    const employeeObj = employees.find(obj => obj.id === employeesId);
    employeeObj.active = !employeeObj.active;
    renderingAllItems(employees);
});


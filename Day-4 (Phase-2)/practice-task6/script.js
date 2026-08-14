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

let activeFilter = 'All';
//------ CREATE EACH ONE DYNAMIC FILTER BUTTONS
function createFilterBtn(value){
   // CREATE BUTTON
    const btn = document.createElement("button");
    
   //  ADD STYLE
   if(activeFilter === value){
      btn.classList.add('mono', 'text-xs', 'uppercase', 'tracking-wide', 'px-4', 'py-2', 'rounded-full', 'bg-[#1B2430]', 'text-[#F6F3EC]');
   }else{
      btn.classList.add('mono', 'text-xs', 'uppercase', 'tracking-wide', 'px-4', 'py-2', 'rounded-full', 'bg-white', 'text-[#1B2430]', 'border', 'border-[#E4DFD3]');
   }
    
   // ADD TEXT 
    btn.textContent = value;
    
   //  ADD EVENT LISTENR ON BUTTON
    btn.addEventListener('click', () => {
        activeFilter = value;
        let filtered;
        if(value === 'All'){
            filtered = projects;
        } else {
            filtered = projects.filter((p) => p.status === value);
        }
        renderingProjectsCard(filtered);
    });
    return btn;
}
//====== STORE UNIQUE BUTTONS & RENDER ALL STATUS BUTTONS ======
function renderingButtons(){
    statusBtnContainer.innerHTML = '';
    
   //  GET ALL STATUS BUTTON
    const allStatusValues = projects.map((p) => p.status);
   //  STORE UNIQUE BUTTONS
    const uniqueStatuses = [...new Set(allStatusValues)];
    const allBtnValues = ['All', ...uniqueStatuses];
    
    allBtnValues.forEach((value) => {
        const btn = createFilterBtn(value);
        statusBtnContainer.appendChild(btn);
    });
}
renderingButtons();


//------ CREATE EACH ONE PROJECTS CARD
function createProjectsCard(elements){
    // CREATE PARENT CARD & INNER ELEMENTGS
    const card = document.createElement('div');
    const topRow = document.createElement('div');
    const titleDiv = document.createElement('div');
    const title = document.createElement('h2');
    const clientText = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const badgeRow = document.createElement('div');
    const statusBadge = document.createElement('span');
    const deadlineBadge = document.createElement('span');
    const bottomRow = document.createElement('div');
    const dateText = document.createElement('span');
    const budgetText = document.createElement('span');

    // ADD STYLES
    card.classList.add('project-card', 'bg-white', 'rounded-2xl', 'border', 'border-[#E4DFD3]', 'p-6');
    topRow.classList.add('flex', 'items-start', 'justify-between', 'mb-4');
    title.classList.add('serif', 'text-xl', 'font-semibold', 'text-[#1B2430]');
    clientText.classList.add('mono', 'text-xs', 'text-[#3C4A5C]', 'mt-1');
    deleteBtn.classList.add('delete-btn', 'w-8', 'h-8', 'flex', 'items-center', 'justify-center', 'rounded-full', 'text-[#B15E42]', 'hover:bg-[#B15E42]', 'hover:text-white', 'transition');
    badgeRow.classList.add('flex', 'flex-wrap', 'gap-2', 'mb-4');
    statusBadge.classList.add('mono', 'text-[11px]', 'uppercase', 'px-3', 'py-1', 'rounded-full', 'border');
    deadlineBadge.classList.add('mono', 'text-[11px]', 'uppercase', 'px-3', 'py-1', 'rounded-full', 'bg-[#B15E42]/10', 'text-[#B15E42]', 'border', 'border-[#B15E42]/30');
    bottomRow.classList.add('flex', 'items-end', 'justify-between', 'pt-4', 'border-t', 'border-dashed', 'border-[#E4DFD3]');
    dateText.classList.add('mono', 'text-sm', 'text-[#3C4A5C]');
    budgetText.classList.add('serif', 'text-2xl', 'font-bold', 'text-[#1B2430]');

    // ADD TEXT CONTENT
    const { title: projectTitle, client, budget, status, deadline } = elements;
    title.textContent = projectTitle;
    clientText.textContent = `Client — ${client}`;
    deleteBtn.textContent = '✕';
    statusBadge.textContent = status;
    deadlineBadge.textContent = 'Deadline Soon ⚠';
    dateText.textContent = deadline;
    budgetText.textContent = `৳${budget}`;

    // APPEND ALL THE CHILDS
    card.appendChild(topRow);
    topRow.appendChild(titleDiv);
    titleDiv.appendChild(title);
    titleDiv.appendChild(clientText);
    topRow.appendChild(deleteBtn);
    card.appendChild(badgeRow);
    badgeRow.appendChild(statusBadge);
    badgeRow.appendChild(deadlineBadge);
    card.appendChild(bottomRow);
    bottomRow.appendChild(dateText);
    bottomRow.appendChild(budgetText);

    return card;
}


//====== DISPLAY ALL PROJECTS CARD ON THE PAGE ====== 
function renderingProjectsCard(arrObjDATA){
   projectsContainer.innerHTML = '';
   renderingButtons();
   arrObjDATA.forEach((data) => {
      const card = createProjectsCard(data);
      projectsContainer.appendChild(card);
   })
}
renderingProjectsCard(projects)

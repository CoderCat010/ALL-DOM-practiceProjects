// all elements
const searchInputBox = document.getElementById('assignee-search');
const filterContainer = document.getElementById('priority-filter-container');
const todoTaskContainer = document.getElementById('todo-container');
const inprogressTaskContainer = document.getElementById('in-progress-container');
const doneTaskContainer = document.getElementById('done-container');
const todoCountContainer = document.getElementById('todo-count');
const inprogressCountContainer = document.getElementById('in-progress-count');
const doneCountContainer = document.getElementById('done-count');

// data
let tasks = [
   {id: 1, title: "Design Homepage", assignee: "Rafi", column: "todo", priority: "high"},
   {id: 2, title: "Fix Login Bug", assignee: "Meem", column: "in-progress", priority: "high"},
   {id: 3, title: "Write Documentation", assignee: "Nabila", column: "todo", priority: "low"},
   {id: 4, title: "Setup Database", assignee: "Rafi", column: "done", priority: "medium"},
];

// change columns value when move forward button cliked
const nextColumn = {
    "todo": "in-progress",
    "in-progress":"done"
}
const duplicateData = [...tasks];
let activeFilter = 'All';


//-----> CREATE FILTERING DATA ----- 
function getFilteredData() {
    const searchText = searchInputBox.value.toLowerCase();
    return tasks.filter((task) => {
        const matchesSearch = task.assignee.toLowerCase().includes(searchText);
        const matchesFilter = activeFilter === 'All' || task.priority === activeFilter;
        return matchesSearch && matchesFilter;
    });
}


//===== SEARCH BOX TO SEARCH BY NAME =====
searchInputBox.addEventListener('input', () => {
    renderingTaskBoardCards(getFilteredData());
});


//-----> CREATE PRIORITY BUTTON -----
function createPriorityBtns(priority){
    // create button    
    const btn = document.createElement("button");
    
   // add styles
   btn.classList.add('handwrite', 'text-lg', 'px-5', 'py-1.5', 'rounded-full', 'font-bold', 'shadow-[2px_2px_0_rgba(0,0,0,0.2)]');
   btn.textContent = priority;

   // change styles based on priorities type 
   if (activeFilter === priority) {
        btn.classList.add('text-white', 'bg-[#3D2B1F]');
    }
    // otherwise default color based on priority
    else if (priority === 'high') {
        btn.classList.add('bg-[#E8635A]/80', 'text-white');
    }
    else if (priority === 'medium') {
        btn.classList.add('bg-[#E8B44A]/80', 'text-white');
    }
    else if (priority === 'low') {
        btn.classList.add('bg-[#6FA88A]/80', 'text-white');
    }
    else {
        btn.classList.add('text-[#3D2B1F]', 'bg-white');
    }

    // add event listener on button 
    btn.addEventListener('click', () => {
        activeFilter = priority;
        renderingTaskBoardCards(getFilteredData());
        renderingPriorityBtns();
    });
    return btn;
}
//===== RENDER PRIORITY BUTTONS
function renderingPriorityBtns(){
    filterContainer.innerHTML = '';
    // get all priority status 
    const priorityStatus = duplicateData.map(status => status.priority);
    // store unique buttons 
    const uniqueBtns = [...new Set(priorityStatus)];
    const filteredBtns = ['All', ...uniqueBtns];
    filteredBtns.forEach(values => {
        const allBtns = createPriorityBtns(values);
        filterContainer.appendChild(allBtns);
    });
}
renderingPriorityBtns();


//-----> CREATE TASK BOARD CARD -----
function createTaskCard(task) {
    const { id, title, assignee, column, priority } = task;

    // create note and inner elements
    const note = document.createElement('div');
    const pin = document.createElement('div');
    const titleText = document.createElement('h3');
    const assigneeText = document.createElement('p');
    const bottomRow = document.createElement('div');
    const priorityBadge = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const moveBtn = document.createElement('button');

    // add styles
    note.classList.add('note', 'relative', 'rounded-sm', 'p-5', 'pt-6');
    pin.classList.add('pin', 'absolute', '-top-2', 'left-1/2', '-translate-x-1/2');
    titleText.classList.add('handwrite', 'text-xl', 'mb-1');
    assigneeText.classList.add('text-xs', 'font-bold', 'mb-3');
    bottomRow.classList.add('flex', 'items-center', 'justify-between');
    priorityBadge.classList.add('text-[10px]', 'uppercase', 'font-extrabold', 'tracking-wide', 'px-2.5', 'py-1', 'rounded', 'text-white');
    deleteBtn.classList.add('delete-btn', 'font-bold', 'text-sm');
    moveBtn.classList.add('move-btn', 'w-full', 'mt-3', 'handwrite', 'text-base', 'px-3', 'py-1.5', 'rounded-md', 'transition');

    // add text content
    titleText.textContent = title;
    assigneeText.textContent = `— ${assignee}`;
    priorityBadge.textContent = priority;
    deleteBtn.textContent = '✕';
    moveBtn.textContent = 'Move Forward →';

    // change style based on column type
    if (column === 'todo') {
        note.classList.add('bg-[#FFF1B8]');
        titleText.classList.add('text-[#3D2B1F]');
        assigneeText.classList.add('text-[#7A6A4F]');
        pin.classList.add('bg-[#E8635A]');
        deleteBtn.classList.add('text-[#B3543F]', 'hover:text-[#7A2E1F]');
        moveBtn.classList.add('bg-[#3D2B1F]', 'text-[#FFF1B8]', 'hover:bg-[#241a12]');
    }
    else if (column === 'in-progress') {
        note.classList.add('bg-[#C9E4D8]');
        titleText.classList.add('text-[#233A30]');
        assigneeText.classList.add('text-[#4E6A5B]');
        pin.classList.add('bg-[#E8B44A]');
        deleteBtn.classList.add('text-[#3D6650]', 'hover:text-[#1F3D2B]');
        moveBtn.classList.add('bg-[#233A30]', 'text-[#C9E4D8]', 'hover:bg-[#152219]');
    }
    else if (column === 'done') {
        note.classList.add('bg-[#E4E0D6]', 'opacity-80');
        titleText.classList.add('text-[#3D2B1F]', 'line-through');
        assigneeText.classList.add('text-[#7A7364]');
        pin.classList.add('bg-[#8FA88F]');
        deleteBtn.classList.add('text-[#7A6A4F]', 'hover:text-[#4A3D28]');
        moveBtn.classList.add('text-[#5C7A63]', 'cursor-no-drop');
        moveBtn.textContent = '✓ done!';
    }

    // add priority badge based on task priority
    if (priority === 'high') {
        priorityBadge.classList.add('bg-[#E8635A]');
    }
    else if (priority === 'medium') {
        priorityBadge.classList.add('bg-[#E8B44A]');
    }
    else {
        priorityBadge.classList.add('bg-[#525252]');
    }

    // delete task
    deleteBtn.addEventListener('click', () => {
        tasks = tasks.filter((t) => t.id !== id);
        renderingTaskBoardCards(tasks);
    });

    // move task to next column
    moveBtn.addEventListener('click', () => {
        const newColumn = nextColumn[column];
        if (!newColumn) return;
        const taskToMove = tasks.find((t) => t.id === id);
        taskToMove.column = newColumn;
        renderingTaskBoardCards(tasks);
    });

    // append all childs
    note.appendChild(pin);
    note.appendChild(titleText);
    note.appendChild(assigneeText);
    note.appendChild(bottomRow);
    bottomRow.appendChild(priorityBadge);
    bottomRow.appendChild(deleteBtn);
    note.appendChild(moveBtn);

    return note;
}
//====== RENDER EACH ONE CARD BASED ON THEIR COLUMN ======
function renderingTaskBoardCards(arrObjData){
   // reset values
   todoTaskContainer.innerHTML = '';
   inprogressTaskContainer.innerHTML = '';
   doneTaskContainer.innerHTML = '';
   todoCountContainer.textContent = 0;
   inprogressCountContainer.textContent = 0;
   doneCountContainer.textContent = 0;

    // store value for each one column
    const todoTaskColumn = arrObjData.filter((todo) => todo.column === 'todo');
    const inprogressTaskColumn = arrObjData.filter((inprogress) => inprogress.column === 'in-progress');
    const doneTaskColumn = arrObjData.filter((done) => done.column === 'done');

    // append to the first column
    todoTaskColumn.forEach((cards) => {
        const firstCol = createTaskCard(cards);
        todoTaskContainer.appendChild(firstCol);
    });
    todoCountContainer.textContent = todoTaskColumn.length;

    // append to the 2nd column
    inprogressTaskColumn.forEach((cards) => {
        const secCol = createTaskCard(cards);
        inprogressTaskContainer.appendChild(secCol);
    });
    inprogressCountContainer.textContent = inprogressTaskColumn.length;

    // append to the third column
    doneTaskColumn.forEach((cards) => {
        const thirdCol = createTaskCard(cards);
        doneTaskContainer.appendChild(thirdCol);
    });
    doneCountContainer.textContent = doneTaskColumn.length;
}
renderingTaskBoardCards(tasks);

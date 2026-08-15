// all elements
const searchInputBox = document.getElementById('assignee-search');
const filterContainer = document.getElementById('priority-filter-container');
const boardContainer = document.getElementById('board-container');

// data
let tasks = [
   {id: 1, title: "Design Homepage", assignee: "Rafi", column: "todo", priority: "high"},
   {id: 2, title: "Fix Login Bug", assignee: "Meem", column: "in-progress", priority: "high"},
   {id: 3, title: "Write Documentation", assignee: "Nabila", column: "todo", priority: "low"},
   {id: 4, title: "Setup Database", assignee: "Rafi", column: "done", priority: "medium"},
];

// CREATE TASK BOARD CARD
function createTaskCard(elements){
    const { title, assignee, column, priority, id } = elements;
    
    // create note and inner elements
    const note = document.createElement('div');
    const pin = document.createElement('div');
    const titleText = document.createElement('h3');
    const assigneeText = document.createElement('p');
    const bottomRow = document.createElement('div');
    const priorityBadge = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const moveBtn = document.createElement('button');
    
    // add styles (color depends on column — done via TODO below)
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
    
    // append all childs
    note.appendChild(pin);
    note.appendChild(titleText);
    note.appendChild(assigneeText);
    note.appendChild(bottomRow);
    bottomRow.appendChild(priorityBadge);
    bottomRow.appendChild(deleteBtn);
    note.appendChild(moveBtn);
    
    return note;
};


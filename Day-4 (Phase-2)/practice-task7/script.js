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

    // change style based on column type
    if(elements.column === 'todo'){
        note.classList.add('bg-[#FFF1B8]');
        titleText.classList.add('text-[#3D2B1F]');
        assigneeText.classList.add('text-[#7A6A4F]');
        pin.classList.add('bg-[#E8635A]');
        deleteBtn.classList.add('text-[#B3543F]', 'hover:text-[#7A2E1F]');
        moveBtn.classList.add('bg-[#3D2B1F]', 'text-[#FFF1B8]', 'hover:bg-[#241a12]');
    }
    else if(elements.column === 'in-progress'){
        note.classList.add('bg-[#C9E4D8]');
        titleText.classList.add('text-[#233A30]');
        assigneeText.classList.add('text-[#4E6A5B]');
        pin.classList.add('bg-[#E8B44A]');
        deleteBtn.classList.add('text-[#3D6650]', 'hover:text-[#1F3D2B]');
        moveBtn.classList.add('bg-[#233A30]', 'text-[#C9E4D8]', 'hover:bg-[#152219]');
    }
    else if(elements.column === 'done'){
        note.classList.add('bg-[#E4E0D6]', 'opacity-80');
        titleText.classList.add('text-[#3D2B1F]', 'line-through');
        assigneeText.classList.add('text-[#7A7364]');
        pin.classList.add('bg-[#8FA88F]');
        deleteBtn.classList.add('text-[#7A6A4F]', 'hover:text-[#4A3D28]');
        moveBtn.classList.add('text-[#5C7A63]', 'cursor-no-drop');
        moveBtn.textContent = '✓ done!';
    }
 
    // add priority badge based on tasks type
    if(elements.priority === 'high'){
        priorityBadge.classList.add('bg-[#E8635A]');
    }
    else if(elements.priority === 'medium'){
        priorityBadge.classList.add('bg-[#E8B44A]');
    }
    else{
        priorityBadge.classList.add('bg-[#525252]');
    }

    
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
// RENDER EACH ONE CARD BASED ON THEIR COLUMN
function renderingTaskBoardCards(){
   // reset values
   todoTaskContainer.innerHTML = '';
   inprogressTaskContainer.innerHTML = '';
   doneTaskContainer.innerHTML = '';

    // store value for each one column
    const todoTaskColumn = tasks.filter((todo) => todo.column === 'todo');
    const inprogressTaskColumn = tasks.filter((inprogress) => inprogress.column === 'in-progress');
    const doneTaskColumn = tasks.filter((done) => done.column === 'done');

    // append to the first column
    todoTaskColumn.forEach((cards) => {
        const firstCol = createTaskCard(cards);
        todoTaskContainer.appendChild(firstCol);
    });
    // append to the 2nd column
    inprogressTaskColumn.forEach((cards) => {
        const secCol = createTaskCard(cards);
        inprogressTaskContainer.appendChild(secCol);
    });
    // append to the third column
    doneTaskColumn.forEach((cards) => {
        const thirdCol = createTaskCard(cards);
        doneTaskContainer.appendChild(thirdCol);
    });
}
renderingTaskBoardCards(tasks);

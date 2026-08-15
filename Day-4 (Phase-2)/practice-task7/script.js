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
    

};


// all elements
const addBtn = document.getElementById('add-btn');
const noteBox = document.getElementById('type-note');
const importentNotesCheckBox = document.getElementById('importent-notes-checkbox');
const searchBox = document.getElementById('search-box');
const importentNotes = document.getElementById('importent-notes');
const notesCounter = document.getElementById('total-notes');
const notesListContainer = document.getElementById('notes-list-container');
const deleteBtn = document.getElementById('deleteBtn');

let countNotes = 1;

// input e ja type korbe segulo prottekta note list akare li te add koro and dekhaw
addBtn.addEventListener('click', () => {
    if(noteBox.value === '') return;
    
    // create list 
   const listItems = document.createElement('li');
   listItems.classList.add("bg-white", "flex", "justify-between", "items-center", "text-wrap", "py-3", "px-3", "mb-4", "rounded-sm", "shadow-sm", "group");
   listItems.innerHTML = `
     <span>${noteBox.value}</span>
        <!-- icon -->
            <svg id="deleteBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 cursor-pointer invisible group-hover:visible">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
             </svg>
   `
   notesListContainer.appendChild(listItems);
   countNotes++;
   notesCounter.textContent = countNotes;
   noteBox.value = '';
})

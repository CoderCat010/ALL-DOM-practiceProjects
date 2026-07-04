// all elements
const noteBox = document.getElementById('type-note');
const importentNotesCheckBox = document.getElementById('importent-notes-checkbox');
const searchBox = document.getElementById('search-box');
const allNote = document.getElementById('all-notes');
const importentNotes = document.getElementById('importent-notes');
const notesCounter = document.getElementById('total-notes');
const notesListContainer = document.getElementById('notes-list-container');

let countNotes = 1;
let isImportent = false;

// input e ja type korbe segulo prottekta note list akare li te add koro and dekhaw
function addNote(){
    if(noteBox.value === '') return;
    let star;
    
    if(isImportent) {
        star = '⭐';
    } else {
        star = '';
    }

   // create list 
   const listItems = document.createElement('li');
   listItems.classList.add("bg-white", "flex", "justify-between", "items-center", "py-3", "px-4", "mb-4", "rounded-sm", "shadow-md", "gap-x-5" ,"group");
   listItems.dataset.importentNotes = isImportent;

   // li elemenets
   listItems.innerHTML = `<span class="w-[350px] break-all">${star} ${noteBox.value}</span>
    <!-- icon -->
        <svg onclick="deleteNote(this)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 cursor-pointer hidden group-hover:block">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>`
   notesListContainer.appendChild(listItems);
  
  // count each one notes    
   countNotes++;
   notesCounter.textContent = countNotes;
   noteBox.value = '';
   isImportent = false;
    importentNotesCheckBox.classList.remove('text-[#ffd000]');
}

// delete note list 
function deleteNote(element) {
    element.closest('li').remove();
    countNotes--;
    notesCounter.textContent = countNotes;
};

// importent notes
importentNotesCheckBox.addEventListener('click', () => {
    if(noteBox.value === ''){
        alert('WRITE SOMETHING FIRST!')
        return;
    }
    isImportent = !isImportent;
    importentNotesCheckBox.classList.toggle('text-[#ffd000]');
});

allNote.addEventListener('click', ()=>{
    document.querySelectorAll('li').forEach(li => {
        li.style.display = 'flex';
    })
});

importentNotes.addEventListener('click', ()=> {
    document.querySelectorAll('li').forEach(li => {
        if(li.dataset.importentNotes === 'true') {
            li.style.display = 'flex';
        } else {
            li.style.display = 'none';
        }
    });
});

searchBox.addEventListener('input', () => {
    const searchText = searchBox.value.toLowerCase();

    notesListContainer.querySelectorAll('li').forEach(li => {
        const noteText = li.querySelector('span').textContent.toLowerCase();

        if (noteText.includes(searchText)) {
            li.style.display = 'flex';
        } else {
            li.style.display = 'none';
        }
    });
});
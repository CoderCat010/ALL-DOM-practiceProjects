// ============================
// সব প্রয়োজনীয় Elements ধরে রাখা হলো
// ============================
const noteBox = document.getElementById('type-note');                   
const importentNotesCheckBox = document.getElementById('importent-notes-checkbox'); 
const searchBox = document.getElementById('search-box');                
const allNote = document.getElementById('all-notes');                    
const importentNotes = document.getElementById('importent-notes');       
const notesCounter = document.getElementById('total-notes');             
const notesListContainer = document.getElementById('notes-list-container'); 

let countNotes = 1;        // শুরুতে ১টা default note ধরা আছে HTML এ
let isImportent = false;   // Checkbox select করা আছে কিনা তার status

function addNote(){
    // Input খালি থাকলে কিছু করবে না
    if(noteBox.value === '') return;
    
    // isImportent true হলে ⭐ যোগ হবে, না হলে কিছু না
    let star;
    if(isImportent) {
        star = '⭐';
    } else {
        star = '';
    }

    // নতুন li element তৈরি করা হলো
    const listItems = document.createElement('li');

    // Tailwind class গুলো যোগ করা হলো styling এর জন্য
    listItems.classList.add("bg-white", "flex", "justify-between", "items-center", "py-3", "px-4", "mb-4", "rounded-sm", "shadow-md", "gap-x-5" ,"group");
    
    // এই li টা important কিনা সেটা attribute আকারে "সেঁটে" রাখা হলো
    // পরে filter করার সময় এই attribute দেখেই বোঝা যাবে
    listItems.dataset.importentNotes = isImportent;

    // li এর ভেতরের content বসানো হলো — note এর text + delete icon
    listItems.innerHTML = `<span class="w-[350px] break-all">${star} ${noteBox.value}</span>
    <!-- icon -->
        <svg onclick="deleteNote(this)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 cursor-pointer hidden group-hover:block">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>`

    // তৈরি হওয়া li টা page এর ul এ যোগ করা হলো
    notesListContainer.appendChild(listItems);
  
    // Counter বাড়ানো হলো এবং page এ দেখানো হলো
    countNotes++;
    notesCounter.textContent = countNotes;

    // Input খালি করে দেওয়া হলো পরের note লেখার জন্য
    noteBox.value = '';

    // Checkbox এর অবস্থা reset করা হলো — পরের note যেন automatically important না হয়
    isImportent = false;
    importentNotesCheckBox.classList.remove('text-[#ffd000]');
}

function deleteNote(element) {
    // যে svg তে click হয়েছে, তার সবচেয়ে কাছের li টা খুঁজে মুছে দেওয়া হলো
    element.closest('li').remove();

    // Counter কমানো হলো
    countNotes--;
    notesCounter.textContent = countNotes;
};


importentNotesCheckBox.addEventListener('click', () => {
    // Input খালি থাকলে সতর্ক করা হলো
    if(noteBox.value === ''){
        alert('WRITE SOMETHING FIRST!')
        return;
    }

    // isImportent এর মান উল্টে দেওয়া হলো (true হলে false, false হলে true)
    isImportent = !isImportent;

    // Checkbox এর রঙ বদলে দেখানো হলো select করা আছে কিনা
    importentNotesCheckBox.classList.toggle('text-[#ffd000]');
});


allNote.addEventListener('click', ()=>{
    // পেজের সব li কে দেখানো হলো, কোনো condition ছাড়াই
    document.querySelectorAll('li').forEach(li => {
        li.style.display = 'flex';
    })
});


importentNotes.addEventListener('click', ()=> {
    document.querySelectorAll('li').forEach(li => {
        // যদি এই li তে data-importent-notes="true" থাকে তাহলে দেখাও
        if(li.dataset.importentNotes === 'true') {
            li.style.display = 'flex';
        } else {
            // না হলে লুকিয়ে ফেলো
            li.style.display = 'none';
        }
    });
});


searchBox.addEventListener('input', () => {
    // যা লেখা হচ্ছে সেটা lowercase এ নেওয়া হলো (case-insensitive match এর জন্য)
    const searchText = searchBox.value.toLowerCase();

    notesListContainer.querySelectorAll('li').forEach(li => {
        // সেই li এর span (note এর আসল text) থেকে text বের করে lowercase করা হলো
        const noteText = li.querySelector('span').textContent.toLowerCase();

        // search text যদি note এর text এর মধ্যে থাকে তাহলে দেখাও
        if (noteText.includes(searchText)) {
            li.style.display = 'flex';
        } else {
            // না থাকলে লুকিয়ে ফেলো
            li.style.display = 'none';
        }
    });
});
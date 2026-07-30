// all element
const notesContainer = document.getElementById('notes-container');


// data
let notes = [
   {id: 1, subject: "Math", topic: "Algebra Basics", pinned: false},
   {id: 2, subject: "Science", topic: "Photosynthesis", pinned: false},
   {id: 3, subject: "History", topic: "World War II", pinned: false},
];

// create each one note card 
function createNoteCard(data){
    // all elements
    const parentDiv = document.createElement('div');
    const contentsDiv = document.createElement('div');
    const title = document.createElement('p');
    const btsContainer = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const description = document.createElement('h2');

    // all styles
    parentDiv.classList.add('note-card', 'bg-white', 'rounded-xl', 'border', 'border-[#E0D9CB]', 'shadow-sm', 'p-5', 'relative');
    contentsDiv.classList.add('flex', 'justify-between', 'items-start', 'mb-2');
    title.classList.add('text-[10px]', 'uppercase', 'tracking-wider', 'bg-[#EFEAE3]', 'text-[#8C8375]', 'px-2.5', 'py-1', 'rounded-full', 'font-medium');
    btsContainer.classList.add('flex', 'items-center', 'gap-1.5');
    btn1.classList.add('pin-btn', 'text-[#B8AF9E]', 'hover:text-[#C9A227]', 'transition', 'text-base', 'leading-none');
    btn2.classList.add('delete-btn', 'text-[#B8AF9E]', 'hover:text-rose-400', 'transition', 'text-sm', 'leading-none');
    description.classList.add('serif', 'text-lg', 'text-[#2E2A24]');


}



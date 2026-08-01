// element
const customersContainer = document.getElementById('customers-container');


// data 
let customers = [
   {id: 1, name: "Rahim Traders", contact: "01711111111", note: "Interested in bulk order"},
   {id: 2, name: "Karim Enterprise", contact: "01822222222", note: "Follow up next week"},
   {id: 3, name: "Nabila Fashion", contact: "01933333333", note: "Wants price list"},
];

// create elements & add styles, text content lastly append all the childs to their parent container.
function elementsFactory(elements){
    // create card's parent div -----> view mode
    const primaryDiv = document.createElement('div');
    const secondaryDiv = document.createElement('div');
    const div1 = document.createElement('div');
    const div1Title = document.createElement('h2');
    const div1Description = document.createElement('p');
    const div2 = document.createElement('div');
    const div2Btn1 = document.createElement('button');
    const div2Btn2 = document.createElement('button');
    const viewModenote = document.createElement('p'); 
    //-----> edit mode
    const editModeBtn1 = document.createElement('button');
    const editModeBtn2 = document.createElement('button');
    const editModenote = document.createElement('input'); 

    // all elements style
    primaryDiv.classList.add('customer-card', 'bg-[#171A21]', 'border', 'border-[#262B36]', 'rounded-2xl', 'p-5');
    secondaryDiv.classList.add('flex', 'items-start', 'justify-between', 'mb-3');
    div1.classList.add('heading-font', 'text-white', 'text-base');
    div1Title.classList.add('text-[#6B7280]', 'text-xs', 'mt-0.5');
    div1Description.classList.add('flex', 'items-center', 'gap-2');
    div2.classList.add('edit-btn', 'text-[#8B93A7]', 'hover:text-[#4C8DFF]', 'text-xs', 'font-medium', 'border', 'border-[#262B36]', 'rounded-lg', 'px-3', 'py-1.5', 'transition');
    div2Btn1.classList.add('delete-btn', 'text-[#8B93A7]', 'hover:text-rose-400', 'text-sm', 'leading-none',' transition');
    div2Btn2.classList.add('text-[#B4B9C4]', 'text-sm', 'bg-[#0F1115]', 'border', 'border-[#262B36]', 'rounded-xl', 'px-4', 'py-2.5');
    viewModenote.classList.add('flex', 'items-center', 'gap-2');
    editModeBtn1.classList.add('save-btn', 'text-[#4C8DFF]', 'text-xs', 'font-semibold', 'border', 'border-[#4C8DFF]/40', 'rounded-lg', 'px-3', 'py-1.5', 'transition');
    editModeBtn2.classList.add('delete-btn', 'text-[#8B93A7]', 'hover:text-rose-400', 'text-sm', 'leading-none', 'transition');
    editModenote.classList.add('note-input', 'w-full', 'text-[#E5E7EB]', 'text-sm', 'bg-[#0F1115]', 'border', 'border-[#4C8DFF]/50', 'rounded-xl', 'px-4', 'py-2.5', 'focus:outline-none', 'focus:ring-1', 'focus:ring-[#4C8DFF]');
    
}
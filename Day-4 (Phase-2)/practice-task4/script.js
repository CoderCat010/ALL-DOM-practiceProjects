// element
const customersContainer = document.getElementById('customers-container');


// data 
let customers = [
   {id: 1, name: "Rahim Traders", contact: "01711111111", note: "Interested in bulk order", isEditing: false},
   {id: 2, name: "Karim Enterprise", contact: "01822222222", note: "Follow up next week", isEditing: false},
   {id: 3, name: "Nabila Fashion", contact: "01933333333", note: "Wants price list", isEditing: false},
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
    const deleteBtn = document.createElement('button');

    // elements styles
    primaryDiv.classList.add('customer-card', 'bg-[#171A21]', 'border', 'border-[#262B36]', 'rounded-2xl', 'p-5');
    secondaryDiv.classList.add('flex', 'items-start', 'justify-between', 'mb-3');
    div1Title.classList.add('heading-font', 'text-white', 'text-base');
    div1Description.classList.add('text-[#6B7280]', 'text-xs', 'mt-0.5');
    div2.classList.add('flex', 'items-center', 'gap-2');
    deleteBtn.classList.add('delete-btn', 'text-[#8B93A7]', 'hover:text-rose-400', 'text-sm', 'leading-none', 'transition');
    
    // text content
    div1Title.textContent = elements.name;
    div1Description.textContent = elements.contact;
    deleteBtn.textContent = '✕';

    // apend childs
    primaryDiv.appendChild(secondaryDiv);
    secondaryDiv.appendChild(div1);
    div1.appendChild(div1Title);
    div1.appendChild(div1Description);
    secondaryDiv.appendChild(div2);

    // change elements apperance on the page based on view mode.edit mode
    if(elements.isEditing === true){
        // ---------- EDIT MODE ----------
        const saveBtn = document.createElement('button');
        const saveModenote = document.createElement('input'); 

        // styles
        primaryDiv.classList.add('customer-card', 'bg-[#171A21]', 'border', 'border-[#4C8DFF]/40', 'rounded-2xl', 'p-5')
        saveBtn.classList.add('save-btn', 'text-[#4C8DFF]', 'text-xs', 'font-semibold', 'border', 'border-[#4C8DFF]/40', 'rounded-lg', 'px-3', 'py-1.5', 'transition');
        saveModenote.classList.add('note-input', 'w-full', 'text-[#E5E7EB]', 'text-sm', 'bg-[#0F1115]', 'border', 'border-[#4C8DFF]/50', 'rounded-xl', 'px-4', 'py-2.5', 'focus:outline-none', 'focus:ring-1', 'focus:ring-[#4C8DFF]');

        // text content
        saveBtn.textContent = 'Save';
        saveModenote.value = elements.note;

        // apend child 
        div2.appendChild(saveBtn);
        primaryDiv.appendChild(saveModenote);

        // event listener on save btn 
        saveBtn.addEventListener('click', () => {
            elements.note = saveModenote.value;
            elements.isEditing = false;
            rendering(customers);
        });
    }else {
        // ---------- VIEW MODE ----------
        const editBtn = document.createElement('button');
        const viewModenote = document.createElement('p');

        editBtn.classList.add('edit-btn', 'text-[#8B93A7]', 'hover:text-[#4C8DFF]', 'text-xs', 'font-medium', 'border', 'border-[#262B36]', 'rounded-lg', 'px-3', 'py-1.5', 'transition');
        viewModenote.classList.add('text-[#B4B9C4]', 'text-sm', 'bg-[#0F1115]', 'border', 'border-[#262B36]', 'rounded-xl', 'px-4', 'py-2.5');

        editBtn.textContent = 'Edit';
        viewModenote.textContent = elements.note;

        div2.appendChild(editBtn);
        primaryDiv.appendChild(viewModenote);

        // EDIT click -> edit mode on
        editBtn.addEventListener('click', () => {
            elements.isEditing = true;
            rendering(customers);
        });
    }

    // DELETE BTN
    div2.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
        customers = customers.filter((c) => c.id !== elements.id);
        rendering(customers);
    });

    return primaryDiv;
};


// render all items
function rendering(eachOneItems){
    customersContainer.innerHTML = ''; 
    eachOneItems.forEach((customer) => {
        const card = elementsFactory(customer);
        customersContainer.appendChild(card);
    });
}
rendering(customers);
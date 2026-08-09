// all elements
const filterContainer = document.getElementById('filter-container');
const ingredientsContainer = document.getElementById('ingredients-container');
let uniqueBtns = [];

// data 
let ingredients = [
   {id: 1, name: "Flour", quantity: 5, unit: "kg", minRequired: 2},
   {id: 2, name: "Sugar", quantity: 1, unit: "kg", minRequired: 2},
   {id: 3, name: "Eggs", quantity: 12, unit: "pcs", minRequired: 6},
];

// create ingredients card
function ingredCardFactory(cardsData){
    // create parent card and inner elements
    const card = document.createElement('div');
    const topRow = document.createElement('div');
    const infoDiv = document.createElement('div');
    const title = document.createElement('h2');
    const quantityText = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const warningText = document.createElement('p');
    const controlsRow = document.createElement('div');
    const controlsBox = document.createElement('div');
    const minusBtn = document.createElement('button');
    const countSpan = document.createElement('span');
    const plusBtn = document.createElement('button');

    // add styles
    card.classList.add('ingredient-card', 'bg-white', 'rounded-2xl', 'border', 'border-[#F0E2CE]', 'shadow-sm', 'p-5');
    topRow.classList.add('flex', 'justify-between', 'items-start', 'mb-4');
    title.classList.add('serif', 'text-xl', 'text-[#3B2C22]');
    quantityText.classList.add('text-[#9C8B78]', 'text-sm', 'mt-0.5');
    deleteBtn.classList.add('delete-btn', 'text-[#C9BBA8]', 'hover:text-rose-400', 'text-sm', 'leading-none', 'transition');
    warningText.classList.add('text-[#C0392B]', 'text-xs', 'font-semibold', 'mb-3');
    controlsRow.classList.add('flex', 'items-center', 'justify-between');
    controlsBox.classList.add('flex', 'items-center', 'gap-3', 'bg-[#FDF6EA]', 'rounded-xl', 'px-3', 'py-2');
    minusBtn.classList.add('minus-btn', 'w-7', 'h-7', 'flex', 'items-center', 'justify-center', 'rounded-lg', 'bg-white', 'text-[#3B2C22]', 'shadow-sm', 'font-semibold');
    countSpan.classList.add('text-[#3B2C22]', 'font-semibold', 'w-6', 'text-center');
    plusBtn.classList.add('plus-btn', 'w-7', 'h-7', 'flex', 'items-center', 'justify-center', 'rounded-lg', 'bg-white', 'text-[#3B2C22]', 'shadow-sm', 'font-semibold');

    // add text content
    title.textContent = elements.name;
    quantityText.textContent = `${elements.quantity} ${elements.unit}`;
    deleteBtn.textContent = '✕';
    warningText.textContent = '⚠ Low Stock!';
    minusBtn.textContent = '−';
    countSpan.textContent = elements.quantity;
    plusBtn.textContent = '+';

    // append all childs
    card.appendChild(topRow);
    topRow.appendChild(infoDiv);
    infoDiv.appendChild(title);
    infoDiv.appendChild(quantityText);
    topRow.appendChild(deleteBtn);
    card.appendChild(warningText);
    card.appendChild(controlsRow);
    controlsRow.appendChild(controlsBox);
    controlsBox.appendChild(minusBtn);
    controlsBox.appendChild(countSpan);
    controlsBox.appendChild(plusBtn);

    return card;
}
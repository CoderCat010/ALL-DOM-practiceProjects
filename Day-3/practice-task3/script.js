bookShop = [
   {id: 1, title: "Atomic Habits", price: 450, bought: false},
   {id: 2, title: "Clean Code", price: 600, bought: false},
   {id: 3, title: "1984", price: 300, bought: false},
];

// books container
const bookItemsContainer = document.getElementById('bookItems-Container');
let spent = document.getElementById('spent');

// render 
function renderItems(booksData){
    // set default values
    bookItemsContainer.innerHTML = '';
    spent.textContent = 0;

    // added each data dynamically
    booksData.forEach((data) => {
         // set default value for button & styles
        let bookCard = '';
        let bookTitle = '';
        let btnText = 'Mark as Bought';
        if(data.bought){
            btnText = 'Bought ✅';
            bookTitle = 'line-through';
            bookCard = 'bg-[#00ff152d]';
            spent.textContent = Number(spent.textContent) + data.price;
        }

        // book container' each one card
        bookItemsContainer.innerHTML += `
        <div data-id="${data.id}" class="book-card flex justify-between items-center shadow-md bg-amber-200 p-3 rounded-[10px] ${bookCard}">
        <!-- title -->
            <div>
                <h2 class="text-[#000] font-semibold ${bookTitle}">${data.title}</h2>
                <p class="text-[#000000c4] font-medium">$ ${data.price}</p>
            </div>

        <!-- progress button -->
            <div>
                <button class="mark-today-done py-1 px-2 shadow-sm border border-[#0000001a] rounded-md text-[#000] font-medium text-[14px]">${btnText}</button>
            </div>
        </div>`
    });
}
renderItems(bookShop);


// add event listener to books container 
bookItemsContainer.addEventListener(('click'), ((event) => {
    const selectedElm = event.target;
    if(selectedElm.tagName !== 'BUTTON') return;
    
    // clicked button's card 
    const card = selectedElm.closest('.book-card');
    // each one card's id
    const bookCardsId = Number(card.dataset.id);

    // by those card's id find data from array of object
    const bookObj = bookShop.find((books) => books.id === bookCardsId);
    bookObj.bought = true;
    renderItems(bookShop);
}))

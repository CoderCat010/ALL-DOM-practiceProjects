bookShop = [
   {id: 1, title: "Atomic Habits", price: 450, bought: false},
   {id: 2, title: "Clean Code", price: 600, bought: false},
   {id: 3, title: "1984", price: 300, bought: false},
];

const bookItemsContainer = document.getElementById('bookItems-Container');

// render 
function renderItems(booksData){
    bookItemsContainer.innerHTML = '';
    booksData.forEach((data) => {
        bookItemsContainer.innerHTML += `
        <div class="book-card flex justify-between items-center shadow-md bg-amber-200 p-3 rounded-[10px]">
        <!-- title -->
            <div>
                <h2 class="text-[#000] font-semibold">${data.title}</h2>
                <p class="text-[#000000c4] font-medium">$ ${data.price}</p>
            </div>

        <!-- progress button -->
            <div>
                <button class="mark-today-done py-1 px-2 shadow-sm border border-[#0000001a] rounded-md text-[#000] font-medium text-[14px]">Buy</button>
            </div>
        </div>`
    });
}
renderItems(bookShop);
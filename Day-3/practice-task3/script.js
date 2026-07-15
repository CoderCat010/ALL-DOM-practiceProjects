bookShop = [
   {id: 1, title: "Atomic Habits", price: 450, bought: false},
   {id: 2, title: "Clean Code", price: 600, bought: false},
   {id: 3, title: "1984", price: 300, bought: false},
];

const dashboard = document.getElementById('dashboard');

// render 
function renderItems(booksData){
    booksData.forEach((data) => {
        dashboard.innerHTML = `
        <!-- 
        calculation
          -->
        <div class="flex justify-between text-black font-semibold" id="calculation">
            <h2>Total:$ <span>1355</span></h2>
            <h2>Spent:$ <span>450</span></h2>
        </div>

        <!-- 
        book items container
        -->
        <div id="bookItems-Container">
            <div class="habit-card flex justify-between items-center shadow-md bg-amber-200 p-3 rounded-[10px]">
                <!-- title -->
                <div>
                    <h2 class="text-[#000] font-semibold">Atomic Habit</h2>
                    <p class="text-[#000000c4] font-medium">$ 450</p>
                </div>

                <!-- progress button -->
                <div>
                    <button class="mark-today-done py-1 px-2 shadow-sm border border-[#0000001a] rounded-md text-[#000] font-medium text-[14px]">Buy</button>
                </div>
            </div>
        </div>`
    })
}
renderItems(bookShop);
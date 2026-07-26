// all elements
const productsContainer = document.getElementById('products-container');
const categoryBtnsContainer = document.getElementById('category-filter-container');
const searchBox = document.getElementById('search-input');
const totalValue = document.getElementById('total-value');

const products = [
   {id: 1, name: "Rice Bag", category: "Grocery", price: 1200, inStock: true},
   {id: 2, name: "Notebook", category: "Stationery", price: 50, inStock: true},
   {id: 3, name: "Milk Pack", category: "Grocery", price: 80, inStock: false},
   {id: 4, name: "Pen Set", category: "Stationery", price: 120, inStock: true},
   {id: 5, name: "Bath Soap", category: "Grocery", price: 145, inStock: false}
];
let uniqueBtns = []; 
let valueCounter = 0;

// rendering all items
function rendering(eachOneData){
    // reset data
    productsContainer.innerHTML = '';
    categoryBtnsContainer.innerHTML = '';
    valueCounter = 0;

    // cetegories buttons
    const categoryBtns = products.map((btn) => btn.category);
    const allBtns = categoryBtns.forEach((cetegory) => {
        if(!uniqueBtns.includes(cetegory)){
            uniqueBtns.push(cetegory)
        }
    });
    // each one category button
    categoryBtnsContainer.innerHTML += `<button data-name="All" class="cetegory-btn bg-teal-500 text-white py-1.5 px-4 text-sm font-semibold rounded-md shadow-sm">All</button>`
    uniqueBtns.forEach((b) => {
        categoryBtnsContainer.innerHTML += `<button data-name=${b} class="cetegory-btn bg-[#1e293b] text-slate-300 py-1.5 px-4 text-sm font-semibold rounded-md border border-[#334155]">${b}</button>`;
    });

    // each one products card
    eachOneData.forEach((data) => {
        // buy button 
        let isInStock = 'In Stock';
        let card = '';
        let btn = '';
        let buyBtn = 'Buy';
        if(!data.inStock){
            isInStock = 'Out Of Stock';
            card = 'opacity-60';
            btn = 'bg-rose-500/15 text-rose-400';
            buyBtn = 'Cancel'
        }

        // card
        productsContainer.innerHTML += `
        <div data-id=${data.id} class="product-card bg-[#1e293b] rounded-lg border border-[#334155] p-5 ${card}">
            <div class="flex justify-between items-start mb-3">
                <h2 class="text-base font-semibold text-white">${data.name}</h2>
                <span class="text-[11px] uppercase tracking-wide bg-emerald-500/15 text-emerald-400 py-1 px-2 rounded ${btn}">${isInStock}</span>
            </div>
            <p class="text-xs text-slate-400 mb-3">${data.category}</p>
            <div class="flex justify-between items-center">
                <span class="text-teal-400 font-bold">$${data.price}</span>
                <button class="buy-btn text-xs font-medium text-slate-300 border border-[#334155] py-1 px-3 rounded-md hover:bg-[#334155]">${buyBtn}</button>
            </div>
        </div>`;

        // total value counting
        valueCounter += data.price;
    });
    totalValue.textContent = `Total Value: $${valueCounter}`;
};
rendering(products);


//-----> filtering cetegory buttons 
categoryBtnsContainer.addEventListener(('click'), (event) => {
    const selectedBtn = event.target;
    if(!selectedBtn.classList.contains("cetegory-btn")) return;
    const buttonsData = selectedBtn.dataset.name;
    const filteringBtns = products.filter((cetegories) => cetegories.category === buttonsData || buttonsData === 'All');
    rendering(filteringBtns)
});


//-----> search products by name 
searchBox.addEventListener(('input'), (event) => {
    const searchText = searchBox.value.toLowerCase();
    const filteringProducts = products.filter((product) =>  product.name.toLowerCase().includes(searchText));
    rendering(filteringProducts);
});


//-----> toggle stock button 
productsContainer.addEventListener(('click'), (event) => {
    const selectedElm = event.target;
    if(!selectedElm.classList.contains('buy-btn')) return;

    // each one product card & product id
    const productCard = selectedElm.closest('.product-card');
    const productId = Number(productCard.dataset.id);
    const productObj = products.find((pro) => pro.id === productId);
    productObj.inStock = !productObj.inStock;
    rendering(products);
})
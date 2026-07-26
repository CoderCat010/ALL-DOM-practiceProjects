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

function rendering(eachOneData){
    eachOneData.forEach((data) => {
        productsContainer.innerHTML += `
        <div class="bg-[#1e293b] rounded-lg border border-[#334155] p-5">
            <div class="flex justify-between items-start mb-3">
                <h2 class="text-base font-semibold text-white">${data.name}</h2>
                <span class="text-[11px] uppercase tracking-wide bg-emerald-500/15 text-emerald-400 py-1 px-2 rounded">In Stock</span>
            </div>
            <p class="text-xs text-slate-400 mb-3">${data.category}</p>
            <div class="flex justify-between items-center">
                <span class="text-teal-400 font-bold">$${data.price}</span>
                <button class="text-xs font-medium text-slate-300 border border-[#334155] py-1 px-3 rounded-md hover:bg-[#334155]">Buy</button>
            </div>
        </div>`;
    });
};
rendering(products);
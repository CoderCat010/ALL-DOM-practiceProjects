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
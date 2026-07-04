// all elements
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const addBtn = document.getElementById('add-btn');
const allProducts = document.getElementById('all-products');

const products = [
   {name: "Phone", price: 15000, category: "Electronics"},
   {name: "Shirt", price: 800, category: "Clothings"},
   {name: "Laptop", price: 55000, category: "Electronics"},
   {name: "Pants", price: 1200, category: "Clothings"},
   {name: "Headphone", price: 3500, category: "Electronics"},
];

// Page load হলে সব product দেখাবে 
function renderList(allData){
    allProducts.innerHTML = '';
    // create products items
    allData.forEach((product) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>Name: ${product.name}</span>
            <span>Price: ${product.price}</span>`;
        allProducts.appendChild(li)
    })
}
renderList(products);


// "Electronics" button click করলে শুধু Electronics দেখাবে, "Clothing" button click করলে শুধু Clothing দেখাবে
document.getElementById('items-button').addEventListener('click', (event) => {
    const clickedBtn = event.target;
    if(clickedBtn.tagName !== 'BUTTON') return;

    const category = clickedBtn.textContent;
    if(category === 'All'){
        renderList(products)
    }else{
        renderList(products.filter(categories => categories.category === category));
    }
});


// add new products
addBtn.addEventListener('click', () => {
    const name = productName.value;
    const price = productPrice.value;
    if(name === '' || price ==='') return;

    products.push({name: name, price: price});
    renderList(products);

    productName.value = '';
    productPrice.value = '';
})
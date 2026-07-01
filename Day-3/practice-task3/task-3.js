// Task-3 — Product List App
// const products = [
//    {name: "Phone", price: 15000, category: "Electronics"},
//    {name: "Shirt", price: 800, category: "Clothing"},
//    {name: "Laptop", price: 55000, category: "Electronics"},
//    {name: "Pants", price: 1200, category: "Clothing"},
//    {name: "Headphone", price: 3500, category: "Electronics"},
// ];

/* কী কী করতে হবে
    * ❶ Page load হলে সব product দেখাবে 

    * ❷ "Electronics" button click করলে শুধু Electronics দেখাবে

    * ❸ "Clothing" button click করলে শুধু Clothing দেখাবে

    * ❹ Input এ product nam r price diye নতুন product add করা যাবে

    * ❺ প্রতিটা product এর পাশে price 10000 এর বেশি হলে "Expensive" কম হলে "Affordable" দেখাবে
*/

const products = [
   {name: "Phone", price: 15000, category: "Electronics"},
   {name: "Shirt", price: 800, category: "Clothing"},
   {name: "Laptop", price: 55000, category: "Electronics"},
   {name: "Pants", price: 1200, category: "Clothing"},
   {name: "Headphone", price: 3500, category: "Electronics"},
];

const allProducts = document.getElementById('all-products');

// Page load হলে সব product দেখাবে 
function renderList(allData){
    allProducts.innerHTML = '';
    // create products items
    allData.forEach((product) => {
        const li = document.createElement('li');
        li.innerHTML = `<li>
            <span>Name: ${product.name}</span>
            <span>Price: ${product.price}</span>
        </li>`;
        allProducts.appendChild(li)
    })
}
renderList(products);

document.getElementById('items-button').addEventListener('click', (event) => {
    const clickedBtn = event.target;
    console.log(clickedBtn);
    
})
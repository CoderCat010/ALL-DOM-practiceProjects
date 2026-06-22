// Task 3: একটা list আছে — ["Apple", "Banana", "Mango", "Orange"] — এগুলো automatically page এ list হিসেবে দেখাবে।
const list_container = document.getElementById('list-container');

const arrayElm = ["Apple", "Banana", "Mango", "Orange"];

// for(let elm of arrayElm){
//     const list = document.createElement('li');
//     list.textContent = elm;
//     list_container.appendChild(list)
// }

arrayElm.forEach((elm) => {
    const list = document.createElement('li');
    list.textContent = elm;
    list_container.appendChild(list);
})
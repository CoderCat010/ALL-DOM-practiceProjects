// Task 2: একটা input আর button। Click করলে input এর value একটা list এ add হবে এবং নিচে দেখাবে।
const input_box = document.getElementById('input');
const list_container = document.getElementById('list-container');

function clickBtn(){
    if(input_box.value === "") return;

    // create ul list 
    const list = document.createElement('li');
    list.textContent = input_box.value;
    input_box.value = "";
    list_container.appendChild(list);
}
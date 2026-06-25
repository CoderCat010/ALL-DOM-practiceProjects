// Task 1: একটা object আছে — {name: "Rahim", age: 22, city: "Dhaka"} এই তথ্যগুলো automatically page এ card হিসেবে দেখাবে।

const obj = {
    name: "Rahim", 
    age: 22, 
    city: "Dhaka"
};

// create elements
const create_div = document.createElement('div');
const create_h1 = document.createElement('h1');
const create_h3 = document.createElement('h3');
const create_p = document.createElement('p');

create_div.style.width = '200px';
create_div.style.backgroundColor = 'blue';
create_div.style.color = 'white';
create_div.style.padding = '10px';
create_div.style.border = '1px solid #000';

// add object each on properties manually
// create_h1.textContent = obj.name;
// create_h3.textContent = obj.age;
// create_p.textContent = obj.city;

// add object each on properties using by distructing
const {name, age, city} = obj;
create_h1.textContent = name;
create_h3.textContent = age;
create_p.textContent = city;

// append all the child to the div
create_div.appendChild(create_h1);
create_div.appendChild(create_h3);
create_div.appendChild(create_p);
document.body.appendChild(create_div);
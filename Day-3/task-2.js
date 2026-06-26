/* Task 2: Students এর একটা array of objects আছে — [{name: "Rahim", marks: 85}, {name: "Karim", marks: 92}
   * একটা input আর button। নাম আর marks লিখলে নতুন student add হবে list এ।

   * {name: "Jamal", marks: 78}] সবার নাম আর marks list হিসেবে দেখাবে। উপরের same array — button click করলে শুধু যাদের marks 80 এর উপরে তাদের দেখাবে। 
*/
const listContainer = document.getElementById('list-container');
const studentNames = document.getElementById('add-studentName');
const studentMarks = document.getElementById('add-studentmarks');
const lessThan = document.getElementById('less-than');
const greaterThan = document.getElementById('greater-than');


// all data
const arrOfObj = [
   {name: "Rahim", marks: 85}, 
   {name: "Karim", marks: 92},
   {name: "Muskan", marks: 33},
];


function renderList(filteredData){
   filteredData.forEach((eachOneData) => {
      // create students list 
      const listItems = document.createElement('li');
      listItems.classList.add(
         "flex", "justify-between", "font-semibold", "text-md", "bg-fuchsia-100", "py-2", "px-5", "mb-5", "rounded-xl", "shadow-lg");

      // create li span
      const span1 = document.createElement('span');
      const span2 = document.createElement('span');
      const span3 = document.createElement('span');

      // set student name and marks in each one list
      span1.textContent = `Name: ${eachOneData.name}`;
      span2.textContent = '—';
      span3.textContent = `Marks: ${eachOneData.marks}`; 

      // append 
      listItems.appendChild(span1);
      listItems.appendChild(span2);
      listItems.appendChild(span3);
      listContainer.appendChild(listItems);
   }) 
}
renderList(arrOfObj);

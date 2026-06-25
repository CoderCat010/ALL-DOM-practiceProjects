/* Task 2: Students এর একটা array of objects আছে — [{name: "Rahim", marks: 85}, {name: "Karim", marks: 92}
   * একটা input আর button। নাম আর marks লিখলে নতুন student add হবে list এ।

   * {name: "Jamal", marks: 78}] সবার নাম আর marks list হিসেবে দেখাবে। উপরের same array — button click করলে শুধু যাদের marks 80 এর উপরে তাদের দেখাবে। 
*/

const listContainer = document.getElementById('list-container');

const arrOfObj = [
   {name: "Rahim", marks: 85}, 
   {name: "Karim", marks: 92},
   {name: "Muskan", marks: 33},
];

// loop through each one array object's data
arrOfObj.forEach((eachOneData) => {
   // create students list
   const listItems = document.createElement('li');
   listItems.classList.add(
      "flex", "justify-between", "font-semibold", "text-md", "bg-fuchsia-100", "py-2", "px-4", "mb-5", "rounded-xl", "shadow-lg");
   const span1 = document.createElement('span');
   const span2 = document.createElement('span');
   span1.textContent = `Name: ${eachOneData.name}`;
   span2.textContent = `Marks: ${eachOneData.marks}`;
   
   // apend all the child to the page
   listItems.appendChild(span1);
   listItems.appendChild(span2);
   listContainer.appendChild(listItems)
})





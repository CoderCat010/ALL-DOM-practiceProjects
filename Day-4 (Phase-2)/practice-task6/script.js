// all elements
const filterContainer = document.getElementById('filter-container');
const ingredientsContainer = document.getElementById('ingredients-container');
let uniqueBtns = [];

// data 
let ingredients = [
   {id: 1, name: "Flour", quantity: 5, unit: "kg", minRequired: 2},
   {id: 2, name: "Sugar", quantity: 1, unit: "kg", minRequired: 2},
   {id: 3, name: "Eggs", quantity: 12, unit: "pcs", minRequired: 6},
];

// create ingredients card
function ingredCardFactory(cardsData){
    // create parent card and inner elements
    const card = document.createElement('div');
    const topRow = document.createElement('div');
    const infoDiv = document.createElement('div');
    const title = document.createElement('h2');
    const quantityText = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const warningText = document.createElement('p');
    const controlsRow = document.createElement('div');
    const controlsBox = document.createElement('div');
    const minusBtn = document.createElement('button');
    const countSpan = document.createElement('span');
    const plusBtn = document.createElement('button');

}
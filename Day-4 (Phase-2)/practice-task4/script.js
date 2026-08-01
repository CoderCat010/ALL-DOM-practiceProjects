// element
const customersContainer = document.getElementById('customers-container');


// data 
let customers = [
   {id: 1, name: "Rahim Traders", contact: "01711111111", note: "Interested in bulk order"},
   {id: 2, name: "Karim Enterprise", contact: "01822222222", note: "Follow up next week"},
   {id: 3, name: "Nabila Fashion", contact: "01933333333", note: "Wants price list"},
];

// create elements & add styles, text content lastly append all the childs to their parent container.
function elementsFactory(elements){
    // create card's parent div -----> view mode
    const primaryDiv = document.createElement('div');
    const secondaryDiv = document.createElement('div');
    const div1 = document.createElement('div');
    const div1Title = document.createElement('h2');
    const div1Description = document.createElement('p');
    const div2 = document.createElement('div');
    const div2Btn1 = document.createElement('button');
    const div2Btn2 = document.createElement('button');
    const viewModenote = document.createElement('p'); 
    //-----> edit mode
    const editModeBtn1 = document.createElement('button');
    const editModeBtn2 = document.createElement('button');
    const editModenote = document.createElement('input'); 

    
    
}
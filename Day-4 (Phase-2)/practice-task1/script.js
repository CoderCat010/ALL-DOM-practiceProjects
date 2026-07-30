// all elements
const mainBalance = document.getElementById('balance-display');
const transactionContainer = document.getElementById('transactions-container');


// data 
let transactions = [
   {id: 1, title: "Salary", amount: 45000, type: "income"},
   {id: 2, title: "Groceries", amount: 3500, type: "expense"},
   {id: 3, title: "Freelance Work", amount: 8000, type: "income"},
   {id: 4, title: "Electricity Bill", amount: 2200, type: "expense"},
];

let income = 0;
let expense = 0;
let totalBalance = 0;

// render all items
function rendering(arrObjData){
    transactionContainer.textContent = '';
    mainBalance.textContent = '';
    expense = 0;
    income = 0;

    // each one transaction card 
    arrObjData.forEach((data) => {
        //-----> create card's parent div 
        const parentDiv = document.createElement('div');
        // title & description 
        const titleDescripContainer = document.createElement('div');
        const arrowIcon = document.createElement('div');
        const descriptionContent = document.createElement('div');
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");
        // transaction amount
        const transactionDiv = document.createElement('div');
        const transactionAmount = document.createElement("span");
        const transactionDeleteBtn = document.createElement("button");


        //-----> all styles
        parentDiv.classList.add(
            'bg-[#1A1D24]', 'border', 'border-[#262933]', 'rounded-2xl', 'p-4', 'flex', 'items-center', 'justify-between');
        titleDescripContainer.classList.add(
            'flex', 'items-center', 'gap-3');
        para1.classList.add('text-white', 'font-medium');
        para2.classList.add('text-[#7A8194]', 'text-xs');
        transactionDiv.classList.add('flex', 'items-center', 'gap-4');
        transactionDeleteBtn.classList.add('delete-btn', 'text-[#7A8194]', 'hover:text-rose-400', 'transition','text-lg', 'leading-none');


        //-----> all text contents
        // change arrow sign when transaction type income/expense
        if(data.type === 'income'){
            arrowIcon.classList.add('w-10', 'h-10', 'rounded-full', 'bg-emerald-500/10', 'flex', 'items-center', 'justify-center', 'text-emerald-400', 'text-lg');
            arrowIcon.textContent = '↑';
        }else{
            arrowIcon.classList.add('w-10', 'h-10', 'rounded-full', 'bg-rose-500/10', 'flex', 'items-center', 'justify-center', 'text-rose-400', 'text-lg');
            arrowIcon.textContent = '↓';
        }
        para1.textContent = data.title;
        para2.textContent= data.type;

        // change text style when transaction amount income/expense
        if(data.type === 'income'){
            transactionAmount.classList.add('text-emerald-400', 'font-semibold', 'display-font');
            transactionAmount.textContent = `+${data.amount}`;
        }else{
            transactionAmount.classList.add('text-rose-400', 'font-semibold', 'display-font');
            transactionAmount.textContent = `-${data.amount}`;
        }
        transactionDeleteBtn.textContent = '✕';


        //-----> append all the childs to the parent div
        parentDiv.appendChild(titleDescripContainer);
        titleDescripContainer.appendChild(arrowIcon);
        titleDescripContainer.appendChild(descriptionContent);
        descriptionContent.appendChild(para1);
        descriptionContent.appendChild(para2);
        parentDiv.appendChild(transactionDiv);
        transactionDiv.appendChild(transactionAmount);
        transactionDiv.appendChild(transactionDeleteBtn);
        transactionContainer.appendChild(parentDiv);


        //-----> delete transaction card 
        transactionDeleteBtn.addEventListener(('click'), () => {
            transactions = transactions.filter(t => t.id !== data.id);
            rendering(transactions);
        });

        
        // calculate all income & and expenses and add to balance
        if(data.type === 'income'){
            income += data.amount;
        }else{
            expense += data.amount;
        }
        // total balance
        totalBalance = income - expense;
    });
    mainBalance.textContent = `$${totalBalance}`;
}
rendering(transactions);

// Task 1: Button click করলে একটা counter বাড়বে। (0, 1, 2, 3...)
let counter = 0;

document.getElementById('ClickBtn').addEventListener('click', () => {
    counter++;
    const ptag = document.getElementById('p');
    ptag.textContent = counter;
})
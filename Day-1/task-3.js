// Task 3: Input এ নাম লিখে button click করলে "Hello, [নাম]!" দেখাবে
function clickBtn(){
    const input = document.getElementById('input');
    const inputValue = input.value;
    const para = document.getElementById('pra');
    input.value = '';
    para.style.color = 'blue';
    para.style.fontSize = '30px';
    // para.textContent = `Hello, ${inputValue}!`;
    para.innerText += `<p>Hello, ${inputValue}!</p>`;
}
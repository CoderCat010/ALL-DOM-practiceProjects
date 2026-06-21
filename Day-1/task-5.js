// Task 5: দুটো input এ দুটো number লিখে button click করলে যোগফল দেখাবে
document.getElementById('clickBtn').addEventListener('click', () => {
   const input1 = document.getElementById('input1');
   const input2 = document.getElementById('input2');
   const sum = parseInt(input1.value) + parseInt(input2.value);
   const para = document.getElementById('pra');
   para.textContent = `total sum: ${sum}`;
})
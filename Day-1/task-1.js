// function clickBtn(){
//     const pTag = document.createElement('p');
//     pTag.textContent = 'Good Morning!'
// }
// clickBtn();

const btn = document.getElementById('clickBtn');

// btn.addEventListener('click', function(){
//     btn.innerHTML = '';
//     const pTag = document.createElement('p');
//     pTag.textContent = 'Good Morning!';
// });

/*
    *  Click এর পর button কে disable করে দাও
    * Add করার আগে আগেরটা মুছে দাও
*/

btn.addEventListener('click', function(){
    const pTag = document.createElement('p');
    pTag.textContent = 'Good Morning!';
    const text = document.getElementById('pra');
    // text.innerHTML = '';
    text.appendChild(pTag);
    // btn.disabled = true; 
});


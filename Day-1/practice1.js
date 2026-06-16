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

btn.addEventListener('click', function(){
    const pTag = document.createElement('p');
    pTag.textContent = 'Good Morning!';
    document.getElementById('pra').appendChild(pTag);
    btn.style.display = 'none'
});
document.getElementById('all-candidates').addEventListener('click', (event) => {
    const selectedItem = event.target;
    
    // if user clicked vote button or not
    if(!selectedItem.classList.contains('vote-btn')) return;

    // get selected vote button's card
    const selectedCard = selectedItem.closest('.candidate-card');

    // get vote counter button of selected card
    const voteCounterSpan = selectedCard.querySelector('.vote-counterBtn');
    let voteCounterText = Number(voteCounterSpan.textContent);
    voteCounterText++;
    voteCounterSpan.textContent = voteCounterText;
})
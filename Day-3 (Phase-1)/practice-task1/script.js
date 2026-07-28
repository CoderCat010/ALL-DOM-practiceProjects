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

    // get max vote counter 
    const allCounterSpan = document.querySelectorAll('.vote-counterBtn');
    const allVoteCounterValues = [...allCounterSpan].map((allValues) => Number(allValues.textContent));
    const crownWinner = Math.max(...allVoteCounterValues);

    // compare each one card counter span values with max vote counter 
    const allCandidates = document.querySelectorAll('.candidate-card');
    allCandidates.forEach((candidateCard) => {
        const cardCounterSpan = Number(candidateCard.querySelector('.vote-counterBtn').textContent);
        const crownBadge = candidateCard.querySelector('.crown-winner');

        // compare 
        if(cardCounterSpan === crownWinner){
            crownBadge.classList.remove('hidden');
        }else{
            crownBadge.classList.add('hidden');
        }
    })
})
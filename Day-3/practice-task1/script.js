// get all candidates 
document.getElementById('all-candidates').addEventListener('click', (event) => {
    const selectedItems = event.target;

    // if user clicked vote button or not
    if(!selectedItems.classList.contains('vote-btn')) return;
    
    // clicked card 
    const candidateCard = selectedItems.closest('.candidate-card');
    
    // counter button
    const counterSpan = candidateCard.querySelector('.vote-counterBtn');
    let currentVotes = Number(counterSpan.textContent);
    currentVotes++;
    counterSpan.textContent = currentVotes;

    // compare each one vote counts and get crown winner 
    const allCounterValues = document.querySelectorAll('.vote-counterBtn');
    const allVoteValues = [...allCounterValues].map((values) => Number(values.textContent));
    const winner = Math.max(...allVoteValues);
    
    // winner 
    const allCards = document.querySelectorAll('.candidate-card');

    allCards.forEach((card) => {
         const cardCounter = Number(card.querySelector('.vote-counterBtn').textContent);
         const crown = card.querySelector('.crown-winner');

         if(cardCounter === winner){
            crown.classList.remove('hidden')
         }else{
            crown.classList.add('hidden')
         }
    })
})

const cards = document.querySelectorAll('.card');
let cardOne, cardTwo;
let dis_Deck = false;
let matchedCard = 0;

function flipCard(e){
    let clickedCard = e.target;
    
    if(clickedCard !== cardOne && !dis_Deck) {
        clickedCard.classList.add('flip');
        
        if(!cardOne) {
            return cardOne = clickedCard;
        }

        cardTwo = clickedCard;
        dis_Deck = true;

        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2){
    if(img1 == img2){ 
        
        matchedCard++;
        if(matchedCard == 40){
            setTimeout(() => {
                return shuffCard();
            }, 1200);
        }
        
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = '';
        return dis_Deck = false;
    }
    else{
        setTimeout(() => {
            cardOne.classList.add('vibration');
            cardTwo.classList.add('vibration');
        }, 400);
        setTimeout(() => {
            cardOne.classList.remove('vibration', 'flip');
            cardTwo.classList.remove('vibration', 'flip');
            cardOne = cardTwo = '';
            dis_Deck = false;
        }, 1200);
    }
}

function shuffCard(){
    matchedCard = 0;
    cardOne = cardTwo = '';

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18]
    array.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card) => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    
    });
}
shuffCard();


cards.forEach(card => {
    card.addEventListener('click', flipCard)

   // card.classList.add('flip')
});


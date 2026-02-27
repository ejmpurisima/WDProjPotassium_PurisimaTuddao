window.onload = function() {
    const container = document.getElementById('card-container');
    if (!container) return;

    function createCard() {
        const card = document.createElement('img');
        const cards = [
            'public/others/hearts.png', 
            'public/others/spades.png', 
            'public/others/clubs.png', 
            'public/others/diamonds.png'
        ];
        
        card.src = cards[Math.floor(Math.random() * cards.length)];
        card.classList.add('falling-card');
        
        
        const sideGutterWidth = window.innerWidth * 0.20; 
        let startPos;

        if (Math.random() < 0.5) {
           
            startPos = Math.random() * sideGutterWidth;
        } else {
          
            startPos = (window.innerWidth - sideGutterWidth) + (Math.random() * sideGutterWidth);
        }
        
        const duration = Math.random() * 4 + 6; 
        const size = Math.random() * 15 + 25;
        
        card.style.left = (startPos - 20) + 'px'; 
        card.style.animationDuration = duration + 's';
        card.style.width = size + 'px';
        
        container.appendChild(card);
        setTimeout(() => { card.remove(); }, duration * 1000);
    }

   
    setInterval(createCard, 300); 
};
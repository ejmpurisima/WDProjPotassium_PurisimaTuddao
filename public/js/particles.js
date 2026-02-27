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
        
       
        const totalWidth = window.innerWidth;
        const sideWidth = totalWidth * 0.25;
        let startPos;

        const spawnChance = Math.random();

        if (spawnChance < 0.4) {
          
            startPos = Math.random() * sideWidth;
        } else if (spawnChance < 0.8) {
          
            startPos = (totalWidth - sideWidth) + (Math.random() * sideWidth);
        } else {
          
            startPos = sideWidth + (Math.random() * (totalWidth - (sideWidth * 2)));
        }
    
        const duration = Math.random() * 5 + 5; 
        const size = Math.random() * 30 + 40; 
        
        card.style.left = startPos + 'px';
        card.style.animationDuration = duration + 's';
        card.style.width = size + 'px';
        
      
        card.style.transform = `rotate(${Math.random() * 360}deg)`;

        container.appendChild(card);
        setTimeout(() => { card.remove(); }, duration * 1000);
    }

   
    setInterval(createCard, 350); 
};
document.addEventListener('DOMContentLoaded',()=>{

    //card array
    const cards=[
        {name:'Blue Mosque', img: 'memory game images/blue-mosque-by-Freepik.png'},
        {name:'Forbidden City', img: 'memory game images/hall-of-supreme-harmony-by-Freepik.png'},
        {name:'Pisa', img: 'memory game images/leaning-tower-of-pisa-by-Freepik.png'},
        {name:'Pyramids', img: 'memory game images/pyramids-by-Freepik.png'},
        {name:'Taj Mahal', img: 'memory game images/taj-mahal-by-Freepik.png'},
        {name:'Chichen Itza', img: 'memory game images/teotihuacan-by-Freepik.png'},

        {name:'Blue Mosque', img: 'memory game images/blue-mosque-by-Freepik.png'},
        {name:'Forbidden City', img: 'memory game images/hall-of-supreme-harmony-by-Freepik.png'},
        {name:'Pisa', img: 'memory game images/leaning-tower-of-pisa-by-Freepik.png'},
        {name:'Pyramids', img: 'memory game images/pyramids-by-Freepik.png'},
        {name:'Taj Mahal', img: 'memory game images/taj-mahal-by-Freepik.png'},
        {name:'Chichen Itza', img: 'memory game images/teotihuacan-by-Freepik.png'},
    ]

    //randomize the cards
    cards.sort(()=>0.5-Math.random())

    const board=document.querySelector('.board')
    const Result=document.querySelector('#Result')
    var clickedCards=[]
    var clickedNBs=[]
    var matched=[]

    //game board
    function createBoard(){
        for(let i=0;i<cards.length;i++){
            const card=document.createElement('img')
            //initialize to cover image, assign a number ID, add to board
            card.setAttribute('number', i)
            card.setAttribute('src','memory game images/world-by-turkkub.PNG')
            board.appendChild(card)
            card.addEventListener('click', flip)
        }
    }

    //flip the card
    function flip(){
        //get name and number of image selected, add to array
        var index = this.getAttribute('number')
        clickedCards.push(cards[index].name)
        clickedNBs.push(index)
        //chnage the display to the image
        this.setAttribute('src',cards[index].img)
        
        if (clickedCards.length===2){ //if 2 cards are selected
            setTimeout(check,200) //check if the pair matches
        }
    }

    // check for a possible match
    function check(){
        var pair = document.querySelectorAll('img')
        if (clickedCards[0]===clickedCards[1]){
            matched.push(clickedCards[0])
            matched.push(clickedCards[1])
            alert('Bravo! You found a matching pair!')
        }else{
            //reset the images back to the globe (hidden)
            pair[clickedNBs[0]].setAttribute('src','memory game images/world-by-turkkub.PNG');
            pair[clickedNBs[1]].setAttribute('src','memory game images/world-by-turkkub.PNG');
        }
        //clear to flip again
        clickedCards=[]
        clickedNBs=[]

        Result.textContent=matched.length/2 //update score
        if (matched.length/2===cards.length/2){ //win
            setTimeout(announceWin,500)
        }
    }
    
    function announceWin(){
        alert('Congratulations! You won!')
        matched=[]
    }

    createBoard() 
})


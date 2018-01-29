// Target HTML <div>
var cardDiv = document.getElementById('card');

// Create "card" object 
const Card = {
    front: function() {
      return `<h2>${this.frontMessage}</h2>`
    },
    inside: function(string) {
        return `<h2>'${this.insideMessage}</h2>`
    },
    note: function(){
        return `<p>${this.message}</h2>`
    }
  }


// Create custom card based on first card object 
const BirthdayCard = Object.create(Card);
const ValentinesCard = Object.create(Card);
const ChristmasCard = Object.create(Card);

// Prompt user 
alert('Welcome to the Card Selector!');
var cardNumber = parseInt(prompt('Type 0 for Birthday Card, 1 for Valentines Card, and 2 for Christmas Card'));

switch(cardNumber){

    // BIRTHDAY CARD    
case 0:
    BirthdayCard.frontMessage = 'Dont grow up.....'
    BirthdayCard.insideMessage = "Its a trap!"
    BirthdayCard.message = 'Happy Birthday'
    cardDiv.innerHTML += BirthdayCard.front();
    cardDiv.innerHTML += BirthdayCard.inside();
    cardDiv.innerHTML += BirthdayCard.note();
    cardDiv.style.color = 'white';
    cardDiv.style.backgroundColor = 'blue';
    break;
    // VALENTINES CARD
case 1:
    ValentinesCard.frontMessage = 'I like you more than.....'
    ValentinesCard.insideMessage = "Kayne loves Kanye"
    ValentinesCard.message = "<3"
    cardDiv.style.color = 'white';
    cardDiv.style.backgroundColor = 'tomato';

    cardDiv.innerHTML += ValentinesCard.front();
    cardDiv.innerHTML += ValentinesCard.inside();
    cardDiv.innerHTML += ValentinesCard.note();
    break;

    // CHRISTMAS CARD

case 2:
    ChristmasCard.frontMessage = 'We gonna party....'
    ChristmasCard.insideMessage = 'Like its my Birfday'
    ChristmasCard.message = '-Jesus'
    cardDiv.style.color = 'red';
    cardDiv.style.backgroundColor = 'lightgreen';

    cardDiv.innerHTML += ChristmasCard.front();
    cardDiv.innerHTML += ChristmasCard.inside();
    cardDiv.innerHTML += ChristmasCard.note();
    break;

}
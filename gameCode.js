

///program description: 2 player, card game called "war"
/*
- only 2 players
- there can be a tie (no going to "war" like in versions of the game)
- no user input, when game is ran, the entire game goes
- higher card, earns 1 point, ties are zero points, at bottom of deck
- most points wins
- write a unit test using Mocha and Chai for at least one function

*/
class Deck {
    constructor() {
        /* don't exactly understand this..
        assuming if I want to use any variable through all methods
        I must declare them here, no arguments in the constructor because
        I do not need to pass any along
        */
        this.cards = [];
        this.player1Cards = [];
        this.player2Cards = [];
    }

    shuffle() {
        let x = 1;

        //load the deck with cards
        //jack(11), queen(12), king(13), ace(14)
        //2 through 14, 4x (aces, hearts, spades, clubs)
        while (x < 5) {

            for (let i = 2; i < 15; i++) {

                this.cards.push(i);

                //testing
                //.log(this.cards.length);

            }//end for loop

            x++;//increment the while loop

        }//end while loop

        //check for 52 cards
        console.log(`line 47, size of cards array ${this.cards.length}`);
        console.log(this.cards);//what cards look like before shuffle
        let randomPosition = 0;
        let movedCard = 0;
        for (let i = 0; i < 100; i++)//100, should be a good shuffle!
        {
            //https://www.w3schools.com/jsref/jsref_shift.asp
            //remove a card, this removes first one in array
            movedCard = this.cards.shift();

            //https://www.w3schools.com/js/js_random.asp
            //returns a random # between 1 and 52
            //randomly place it in deck
            randomPosition = Math.floor(Math.random() * 52) + 1;

            //array.splice(index, howmany, item1,item2...
            //index: at position, howmany to remove, items to add
            // at random position, insert card
            this.cards.splice(randomPosition, 0, movedCard);

        } // end for loop (shuffle)

        console.log(this.cards);//after shuffle
        //cannot get unit test to work for the shuffle function, error is :
        //TypeError: this.shuffle is not a function@http://127.0.0.1:5500/week_6_assignment/gameCode_test.js:10:26

        /** think I found the problem, in gameCode_test.js must call the function as the code would here; game1.shuffle */

        //do I need a return, is that why unit tests fails?
        console.log(`length of cards array is: ${this.cards.length}`);//length is 52 here, but 104 in unit test; gameCode_test.js
        return (this.cards);

    } //end shuffle method    

    deal() {
        for (let i = 0; i < 52; i++) {
            //testing
            //console.log(`i = ${i}`);
            //console.log(`card value is ${this.cards[i]}`);
            if (i % 2 == 0) {
                //deal to player 1, 0/2 = 0
                this.player1Cards.push(this.cards[i]);
                //console.log(player1Cards.length); //testing

                //deal to player 2, 1/2 = a remainder
            } else if (i % 2 != 0) {
                this.player2Cards.push(this.cards[i]);
                //console.log(player2Cards.length); //testing

            }//end if statement

            //testing
            //console.log(player1Cards.length, player2Cards.length);

        }//end for loop

        //console.log(player1Cards, player2Cards);
        //console.log(player1Cards.length, player2Cards.length);
        // return (player1Cards, player2Cards);
    }//end deal method

    play() {
        console.log(this.player1Cards, this.player2Cards);
        //26 hands, most points win,game can end in a tie
        let player1Points = 0;
        let player2Points = 0;
        let tieCount = 0;
        let gameResult = '';
        for (let a = 0; a < 26; a++) {
            if (this.player1Cards[a] > this.player2Cards[a]) {
                player1Points++;
            } else if (this.player1Cards[a] < this.player2Cards[a]) {
                player2Points++;
            } else //had to have been a tie
            {
                tieCount++;
            }//end for loop
        }
        //determine winner
        if (player1Points > player2Points) {
            //player 1 wins
            gameResult = "Player 1 Wins!";
            //console.log("Player 1 Wins!")
        } else if (player2Points > player1Points) {
            //player 2 wins
            gameResult = "Player 2 Wins!";
            //console.log ("Player 2 Wins!")
        } else {//points must've been equal
            gameResult = ("Game ends in a Tie!")
            //console.log("Game ends in a Tie!")
        }

        //game stats
        console.log(`
            **${gameResult}**
            player 1: ${player1Points} points
            player 2: ${player2Points} points
            # of ties: ${tieCount}`);

        // alert(gameResult);

        //dump the deck?
        this.cards = [];

        /*****
        could not get unit test to work without doing this, prior to writing the test, the js file had no issues running, 
        console log checks looked good, counts were right, added line 149 and boom, unit test started working.
        ******/

    }//end play method
}//end Deck class

//instatiate a new deck
let game1 = new Deck;
game1.shuffle();
game1.deal();
game1.play();
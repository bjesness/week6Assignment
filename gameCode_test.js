//following along week 6 vide: units tests

var expect = chai.expect;

//write unit test
//'MyFunctions' is the name of the unit tests we are setting up, can be anything you want, next arguement, must be function()
describe('MyFunctions', function () {
    describe('#shuffle', function () {                   //#shuffle - testing our shuffle function
        it('confirm 52 cards in the deck', function () {    //calling the 'it' function, it should do...
            let x = game1.shuffle(); //shuffle accepts no arguments
            // console.log('x.length is equal to ${x.length}');//counts 104 here, but 52 in gameCode.js / index.html file, hmmmmm
            expect(x.length).to.equal(52);

            //dump the deck again?  was or am having troubles getting this file to run and count the array correctly
            game1.cards = [];
        });

        //another test case
        it('again confirm 52 cards in the deck', function () {
            let x = game1.shuffle();
            expect(x.length).to.equal(52);
        });
    });
});


/*******  getting an error, this test case is failing, in the index.html file, array is 52 cards long, in tests.html file, it is 104, ???/ */
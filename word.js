//+++++this should be a constructor file that should contain all of the methods which will check the letters guessed versus the random word selected

//requiring the "letter.js" file
var letter = require('./letter.js');

var testWord = 'pizza'; 

var lets = [];

var Word = function(wrd){
	this.word = wrd, 
	this.lets = lets, 
	this.found = false, 

	//loop over the word property and push letter objects into the lets property
	this.getLets = function(){
		for(var i = 0; i < wrd.length; i++){
			//console.log(wrd[i]);
			lets.push(wrd[i]);
		}
	}, 

	//returns true or false whether we found the current word or not
	this.didWeFindTheWord = function(){
		var count = 0; 
		for(var i = 0; i < testWord.length; i++){
			//console.log(testWord[i]);
			if(testWord[i] == lets[i]){
				console.log("SAME LETTER!"); 
			}else{
				console.log("NOT THE SAME!");
			}
		}
	}
}

var test = new Word('donut'); 

test.getLets();
test.didWeFindTheWord();

//+++++CONSOLE TESTS
	// console.log(lets);
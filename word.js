//+++++this should be a constructor file that should contain all of the methods which will check the letters guessed versus the random word selected

//requiring the "letter.js" file
var letter = require('./letter.js');

var Word = function(wrd){
	this.word = wrd, 
	this.lets = [], 
	this.found = false, 
	this.getLets = function(){
		for(var i = 0; i < wrd.length; i++){
			console.log(wrd[i]);
		}
	}
}

var test = new Word('donut'); 

test.getLets();
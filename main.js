//requires the wordBank constructor from game.js
var game = require('./game.js');

//requires the inquirer npm package 
var inquirer = require('inquirer');


inquirer.prompt([{
	name: 'letter', 
	type: 'text', 
	message:'Enter a letter: ', 
	validate: function(str){
  	var regEx = new regExp("[a-zA-Z]");
  		return regEx.test(str);
  		//return /[a-z]{1}/i.test(str);
  }
 }]).then(function(answers){
	var letter = answers.letter;
	//need to do validation here
}); 


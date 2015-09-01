var prompt = require('prompt-sync').prompt;

console.log("Hi there. What is your name?");

var name = prompt();
var answerCorrect = 0;

console.log("What's up " + name + " let's get started. Here is your first question")

console.log("What is the display property of a div? Inline-bock, block, or inline?");

var answer1 = prompt();

if (answer1.toUpperCase() === "BLOCK") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
} 

console.log("Question 2: Which HTML tag is not valid? <form>, <home>, <section>, <h1>. MAKE SURE TO INCLUDE ALIGATORS.");

var answer2 = prompt();

if (answer2.toUpperCase() === "<HOME>") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
} 

console.log("Question 3: HTML is short for ? Holistic Technical Method Library, Hyper Tax Makes Liars, Hyper Text Markup Language.");

var answer3 = prompt();

if (answer3.toUpperCase() === "HYPER TEXT MARKUP LANGUAGE") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 4: What is a field that allow the visitor to enter information called? Form fields, Meta fields, Meta tags.")

var answer4 = prompt();

if (answer4.toUpperCase() === "FORM FIELDS") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 5: <a> and </a> are the tags used for? Aligning text, Audio-voiced text, Adding links to your page.");

var answer5 = prompt();

if (answer5.toUpperCase() === "ADDING LINKS TO YOUR PAGE") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 6: What property do you use to create spacing between HTML elements? Margin, Border, Spacing");

var answer6 = prompt();

if (answer6.toUpperCase() === "MARGIN") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 7: What is the property used to set the class's text color? Text:color, Color, Font-color.")

var answer7 = prompt();

if (answer7.toUpperCase() === "COLOR") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 8: What property do you use to set the background color of an image? Color, Color:background, Background-color.")

var answer8 = prompt();

if (answer8.toUpperCase() === "BACKGROUND-COLOR") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 9: How would you style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element? Display:inline; Display:left; Display:block;");

var answer9 = prompt();

if (answer9.toUpperCase() === "DISPLAY:INLINE;") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 10: Which is a valid position property? Fixed, Array, Upper")

var answer10 = prompt();

if (answer10.toUpperCase() === "FIXED") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 11: In the following expression what does the variable guess evaluate to? var guess = 27; guess++; Is this 28, 26, 27");

var answer11 = prompt();

if (answer11.toUpperCase() === "27") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 12: Which is not a valid data type? String, Boolean, NaN, Byte")

var answer12 = prompt();

if (answer12.toUpperCase() === "BYTE") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 13: What is the value of the following expression: True || False && True");

var answer13 = prompt();

if (answer13.toUpperCase() === "FALSE") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 14: What is the command you run in terminal to run JavaScript?");

var answer14 = prompt();

if (answer14.toUpperCase() === "NODE") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("Question 15: What is the boolean value of 0? True or False?");

var answer15 = prompt();

if (answer15.toUpperCase() === "FALSE") {
	answerCorrect = answerCorrect + 1;
	console.log("You got it!");
} else {
	console.log("Wrong!...sorry");
}

console.log("All finished! You got " + answerCorrect + " out of 15.")
// var DrinkQuestion = function(questions) {
//   this.questions = questions
// }
//
// var strongDrink = new DrinkQuestion('Do ye like yer drinks strong?');
// var saltyDrink = new DrinkQuestion('Do ye like it with a salty tang?');
// var bitterDrink = new DrinkQuestion('Are ye a lubber who likes it bitter?');
// var sweetDrink = new DrinkQuestion('Would ye like a bit of sweetness with yer poison?');
// var fruityDrink = new DrinkQuestion('Are ye one for a fruity finish?');

var questions = [
  'Do ye like yer drinks strong?',
  'Do ye like it with a salty tang?',
  'Are ye a lubber who likes it bitter?',
  'Would ye like a bit of sweetness with yer poison?',
  'Are ye one for a fruity finish?'
]

var Drink = function(ingredients) {
  this.strong = ingredients.strong;
  this.salty = ingredients.salty;
  this.bitter = ingredients.bitter;
  this.sweet = ingredients.sweet;
  this.fruity = ingredients.fruity;
};

var ingredients = {
  strong: [{'Glug of rum': 20}, {'Slug of whiskey': 20}, {'Splash of Gin': 25}],
  salty: [{'Olive on a stick': 20}, {'Salted-dusted rim': 20}, {'Rasher of bacon': 25}],
  bitter: [{'Shake of bitters': 20}, {'Splash of tonic': 20}, {'Twist of lemon peel': 25}],
  sweet: [{'Sugar cube': 20}, {'Spoonful of honey': 20}, {'Splash of cola': 25}],
  fruity: [{'Slice of orange': 20}, {'Dash of cassis': 20}, {'Cherry on top': 25}],
}

//Randomly selects the ingredients based on user's choice and will deduct one from the pantry
var randomNumber = function() {
    var newNumber = Math.floor((Math.random() * 3) + 0);
    return newNumber
};

$(document).ready(function() {
  //Drink question
  var bartenderQuestions;
  for (var i=0; i < questions.length; i++) {
    bartenderQuestions+= '<p>' + questions[i] + '<br> Ahoy! <input' + i + ' value="true" type=radio><br> Blegh! <input' + i + ' value="false"><p>';
  }

  $('#drinkQuestions').append("<div>" + bartenderQuestions + "</div>");

  $('#bartender').submit(function(event) {
    event.preventDefault();
    var userDrinkChoice = $('form').serializeArray();
    console.log(userDrinkChoice);

    //constructs drink based on user input
    var yerDrink = new Drink({
        strong: (currentUserChoice[0].value === "true") ? ingredients.strong[randomNumber()] : false,
        salty: (currentUserChoice[0].value === "true") ? ingredients.salty[randomNumber()] : false,
        bitter: (currentUserChoice[0].value === "true") ? ingredients.bitter[randomNumber()] : false,
        sweet: (currentUserChoice[0].value === "true") ? ingredients.sweet[randomNumber()] : false,
        fruity: (currentUserChoice[0].value === "true") ? ingredients.fruity[randomNumber()] : false,
    });
  })
})

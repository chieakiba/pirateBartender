var DrinkQuestion = function(questions) {
  this.questions = questions
}

var strongDrink = new DrinkQuestion('Do ye like yer drinks strong?');
var saltyDrink = new DrinkQuestion('Do ye like it with a salty tang?');
var bitterDrink = new DrinkQuestion('Are ye a lubber who likes it bitter?');
var sweetDrink = new DrinkQuestion('Would ye like a bit of sweetness with yer poison?');
var fruityDrink = new DrinkQuestion('Are ye one for a fruity finish?');

var DrinkIngredients = function(ingredients) {
  this.ingredients = ingredients
}

var strongIngredients = new DrinkIngredients(['glug of rum', 'slug of whisky', 'splash of gin']);
var saltyIngredients = new DrinkIngredients(['olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
var bitterIngredients = new DrinkIngredients(['shake of bitters', 'splash of tonic', 'twist of lemon peel']);
var sweetIngredients = new DrinkIngredients([{'sugar cube': 5}, {'spoonful of honey': 13}, 'splash of cola']);
var fruityIngredients = new DrinkIngredients(['slice of orange', 'dash of cassis', 'cherry on top']);

var Pantry = function(ingredients) {
  
}

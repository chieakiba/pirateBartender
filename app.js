//Global variables
var questions = [
  'Do ye like yer drinks strong?',
  'Do ye like it with a salty tang?',
  'Are ye a lubber who likes it bitter?',
  'Would ye like a bit of sweetness with yer poison?',
  'Are ye one for a fruity finish?'
]

var ingredients = {
  strong: ['Glug of rum', 'Slug of whiskey', 'Splash of Gin'],
  salty: ['Olive on a stick', 'Salted-dusted rim', 'Rasher of bacon'],
  bitter: ['Shake of bitters', 'Splash of tonic', 'Twist of lemon peel'],
  sweet: ['Sugar cube', 'Spoonful of honey', 'Splash of cola'],
  fruity: ['Slice of orange', 'Dash of cassis', 'Cherry on top'],
}

var Drink = function(ingredients) {
  this.strong = ingredients.strong;
  this.salty = ingredients.salty;
  this.bitter = ingredients.bitter;
  this.sweet = ingredients.sweet;
  this.fruity = ingredients.fruity;
};

var serveDrink = '<h2>Here ye go!</h2><h4 id="order"></h4>';

$(document).ready(function() {
  //Randomly selects the ingredients based on user's choice and will deduct one from the pantry
  var randomNumber = function() {
      var newNumber = Math.floor((Math.random() * 3) + 0);
      return newNumber
  };

  //Drink question
  var bartenderQuestions = "";
  for (var i=0; i < questions.length; i++) {
    bartenderQuestions+= '<p>' + questions[i] + '<br> Ahoy! <input name="question" value="true" type="checkbox"' + i + '><br> Blegh! <input name="question" type="checkbox" value="false"' + i + '></p>';
  }

  $('#drinkQuestions').append(bartenderQuestions);

  $('#bartender').submit(function(event) {
    event.preventDefault();
    var userDrinkChoice = $('form').serializeArray();
    console.log('userDrinkChoice', userDrinkChoice);

    //Constructs drink based on user input
    var yerDrink = new Drink({
        strong: userDrinkChoice[0].value === "true" ? ingredients.strong[randomNumber()] : undefined,
        salty: userDrinkChoice[1].value === "true" ? ingredients.salty[randomNumber()] : undefined,
        bitter: userDrinkChoice[2].value === "true" ? ingredients.bitter[randomNumber()] : undefined,
        sweet: userDrinkChoice[3].value === "true" ? ingredients.sweet[randomNumber()] : undefined,
        fruity: userDrinkChoice[4].value === "true" ? ingredients.fruity[randomNumber()] : undefined,
    });
    console.log('yerDrink', yerDrink);
    var whatsInYourDrink = Object.values(yerDrink);
    var drinkString = whatsInYourDrink.join(', ').trim().replace(/,{1,}$/, '');

    //Prints customized drink and its ingredients
    $('#drinkOrder').append(serveDrink);
    $('#order').text(drinkString);
  })
})

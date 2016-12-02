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
    bartenderQuestions+= '<p>' + questions[i] + '<br> Ahoy! <input name="yes" type="checkbox" ' + i + 'value="true"><br> Blegh! <input name="no" type="checkbox"' + i + ' value="false"></p>';
  }

  $('#drinkQuestions').append(bartenderQuestions);

  $('#bartender').submit(function(event) {
    event.preventDefault();
    var userDrinkChoice = $('form').serializeArray();
    console.log('userDrinkChoice', userDrinkChoice);

    //Constructs drink based on user input
    var yerDrink = new Drink({
        strong: userDrinkChoice[0].value ? ingredients.strong[randomNumber()] : userDrinkChoice[1].value,
        salty: userDrinkChoice[0].value ? ingredients.salty[randomNumber()] : userDrinkChoice[1].value,
        bitter: userDrinkChoice[0].value ? ingredients.bitter[randomNumber()] : userDrinkChoice[1].value,
        sweet: userDrinkChoice[0].value ? ingredients.sweet[randomNumber()] : userDrinkChoice[1].value,
        fruity: userDrinkChoice[0].value ? ingredients.fruity[randomNumber()] : userDrinkChoice[1].value,
    });
    var whatsInYourDrink = Object.values(yerDrink);
    var drinkString = whatsInYourDrink.join(', ');

    //Prints customized drink and its ingredients
    $('#drinkOrder').append(serveDrink);
    $('#order').text(drinkString);
  })
})

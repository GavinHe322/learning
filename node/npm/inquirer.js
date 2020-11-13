var inquirer = require('inquirer')

const questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate: function (value) {
      var pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'checkbox',
    message: 'Select toppings',
    name: 'toppings',
    choices: [
      new inquirer.Separator(' = The Meats = '),
      {
        name: 'Pepperoni',
      },
      {
        name: 'Ham',
      },
      {
        name: 'Ground Meat',
      },
      {
        name: 'Bacon',
      },
      new inquirer.Separator(' = The Cheeses = '),
      {
        name: 'Mozzarella',
        checked: true,
      },
      {
        name: 'Cheddar',
      },
      {
        name: 'Parmesan',
      },
      new inquirer.Separator(' = The usual ='),
      {
        name: 'Mushroom',
      },
      {
        name: 'Tomato',
      },
      new inquirer.Separator(' = The extras = '),
      {
        name: 'Pineapple',
      },
      {
        name: 'Olives',
        disabled: 'out of stock',
      },
      {
        name: 'Extra cheese',
      },
    ],
    validate: function (answer) {
      if (answer.length < 1) {
        return 'You must choose at least one topping.';
      }

      return true;
    },
  }
]

inquirer.prompt(questions).then((answer) => {
  console.log(JSON.stringify(answer, null, 2))
})

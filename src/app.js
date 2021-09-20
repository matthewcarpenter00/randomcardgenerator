/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // call a function that will do the work
  //   myfunction();
  // };

  // function myfunction() {
  // create a function to generate random number
  // create a function to generate random shape
  // create a function to produce card with top two functions
  // shape on bottom is upside down

  //shapess ♦ ♥ ♠ ♣

  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suits = ["&diams;", "&hearts;", "&spades;", "&clubs;"];

  // random generators
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let randomSuit = Math.floor(Math.random() * suits.length);

  // connect the numbers and suits with the generators
  let suit = suits[randomSuit];
  let number = numbers[randomNumber];

  // if statement if the random suit is heart or diamond  change the color to red
  // use style.css.

  if (suit == "&hearts;" || suit == "&diams;") {
    document.querySelector(".card").style.color = "red";
  } else {
    document.querySelector(".card").style.color = "black";
  }

  // show the results in the html
  document.querySelector(".top-shape").innerHTML = suit;
  document.querySelector(".card-number").innerHTML = number;
  document.querySelector(".bottom-shape").innerHTML = suit;
};

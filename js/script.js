// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 05/04/2023
// This file contains the JS functions for index.html

"use strict";

function IntegersGiven() {
  
  // Initializing variable for product as zero
  let product = 0;

  // Getting the two numbers from the user that will be used to calculate the product
  let firstNum = parseInt(document.getElementById("first-number").value);
  let secondNum = parseInt(document.getElementById("second-number").value);

  // Removing any negative signs from numbers in order to be able to calculate using repeated addition
  let absoluteFirstNum = Math.abs(firstNum);
  let absoluteSecondNum = Math.abs(secondNum);

  // If the user does not enter their min and max, display that they must enter both numbers
  if ((isNaN(firstNum)) || (isNaN(secondNum))) {
    document.getElementById("results").innerHTML = "Please enter integers in both text fields.";
  }

  // Otherwise, continue the function to calculate the product
  else {
    // For loop to do repeated addition to find the product
    for (let counter = 0; counter < absoluteSecondNum; counter++) {
      product = product + absoluteFirstNum;
    }
  
    // If statements: Reapplying the negative sign if either the first or second number is negative
    if (firstNum < 0) {
      product = product * -1;
    }
  
    if (secondNum < 0) {
      product = product * -1;
    }

    //displaying the sum/product to the screen
    document.getElementById("results").innerHTML = "The product of your selected two numbers is " + product + ".";
  }
}
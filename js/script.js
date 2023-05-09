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

  
  let absoluteFirstNum = Math.abs(firstNum);
  let absoluteSecondNum = Math.abs(secondNum);

  //for loop to do repeated addition to find the product
  for (let counter = 1; counter <= absoluteSecondNum; counter++) {
    product = product + absoluteFirstNum;
  }

  if (firstNum < 0) {
    product = product * -1;
  }

  if (secondNum < 0) {
    product = product * -1;
  }

  //displaying the sum/product to the screen
  document.getElementById("results").innerHTML = "The product of your selected two numbers is " + product + ".";
}
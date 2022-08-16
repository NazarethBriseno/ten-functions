"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// function #1
function isTrue(input){
    return input === true;
}

//function #2
function isFalse(input) {
    return input === false;
}

//function #3
function not(input){
    return !input;
}

//function #4
function addOne(input) {
    if (input === Infinity) {
        return Infinity;
    } else {
        return parseInt(input) + 1;
    }
}

//function #5
function isEven(input) {
    if (input === false) {
        return false;
    } else {
        return input % 2 === 0;
    }
}

//function #6
function isIdentical(input, input2){
    if (input === input2) {
        return true;
    } else {
        return false;
    }
}

//function #7
function isEqual(input1, input2){
    if (input1 == input2){
        return true;
    } else {
        return false;
    }
}

//function #8
function or(input1, input2){
    return input1 || input2;
}

//function #9
function and(input1, input2){
    return input1 && input2;
}

//function #10
function concat(input1, input2) {
    return input1.toString() + input2.toString();
}

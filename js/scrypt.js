"use strict"

const firstNumber = document.querySelector(".triple__input_1");
const secondNumber = document.querySelector(".triple__input_2");
const thirdNumber = document.querySelector(".triple__input_3");
const buttonCheck = document.querySelector(".triple__button");
const resultText = document.querySelector(".triple__result");

buttonCheck.addEventListener("click", function (e) {
    var triple = [firstNumber.value, secondNumber.value, thirdNumber.value];
    triple.sort(function (a, b) {
        return a - b;
    })
    var first = triple[0];
    var second = triple[1];
    var third = triple[2];
    if (third * third == first * first + second * second) {
        resultText.innerHTML = "Числа являются тройкой Пифагора"
    } else {
        resultText.innerHTML = "Числа не являются тройкой Пифагора"
    }
});

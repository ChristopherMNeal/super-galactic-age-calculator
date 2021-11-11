import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Demographic } from '../src/js/longevity-calculator';
import { calculator } from '../src/js/age-calculator';

function longevityInput() {
  const genetics = (document.querySelectorAll('input[name="genetics:]:checked')).length;
  const lifestylePos = (document.querySelectorAll('input[name="lifestyle-pos:]:checked')).length;
  const lifestyleNeg = (document.querySelectorAll('input[name="lifestyle-neg:]:checked')).length;
  const userDemographic = new Demographic (genetics, lifestylePos, lifestyleNeg);
  return userDemographic;
}

function remainingYears() {
  const userDemographic = longevityInput();
  const lifeExpectancy = userDemographic.longevityAdjuster();
  const age = $("#user-age").val();
  const planet = $("input:radio[name=planet]:checked").val();
  let yearsLeft = lifeExpectancy - age;
  if (age > lifeExpectancy) {
    yearsLeft *= -1;
    return `Congrats! You've made it ${yearsLeft} ${planet}-years past your life expectancy on ${planet}!`;
  } else {
    return `You have ${yearsLeft} ${planet}-years to live on ${planet}.`;
  }
}

$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    event.preventDefault();
    const name = $("#user-name").val();
    const age = $("#user-age").val();
    const planet = $("input:radio[name=planet]:checked").val();

    const ageOnPlanet = calculator(age, planet);
    const yearsLeft = remainingYears();

    $("#results").text(`Here are your results, ${name}, your age in ${planet} years is ${ageOnPlanet}. ${yearsLeft}`);
  });
});
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Demographic } from '../src/js/longevity-calculator';
import { calculator } from '../src/js/age-calculator';

function longevityInput() {
  const genetics = (document.querySelectorAll('input[name="genetics"]:checked')).length;
  const lifestylePos = (document.querySelectorAll('input[name="lifestyle-pos"]:checked')).length;
  const lifestyleNeg = (document.querySelectorAll('input[name="lifestyle-neg"]:checked')).length;
  const userDemographic = new Demographic (genetics, lifestylePos, lifestyleNeg);
  return userDemographic;
}

function remainingYears() {
  const userDemographic = longevityInput();
  const lifeExpectancy = userDemographic.longevityAdjuster();
  const age = $("#user-age").val();
  const planet = $("input:radio[name=planet]:checked").val();
  let yearsLeft = lifeExpectancy - age;
  let planetYearsLeft = calculator(yearsLeft, planet);
  if (age > lifeExpectancy) {
    yearsLeft *= -1;
    return `Congrats! You've made it ${planetYearsLeft} ${planet} years past your life expectancy!`;
  } else {
    return `You have ${planetYearsLeft} ${planet} years to live.`;
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
    if (age > 120) {
      $(".alerts").hide();
      $("#too-old").show();
    } else if (age < 0) {
      $(".alerts").hide();
      $("#too-young").show();
    } else if (!name || !age || !planet) {
      $(".alerts").hide();
      $("#no-input").show();
    } else {
      $(".alerts").hide();
      $("#results").html("Here are your results, " + name + "<br>Your age in " + planet + " years is " + ageOnPlanet + ". <br>" + yearsLeft);
    }
  });
});
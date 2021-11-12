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
  const convertedAge = animalYears(age);
  const convertedLifeExpectancy = animalYears(lifeExpectancy);
  const planet = $("input:radio[name=planet]:checked").val();
  const animalPlanet = getAnimalPlanet();
  let yearsLeft = convertedLifeExpectancy - convertedAge;
  let planetYearsLeft = calculator(yearsLeft, planet);
  if (convertedAge > convertedLifeExpectancy) {
    yearsLeft *= -1;
    return `Congrats! You've made it ${planetYearsLeft} ${animalPlanet} past your life expectancy!`;
  } else {
    return `You have ${planetYearsLeft} ${animalPlanet} to live.`;
  }
}

function animalYears(age) {
  if ($("input:radio[name=animal-years]:checked").val() === "dog-years") {
    return age *= 8;
  } else if ($("input:radio[name=animal-years]:checked").val() === "mayfly-lifetimes") {
    return age *= 105120;
  } else {
    return age;
  }
}

function getAnimalPlanet() {
  const planet = $("input:radio[name=planet]:checked").val();
  if ($("input:radio[name=animal-years]:checked").val() === "dog-years") {
    return planet + " dog years";
  } else if ($("input:radio[name=animal-years]:checked").val() === "mayfly-lifetimes") {
    return planet + " mayfly lifetimes";
  } else {
    return planet + " years";
  }
}

function getSunComparison(age, animalPlanet) {
  const ageComparison = age/4603000000;
  if ($("input:radio[name=animal-years]:checked").val() === "mayfly-lifetimes") {
    return `By comparison, the sun is 4.6 billion years old... That's ${ageComparison} times in Earth years than you are in ${animalPlanet}.`;
  } else {
    return "";
  }
}

$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    event.preventDefault();
    const name = $("#user-name").val();
    const age = $("#user-age").val();
    const animalAge = animalYears(age);
    const planet = $("input:radio[name=planet]:checked").val();
    const ageOnPlanet = calculator(animalAge, planet);
    const animalPlanet = getAnimalPlanet();
    const sunComparison = getSunComparison(ageOnPlanet, animalPlanet);
    const yearsLeft = remainingYears();
    $(".alerts").hide();
    $("#results").hide();
    if (age > 120) {
      $("#too-old").show();
    } else if (age < 0) {
      $("#too-young").show();
    } else if (!name || !age || !planet) {
      $("#no-input").show();
    } else {
      $("#results").show();
      $("#results").html("Here are your results, " + name + "<br>Your age in " + animalPlanet + " is " + ageOnPlanet + ". <br>" + sunComparison + yearsLeft);
    }
  });
});
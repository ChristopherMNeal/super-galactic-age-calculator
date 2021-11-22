import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Demographic } from '../src/js/longevity-calculator';
import { calculator, animalConverter } from '../src/js/age-calculator';

function longevityInput() {
  const genetics = (document.querySelectorAll('input[name="genetics"]:checked')).length;
  const lifestylePos = (document.querySelectorAll('input[name="lifestyle-pos"]:checked')).length;
  const lifestyleNeg = (document.querySelectorAll('input[name="lifestyle-neg"]:checked')).length;
  const userDemographic = new Demographic (genetics, lifestylePos, lifestyleNeg);
  return userDemographic;
}

function remainingYears() {
  const userDemographic = longevityInput();
  const animal = $("input:radio[name=animal-years]:checked").val();
  let age = $("#user-age").val();
  let lifeExpectancy = userDemographic.longevityAdjuster();
  const planet = $("input:radio[name=planet]:checked").val();
  let yearsLeft = lifeExpectancy - age;
  yearsLeft = animalConverter(yearsLeft, animal);
  let planetYearsLeft = calculator(yearsLeft, planet, animal);
  // move this calculation to business logic and the formatting to a separate UI function
  const animalPlanet= getAnimalPlanet(animal, planet);
  if (age > lifeExpectancy) {
    planetYearsLeft *= -1;
    return `Congrats! You've made it ${planetYearsLeft} ${animalPlanet} past your life expectancy!`;
  } else {
    return `You have ${planetYearsLeft} ${animalPlanet} left to live.`;
  }
}

// I left jquery selectors in, in case it's not practial to querey the dom...?
function getAnimalPlanet(animal, planet) {
  const planet = $("input:radio[name=planet]:checked").val();
  // if ($("input:radio[name=animal-years]:checked").val() === "dog-years") {
  if (animal === "dog-years") {
    return planet + " dog years";
// } else if ($("input:radio[name=animal-years]:checked").val() === "mayfly-lifetimes") {
  } else if (animal === "mayfly-lifetimes") {
    return planet + " mayfly lifetimes";
  } else {
    return planet + " years";
  }
}

// add sunComparison to age-calculator
function getSunComparison(age, animalPlanet) {
  const ageComparison = parseInt(4603000000/age);
  if ($("input:radio[name=animal-years]:checked").val() === "mayfly-lifetimes") {
    return `By comparison, the sun is 4.6 billion years old... That's ${ageComparison} times older (in Earth years) than you are (in ${animalPlanet}).<br>`;
  } else {
    return "";
  }
}

$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    event.preventDefault();
    const name = $("#user-name").val();
    const age = $("#user-age").val();
    const animal = $("input:radio[name=animal-years]:checked").val();
    const planet = $("input:radio[name=planet]:checked").val();
    const convertedAge = animalConverter(age, animal);
    const ageOnPlanet = calculator(convertedAge, planet);
    const animalPlanet = getAnimalPlanet(animal, planet);
    const sunComparison = getSunComparison(ageOnPlanet, animalPlanet);
    const yearsLeft = remainingYears();
    $(".alerts").hide();
    $("#results").hide();
    if (age > 120) {
      $("#too-old").show();
    } else if (age < 0) {
      $("#too-young").show();
    // could this be more DRY?
    } else if (!name) {
      $("#no-input").show();
      $("#user-name").addClass("highlight");
    } else if (!age) {
      $("#no-input").show();
      $("#user-age").addClass("highlight");
    } else if (!planet) {
      $("#no-input").show();
      $("#planet-select").addClass("highlight");
    } else {
      $("#results").show();
      // Put more of this into the HTML to make it easier to decode
      $("#results").html("Here are your results, " + name + "<br>Your age in " + animalPlanet + " is " + ageOnPlanet + ". <br>" + sunComparison + yearsLeft);
    }
  });
});
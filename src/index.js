import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Demographic } from '../src/js/longevity-calculator';
import { calculator, animalConverter, remainingYears, getSunComparison } from '../src/js/age-calculator';

function longevityInput() {
  const genetics = (document.querySelectorAll('input[name="genetics"]:checked')).length;
  const lifestylePos = (document.querySelectorAll('input[name="lifestyle-pos"]:checked')).length;
  const lifestyleNeg = (document.querySelectorAll('input[name="lifestyle-neg"]:checked')).length;
  const userDemographic = new Demographic (genetics, lifestylePos, lifestyleNeg);
  return userDemographic.longevityAdjuster();
}

function getAnimalPlanet(animal, planet) {
  if (animal === "dog-years") {
    return planet + " dog years";
  } else if (animal === "mayfly-lifetimes") {
    return planet + " mayfly lifetimes";
  } else {
    return planet + " years";
  }
}


$("form#user-info").submit(function(event) {
  event.preventDefault();
  const name = $("#user-name").val();
  const age = $("#user-age").val();
  const animal = $("input:radio[name=animal-years]:checked").val();
  console.log(animal);
  const planet = $("input:radio[name=planet]:checked").val();
  const convertedAge = animalConverter(age, animal);
  const ageOnPlanet = calculator(convertedAge, planet);
  const animalPlanet = getAnimalPlanet(animal, planet);
  const lifeExpectancy = longevityInput();
  const convertedLifeExpectancy = animalConverter(lifeExpectancy);
  const planetLifeExpectancy = calculator(convertedLifeExpectancy);
  const yearsLeft = remainingYears(animal, age, lifeExpectancy);
  const planetYearsLeft = calculator(yearsLeft, planet);
  if (animal === "mayfly-lifetimes") {
    const sunComparison = getSunComparison(ageOnPlanet);
    $(".sun-comparison-span").text(sunComparison);
    $("#sun-comparison").show();
  }
  if (planetYearsLeft > planetLifeExpectancy) {
    $("#under-expectancy").hide();
  } else {
    $("#over-expectancy").hide();
  }
  $(".alerts").hide();
  $("#results").hide();
  if (age > 120) {
    $("#too-old").show();
  } else if (age < 0) {
    $("#too-young").show();
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
    $(".name-span").text(name);
    $(".animal-planet-span").text(animalPlanet);
    $(".age-on-planet-span").text(ageOnPlanet);
    $(".planet-years-left-span").text(planetYearsLeft);
  }
});
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Demographic } from '../src/js/longevity-calculator';
import { calculator, remainingYears, getSunComparison } from '../src/js/age-calculator';

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
  const age = parseInt($("#user-age").val());
  const animal = $("input:radio[name=animal-years]:checked").val();
  const planet = $("input:radio[name=planet]:checked").val();
  const ageOnPlanet = calculator(age, planet, animal);
  console.log(ageOnPlanet);
  const animalPlanet = getAnimalPlanet(animal, planet);
  const lifeExpectancy = calculator(longevityInput(), planet, animal);
  console.log(lifeExpectancy);
  const yearsLeft = remainingYears(ageOnPlanet, lifeExpectancy);
  console.log(yearsLeft);
  if (animal === "mayfly-lifetimes") {
    const sunComparison = getSunComparison(ageOnPlanet);
    $(".sun-comparison-span").text(sunComparison);
    $("#sun-comparison").show();
  } else {
    $("#sun-comparison").hide();
  }
  if (yearsLeft > lifeExpectancy) {
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
    $(".planet-years-left-span").text(yearsLeft);
  }
});
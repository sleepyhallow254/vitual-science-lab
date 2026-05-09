// app.js

let score = 0;

// SHOW PAGE

function showSection(sectionId){

  let pages =
  document.querySelectorAll(".page");

  pages.forEach(function(page){

    page.classList.remove("active");

  });

  document
  .getElementById(sectionId)
  .classList.add("active");

}

// CHEMISTRY

function mixChemicals(){

  document
  .getElementById("chemistry-result")
  .innerHTML =
  "HCl + NaOH → NaCl + H₂O";

  addScore(10);

}

// BIOLOGY

function observeCell(){

  document
  .getElementById("biology-result")
  .innerHTML =
  "Plant cell observed successfully.";

  addScore(10);

}

// PHYSICS

function calculateCurrent(){

  let voltage =
  document.getElementById("voltage").value;

  let resistance = 10;

  let current = voltage / resistance;

  document
  .getElementById("physics-result")
  .innerHTML =
  "Current = " + current + " Amps";

  addScore(10);

}

// SCORE SYSTEM

function addScore(points){

  score += points;

  alert("Score: " + score);

}

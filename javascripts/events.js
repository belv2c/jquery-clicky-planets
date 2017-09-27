"use strict";

const planets = require('./planets');

$('#showButton').mouseover(() => {
 // all the planets to show
 createDomString(planets.getPlanets());
});

const createDomString = (planetz) => {
	var planetString = '';
    for(var i=0; i<planetz.length; i++){
        var newPlanet = "";
        newPlanet+=`<div class="planetBox"  id="planetBox-${i}">`;
        newPlanet+=`<div class="planetName hidden">${planetz[i].name}</div>`;
        newPlanet+=`<img class="planetImage" src="${planetz[i].url}">`;
        newPlanet+= `</div>`;
        planetString += newPlanet;
    }
    printToDom(planetString);
};

const printToDom = (string) => {
	$('#planetHolder').html(string);
};

$('body').on('click', '.planetImage', (event) => {
	$(event.target).prev().removeClass("hidden");
});

$('#clearButton').click(() => {
	let imageInfo = planets.getImageData();
	$('#planetHolder').html(`<h2>${imageInfo.title}</h2>`);
	$('#planetHolder').append(`<p>${imageInfo.explanation}</p>`);
});


$('#searchText').keypress((event) => {
	if (event.key === 'Enter'){
		var txt = $('#searchText').val();
		var planetData = planets.getPlanets();
        var results = planetData.filter(function(thing){
            return thing.name.indexOf(txt)>-1;
	});
	  createDomString(results);
	  $('.planetName').removeClass("hidden");
  }
});

module.exports = {};
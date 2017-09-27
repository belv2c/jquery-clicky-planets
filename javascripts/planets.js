"use strict";


let planets = [];
let imageData = [];

$.get('../db/planets.json').done((data) => {
	planets = data.planets;
}).fail((error) => { 
	console.log(error);
});

$.ajax('https://api.nasa.gov/planetary/apod?api_key=cML4iFHlbQ0IUTnGJROHnsbAfZ3Dl6TMWimdwSNY').done((data)=>{
	$('body').css('background-image', `url(${data.url})`);
	imageData = data;
}).fail((error) => {
	console.log(error);
});

const getPlanets = () => {
	return planets;
};

const getImageData = () => {
	return imageData;
};

module.exports = {getPlanets, getImageData};
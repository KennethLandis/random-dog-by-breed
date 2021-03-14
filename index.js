'use strict'
const errorcode = 404;

function getDogBreed(dogBreed) {
    let getDogs = `https://dog.ceo/api/breed/${dogBreed}/images/random`
    fetch(getDogs)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
    console.log(responseJson);
    if (responseJson.message == "Breed not found (master breed does not exist)") {
        alert('Breed not found! Please try again!');
    } else {
    $('.results-img').attr("src", `${responseJson.message}`);
    $('.results').removeClass('hidden');
    };
};

function handleSubmitClicked() {
    $('form').submit(e => {
        e.preventDefault();
        let dogBreed = $('#dogs').val();
        dogBreed = dogBreed.toLowerCase();
        console.log(dogBreed);
        getDogBreed(dogBreed);
    });
};

$(function () {
    console.log('App Loaded!')
    handleSubmitClicked();
});
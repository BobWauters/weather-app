// Must-have features
//
//     In the home page the user can enter the city of his/her choice (think of the right HTML elements here)
//     On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days
//     The application must be responsive and mobile friendly
//
//
// Nice-to-have features (in no specific order)
//
//     Display a line graph of temperature over time using a library such as Chart.js
//     Remember the user choice on subsequent visits
//     Allow the user to compare the weather in two cities
//     Use the API of https://unsplash.com/ to show a photo of the city they entered in the form.

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


//API TRY 2
button.addEventListener('click', function (){
    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value +'&appid=4ce0604fe97650f47963ef28c9f566d5')
        .then (response => response.json())



       .then(data => {
            let nameValue = data[0] ;




            name.innerHTML= nameValue;




        })



        .catch(err => alert("An Error Occured"))


})


// API TRY 1
/*
let getForecast = fetch ('https://api.openweathermap.org/data/2.5/forecast?q={city ID}&APPID=4ce0604fe97650f47963ef28c9f566d5')

    .then (response => response.json())
    .then (data => console.log(data))

    .catch(err => alert("Wrong"))
console.log(getForecast)
*/


// Show user his city selection
function showInput(){
    document.getElementById('display').innerHTML= document.getElementById("user-input").value;
    return false;
}


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

let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
//let name = document.querySelector('#name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let firstDay = document.querySelector('#day-1');
let secondDay=document.querySelector('#day-2');
let thirdDay=document.querySelector('#day-3');
let fourthDay=document.querySelector('#day-4');
let fifthDay=document.querySelector('#day-5');




//API TRY 2
button.addEventListener('click', function (){
    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value +'&appid=4ce0604fe97650f47963ef28c9f566d5')
        .then (response => response.json())
        //.then (data => console.log(data))



       .then(data => {
            let descValue1 = data.list[0].weather[0].main;
            let tempValue1 = data.list[0].main.temp;
           let descValue2 = data.list[8].weather[0].main;
           let tempValue2 = data.list[8].main.temp;
           let descValue3 = data.list[16].weather[0].main;
           let tempValue3 = data.list[16].main.temp;
           let descValue4 = data.list[24].weather[0].main;
           let tempValue4 = data.list[24].main.temp;
           let descValue5 = data.list[32].weather[0].main;
           let tempValue5 = data.list[32].main.temp;


           // let nameValue= data.list[4].sys.pod.dt_txt;
          //  console.log (Math.round(data.list[2].main.temp - 273.15) + '&degC')
            //console.log(tempValue1);
            //console.log(descValue1);
           // console.log(nameValue)


            //name.innerHTML= nameValue;
           // desc.innerHTML= descValue;
            //temp.innerHTML= tempValue;
            firstDay.innerHTML='Day 1: '+ descValue1 + ' ' + tempValue1;
           secondDay.innerHTML='Day 2: '+ descValue2 + ' ' + tempValue2;
           thirdDay.innerHTML='Day 3: '+ descValue3 + ' ' + tempValue3;
           fourthDay.innerHTML='Day 4: '+ descValue4 + ' ' + tempValue4;
           fifthDay.innerHTML='Day 5: '+ descValue5 + ' ' + tempValue5;

        })




        .catch(err => {console.log(err)});
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


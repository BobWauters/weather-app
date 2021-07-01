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
let firstDay = document.querySelector('#day-1-desc');
let secondDay=document.querySelector(' #day-2-desc');
let thirdDay=document.querySelector('  #day-3-desc');
let fourthDay=document.querySelector(' #day-4-desc');
let fifthDay=document.querySelector('  #day-5-desc');
//let firstDayIcon = document.querySelector('#day-1-icon');
//let secondDayIcon=document.querySelector(' #day-2-icon');
//let thirdDayIcon=document.querySelector('  #day-3-icon');
//let fourthDayIcon=document.querySelector(' #day-4-icon');
//let fifthDayIcon=document.querySelector('  #day-5-icon');



//API TRY 2
button.addEventListener('click', function (){
    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value +'&units=metric&appid=4ce0604fe97650f47963ef28c9f566d5')
        .then (response => response.json())
        //.then (data => console.log(data))

        //TODO: recheck why fahrenheit to celcius is -273.15
        //.then (data => console.log(data))
       .then(data => {



               let descValue1 = data.list[0].weather[0].main;
               let tempValue1 = (Math.round(data.list[0].main.temp) + '&degC');
               //let iconValue1 = data.list[0].weather[0].icon;

               let descValue2 = data.list[8].weather[0].main;
               let tempValue2 = (Math.round(data.list[8].main.temp) + '&degC');
               // let iconValue2=  data.list[8].weather[0].icon;

               let descValue3 = data.list[16].weather[0].main;
               let tempValue3 = (Math.round(data.list[16].main.temp) + '&degC');
               //let iconValue3=  data.list[16].weather[0].icon;

               let descValue4 = data.list[24].weather[0].main;
               let tempValue4 = (Math.round(data.list[24].main.temp) + '&degC');
               // let iconValue4=  data.list[24].weather[0].icon;

               let descValue5 = data.list[32].weather[0].main;
               let tempValue5 = (Math.round(data.list[32].main.temp) + '&degC');
               //  let iconValue5=  data.list[32].weather[0].icon;


               // &units=metric
               // let nameValue= data.list[4].sys.pod.dt_txt;
               //  console.log (Math.round(data.list[2].main.temp - 273.15) + '&degC')
               //console.log(tempValue1);
               //console.log(descValue1);
               // console.log(nameValue)
               //name.innerHTML= nameValue;
               // desc.innerHTML= descValue;
               //temp.innerHTML= tempValue;


               firstDay.innerHTML = ' Day 1: <br> <br>' + descValue1 + ' <br> <br>' + tempValue1;
               secondDay.innerHTML = 'Day 2: <br> <br> ' + descValue2 + '<br> <br>' + tempValue2;
               thirdDay.innerHTML = ' Day 3: <br><br>' + descValue3 + '<br> <br>' + tempValue3;
               fourthDay.innerHTML = 'Day 4: <br><br>' + descValue4 + '<br> <br>' + tempValue4;
               fifthDay.innerHTML = ' Day 5: <br><br>' + descValue5 + ' <br><br>' + tempValue5;

                /*
               //document.getElementById('day-1').querySelector('.icon').src =(' https://openweathermap.org/img/wn/'+ iconValue1 + '.png');
               firstDayIcon.innerHTML = document.getElementById('day-1').querySelector('.icon').src = ('https://openweathermap.org/img/wn/${weather.data.list[0].weather[0].icon}@2x.png');
               secondDayIcon.innerHTML = '';
               thirdDayIcon.innerHTML = '';
               fourthDayIcon.innerHTML = '';
               fifthDayIcon.innerHTML = '';
           */
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


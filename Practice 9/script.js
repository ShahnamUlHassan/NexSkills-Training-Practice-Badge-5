function getWeather(){
    let pickCityName = document.getElementById("temprature").value;
    alert(pickCityName)
    const axios = require('axios');

// Make a request for a user with a given ID
axios.get(`https://api.weatherapi.com/v1/current.json?key=dea92abfe67f482e8e683016241912&q=${pickCityName}&aqi=yes`)
.then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
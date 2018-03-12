let updateWidget = function(data) {
// API key:  5bcfde2f59c173eabef1748458723328
// login:    bobbyt

  console.log("Got weather data: ", data)
  // YOUR CODE GOES HERE
  currentTemp = data.main.temp
  currentTemp = Math.round(currentTemp)
  currentIcon = data.weather[0].icon
  currentURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"

  tempString = "It is " + currentTemp + " degrees outside."
  jQuery(".card-text").html(tempString)
  jQuery(".card-img-top bg-primary img-fluid").attr("src", currentURL)
}

// let updateWidget2 = function(data) {
//   console.log("Got weather data: ", data)
//   // YOUR CODE GOES HERE
//   currentTemp = data.main.temp
//   currentTemp = Math.round(currentTemp)
//   currentIcon = data.weather[0].icon
//   currentURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
//   currentLoc = data.main.name
//
//   tempString = "It MIGHT BE " + currentTemp + " degrees outside."
//   jQuery(".card-text").html(tempString)
//   jQuery(".card-img-top bg-primary img-fluid").attr("src", currentURL)
//   jQuery(".card-title").html(currentLoc)
//   console.log(currentLoc)
// }


let getWeather = function(event) {
  let latitude = '48.8566';
  let longitude = '2.3522';
  // let apiKey = '4ce6f502d38ddae567bf1702b05e168c'; // REPLACE THIS VALUE with your own key.
  let apiKey = '5bcfde2f59c173eabef1748458723328';
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let getWeather2 = function(event) {
  event.preventDefault()
  navigator.geolocation.getCurrentPosition(testFun)
}

let testFun = function(info) {
  let latitude2 = info.coords.latitude.toFixed(4)
  let longitude2 = info.coords.longitude.toFixed(4)
  console.log(latitude2)
  console.log(longitude2)

  let apiKey = '5bcfde2f59c173eabef1748458723328';
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude2
  weatherServiceURL += '&lon=' + longitude2
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  console.log(weatherServiceURL)
  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
// new
jQuery("#get_forecast").on("click", getWeather2)


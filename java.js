let getWeather = function(event) {
  // coordinates for Springfield, MO
  let latitude = '38.2089';
  let longitude = '-93.2923';
  console.log("Set location to Springfield")

  let apiKey = '5bcfde2f59c173eabef1748458723328';
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWeather).catch(displayError);
}

let updateWeather = function(data) {
// Open Weather Map
// API key:  5bcfde2f59c173eabef1748458723328
// login:    bobbyt

  console.log("Got weather data: ", data)
  currentTemp = data.main.temp
  currentTemp = Math.round(currentTemp)
  currentIcon = data.weather[0].icon
  currentURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
  // console.log(data.weather[0].icon)

  tempString = "It is " + currentTemp + " degrees outside."
  jQuery("#weathertemp").html(tempString)
  jQuery("#weatherpic").attr("src", currentURL)
}


let getNews = function(event) {
  // use newsapi.org
    let apiKey2 = 'a7699ffac6834637b4b2cd43f21b6d76';
    // let newsServiceURL = 'https://newsapi.org/v2/top-headlines?'
    // newsServiceURL += 'country=us&' + 'apiKey=' + apiKey2

    let newsServiceURL = 'https://newsapi.org/v2/everything?' +
          // 'q=+Springfield&' +
          // 'q=+Simpsons&' +
          'q="The Simpsons"&' +
          // 'from=2018-03-02&' +
          'sortBy=popularity&' +
          'apiKey=' + apiKey2

    fetch(newsServiceURL).then(convertToJSON).then(updateNews).catch(displayError);
}

let updateNews = function(data2) {
  let newsNum = Math.floor(Math.random() * 20)

  console.log("Got news data: ", data2)
  newsTitle = data2.articles[newsNum].title
  console.log(newsTitle)
  newsAuthor = data2.articles[newsNum].author
  console.log(newsAuthor)
  newsDesc = data2.articles[newsNum].description
  console.log(newsDesc)
  newsURL = data2.articles[newsNum].url
  console.log(newsURL)

  $("#articleTitle").html(newsTitle)
  $("#articleAuthor").html(newsAuthor)
  $("#articleBody").html(newsDesc)
  $("#articleURL").attr("href", newsURL)
}

let getRussia = function(event) {
  // use newsapi.org
    let apiKey2 = 'a7699ffac6834637b4b2cd43f21b6d76';
    let newsServiceURL = 'https://newsapi.org/v2/top-headlines?'
    newsServiceURL += 'sources=rt&' + 'apiKey=' + apiKey2

    fetch(newsServiceURL).then(convertToJSON).then(updateRussia).catch(displayError);
}

let updateRussia = function(data2) {
  console.log("Got Russia data: ", data2)
  rsTitle = data2.articles[0].title
  console.log(rsTitle)
  rsAuthor = data2.articles[0].author
  console.log(rsAuthor)
  rsDesc = data2.articles[0].description
  console.log(rsDesc)
  rsURL = data2.articles[0].url
  console.log(rsURL)

  $("#articleTitle2").html(rsTitle)
  $("#articleAuthor2").html(rsAuthor)
  $("#articleBody2").html(rsDesc)
  $("#articleURL2").attr("href", rsURL)
}

let getQuote = function(event) {
  // use https://thesimpsonsquoteapi.glitch.me/
    // single quote:    https://thesimpsonsquoteapi.glitch.me/quotes
    // multiple quotes: https://thesimpsonsquoteapi.glitch.me/quotes?count=num
    // replace num with number

    quoteURL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

    fetch(quoteURL).then(convertToJSON).then(updateQuote).catch(displayError);
}

let updateQuote = function(data3) {

  console.log("Got Quote data: ", data3)

  qtQuote = data3[0].quote
  console.log(qtQuote)
  qtChar = "-- " + data3[0].character
  console.log(qtChar)
  qtImg = data3[0].image
  console.log(qtImg)

  $("#simQuote").html(qtQuote)
  $("#simChar").html(qtChar)
  $("#simImg").attr("src", qtImg)

  // image resize if necessary
  var Height = parseInt($("#simImg").css("height"),10)
  var Width = parseInt($("#simImg").css("width"),10)
  console.log("Height = " + Height)
  console.log("Width = " + Width)

  // cap image height at 300px
  var MaxHt = 300
  if (Height > MaxHt) {
    console.log("Image too tall")
    ratio = Height/MaxHt
    $("#simImg").css("height", MaxHt)
    $("#simImg").css("width", Width/ratio)
  }
  Height = $("#simImg").css("height")
  Width = $("#simImg").css("width")
  console.log("Height = " + Height)
  console.log("Width = " + Width)

}


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
// new
// jQuery("#topleft").on("load", getWeather)
window.onload = getWeather()
window.onload = getNews()
window.onload = getRussia()
window.onload = getQuote()

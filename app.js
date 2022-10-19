var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var wind= document.querySelector('.wind');
var preasure = document.querySelector('.preasure');
var clouds = document.querySelector('.clouds');


/* Al fer click al boto de submit crida la api */
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=7f717bd24fe91a714d482797753de300')
.then(response => response.json())
.then(data => {

  var tempValue = data['main']['temp'];
  var preasureValue = data['main']['pressure'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var windValue = data['wind']['speed']
  var cloudsValue = data['clouds']['all']
  console.log(data)
  main.innerHTML = nameValue;
  desc.innerHTML = "Precipitations: "+descValue;
  temp.innerHTML = "Temperature: "+tempValue;
  clouds.innerHTML = "Clouds: "+cloudsValue;
  input.value ="";
  wind.innerHTML = "Wind speed: " + windValue + "km/h"
  preasure.innerHTML = "Preasure: " + preasureValue + "Pa"

})

.catch(err => alert("Wrong city name!"));
})

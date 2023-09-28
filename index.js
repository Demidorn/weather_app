const api_key ="81703a1a828fde0b3af47f4417415096"

function fetchData(city) {
   fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city
     +"&units=metric&APPID="+api_key
     ).then((response) => response.json())
     .then((data) => )
}


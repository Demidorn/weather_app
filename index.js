const inputinfo = document.querySelector(".search-data");
const button = document.querySelector(".button");

let api_key = "3a493f1d37e98aa9606b276ef24f470c";
function fetchData(city) {
   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
   city + "&units=metric&APPID=" + 
   api_key)
   .then((response) => {
      if (!response.ok) {
         throw new Error("Network is not ok");
      }
      return response.json();
   })
   .then((data) => {
      console.log(data);
   });
}

const search_data = () => {
   const value = inputinfo.value;
   return fetchData(value);
};

button.addEventListener("click", search_data);

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather= document.querySelector("#weather")

const getWeather = async(city) =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
     return showweather(data)

}

const showweather = (data) =>{
    console.log(data)
    weather.innerHTML =`
    <div >  
        <H2 id="temp">${data.main.temp}   &degC</H2>
    </div>
 <div >
    <span class="material-symbols-outlined" >
        weather_mix
        </span>
        <h4  id="temp" > ${data.main.weather}</h4>    
        </div>
    `
}

form.addEventListener (
    "submit" ,

function(event){
        getWeather(search.value)
        event.preventDefault();

    }
)

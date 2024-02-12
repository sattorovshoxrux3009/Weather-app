const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

changeLocation.city.focus();

const updateUI=(data)=>{
    overlay.classList.add('d-none')
    card.classList.remove('d-none')
    details.innerHTML=` 
    <h5 class="mb-3">${data.name} ${data.sys.country}</h5>
    <p class="mb-3">${data.weather[0].description}</p>
    <div class="display-4 mb-3">
      <span>${Math.round(data.main.temp)}</span>
      <span>&deg;C</span>
    </div>`
    weatherIcon.src=` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}

const getWeather=async (cityName)=>{
    const data=getData(cityName)
    return data;
}

changeLocation.addEventListener('submit',(e)=>{
    e.preventDefault();
    const cityName=changeLocation.city.value.trim();
    changeLocation.reset();
    overlay.classList.remove('d-none')
    getWeather(cityName).then((data)=>{
       updateUI(data)
    });
})
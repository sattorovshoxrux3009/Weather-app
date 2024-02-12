const KEY = '7639f5cd4da89691622ae7276bc486df'
const getData= async (cityname)=>{ 
    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${KEY}`)
    const data = await req.json()
    return data;
}
// https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${KEY}
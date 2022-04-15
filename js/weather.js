function getGeo (location){
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=76a35914437dff46f9e074ca62d5039b&units=metric`;
    fetch(url).then(res => res.json()).then(data => {
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        const city = data.name;
        document.querySelector("#weather span:nth-child(1)").innerHTML = weather + ' ' + city;
        document.querySelector("#weather span:nth-child(2)").innerHTML =`${city} / ${temp}`;
        //div.innerHTML = `<h3>Today's weather</h3> ${weather} <br> ${temp} ${city}`;
    })
}
function err (){
    alert("no~!!!")
}
navigator.geolocation.getCurrentPosition(getGeo, err);
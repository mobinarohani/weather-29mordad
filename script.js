
let imgbody=['./pic/1.jpg','./pic/2.jpg','./pic/3.jpg',
'./pic/4.jpg','./pic/5.jpg','./pic/6.jpg']
let citiesData =[
    {city: 'Tehran', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 32},
    {city: 'Shiraz', temp: 9, weather: 'windy', humidity: 12, windSpeed: 14},
    {city: 'Tabriz', temp: 1, weather: 'rainy', humidity: 43, windSpeed: 12},
    {city: 'Mashhad', temp: 16, weather: 'snowy', humidity: 7, windSpeed: 24},
    {city: 'Esfahan', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 18},
]

let searchBtn = document.getElementById('search')
let searchBar = document.querySelector('.search-bar')
function imgback(){
    let index=Math.floor(Math.random()*imgbody.length) 
    document.body.style.background="url("+imgbody[index]+") no-repeat fixed"
    document.body.style.backgroundSize="cover"
}


searchBtn.addEventListener('click', function(){
    let obj=citiesData.find(function(cityName){
        return cityName.city===searchBar.value
     })
    if(obj){
        document.querySelector('.city').innerHTML="Weather in " +obj.city
        document.querySelector('.temp').innerHTML=obj.temp+" °C"
        document.querySelector('.description').innerHTML=obj.weather
        document.querySelector('.humidity').innerHTML="Humidity: "+obj.humidity+" %"
        document.querySelector('.wind').innerHTML="Wind speed: "+obj.windSpeed+" km/h"
        document.querySelector('.weather').classList.remove('loading')
    }else{
        alert('شهر مورد نظر را به درستی وارد نمایید')
    }

})
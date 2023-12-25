const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = 'c71bfca21364a4e98f8352272168623f';

const setQuery = (e) => {
    if (e.keyCode === 13) {
        getResult(searchBar.value);
    }
};

const getResult = (cityName) => {
    fetch(`${url}?q=${cityName}&appid=${key}`)//?
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.name && data.main && data.weather && data.weather[0]) {//?
                updateUI(data);
            } else {
                console.error('Invalid data received from the API');
            }
        })
        .catch(error => console.error('Error fetching data:', error));//Hata verirse eger
};

const updateUI = (data) => {
    document.querySelector('.city').innerText = data.name;//innerText ve 273.15?
    document.querySelector('.temp').innerText = `${Math.round(data.main.temp - 273.15)}°C`;
    document.querySelector('.desc').innerText = data.weather[0].description;
    document.querySelector('.minmax').innerText = `${Math.round(data.main.temp_min - 273.15)}°C - ${Math.round(data.main.temp_max - 273.15)}°C`;
};//$ isaretine icin kullaniliyo?

const searchBar = document.getElementById('searchBar');
document.addEventListener('DOMContentLoaded', () => {
    searchBar.addEventListener('keypress', setQuery);
});
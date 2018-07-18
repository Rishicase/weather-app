// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init Ui
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;

    //Change Location
    weather.changeLocation(city);

    // Set location in local Storage
    storage.setLocationData(city);

    //Get and display weather
    getWeather();

    //Close Modal
    $('#locModal').modal('hide');
})
function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}
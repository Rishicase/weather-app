class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.cloud = document.getElementById('w-cloud');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.location.name + ', ' + weather.location.region;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = `${weather.current.temp_c} °C`;
        this.icon.setAttribute('src', `http:${weather.current.condition.icon}`);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity} %`;
        this.feelslike.textContent = `Feels Like: ${weather.current.feelslike_c} °C`;
        this.cloud.textContent = `Cloud: ${weather.current.cloud} %`;
        this.wind.textContent = `Wind: ${weather.current.wind_kph} KM/H`;
    }
}
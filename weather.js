class Weather {
    constructor(city) {
        this.apikey = '7d35709828a7454eb7490932181707';
        this.city = city;
    }
    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apikey}&q=${this.city}`);

        const responseData = await response.json();
        // console.log(responseData);
        return responseData;
    }
    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
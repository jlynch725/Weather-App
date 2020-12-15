window.addEventListener("load", ()=> {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(GeolocationPosition);   /*Can't seem to call the position in the console*/
            /*long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
            /*const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;*/
            /*fetch(api)
                .then(response => {
                    return response.json();

                })
                .then(data => {
                    console.log(data);
                });*/

        });
    }
});
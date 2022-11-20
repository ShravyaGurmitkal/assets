fetch('https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=2a984eff06dbace9308d2bcf60b5e917')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

////////////////////////////////////////////////////////////////////////////////////////////
var d = new Date();
console.log(d);

// convert to msec
// subtract local time zone offset
// get UTC time in msec
d = new Date(1657593728 * 1000);
console.log(d.getTimezoneOffset())
var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
console.log(utc)

// create new Date object for different city
// using supplied offset
var nd = new Date(utc + (19800 * 1000)); 
console.log(nd.toLocaleTimeString("en-US"))
////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////

// https://api.openweathermap.org/data/2.5/weather?lat=55.6759&lon=12.5655&appid=${apiKey}

// https://www.google.dk/maps/place/Copenhagen/@55.6713812,12.4537419,11z/data=!3m1!4b1!4m5!3m4!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372?hl=en-GB

// ////////////////////////////////////////////////////////////////////////////////////////////

// https://www.google.com/maps/@17.3753,78.4744/

// https://www.google.com/maps/search/?api=1&query=17.3753%2C78.4744


// lat: 17.3753
// lon: 78.4744
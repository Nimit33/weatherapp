

// const getWeather = async (city) => {
//     const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '8253a85003msh76ccfa8278a0296p1d0282jsn289b3365c50d',
//             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json(); // Parse JSON response

//         // Update HTML elements with weather data
//         document.getElementById('cloud_pct').innerHTML = data.cloud_pct;
//         document.getElementById('temp').innerHTML = data.temp;
//         document.getElementById('feels_like').innerHTML = data.feels_like;
//         document.getElementById('humidity').innerHTML = data.humidity;
//         document.getElementById('min_temp').innerHTML = data.min_temp;
//         document.getElementById('max_temp').innerHTML = data.max_temp;
//         document.getElementById('wind_speed').innerHTML = data.wind_speed;
//         document.getElementById('wind_degrees').innerHTML = data.wind_degrees;
//         document.getElementById('sunrise').innerHTML = data.sunrise;
//         document.getElementById('sunset').innerHTML = data.sunset;

//     } catch (error) {
//         console.error(error);
//     }
// }

// const submit = document.getElementById('submit'); // Assuming submit is the ID of your submit button
// submit.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevent form submission from refreshing the page
//     const city = document.getElementById('city').value; // Assuming city is the ID of your input field
//     getWeather(city);
// });

// // Call getWeather with a default city value
// getWeather("Delhi");










// 





const getWeather = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8253a85003msh76ccfa8278a0296p1d0282jsn289b3365c50d',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse JSON response

        // Update HTML elements with weather data
        console.log(0); document.getElementById('cityName').innerHTML = city; // Update cityName element
        console.log(1); document.getElementById('cloud_pct').innerHTML = data.cloud_pct;
        console.log(2); document.getElementsByClassName('temp')[0].innerHTML = data.temp;
        console.log(3); document.getElementsByClassName('temp')[1].innerHTML = data.temp;
        // console.log(4); document.getElementById('temp2').innerHTML = data.temp2;
        console.log(5); document.getElementById('feels_like').innerHTML = data.feels_like;
        console.log(6); document.getElementsByClassName('humidity')[0].innerHTML = data.humidity;
        console.log(7); document.getElementsByClassName('humidity')[1].innerHTML = data.humidity;
        // console.log(8); document.getElementById('humidity2').innerHTML = data.humidity2;
        console.log(9); document.getElementById('min_temp').innerHTML = data.min_temp;
        console.log(10); document.getElementById('max_temp').innerHTML = data.max_temp;
        console.log(11); document.getElementsByClassName('wind_speed')[0].innerHTML = data.wind_speed;
        console.log(12); document.getElementsByClassName('wind_speed')[1].innerHTML = data.wind_speed;
        // console.log(13); document.getElementById('wind_speed2').innerHTML = data.wind_speed2;
        console.log(14); document.getElementById('wind_degrees').innerHTML = data.wind_degrees;
        console.log(15); document.getElementById('sunrise').innerHTML = data.sunrise;
        console.log(16); document.getElementById('sunset').innerHTML = data.sunset;

        // Call displayWeatherCareTips function with weather data
        displayWeatherCareTips(data.temp, data.humidity, data.wind_speed);
        displayFunFacts();

    } catch (error) {
        console.error(error);
    }
}

// Function to display personalized weather care tips based on temperature, humidity, and wind speed
const displayWeatherCareTips = (temperature, humidity, windSpeed) => {
    let tips = '';

    if (temperature > 35) {
        tips += 'It\'s very hot outside. Make sure to stay hydrated and avoid prolonged exposure to direct sunlight.';
    } else if (temperature > 30) {
        tips += 'The temperature is high. Drink plenty of water and try to stay indoors during the hottest hours of the day.';
    } else if (temperature < 5) {
        tips += 'It\'s very cold outside. Bundle up with warm clothing and avoid prolonged exposure to cold air.';
    } else if (temperature < 15) {
        tips += 'The temperature is on the cooler side. Wear layers to stay warm and comfortable.';
    }

    if (humidity > 70) {
        tips += 'High humidity levels can make you feel uncomfortable. Use air conditioning or fans to stay cool and dry.';
    }

    if (windSpeed > 30) {
        tips += 'Strong winds can be hazardous. Secure loose objects and avoid outdoor activities in windy conditions.';
    }

    if (tips === '') {
        tips += 'The weather seems moderate. Enjoy your day!';
    }

    // Display tips on the page
    document.getElementById('weatherTips').innerHTML = tips;
}
const displayFunFacts = () => {
    const funFacts = [
        'Did you know? Lightning strikes about 100 times per second worldwide.',
        'The highest recorded temperature on Earth is 134 degrees Fahrenheit (56.7 degrees Celsius) in Death Valley, California.',
        'The coldest temperature ever recorded on Earth was -128.6 degrees Fahrenheit (-89.2 degrees Celsius) in Antarctica.',
        'Raindrops can fall at speeds of about 7 to 18 miles per hour (3 to 8 meters per second).',
        'The wettest place on Earth is Mawsynram, India, which receives an average annual rainfall of about 467 inches (11,871 millimeters).'
    ];

    // Choose a random fun fact from the array
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

    // Display the fun fact on the page
    document.getElementById('funFact').innerHTML = randomFact;
}

const submit = document.getElementById('submit'); // Assuming submit is the ID of your submit button
submit.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    const city = document.getElementById('city').value; // Assuming city is the ID of your input field
    getWeather(city);
});

// Call getWeather with a default city value
getWeather("Delhi");

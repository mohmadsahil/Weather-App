
    let errMsg = document.getElementById("errorMsg").innerHTML
    

        async function checkWeather()
        {
            let city = document.getElementById("searchCity").value
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=defd0a64d95e3393a44516b767b5d9d1`);
        
            var data = await response.json();
            console.log(data);
            
            if(data.name!= city )
            {
                document.getElementById("temp").innerHTML ="";
                document.getElementById("city").innerHTML = data.message;
                document.getElementById("humidity").innerHTML = "";
                document.getElementById("wind").innerHTML = "";
                document.getElementById("weither-icon").src = "error.png"
            }
            document.getElementById("temp").innerHTML = data.main.temp;
            document.getElementById("city").innerHTML = data.name;
            document.getElementById("humidity").innerHTML = data.main.humidity;
            document.getElementById("wind").innerHTML = data.wind.speed;

            if(data.weather[0].main=="Clouds")
            {
                document.getElementById("weither-icon").src = "clouds.png"
            }
            if(data.weather[0].main=="Clear")
            {
                document.getElementById("weither-icon").src = "clear.png"
            }
            if(data.weather[0].main=="Rain")
            {
                document.getElementById("weither-icon").src = "rain.png"
            }
            if(data.weather[0].main=="Drizzle")
            {
                document.getElementById("weither-icon").src = "drizzle.png"
            }
            if(data.weather[0].main=="Mist")
            {
                document.getElementById("weither-icon").src = "mist.png"
            }
            if(data.weather[0].main=="Smoke")
            {
                document.getElementById("weither-icon").src = "Smoke.png"
            }
            if(data.weather[0].main=="Haze")
            {
                document.getElementById("weither-icon").src = "Haze.png"
            }

           
        }
  

       
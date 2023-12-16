let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    city = document.getElementById('input').value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d0bfe9ca98d98c1185cf8a1d898a737`;
    fetch(url)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(res) {
            if (res['cod'] == '200') {
            document.querySelector('.card').classList.add('active');
            document.querySelector('.city-name').innerHTML = res["name"];
            temp = Math.round(res["main"]["temp"] - 273);
            tempFeel = Math.round(res["main"]["feels_like"] - 273);
            if (temp > 0) temp = '+' + temp;
            if (tempFeel > 0) tempFeel = '+' + tempFeel;
            document.querySelector('.temperature').innerHTML = temp + '°';
            document.querySelector('.feels-like').innerHTML = 'Ощущается как <b>' + tempFeel + '° </br>';
            document.querySelector('.humidity').innerHTML = "Влажность - <b>" + res['main']["humidity"] + "% </b>";
            mainWeather = res["weather"]['0']['main'];
            if (mainWeather = 'clouds') mainWeather = 'Облачно'
            else if (mainWeather = 'clear') mainWeather = 'Ясно'
            else mainWeather = res["weather"]['0']['main'];
            document.querySelector('.main-info').innerHTML = '<b>' + mainWeather + '</b>';
            document.querySelector('.wind').innerHTML = 'Скорость ветра <b>' + res["wind"]['speed'].toFixed(1) + 'м/с </b>';
            } else {
                document.querySelector('.city-name').innerHTML = '';
                document.querySelector('.temperature').innerHTML = '';
                document.querySelector('.feels-like').innerHTML = '';
                document.querySelector('.humidity').innerHTML = '';
                document.querySelector('.main-info').innerHTML = '';
                document.querySelector('.wind').innerHTML = '';
                document.querySelector('.card').classList.remove('active');
            }
        });
})
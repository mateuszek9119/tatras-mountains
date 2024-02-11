import React from 'react'

const Result = (props) => {

    const { date, city, sunrise, sunset, pressure, temp, temp_feels, wind, windGust, clouds, icon, description, err } = props.weather

    let content = null;

    if (!err && city) {

        window.scrollTo(0, window.innerHeight / 2)

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        const ico = `https://openweathermap.org/img/wn/${icon}.png`;


        const windSpeed = Math.round((wind * 3.6) * 10) / 10;
        const windSpeedGust = Math.round((windGust * 3.6) * 10) / 10;

        content = (
            <>
                <p style={{ textTransform: "uppercase", marginBottom: "1vh", }}>Aktualne informacaje pogodowe:</p>
                <p><strong style={{ textTransform: "uppercase" }}>{city}</strong> <span>({date})</span> </p>
                <p class="icon"><img src={ico} alt={description} /><span>  {description} </span> <img src={ico} alt={description} /><span></span></p>
                <p><span>Temperatura:</span> <span>{temp >= 0 ? Math.ceil(temp) : Math.floor(temp)} &#176;C</span></p>
                <p><span>Temperatura odczuwalna:</span> <span>{temp_feels ? Math.ceil(temp_feels) : Math.floor(temp_feels)} &#176;C</span></p>
                <p><span>Siła wiatru:</span> <span>{Math.ceil(windSpeed)} km/h</span></p>
                <p> <span>Porywy wiatru:</span> <span>{windSpeedGust ? Math.ceil(windSpeedGust) : Math.ceil(windSpeed * 2.2)} km/h</span> </p>
                <p><span>Zachmurzenie:</span><span>{clouds}%</span> </p>
                <p><span>Wschód słońca:</span><span>{sunriseTime}</span></p>
                <p><span>Zachód słońca:</span><span>{sunsetTime}</span></p>
            </>
        )
    }

    return (
        <div className='result'>
            {err && city.length > 1 ? `Nie ma takiego miejsca jak:" ${city}` : content}
        </div>
    )
}

export default Result
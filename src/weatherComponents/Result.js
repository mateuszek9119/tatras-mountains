import React from 'react'

const Result = (props) => {

    const { date, city, sunrise, sunset, pressure, temp, temp_feels, wind, windGust, clouds, icon, err } = props.weather

    let content = null

    if (!err && city) {

        window.scrollTo(0, window.innerHeight / 3)

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        const ico = `https://openweathermap.org/img/wn/${icon}.png`;

        const windSpeed = Math.round((wind * 3.6) * 10) / 10;
        const windSpeedGust = Math.round((windGust * 3.6) * 10) / 10;

        content = (
            <>
                <p class="icon"><img src={ico} /> </p>
                <p style={{ textTransform: "uppercase" }}>Aktualna informacaje pogodowe:</p>
                <p><strong style={{ textTransform: "uppercase" }}>{city}</strong> ( <em>{date}</em> )</p>
                <p>Temperatura: {temp} &#176;C</p>
                <p>Temperatura odczuwalna: {temp_feels} &#176;C</p>
                <p>Siła wiatru: {windSpeed} km/h</p>
                <p>Porywy wiatru: {windSpeedGust ? windSpeedGust : windSpeed * 2.2} km/h</p>
                <p>Zachmurzenie: {clouds}%</p>
                <p>Wschód słońca: {sunriseTime}</p>
                <p>Zachód słońca: {sunsetTime}</p>
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
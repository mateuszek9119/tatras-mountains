import React from 'react'

const Result = (props) => {

    const { date, city, sunrise, sunset, pressure, temp, temp_feels, wind, windGust, clouds, icon, err } = props.weather

    let content = null

    if (!err && city) {

        window.scrollTo(0, window.innerHeight / 2)

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        const ico = `https://openweathermap.org/img/wn/${icon}.png`;

        const windSpeed = Math.round((wind * 3.6) * 10) / 10;
        const windSpeedGust = Math.round((windGust * 3.6) * 10) / 10;

        content = (
            <>"
                <p style={{ textTransform: "uppercase", marginBottom: "1vh", }}>Aktualne informacaje pogodowe:</p>
                <p><strong style={{ textTransform: "uppercase" }}>{city}</strong> ( <em>{date}</em> )</p>
                <p class="icon"><img src={ico} />  </p>
                <p>Temperatura: {temp >= 0 ? Math.ceil(temp) : Math.floor(temp)} &#176;C</p>
                <p>Temperatura odczuwalna: {temp_feels ? Math.ceil(temp_feels) : Math.floor(temp_feels)} &#176;C</p>
                <p>Siła wiatru: {Math.ceil(windSpeed)} km/h</p>
                <p>Porywy wiatru: {windSpeedGust ? Math.ceil(windSpeedGust) : Math.ceil(windSpeed * 2.2)} km/h</p>
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
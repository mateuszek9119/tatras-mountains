import React from 'react'

const Result =(props)=>{

    const { date, city, sunrise, sunset, pressure, temp, wind, clouds, err} = props.weather

    let content = null

    if(!err && city) {
    
        window.scrollTo(0,  window.innerHeight / 3)

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    
        content = (
            <>  
                <p style={{textTransform: "uppercase"}}>Aktualna informacaje pogodowe:</p>
                <p><strong style={{textTransform: "uppercase"}}>{city}</strong> ( <em>{date}</em> )</p>
                <p>Temperatura: {temp} &#176;C</p>
                <p>Siła wiatru: { Math.round((wind * 3.6)*10)/10 } km/h</p>
                <p>Zachmurzenie: {clouds}%</p>
                <p>Wschód słońca: {sunriseTime}</p>
                <p>Zachód słońca: {sunsetTime}</p>
            </>
        )
    }

    return(
        <div className='result'>
            {err && city.length > 1 ? `Nie ma takiego miejsca jak:" ${city}`: content }
        </div>
    )
}

export default Result
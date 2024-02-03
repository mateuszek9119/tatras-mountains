import React from 'react'
import Form from '../weatherComponents/Form'
import Result from '../weatherComponents/Result'
import "../styles/weather.css"

class Weather extends React.Component{

  state ={
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    pressuare: "",
    temp: "",
    wind: "",
    clouds: "",
    err: false
  }

  // klucz do api
  //APIkey = "dbde02f9c2b523cec86a9bdfec813df0";

  APIkey = "864b44a12dea05740819f7ae0f177350"

  handleInputChange = (event)=>{

    this.setState({
      value: event.target.value
    })

  }

 
  componentDidUpdate(prevProps, prevState){
    
    if(this.state.value.length === 0) return
    if(prevState.value !== this.state.value){

      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value},pl&APPID=${this.APIkey}`
  
      fetch(API)
      .then(response=>{
        if(response.ok)
        {
          return response
        }
        throw Error("Coś poszło nie tak")
      })
      .then(response=> response.json())
      .then(data=>{
        const time = new Date().toLocaleString();
        this.setState(prevState => ({
          date: time,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          pressure: data.main.pressure,
          temp: data.main.temp,
          wind: data.wind.speed,
          clouds: data.clouds.all,
          err: false
        }))
      })
      .catch( err =>{
        console.log(err)
        this.setState(prevState=>({
        err: true,
        city: prevState.value
      }))})
    }
  
  }

  render(){
    return(
      <div className="app">
        <Form value = {this.state.value} change = {this.handleInputChange} />
        <Result weather={this.state}/>
      </div>
    )
  }

}

export default Weather
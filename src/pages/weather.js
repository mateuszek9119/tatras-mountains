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
    temp_feels: "",
    wind: "",
    clouds: "",
    err: false,
  }

  // klucz do api
  //APIkey = "dbde02f9c2b523cec86a9bdfec813df0";

  APIkey = "864b44a12dea05740819f7ae0f177350"

  //APIkey2 = "PwiGon3qF21Blhbe"

  handleInputChange = (event)=>{

    this.setState({
      value: event.target.value
    })

  }

  handleClick =(id)=>{

    this.setState({
      value: ""
    })

    
    const szczyty = [
   
    {
      id: 0,
      url: `https://api.openweathermap.org/data/2.5/weather?lat=49.2322&lon=19.9818&limit=5&appid=${this.APIkey}&units=metric`,
      name: "KASPROWY WIERCH"
    },

    {
      id: 1,
      url: `https://api.openweathermap.org/data/2.5/weather?lat=49.1795&lon=20.0881&limit=5&appid=${this.APIkey}&units=metric`,
      name: "RYSY"
    },

    {
      id: 2,
      url: `https://api.openweathermap.org/data/2.5/weather?lat=49.2136&lon=20.0487&limit=5&appid=${this.APIkey}&units=metric`,
      name: "DOLINA PIĘCIU STAWÓW"
    }
    
  ]

  let API = null
  let placeName = null;

  szczyty.forEach(item=>{
    if(id === item.id) {
      API = item.url
      placeName = item.name
    }
      
  })

    

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
          city: placeName,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          pressure: data.main.pressure,
          temp: data.main.temp,
          temp_feels: data.main.feels_like,
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

 
  componentDidUpdate(prevProps, prevState){
    
    if(this.state.value.length === 0) return
    if(prevState.value !== this.state.value){

      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value},pl&APPID=${this.APIkey}&units=metric`

      
      //const API2 = `https://my.meteoblue.com/packages/basic-1h_basic-day?apikey=${this.APIkey2}&lat=49.2199&lon=20.0153&asl=2247&format=json`
  
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
          temp_feels: data.main.feels_like,
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
        <div onClick={()=>this.handleClick(0)} >Kasprowy Wierch</div>
        <div onClick={()=>this.handleClick(1)} >Rysy</div>
        <div onClick={()=>this.handleClick(2)} >Dolina pięciu stawów</div>
        <Form value = {this.state.value} change = {this.handleInputChange} />
        <Result weather={this.state}/>
      </div>
    )
  }

}

export default Weather
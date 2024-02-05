
import "../styles/header.css"
import {Routes, Route} from "react-router-dom"
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import imgError from '../images/error.jpg'

const images = [
    {adres: "/", Img:  <div class="asign"></div>}, 
    {adres: "/products", Img: <div class="pieniny"></div> },
    {adres: "/weather" , Img: <div class="halaGasienicowa"></div> }, 
    {adres: "/contact", Img:  <div class="rocks"></div>},
    {adres: "/admin", Img: <div class="mountainsSnow"></div>},
    {adres: "/*", Img: <div class="asign"></div>}
];

const image = images.map( (item)=>  <Route path={item.adres} element={item.Img}   />  )


const Header = ()=>{

    return(
        <>
        <Routes>
           {image}
        </Routes>
            
        </>
    )
}

export default Header
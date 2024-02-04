
import "../styles/header.css"
import {Routes, Route} from "react-router-dom"
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import imgError from '../images/error.jpg'

const images = [
    {adres: "/", Img:  <img class="rocks" src={img1}/>}, 
    {adres: "/products", Img: <img class="trail" src={imgError}/>},
    {adres: "/weather" , Img: <img class="asign" src={img2}/> }, 
    {adres: "/contact", Img: <img class="contact" src={img3}/>},
    {adres: "/admin", Img: <img src={img4}/>},
    {adres: "/*", Img: <img src={imgError}/>}
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
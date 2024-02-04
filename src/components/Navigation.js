import { NavLink } from "react-router-dom"
import '../styles/navigation.css'

const Navigation = (props)=>{

    const hideNavigation = ()=>{ 
        
        if(window.innerWidth < 900){
            props.click()
            window.scroll(0,0)
        } 
    }       

    const li = [
        {adres: "/" , name: "Strona Główna" },
        {adres: "/products" , name: "Szczyty i szlaki" },
        {adres: "/weather" , name: "Pogoda" },
        {adres: "/contact" , name: "Kontakt" },
        {adres: "/admin" , name: "Panel Admina" }
    ]

    const nav = li.map( item => <li key={item.name} onClick={hideNavigation }>  <NavLink to={item.adres} > {item.name} </NavLink> </li>)

    return(
            <nav className="main">
                <ul>
                    { nav }
                </ul>
            </nav>
    )
}

export default Navigation
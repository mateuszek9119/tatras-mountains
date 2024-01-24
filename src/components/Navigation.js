
import { NavLink } from "react-router-dom"
import '../styles/navigation.css'

const Navigation = ()=>{

    const li = [
        {adres: "/" , name: "Strona Główna" },
        {adres: "/products" , name: "Szczyty i szlaki" },
        {adres: "/contact" , name: "Kontakt" },
        {adres: "/admin" , name: "Panel Admina" }
    ]

    const nav = li.map( item => <li key={item.name}> <NavLink to={item.adres} > {item.name} </NavLink> </li>)

    return(
        <div>
            <nav className="main">
                <ul>
                    { nav }
                </ul>
            </nav>
         
        </div>
    )
}

export default Navigation
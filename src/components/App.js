import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';

import Footer from './Footer';
import {BrowserRouter as Router} from "react-router-dom"


class App extends React.Component{

  addActiveClass = ()=>{
    const iconBurger = document.querySelector(".fa-bars")
    const iconX = document.querySelector(".fa-circle-xmark")
    const navSmartfon = document.querySelector("aside")

    iconBurger.classList.toggle("show")
    iconX.classList.toggle("show")
    navSmartfon.classList.toggle("show")
    iconX.style.color="white"
  }

  render(){
    return(
      <Router basename={process.env.PUBLIC_URL}>
        <div className='app'>
          <header>
              <Header />
          </header>
          <main class="main">

            <div class="burger" onClick={this.addActiveClass}>
              <i class="icon fa-solid fa-bars show"></i>
              <i class="icon fa-regular fa-circle-xmark"></i>
            </div>
            <aside>
              <Navigation click = {this.addActiveClass} />
            </aside>
         
            <section className="page"> 
              <Page />
            </section>
          </main>
          <footer>
            <Footer/>
          </footer>
       </div>
      </Router>
    
    )
  }

}


export default App;

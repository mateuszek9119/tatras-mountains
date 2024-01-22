import React from 'react';
import '../styles/App.css';
import '../styles/kot.scss';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import {BrowserRouter as Router} from "react-router-dom"


class App extends React.Component{

  render(){
    return(
      <Router>
        <div className='app'>
          <header>
              <Header />
          </header>
          <main class="main">
            <aside>
              <Navigation />
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

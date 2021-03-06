import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';
//LINK FAZ COM QUE A PAGINA NAO RECARREGUE DO 0 AO USAR A ANCORA NO HMTL
import {Link} from 'react-router-dom';
function Landing(){

    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
    

          <main>
            <h1>Leve felicidade para o Mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
          </main>
          <div className="location">
            <strong>Contagem</strong>
            <span>Minas Gerais</span>
          </div>
        
          <Link to="/app" className="enter-app">
            <FiArrowRight size= {26} color= " rgba(0, 0 , 0 ,0.6)" />  
          </Link>
        </div>
        </div>

    );
}
export default Landing;
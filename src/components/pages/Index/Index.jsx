import React from 'react';
import '../pages.css';
import Orcamento from './Orcamento'; 
import Carrossel from './Carrossel';
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'


function Index() {

    return (  
        <>
            <Header />
            <div id="index"> 
                <Carrossel />
                <div id="paragrafo">
                    <p class="slogan">A chocolateria líder de vendas para festas e eventos na cidade do Rio de Janeiro.</p>
                    <p class="destaqueSlogan">Especialistas em proporcionar momentos únicos e criar boas memórias através do sabor.</p>
                </div>
                <Orcamento />
                <div class="linkPresentes">
                    <h1><Link to="/Presentes">Para presentear</Link></h1>
                    <div class="fotosPresentes">
                        <img src="./imgs/presentes-index/florescer1.jpg"></img>
                        <img src="./imgs/presentes-index/batecoracao1.jpg"></img>
                        <img src="./imgs/presentes-index/florescer2.jpg"></img>
                        <img src="./imgs/presentes-index/meuamor1.jpg"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index

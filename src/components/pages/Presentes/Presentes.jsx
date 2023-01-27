import React from "react";
import '../pages.css'
import BateCoracao from "./BateCoracao";
import Florescer from "./Florescer";
import Nacional from "./Nacional";
import Pascoa from "./Pascoa";
import VoceEEspecial from "./VoceEEspecial";

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

function Presentes() {

    return (
        <>
            <Header />
            <div id="presentes">
                <h1>Um presente único, delicioso e encantador!</h1>
                <p class="presentesDescricao">Chocolates são sempre opções de presente, mas a <span class="chocoalicia">ChocoAlícia</span> vai além.<br />
                    Mais que um presente, nossos produtos proporcionam uma experiência única.<br />
                    Aqui você vai encontrar o presente certo para sua celebração.
                </p>
                <BateCoracao />
                <VoceEEspecial />
                <Pascoa />
                <Florescer />
                <Nacional />
            </div> {/* fim #presentes */}
            <Footer />
        </>
    )
}

export default Presentes
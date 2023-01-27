import React from "react";
import {useState} from 'react'
import '../pages.css'

function Pascoa() {

    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    return (
        <>
            <div class="linhasComerciais"> {/*Páscoa*/}
                <button onClick={showOrHide} class="btn-presentes">
                    <h2>+ Linha Páscoa</h2>
                </button>
                <p class="linhaDescricao">Porque o que é bom deve ser saboreado o ano inteiro.<br />
                    Nossos ovos de colher te faz salivar do momento que você o vê até o último pedacinho de chocolate.
                </p>

                { showElement ?             
                    <>
                        <div class="linhaOpcoes">
                            <div class="produto">
                                <img src="../../../../imgs/presentes/pascoa1.jpg" />
                                <div class="produtoInfos">
                                    <h3>Ovo Pleno</h3>
                                    <p class="produtoDescricao"></p>
                                    <p class="tamanhoSabor">250g | Casca, recheio e topping à sua escolha. </p>
                                    <br />
                                    <p class="preco">R$ 59,99</p>
                                    <div class="botaoQuero">
                                        <p>Eu quero</p>
                                    </div>
                                </div>
                            </div>
                            <div class="produto">
                                <div class="produtoFoto">
                                    <img src="../../../../imgs/presentes/pascoa2.jpg" />
                                </div>
                                <div class="produtoInfos">
                                    <h3>Ovo Master</h3>
                                    <p class="produtoDescricao"></p>
                                    <p class="tamanhoSabor">500g | Casca, recheio e topping à sua escolha. </p>
                                    <br />
                                    <p class="preco">R$ 79,99</p>
                                    <div class="botaoQuero">
                                        <p>Eu quero</p>
                                    </div>
                                </div>
                            </div>
                        </div>{/*fim linhaOpcoes*/}
                    </>
                : null }

            </div>{/*fim Pascoa*/}
        </>
    )
}

export default Pascoa
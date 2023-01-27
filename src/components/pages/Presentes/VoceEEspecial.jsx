import React from "react";
import {useState} from 'react'
import '../pages.css'

function VoceEEspecial() {

    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    return (
        <>
            <div class="linhasComerciais"> {/*Você é Especial*/}
                <button onClick={showOrHide} class="btn-presentes">
                    <h2>+ Linha Você é Especial</h2>
                </button>
                <p class="linhaDescricao">Suas datas comemorativas terão um toque especial e singular.<br />
                    Além do sabor que já é nossa marca, personalizamos seu presente para deixar sua cara.
                </p>

                { showElement ?             
                    <>
                        <div class="linhaOpcoes">
                            <div class="produto">
                                <img src="../../../../imgs/presentes/meuamor1.jpg" />
                                <div class="produtoInfos">
                                    <h3>Caneca trufada</h3>
                                    <p class="produtoDescricao">Uma caneca personalizada recheada de bombons de licor, para deixar seu café ainda melhor.</p>
                                    <p class="tamanhoSabor">200g | Casca e recheio à sua escolha. </p>
                                    <br />
                                    <p class="preco">R$ 49,99</p>
                                    <div class="botaoQuero">
                                        <p>Eu quero</p>
                                    </div>
                                </div>
                            </div>

                            <div class="produto">
                                <img src="../../../../imgs/presentes/meuamor2.jpg" />
                                <div class="produtoInfos">
                                    <h3>Barra do Amor</h3>
                                    <p class="produtoDescricao">Um presente deslumbrante, um sabor inigualável, e uma mensagem radiante.</p>
                                    <p class="tamanhoSabor">350g | Casca e recheio à sua escolha. </p>
                                    <br />
                                    <p class="preco">R$ 39,99</p>
                                    <div class="botaoQuero">
                                        <p>Eu quero</p>
                                    </div>
                                </div>
                            </div>
                        </div>{/*fim linhaOpcoes*/}
                    </>
                : null }

            </div>{/*fim Você é Especial*/}
        </>
    )
}

export default VoceEEspecial
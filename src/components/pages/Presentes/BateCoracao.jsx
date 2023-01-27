import React from "react"
import {useState} from 'react'
import '../pages.css'

function BateCoracao() {

    const [showElement, setShowElement] = useState(true)
    const showOrHide = () => setShowElement(false)

    // const show = () => setShowElement(true)
    // const hide = () => setShowElement(false)



    return (
        <>
            <div class="linhasComerciais"> {/*Bate Coração*/}
                <button onClick={showOrHide} class="btn-presentes">
                    <h2>+ Linha Bate Coração</h2>
                </button>
                <p class="linhaDescricao">Corações lapidados para você demonstrar todo seu amor pela pessoa querida.<br />
                    Apresentado em uma embalagem que vai fazer seu coração palpitar de felicidade.
                </p>

                { showElement ?
                    <>
                        <div class="linhaOpcoes">
                            <div class="produto">
                                <img src="../../../../imgs/presentes/batecoracao1.jpg" />
                                <div class="produtoInfos">
                                    <h3> Gotas rosa </h3>
                                    <p class="produtoDescricao">Coração decorado com traços e gotas que fazem esse chocolate virar uma obra de arte.</p>
                                    <p class="tamanhoSabor">250g | Casca e recheio à sua escolha. </p>
                                    <br />
                                    <p class="preco">R$ 29,99</p>
                                    <div class="botaoQuero">
                                        <p>Eu quero</p>
                                    </div>
                                </div>
                            </div>

                            <div class="produto">
                                <img src="../../../../imgs/presentes/batecoracao2.jpg" />
                                <div class="produtoInfos">
                                    <h3>Pérolas Encantadas</h3>
                                    <p class="produtoDescricao">A decoração em pérolas traz sofisticação e elegância para esse presente que é uma jóia.</p>
                                    <p class="tamanhoSabor">250g | Casca e recheio à sua escolha. </p>
                                    <br />
                                    <p class="preco">R$ 29,99</p>
                                    <div class="botaoQuero">
                                        <p>Eu quero</p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* fim linhaOpcoes */}
                    </>
                : null }
                
            </div>{/* fim Bate Coração */}
        </>
    )
}

export default BateCoracao
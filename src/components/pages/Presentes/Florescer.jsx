import React from "react";
import {useState} from 'react'
import '../pages.css'

function Florescer() {

    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    return (
        <>
            <div class="linhasComerciais"> {/*Florescer*/}
                <button onClick={showOrHide} class="btn-presentes">
                    <h2>+ Linha Florescer</h2>
                </button>
                <p class="linhaDescricao">Se uma caixa de bombons já arranca suspiros...<br />
                    Imagina uma caixa repleta de trufas no formato da sua flor preferida. Sensacional, não?
                </p>

                { showElement ?             
                    <>
                        <br />
                        <p class="linhaDescricao"><b>EM BREVE</b></p>
                    </>
                : null }

            </div> {/*fim Florescer*/}
        </>
    )
}

export default Florescer
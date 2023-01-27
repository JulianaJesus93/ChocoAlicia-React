import React from "react";
import {useState} from 'react'
import '../pages.css'

function Nacional() {

    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    return (
        <>
            <div class="linhasComerciais"> {/*100% nacional*/}
                <button onClick={showOrHide} class="btn-presentes">
                    <h2>+ Linha 100% Nacional</h2>
                </button>
                <p class="linhaDescricao">Valorizar nossos produtos nacionais também é nossa missão.<br />
                    Uma linha toda produzida com puro cacau amazônico, combinados com sabores naturais de coco e cupuaçu.
                </p>

                { showElement ?             
                    <>
                        <br />
                        <p class="linhaDescricao"><b>EM BREVE</b></p>
                        </>
                : null }
            </div> {/*fim 100% nacional*/}
        </>
    )
}

export default Nacional
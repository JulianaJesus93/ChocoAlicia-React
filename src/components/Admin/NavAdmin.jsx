import React from "react";
import './Admin.css'
import { Link } from 'react-router-dom'

function NavAdmin() {

    return (
        <div class="headerAdmin">
            <h3>Área de administrador</h3>  
            <ul> 
                <li><Link to='/Admin'>Produtos</Link></li>
                <li><Link to='/Create'>Adicionar</Link></li>
                <li><Link to='/LoginAdmin'>Sair</Link></li>
            </ul>
        </div>
    )
}

export default NavAdmin
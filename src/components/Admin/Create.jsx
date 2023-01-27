import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Admin.css'
import NavAdmin from './NavAdmin';


export default function Create() {
    const navigate = useNavigate();
    const [Linha, setLinha] = useState('');
    const [Produto, setProduto] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [Tamanho, setTamanho] = useState('');
    const [Sabor, setSabor] = useState('');
    const [Valor, setValor] = useState('');

    const postData = () => {
        axios.post(`https://63c5c4d1f3a73b34785d4d2c.mockapi.io/apiChocoalicia`, {
            Linha,
            Produto,
            Descricao,
            Tamanho,
            Sabor,
            Valor
        }).then(() => {
            navigate('/Admin')
        })
    }

    return (
        <>
            <NavAdmin />
            <div class="central">
                <Form class="CRUD">
                    <h2>Cadastrar novo produto</h2>
                    <div class="novoProduto">
                        <label>Linha</label><br />
                        <input placeholder='Qual a linha de presentes' onChange={(e) => setLinha(e.target.value)}/><br />
                        
                        <label>Produto</label><br />
                        <input placeholder='Qual o nome do produto' onChange={(e) => setProduto(e.target.value)}/><br />
                        
                        <label>Descrição</label><br />
                        <input placeholder='Breve descrição do produto' onChange={(e) => setDescricao(e.target.value)}/><br />
                        
                        <label>Tamanho</label><br />
                        <input placeholder='Qual o tamanho do produto' onChange={(e) => setTamanho(e.target.value)}/><br />
                        
                        <label>Sabor</label><br />
                        <input placeholder='Qual o sabor do produto' onChange={(e) => setSabor(e.target.value)}/><br />
                        
                        <label>Valor</label><br />
                        <input placeholder='Qual o valor do produto' onChange={(e) => setValor(e.target.value)}/><br />
                    </div>
                    <button onClick={postData} type='submit' class="botaoCRUD">Criar</button>
                </Form>
            </div>
        </>
    )
}

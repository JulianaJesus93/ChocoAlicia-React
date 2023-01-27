import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Admin.css'
import NavAdmin from './NavAdmin';


export default function Update() {
    const navigate = useNavigate();
    const [Linha, setLinha] = useState('');
    const [Produto, setProduto] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [Tamanho, setTamanho] = useState('');
    const [Sabor, setSabor] = useState('');
    const [Valor, setValor] = useState('');
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setLinha(localStorage.getItem('Linha'))
        setProduto(localStorage.getItem('Produto'))
        setDescricao(localStorage.getItem('Descricao'))
        setTamanho(localStorage.getItem('Tamanho'))
        setSabor(localStorage.getItem('Sabor'))
        setValor(localStorage.getItem('Valor'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://63c5c4d1f3a73b34785d4d2c.mockapi.io/apiChocoalicia/${id}`, {
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
                    <h2>Atualizar produto</h2>
                    <div class="novoProduto">
                        <label>Linha</label><br />
                        <input placeholder='Qual a linha de presentes' value={Linha} onChange={(e) => setLinha(e.target.value)}/><br />

                        <label>Produto</label><br />
                        <input placeholder='Qual o nome do produto' value={Produto} onChange={(e) => setProduto(e.target.value)}/><br />

                        <label>Descrição</label><br />
                        <input placeholder='Breve descrição do produto' value={Descricao} onChange={(e) => setDescricao(e.target.value)}/><br />

                        <label>Tamanho</label><br />
                        <input placeholder='Qual o tamanho do produto' value={Tamanho} onChange={(e) => setTamanho(e.target.value)}/><br />

                        <label>Sabor</label><br />
                        <input placeholder='Qual o sabor do produto' value={Sabor} onChange={(e) => setSabor(e.target.value)}/><br />

                        <label>Valor</label><br />
                        <input placeholder='Qual o valor do produto' value={Valor} onChange={(e) => setValor(e.target.value)}/><br />
                    </div>

                    <button type='submit' onClick={updateAPIData} class="botaoCRUD">Atualizar</button>
                </Form>
            </div>
        </>
    )
}

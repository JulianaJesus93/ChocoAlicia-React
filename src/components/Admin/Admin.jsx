import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import NavAdmin from './NavAdmin';
import './Admin.css'


export default function Admin() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
       axios.get(`https://63c5c4d1f3a73b34785d4d2c.mockapi.io/apiChocoalicia`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, Linha, Produto, Descricao, Tamanho, Sabor, Valor } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Linha', Linha);
        localStorage.setItem('Produto', Produto);
        localStorage.setItem('Descricao', Descricao);
        localStorage.setItem('Tamanho', Tamanho);
        localStorage.setItem('Sabor', Sabor);
        localStorage.setItem('Valor', Valor)
    }

    {/* O getData é usado no onDelete para atualizar automaticamente a página após a exclusão de um item. */}
    const getData = () => {
        axios.get(`https://63c5c4d1f3a73b34785d4d2c.mockapi.io/apiChocoalicia`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63c5c4d1f3a73b34785d4d2c.mockapi.io/apiChocoalicia/${id}`)
            .then(() => {
                getData();
            })
    }

    const navigate = useNavigate()
    const cadastrarNovo = () => {
        navigate('/Create')
    }

    return (
        <>
            <NavAdmin />
            <div class="central">
                <div class="containerAdmin">
                    <h2>Produtos cadastrados</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Linha</th>
                                <th>Produto</th>
                                <th>Descrição</th>
                                <th>Tamanho</th>
                                <th>Sabor</th>
                                <th>Valor</th>
                                <th>Atualizar</th>
                                <th>Deletar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {APIData.map((data) => {
                                return (
                                <tr>
                                    <td>{data.Linha}</td>
                                    <td>{data.Produto}</td>
                                    <td>{data.Descricao}</td>
                                    <td>{data.Tamanho}</td>
                                    <td>{data.Sabor}</td>
                                    <td>{data.Valor}</td>
                                    <td>
                                        <Link to='/Update'><button onClick={() => setData(data)}>Atualizar</button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => onDelete(data.id)}>Deletar</button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>

                    <button class="botaoCRUD" onClick={cadastrarNovo}>Adicionar produto</button>
                </div>
            </div>
        </>
    )
}

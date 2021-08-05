import React from 'react'

import dados from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {
    const produtos = dados.map(dado => (
        <tr key={dado.id}>
            <td>{dado.id}</td>
            <td>{dado.nome}</td>
            <td>{dado.valor}</td>
        </tr>
    ))

    return (
        <table className="Tabela">
            <tbody>
                <tr>
                    <th>id</th>
                    <th>produto</th>
                    <th>preco</th>
                </tr>
                {produtos}
            </tbody>
        </table>
    )
}
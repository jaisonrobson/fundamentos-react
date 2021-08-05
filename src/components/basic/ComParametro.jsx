import React, { Fragment } from 'react'

export default ({ nota, nome }) => <Fragment>
    <h2>Situacao do Aluno</h2>
    <p>
        <strong>{nome}</strong>
        {` tem nota `}
        <strong>{nota}</strong>
        {` e esta `}
        <strong>{nota >= 7 ? 'Aprovado' : 'Reprovado'}</strong>
    </p>
</Fragment>
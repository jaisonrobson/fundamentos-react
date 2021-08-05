import React from 'react'
import If, { Else } from './If'

export default ({ usuario }) => (
    <div>
        {/* <If test={usuario && usuario.nome}>
            Seja bem vindo(a) <strong>{usuario.nome}</strong>!
        </If> */}

        <If test={usuario && usuario.nome}>
            Seja bem vindo(a) <strong>{usuario.nome}</strong>
            <Else>
                Seja bem vindo(a) <strong>Amigo</strong>!
            </Else>
        </If>
    </div>
)
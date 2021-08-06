import './App.css'
import React from 'react'

import Aleatorio from './components/basic/Aleatorio'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'
import Primeiro from './components/basic/Primeiro'
import Card from './components/layout/Card'
import Familia from './components/basic/Familia'
import FamiliaMembro from './components/basic/FamiliaMembro'
import ListaAlunos from './components/repetition/ListaAlunos'
import TabelaProdutos from './components/repetition/TabelaProdutos'
import ParImpar from './components/conditional/ParImpar'
import UsuarioInfo from './components/conditional/UsuarioInfo'
import DiretaPai from './components/comunication/DiretaPai'
import IndiretaPai from './components/comunication/IndiretaPai'
import Input from './components/form/Input'

const App = (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - Componente controlado" color="#e45f56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicacao indireta entre componentes" color="#8bad39">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicacao direta entre componentes" color="#59323c">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderizacao condicional" color="#982395">
                <ParImpar numero={33} />
                <UsuarioInfo usuario={{ nome: 'Vivaldi' }} />
                <UsuarioInfo usuario={{ email: 'fanboy@gmail.com' }} />
            </Card>

            <Card titulo="#07 - Repeticao com tabela" color="#3a9ad9">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repeticao com lista" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Robson" />
                    <FamiliaMembro nome="Emily" />
                    <FamiliaMembro nome="Valeria" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio do numero aleatorio" color="#FA6900">
                <Aleatorio max={50} min={0} />
            </Card>

            <Card titulo="#03 - Exemplo de fragment" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Componente com parametro" color="#E8B71A">
                <ComParametro nome="Juao Paulo" nota={2.3} />
            </Card>

            <Card titulo="#01 - Primeiro componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
)

export default App
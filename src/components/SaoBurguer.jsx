import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/x-salada/Logo.png'
import Menu from '../assets/x-salada/Menu.png'
import Direita from '../assets/x-salada/direita.png'
import Esquerda from '../assets/x-salada/esquerda.png'
import Pesquisar from '../assets/x-salada/pesquisar.png'
import SaibaMais from '../assets/x-salada/Saiba-mais.png'

import './Global.css'
import './SaoBurguer.css'

export function SaoBurguer() {
    return (
        <div className="content saoBurguer">
            <main>
                <header>
                    <img id="Menu" src={Menu} alt="Menu" />
                    <Link id="Logo" to="/">
                        <img src={Logo} alt="Luma Burguer" />
                    </Link>
                </header>

                <section>
                    <div className="vertical">
                        <h2 id="text-vertical">SÃO BURGER</h2>
                    </div>

                    <div className="text">
                        <h2>Só para os santinhos da mamãe</h2>
                        <p>Contrariar a mãe é quase tão grave quanto não provar essa obra feita por mãos santas. </p>
                        <button>
                            Saiba mais
                            <img src={SaibaMais} alt="" />    
                        </button>  
                    </div>
                </section>

                <img id="Pesquisar" src={Pesquisar} alt="" />
            </main>

            <div id="buttons">
                <Link id="Esquerda" to='/'>
                    <img src={Esquerda} alt="" />
                </Link>
                <Link id="Direita" to='/x-bacon'>
                    <img src={Direita} alt="" />
                </Link>
            </div>
        </div>
    )
}
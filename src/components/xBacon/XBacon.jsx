import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/x-salada/Logo.png'
import Direita from '../../assets/x-salada/direita.png'
import Esquerda from '../../assets/x-salada/esquerda.png'
import Pesquisar from '../../assets/x-salada/pesquisar.png'
import SaibaMais from '../../assets/x-salada/Saiba-mais.png'

import { Menu } from '../menu/Menu'

import '../Global.css'
import './XBacon.css'

export function XBacon() {
    return (
        <div className="content xBacon">
            <main>
                <header>
                    <Menu />
                    <Link id="Logo" to="/">
                        <img src={Logo} alt="Luma Burguer" />
                    </Link>
                </header>

                <section>
                    <div className="vertical">
                        <h2 id="text-vertical">X-BACON ESPACIAL</h2>
                    </div>

                    <div className="text">
                        <h2>Na nasa tem bacon?</h2>
                        <p>- Alô, Houston, nós temos um pedido saindo no capricho. Nome:Tom Hanks Endereço: Apollo 13</p>
                        
                        <button>
                            Saiba mais
                            <img src={SaibaMais} alt="" />    
                        </button>  
                    </div>
                </section>

                <img id="Pesquisar" src={Pesquisar} alt="" />
            </main>

            <div id="buttons">
                <Link id="Esquerda" to='/sao-burguer'>
                    <img src={Esquerda} alt="" />
                </Link>
                <Link id="Direita" to='/combo'>
                    <img src={Direita} alt="" />
                </Link>
            </div>
        </div>
    )
}
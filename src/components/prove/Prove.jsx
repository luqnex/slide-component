import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/x-salada/Logo.png'
import Direita from '../../assets/x-salada/direita.png'
import Esquerda from '../../assets/x-salada/esquerda.png'
import Pesquisar from '../../assets/x-salada/pesquisar.png'
import SaibaMais from '../../assets/x-salada/Saiba-mais.png'

import { Menu } from '../menu/Menu'

import '../Global.css'
import './Prove.css'

export function Prove() {
    return (
        <div className="content prove">
            <main>
                <header>
                    <Menu />
                    <Link id="Logo" to="/">
                        <img src={Logo} alt="Luma Burguer" />
                    </Link>
                </header>

                <section>
                    <div className="vertical">
                        <h2 id="text-vertical">PROVE EM CASA</h2>
                    </div>

                    <div className="text">
                        <h2>Me chama baby, estou te esperando.</h2>
                        <p>Um delivery sensacional para uma fome fora do normal. A gente sabe, quando a fome bate o jeto é pedir. </p>
                        
                        <button>
                            Saiba mais
                            <img src={SaibaMais} alt="" />    
                        </button>  
                    </div>
                </section>

                <img id="Pesquisar" src={Pesquisar} alt="" />
            </main>

            <div id="buttons">
                <Link id="Esquerda" to='/combo'>
                    <img src={Esquerda} alt="" />
                </Link>
                <Link id="Direita" to='/'>
                    <img src={Direita} alt="" />
                </Link>
            </div>
        </div>
    )
}
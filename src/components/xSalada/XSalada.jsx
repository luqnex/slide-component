import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/x-salada/Logo.png'
import Direita from '../../assets/x-salada/direita.png'
import Esquerda from '../../assets/x-salada/esquerda.png'
import Pesquisar from '../../assets/x-salada/pesquisar.png'
import SaibaMais from '../../assets/x-salada/Saiba-mais.png'

import { Menu } from '../menu/Menu'

import '../Global.css'
import './XSalada.css'

export function XSalada() {
    return (
        <div className="content xSalada">
            <main>
                <header>
                    <Menu />
                    <Link id="Logo" to="/">
                        <img src={Logo} alt="Luma Burguer" />
                    </Link>
                </header>

                <section>
                    <div className="vertical">
                        <h2 id="text-vertical">X-DUPLO SALADA</h2>
                    </div>

                    <div className="text">
                        <h2>A combinação perfeita existe?</h2>
                        <p>Sabe o que dizem, né? <br /> "Azar no amor, sorte no sabor." <br /> Se eu fosse você não deixaria essa gostosura cair no estomago de outro. </p>
                        
                        <button>
                            Saiba mais
                            <img src={SaibaMais} alt="" />    
                        </button>  
                    </div>
                </section>

                <img id="Pesquisar" src={Pesquisar} alt="" />
            </main>

            <div id="buttons">
                <Link id="Esquerda" to='/prove'>
                    <img src={Esquerda} alt="" />
                </Link>
                <Link id="Direita" to='/sao-burguer'>
                    <img src={Direita} alt="" />
                </Link>
            </div>
        </div>
    )
}
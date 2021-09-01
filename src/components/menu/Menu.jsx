import React from 'react'

import LogoMenu from '../../assets/x-salada/Menu.png'
import img01 from '../../assets/menu/01.png'
import img02 from '../../assets/menu/02.png'
import img03 from '../../assets/menu/03.png'
import img04 from '../../assets/menu/04.png'
import Instagram from '../../assets/menu/instagram.png'
import Facebook from '../../assets/menu/facebook.png'

import './Menu.css'

export function Menu(props) {
    function menuOpen() {
        document.getElementById('menu').classList.add('open')
    }

    function menuClose() {
        document.getElementById('menu').classList.remove('open') 
    }
    
    return (
       <div className="content-menu">
            <img 
                id="logoMenu"
                src={LogoMenu} 
                alt="menu" 
                onClick={menuOpen}
            />
            
            <div id="menu" onClick={menuClose}>
                <aside>
                    <div className="content-aside">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={img01} alt="01" />
                                    Delivery
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <img src={img02} alt="01" />
                                    Nossa casa
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <img src={img03} alt="01" />
                                    Eventos
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <img src={img04} alt="01" />
                                    Trabalhe na Luma
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            
                <footer>
                    <div className="content-footer">
                        <div className="text">
                            <h3>
                                Contatos e local
                            </h3>

                            <p>
                                541 Melville Ave, Palo Alto, CA 94301, <br />
                                lumaburger@hotmai.com <br />
                                Telefone: +9876543210 <br />
                            </p>
                        </div>

                        <div className="social">
                            <img src={Instagram} alt="Instagram" />
                            <img src={Facebook} alt="Facebook" />
                            <p>@lumaburguer</p>
                        </div>
                    </div>
                </footer>

                <hr />
            </div>

       </div>
    )
}
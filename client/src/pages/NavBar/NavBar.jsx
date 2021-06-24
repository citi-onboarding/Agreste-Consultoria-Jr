import React from "react";
import './NavBar.css';
import logo from "./imagem/logoNav.png";
import iconMenu from "./imagem/iconMenu.png";


export default function NavBar(){
    
    function atvMenu(event) {
        if(event.type==='touchstart') event.preventDefault();
        const nav = document.getElementById('navBar');
        nav.classList.toggle('active');

        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('area-expanded', active);

        if(active){
            event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
        }
        else {
            event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
        }
    }

    return(
        <header id="header" class="header">
            <div class="logo">
                <img src={logo} alt="Logo da empresa nas cores azul e branco"/>
            </div>

            <nav id="navBar" >
                <div  aria-label="Abrir Menu" id="hamburguer" class="hamburguer" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                    <img src={iconMenu} onClick={atvMenu} alt="imagem do ícone do menu. São quatro barras azuis alinhadas na vertical"/>
                </div>
                
                    <ul id="menu" class="menu" role="Menu">
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#servicos">Nossos serviços</a></li>
                        <li><a href="#depoimentos">Nossos clientes</a></li>
                        <li><a href="#conteudo">Conteúdo</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul> 
            </nav>
        </header>
    );
}


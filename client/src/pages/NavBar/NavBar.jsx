import React, {useState, useEffect} from "react";
import './NavBar.css';
import logo from "./imagem/logoNav.png";
import iconMenu from "./imagem/iconMenu.png";


export default function NavBar(){
    const hamburguer = document.getElementById('hamburguer');


const [hamburgerIsOpen, setHamburgerIsOpen ] = useState(false);

    return(
        <header id="header" class="header">
        <div class="logo">
            <img src={logo} alt="Logo da empresa nas cores azul e branco"/>
        </div>

        <nav id="navBar" >
            <div  aria-label="Abrir Menu" id="hamburguer" class="hamburguer" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                <img src={iconMenu} onClick = {() => setHamburgerIsOpen(true)} alt="imagem do ícone do menu. São quatro barras azuis alinhadas na vertical"/>
            </div>
            
             
                <ul id="menu" class="menu" role="Menu">
                    <li><a href="">Início</a></li>
                    <li><a href="">Nossos serviços</a></li>
                    <li><a href="">Nossos clientes</a></li>
                    <li><a href="">Conteúdo</a></li>
                    <li><a href="">Contato</a></li>
                </ul> 
            
        </nav>
    </header>
    );
}


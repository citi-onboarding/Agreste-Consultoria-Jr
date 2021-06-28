import React, { useState, useEffect } from "react";
import './Footer.css';
import axios from "axios";
import iconInsta from "./imagem/insta.png";
import iconTell from "./imagem/telefone.png";
import logoCiti from "./imagem/logo-citi.png";
import logoFooter from "./imagem/logoAgreste.png";


function Footer() {
    const [Footer, setFooter] = useState([]);

    const loadFooter = async () => {
        const res = await axios.get("http://localhost:3001/api/company");
        setFooter(res.data);
    };

    useEffect(() => {
        loadFooter();
    }, []);

    
    return(
        <footer id="footer" class="footer">
            <div class="footer-esquerda">
                <div class="footer-social">
                    <div class="social-icon">
                        <img src={iconTell} alt="icone de telefone na cor azul"/>
                        <img src={iconInsta} alt="icone do instagram na cor azul"/>
                    </div>
                    <div class="social-txt">
                    {Footer?.map(({phone, instagram})=>(
                        <>
                            <p>{phone}</p>
                            <p>{instagram}</p>
                        </>
                    ))}   
                    </div>
                </div>
                {Footer?.map(({contact})=>(
                        <>
                            <p class="txt-contato">{contact}</p>
                        </>
                ))} 
            </div>
            <div class="footer-logo"> 
                <img src={logoFooter} alt="Logo com o nome Agreste Consultoria na cor preta e em cima do nome o icone com um cacto na cor azul e branco"/>
            </div>
            <div class="endereco">
                {Footer?.map(({adress})=>(
                    <>
                        <p>{adress}</p>
                    </>
                ))} 
                <div class="footer-logo-citi">
                    <strong>Made with &#60;&#47;&#62; and &hearts; by </strong>
                    <img src={logoCiti} alt="Logo com o nome da empresa Citi na cor preta"/>
                </div>
            </div>
        </footer>
    );
}
export default Footer;

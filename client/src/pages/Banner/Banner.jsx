import React, { useState, useEffect } from "react";
import './Banner.css';
import axios from "axios";
//import { Button } from ".//..//components"
import logo from "./imagem/Logo.png";

function Banner() {
    const [Banner, setBanner] = useState([]);

    const loadBanner = async () => {
        const res = await axios.get("https://elementusjr.herokuapp.com/api/banner");
        setBanner(res.data);
    };

    useEffect(() => {
        loadBanner();
    }, []);

    
    return(
        <section class="banner" role="banner">
        <div class="banner-conteudo">
            <div class="banner-txt">
                <h1>Banner com a proposta de valor da Agreste Consultoria Jr</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="banner-direita">
                <div class="banner-logo">
                    <img src={logo} alt="imagrm do banner"/>
                </div>
                
            </div>
        </div>
    </section>
    );
}
export default Banner;

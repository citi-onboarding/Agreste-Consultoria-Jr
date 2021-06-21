import React, { useState, useEffect } from "react";
import './Banner.css';
import axios from "axios";
import { default as Button } from "../../components/Button";
import { default as QuemSomos} from "../../components/QuemSomos";
import logo from "./imagem/Logo.png";
import seta from "./imagem/setaBtn-banner.png";

function Banner({background}) {
    const [Banner, setBanner] = useState([]);

    const loadBanner = async () => {
        const res = await axios.get("http://localhost:3001/api/banner");
        setBanner(res.data);
    };

    useEffect(() => {
        loadBanner();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);
    return(
        <>
        {Banner?.map(({image})=>(
            <>
                <section class="banner" role="banner" background={image}>
                <div class="banner-conteudo">
                    <div class="banner-txt">
                        {Banner?.map(({titulo, descricaoBanner})=>(
                            <>
                                <h1>{titulo}</h1>
                                <p>{descricaoBanner}</p>
                            </>
                        ))}
                        
                    </div>
                    <div class="banner-direita">
                        <div class="banner-logo">
                            <img src={logo} alt="imagrm do banner"/>
                        </div>
                        <div className="btn-banner">
                            <Button  nomeBtn="Mais sobre nós" imagem={seta}/>
                        </div>
                            
                    </div>
                </div>
                </section>
            </>
        ))}
        </>
    );
}
export default Banner;

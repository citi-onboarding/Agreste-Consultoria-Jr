import React, { useState, useEffect } from "react";
import './Banner.css';
import axios from "axios";
import { default as CardQuemSomos } from "../../components/CardQuemSomos";
import { default as Button } from "../../components/Button";
import seta from "./imagem/setaBtn-banner.png";
import missao from "./imagem/missao.png";
import visao from "./imagem/visao.png";
import valor from "./imagem/valor.png";
import setaSQ from "./imagem/seta.png";
import logo from "./imagem/Logo.png";

function Banner() {
    
    const [Banner, setBanner] = useState([]);

    const loadBanner = async () => {
        const res = await axios.get("http://localhost:3001/api/banner");
            setBanner(res.data);
    };

    useEffect(() => {
        loadBanner();
    }, 
    []);
    
    useEffect(() => {
        console.log('Banner:', Banner);
    }, [Banner]);

    function popupToggle (){
        const aparecer = document.getElementById('aparecer')
        aparecer.classList.toggle('active')
    }

    return(
            <>
                <div className="tela-inicial">
                    <section class="banner" role="banner" src={Banner.image?.url}>
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
                                <div className="btn-banner"  onClick={popupToggle}>
                                    <Button nomeBtn="Mais sobre nós" imagem={seta}/>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="aparecer" className="QuemSomos" >
                        <div className="QuemSomos-conteudo">
                            <div className="QuemSomos-txt">
                                <h2>Quem somos</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                
                                <div className="btnQuemSomos" onClick={popupToggle} >
                                    <Button    imagemInversa={setaSQ} nomeBtn="Voltar" buttonSize="150px" paddingLeftSeta="10px" marginRightNomeBtn="10px"/>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="missao">
                                        <CardQuemSomos titulo="Missão" imagem={missao} descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                                </div>  
                                    
                                <div className="visao">
                                        <CardQuemSomos titulo="Visão" imagem={visao} descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                                </div>

                                <div className="valores" >
                                        <CardQuemSomos titulo="valores" imagem={valor} descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        
        
    );
}
export default Banner;

import React, { useState, useEffect } from "react";
import './Banner.css';
import axios from "axios";
import { default as CardQuemSomos } from "../../components/CardQuemSomos";
import { default as Button } from "../../components/Button";
import seta from "./imagem/setaBtn-banner.png";
import missaoimg from "./imagem/missao.png";
import visaoimg from "./imagem/visao.png";
import valorimg from "./imagem/valor.png";
import setaSQ from "./imagem/seta.png";
import logo from "./imagem/Logo.png";

function Banner() {
    
    const [sobre, setSobre] = useState([]);

    const loadSobre = async () => {
        const res = await axios.get('http://localhost:3001/api/QuemSomos');
        setSobre(res.data);
    };

    const [Banner, setBanner] = useState([]);

    const loadBanner = async () => {
        const res = await axios.get("http://localhost:3001/api/banner");
            setBanner(res.data);
    };

    useEffect(() => {
        loadBanner();
        loadSobre();
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
                                {sobre?.map(({ quemSomos }) => (
                                <p>{ quemSomos }</p>
                                ))}
                                <div className="btnQuemSomos" onClick={popupToggle} >
                                    <Button    imagemInversa={setaSQ} nomeBtn="Voltar" buttonSize="150px" paddingLeftSeta="10px" marginRightNomeBtn="10px"/>
                                </div>
                            </div>

                            {sobre?.map(({ missao, visao, valores }) => (
                            <>
                                <div className="cards">
                                    <div className="missao">
                                            <CardQuemSomos titulo="Missão" imagem={missaoimg} descricao={missao}/>
                                    </div>  
                                        
                                    <div className="visao">
                                            <CardQuemSomos titulo="Visão" imagem={visaoimg} descricao={visao}/>
                                    </div>

                                    <div className="valores" >
                                            <CardQuemSomos titulo="valores" imagem={valorimg} descricao={valores}/>
                                    </div>
                                </div>
                            </>
                            ))}

                        </div>
                    </section>
                </div>
            </>
        
        
    );
}
export default Banner;

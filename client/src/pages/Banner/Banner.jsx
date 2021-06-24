import React, { useState, useEffect } from "react";
import './Banner.css';
import axios from "axios";
import { default as Button } from "../../components/Button";
import { default as QuemSomos} from "../../components/QuemSomos";
import logo from "./imagem/Logo.png";
import seta from "./imagem/setaBtn-banner.png";

function Banner() {
    const [Banner, setBanner] = useState([]);

    const loadBanner = async () => {
        const res = await axios.get("http://localhost:3001/api/Banner");
        setBanner(res.data);
    };

    useEffect(() => {
        loadBanner();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);
    return(
        <>
            {Banner?.map( Banner =>{
          return(
              ( <section style={{backgroundImage: `linear-gradient(rgba(255, 250, 250, 0.445), rgba(255, 255, 255, 0.233)), url(${Banner.image[0]?.url})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} className="banner">
                     <div class="banner-conteudo">
                        <div class="banner-txt">
                            
                                
                                    <h1>{Banner.titulo}</h1>
                                    <p>{Banner.descricaoBanner}</p>
                                
                            
                            
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
              </section>) )
           })}
        
        </>
    );
}
export default Banner;

import React ,{ useEffect, useState }from 'react';
import './ContentPage.css';
import { ContentMobile } from '../../components';
import axios from 'axios';
import Button from '../../components/Button';
import LogoMissao from "./assets/logo-missao.png";
import Image from "./assets/contentimg.png";


export default function ContentPage(){

    const [content, setContent] = useState([]);

    const loadContent = async () => {
        const res = await axios.get('http://localhost:3001/api/conteudos');
        setContent(res.data);
    };

    useEffect(() => {
        loadContent();
    }, []);

    return(
        <>
            <div className="header-title">
                <h1>Nosso Conteúdo</h1>
            </div>
            <div className="struct-content">
                <div className="image-section">
                    <img className="image-of-turn" src={Image}/>
                </div>
                <div className="second-column">
                    <div className="all-information">
                        <h2>Nome do Conteúdo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id illum eaque maiores quasi labore nulla corrupti quod officia dicta exercitationem odit quia assumenda quo consectetur sunt ab, error illo!</p>
                        <div className="button">
                            <Button nomeBtn="Link para a postagem" buttonTextColor="white"/>
                        </div>
                    </div>
                    <div className="card-compact" >
                        <div className="content-card-title">
                            <h3>Acesse conteúdos gratuitos:</h3>
                        </div>
                        <div className="cards">
                            <div className="card-content1">
                                <img className="thumb" src={Image}/>
                                <h4>Nome do conteúdo</h4>
                            </div>
                            <div className="card-content2">
                                <img className="thumb" src={Image}/>
                                <h4>Nome do conteúdo</h4>
                            </div>
                            <div className="card-content3">
                                <img className="thumb" src={Image}/>
                                <h4>Nome do conteúdo</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile">
            {content?.map(({nomeConteudo, descricaoConteudo, imagem})=>(
                <>
                    <ContentMobile className="mobile" 
                    contentTitle={nomeConteudo} 
                    image={imagem.url} 
                    textDescription={descricaoConteudo}
                    />    
                </>
            ))}
                   
            </div>
        </>
    );
}
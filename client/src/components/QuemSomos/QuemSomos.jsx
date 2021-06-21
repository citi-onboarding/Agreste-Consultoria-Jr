import React from 'react';
import './QuemSomos.css';
import { default as Button } from "../Button";
import { default as CardQuemSomos } from "../CardQuemSomos";
import seta from "./imagem/seta.png";
import missao from "./imagem/missao.png";
import visao from "./imagem/visao.png";
import valor from "./imagem/valor.png";
export default function QuemSomos(){
    return(
        <section className="QuemSomos">
        <div className="QuemSomos-conteudo">
            <div className="QuemSomos-txt">
                <h2>Quem somos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                
                <div className="btnQuemSomos">
                    <Button imagemInversa={seta} nomeBtn="Voltar" buttonSize="150px" paddingLeftSeta="10px" marginRightNomeBtn="10px"/>
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
        
    );
}
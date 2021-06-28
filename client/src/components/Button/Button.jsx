import React from "react";
import './Button.css';

export default function Button({nomeBtn, imagem, imagemInversa, paddingLeftSeta, marginRightNomeBtn, buttonColor, buttonSize, buttonTextColor, linkBtn}){
    
    return(
        <>
            <div className="btn">    
                <a href={linkBtn} target="_blank">
                    <button type="button" role="button"
                    style={{background: buttonColor, width: buttonSize, }}>
                    {imagemInversa && (<img src={imagemInversa} alt="icone de uma seta apontando para esquerda indicando a opção de voltar ao Banner"/>)} 
                    <span style={{color: buttonTextColor, marginRight: marginRightNomeBtn, paddingLeft: paddingLeftSeta}}>
                        {nomeBtn}
                    </span> 

                        {imagem && (<img src={imagem} alt="icone de uma seta apontando para direita indicando a opção de acesso a seção Quem Somos"/>)}    
                    </button>
                </a>    
            </div>
        </>
    );
} 

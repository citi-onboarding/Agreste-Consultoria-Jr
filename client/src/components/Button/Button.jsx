import React from "react";
import './Button.css';

export default function Button({nomeBtn, imagem, imagemInversa, paddingLeftSeta, marginRightNomeBtn, buttonColor, buttonSize, buttonTextColor, linkBtn}){
    
    return(
            <div className="btn">    
                <a href={linkBtn} target="_blank">
                    <button type="button" 
                    style={{background: buttonColor, width: buttonSize, }}>
                    {imagemInversa && (<img src={imagemInversa} alt=""/>)} 
                    <span style={{color: buttonTextColor, marginRight: marginRightNomeBtn, paddingLeft: paddingLeftSeta}}>
                        {nomeBtn}
                    </span> 
                    
                        {imagem && (<img src={imagem} alt=""/>)}    
                    </button>
                </a>    
            </div>
    );
} 

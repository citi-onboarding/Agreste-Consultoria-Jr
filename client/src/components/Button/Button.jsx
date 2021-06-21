import React from "react";
import './Button.css';

export default function Button({nomeBtn, imagem, buttonColor, buttonSize, textSize, buttonTextColor}){
    return(
    <div className="btn">
        <button type="button" 
        style={{
        background: buttonColor,
        width: buttonSize,
        }}>

        <span style={{color: buttonTextColor, fontSize: textSize}}>{nomeBtn}</span> {imagem && (<img src={imagem} alt=""/>)}
        </button>
    </div>
    );
} 

import React from "react";
import './Button.css';

export default function Button({nomeBtn, imagem, buttonColor, buttonSize, textSize, buttonTextColor}){
    return(
    <div 
        className="btn">
        <button type="button" 
        style={{
        background: buttonColor,
        width: buttonSize,
        }}>
      
        <p style={{color: buttonTextColor, fontSize: textSize, }}>{nomeBtn}</p><img src={imagem} alt=""/></button>
    </div>
    );
} 

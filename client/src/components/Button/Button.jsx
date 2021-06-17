import React from "react";
import './Button.css';

export default function Button({nomeBtn, imagem, buttonColor, buttonSize, buttonTextColor}){
    return(
    <div 
        className="btn">
        <button type="button" 
        style={{
        background: buttonColor,
        width: buttonSize,
        }}>
      
        <p style={{color: buttonTextColor,}}>{nomeBtn}</p><img src={imagem} alt=""/></button>
    </div>
    );
} 

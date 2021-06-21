import React from 'react';
import './CardQuemSomos.css';

export default function CardQuemSomos({titulo, descricao, imagem}){
    return(
        
    <div class="card">
        <div class="content">
            <h3>{titulo}</h3>
            <div class="icon"><img src={imagem} alt=""/></div>
            <p>{descricao}</p>
        </div>
    </div>
        
    );
}
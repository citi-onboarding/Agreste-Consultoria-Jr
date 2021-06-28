import React from 'react';
import './CardQuemSomos.css';

export default function CardQuemSomos({titulo, descricao, imagem}){
    return(
        
    <div class="card">
        <div class="content">
            <h3>{titulo}</h3>
            <div class="icon"><img src={imagem} alt="icone que representa a o valor do respectivo card"/></div>
            <p>{descricao}</p>
        </div>
    </div>
        
    );
}
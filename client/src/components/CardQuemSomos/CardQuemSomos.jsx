import React from 'react';
import './CardQuemSomos.css';

export default function CardQuemSomos({titulo, descricao, imagem}){
    return(
        
        <div className="container">
            <div className="card">
                    <h2>{titulo}</h2>
                    <div className="card-img">
                        <img src={imagem} alt="icon"/>
                    </div>
                    <p>{descricao}</p>
                </div>
        </div>
        
    );
}
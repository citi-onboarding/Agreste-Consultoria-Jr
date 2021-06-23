import React from 'react';
import './CardService.css';
import Image from './image/contentimg.png';

export default function CardService({imageService, contentText, descricptionService}){
    return(
        <>
        <div className="external-container-card-service">
            <div className="card-service" style={{backgroundImage: `url(${imageService})` }}>
                <div className="card-service-information">
                    <div className="service-title">
                        <h2>{contentText}</h2>
                    </div>
                    <div className="service-description">
                        <p>{descricptionService}</p>
                    </div>
                </div>            
            </div>
        </div>
        </>
    );
}
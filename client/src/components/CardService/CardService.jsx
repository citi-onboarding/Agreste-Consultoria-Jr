import React from 'react';
import './CardService.css';
import Image from './image/contentimg.png';

export default function CardService({imageService, contentText, descricptionService}){

    return(
        <>
        <div className="external-container-card-service">
            <div className="card-service" style={{backgroundImage: `linear-gradient(180deg, rgba(3, 44, 102, 0.0104167) -4.34%, rgba(3, 44, 102, 0) 18.64%, rgba(3, 44, 102, 0.5) 66.48%), url(${imageService})` }}>
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
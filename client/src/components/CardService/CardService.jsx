import React from 'react';
import './CardService.css';
import Image from './image/contentimg.png';

export default function CardService({imageService, contentText}){
    return(
        <>
        <div className="external-container-card-service">
            <div className="card-service" style={{backgroundImage: `url(${imageService})` }}>
                <div className="service-title">
                    <h2>{contentText}</h2>
                </div>
                <div className="service-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nobis porro laborum at esse repellendus incidunt ipsam exercitationem inventore culpa maiores fugiat aperiam odio, consequatur adipisci soluta fuga vel sed.</p>
                </div>            
            </div>
        </div>
        </>
    );
}
import React from 'react';
import './ContentMobile.css';
import { default as Button } from '../Button';

export default function ContentMobile({image, sectionTitle, contentTitle, textDescription}){
    return(
        <>
            <div className="titulo">
                <h1 className="section-title">{sectionTitle}</h1>
            </div>
            <div className="content-container">
                <div className="content-border">
                    <img className="image-content" src={image} />
                </div>
                <h2 className="text-titulo">{contentTitle}</h2>
                <p className="text-description">{textDescription}</p>
                <Button nomeBtn="Link para a postagem" imagem="none" buttonTextColor="white" buttonSize="100%" textSize="20px"/>
            </div>
            
        </>
    );
}
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
                <div className="image-content" >
                    <img className="image" src={image}/>
                </div>
                <h2 className="text-title">{contentTitle}</h2>
                <text className="text-description"> {textDescription} </text>
            
                <div className="button">
                    <Button nomeBtn="Link para a postagem" buttonSize="100%" buttonTextColor="white" textSize="16px"/>
                </div>
            </div>
        </>
    );
}
import React from 'react'
import './CardDepoiment.css';

export default function CardDepoiment({imagemDpm, tituloDpm, textoDpm}){
    return(
            <div className="contentDepoimento">
                <div className={"depoiment-card"}>
                    <div className="foto" style={{ backgroundImage: `url(${imagemDpm})`}}></div>
                    <div className="externo">
                        <p className="descricao">{textoDpm}</p>
                        <h1 className="nome">{tituloDpm}</h1>
                    </div>
                </div>
            </div>
    );
}
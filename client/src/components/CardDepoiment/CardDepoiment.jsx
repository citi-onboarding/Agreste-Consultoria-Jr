import React from 'react'
import './CardDepoiment.css';

export default function CardDepoiment(){
    return(
        <div className={"depoiment-card"}>
            <div className="foto"></div>
            <div className="externo">
                <p className="descricao">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h1 className="nome">Nome da pessoa/empresa</h1>
            </div>
        </div>
    );
}
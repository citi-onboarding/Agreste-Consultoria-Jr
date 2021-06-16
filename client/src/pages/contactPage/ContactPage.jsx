import React from 'react';
import './ContactPage.css';
import ContactImage from '../../assets/bussinessman.png';

export default function ContactPage(){
    return(
        <>
            <div className="page-container">
                <div className="image-contact"/>
                <div className="contact-container">
                    <div className="contact-elements">
                        <h1>Contato</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='contact-input'>
                                <input 
                                    type="text" 
                                    className="nome" 
                                    placeholder="Nome"
                                />
                                <div className="e-mail-telefone">
                                    <input 
                                        type="e-mail" 
                                        className="e-mail" 
                                        placeholder="E-mail"/> 
                                    <input 
                                        className="telefone" 
                                        placeholder="Telefone"
                                    />
                                </div>
                                <input 
                                    type="text" 
                                    className="assunto" 
                                    placeholder="Assunto"/> 
                                <textarea className="mensagem" placeholder="Mensagem"/> 
                        </div>
                        <div className='botao'>
                            <button> enviar </button>
                        </div>
                    </div>
                </div> 
            </div> 
        </>
    );
}
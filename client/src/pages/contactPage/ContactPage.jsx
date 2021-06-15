import React from 'react';
import './ContactPage.css';
import ContactImage from '../../assets/bussinessman.png';

export default function ContactPage(){
    return(
        <>
            <div className="page-container">
                <div className="image-contact">
                </div>
                <div className="contact-container">
                    <div className="contact-elements">
                        <h1>Contato</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='contact-input'>
                            <ul>
                                <ui> <input></input> </ui>
                                <ui> <input></input> <input></input> </ui>
                                <ui> <input></input> </ui>
                                <ui>  <input></input> </ui>
                            </ul>
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
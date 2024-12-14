import React from 'react';
import './ChatMessages.css';
import { Avatar } from '../../assets/avatar.js';

// Componente ChatMessages
export const ChatMessages = ({ message }) => {
    return (
        <div 
            className={`chat-message ${message.user === 'gpt' ? 'chatgpt' : ''}`} 
            role="alert" 
            aria-live="polite"
        >
            <div className="chat-message-center">
                {/* Avatar */}
                <div className={`avatar ${message.user === 'gpt' ? 'chatgpt' : ''}`}>
                    {message.user === 'gpt' && <Avatar />}
                </div>

                {/* Conteúdo da mensagem */}
                <div className="message">
                    {message.message}
                </div>
            </div>
        </div>
    );
};

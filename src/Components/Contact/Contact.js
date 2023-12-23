// Contact.js

import React, { useState } from "react";
import "./Contact.css";
import robo from "./giphyRobo.gif";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [resume, setResume] = useState(null);
    const [level, setLevel] = useState('');
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);
    const [levelFocused, setLevelFocused] = useState(false);

    const handleInputChange = (inputType, value) => {
        switch (inputType) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            case 'level':
                setLevel(value);
                break;
            default:
                break;
        }
    };

    const handleInputFocus = (inputType) => {
        switch (inputType) {
            case 'name':
                setNameFocused(true);
                break;
            case 'email':
                setEmailFocused(true);
                break;
            case 'message':
                setMessageFocused(true);
                break;
            case 'level':
                setLevelFocused(true);
                break;
            default:
                break;
        }
    };

    const handleInputBlur = (inputType) => {
        switch (inputType) {
            case 'name':
                setNameFocused(name.trim() !== '');
                break;
            case 'email':
                setEmailFocused(email.trim() !== '');
                break;
            case 'message':
                setMessageFocused(message.trim() !== '');
                break;
            case 'level':
                setLevelFocused(level.trim() !== '');
                break;
            default:
                break;
        }
    };

    const autoExpand = (element) => {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
    };

    return (
        <div className="contact-form-container">
            <img src={robo}/>

            <div className="contact-form">
                <h2>Contact Me</h2>
                <form>
                    <div className={`input-container ${nameFocused ? 'focused' : ''}`}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            onFocus={() => handleInputFocus('name')}
                            onBlur={() => handleInputBlur('name')}
                            required
                        />
                        <label>Your Name</label>
                    </div>

                    <div className={`input-container ${emailFocused ? 'focused' : ''}`}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            onFocus={() => handleInputFocus('email')}
                            onBlur={() => handleInputBlur('email')}
                            required
                        />
                        <label>Your Email</label>
                    </div>

                    <div className={`input-container ${messageFocused ? 'focused' : ''}`}>
                        <textarea
                            value={message}
                            onChange={(e) => {
                                handleInputChange('message', e.target.value);
                                autoExpand(e.target);
                            }}
                            onFocus={() => handleInputFocus('message')}
                            onBlur={() => handleInputBlur('message')}
                            required
                        />
                        <label>Your Message</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

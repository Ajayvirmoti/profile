import React,{useState} from "react";
import "./Contact.css";
import robo from "./giphyRobo.gif"
// import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [resume, setResume] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your logic here to handle form submission
        // You can use the form data (name, email, message, resume) for further processing

        // Example: Display form data in the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Resume:', resume);
    };
    return (
        <div>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>

                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>

                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </label>

                <label>
                    Resume (Optional):
                    <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
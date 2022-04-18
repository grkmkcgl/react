import "./contact.scss";
import StarIcon from '@material-ui/icons/Star';
import { useState } from "react";

export default function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2><StarIcon className="icon"/>Contact Me!<StarIcon className="icon"/></h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">SEND</button>
                    {message && <span>Thanks, I'll reply as soon as possible :).</span>}
                </form>
            </div>
        </div>
    )
}
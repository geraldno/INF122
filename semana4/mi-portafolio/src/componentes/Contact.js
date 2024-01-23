import React from "react";
import "../styles/Contact.css";
import dow from "../images/Bottom Alignment.svg"

function Contact(){
    return(
        <div className="buttons-contact">
            <button className="first-b"> Download CV <img src={dow}></img></button>
            <button className="second-b">Contact me</button>
        </div>
    );
}

export default Contact;
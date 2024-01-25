import React from "react";
import "../styles/Profile.css";
import perfil from "../images/foto-perfil.jpg";
import git from "../images/icons/github.svg";
import X from "../images/icons/twitter.svg";
import linke from "../images/icons/linkedin.svg";

function Profile() {
    const hyperlink = ()=>{
        window.open('https://github.com/geraldno', '_blank')
        }
    return (
        <div className="main"> 
            <img className="img-perfil"  src={perfil}></img>
            <div className="perfil">
                <h1>Gerald Chavez</h1>
                <p>Super Junior Front end</p>
                <div className="icon-perfil">
                    <button onClick={hyperlink} ><img src={git}></img></button>
                    <a href="https://github.com/geraldno"><img  src={git}></img></a>
                    <a href="https://twitter.com/GeraldoNuba23"><img src={X}></img></a>
                    <a href="https://www.linkedin.com/in/gerald-luis-ch%C3%A1vez-pereira-8181912b0/"><img src={linke}></img></a>
                </div>
                </div>
        </div>
    );
}

export default Profile;
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Pry from "../images/taza.jpg"

function Navbar() {
    return (
        <>
            <h1>Navbar</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Login"><img src={Pry} class="card"></img></Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Registro">Registro</Link>
                    </li>
                    <li>
                        <Link to="/Perfil">Perfil</Link>
                    </li>
                    <li>
                        <Link to="/Galeria">Galeria</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            </>
    );
}
export default Navbar;
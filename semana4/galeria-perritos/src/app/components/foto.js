"use client"
import Image from "next/image"
import style from "./foto.module.css"
import { useState, useEffect } from "react"

function Foto(){
    const [perrito, setPerrito] = useState("/vercel.svg");
    const [estado, setEstado] = useState("esperando");
    const [habilidad, setHabilidad] = useState("habilidad");
    const url = "https://pokeapi.co/api/v2/pokemon/swinub";


    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setPerrito(data.sprites.front_shiny),
        setEstado(data.species.name),
        setHabilidad(data.abilities[0].ability.name)
        })
    },[])

    return(
       <div className={style.contenedor}>
       <h1>{estado}</h1> 
       <h1>{habilidad}</h1>
       <Image src={perrito} width="500" height="500"/>
       </div> 
    )
}
 export default Foto;
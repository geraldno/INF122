"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./dogs.module.css";

function Dogs(){
    const [dog, setDog] = useState("/vercel.svg");

    const url = "https://dog.ceo/api/breeds/image/random";
    const[shiba, setShiba] =useState();
    const url = "https://dog.ceo/api/breed/Shiba/images/random";

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setDog(data.message)
        })
    },[])

    return(
       <div className={style.main}>
        <h1>Dogs</h1>
       <Image src={dog} alt="dog" width="500" height="500"></Image>
       <Image src={shiba} alt="dog" width="500" height="500"></Image> 
       </div> 
    )
}
 export default Dogs;
import React from "react";
import { useState } from "react";
import "../styles/Metas.css"
import trash from "../images/trash 1.svg"
import check from "../images/check-circle 1.svg"

const Metas = () => {
  const [metas, setMetas] = useState([]);
  const [nuevaMeta, setNuevaMeta] = useState("");

  const agregarMeta = () => {
    if (nuevaMeta.trim() !== "") {
      setMetas([...metas, { texto: nuevaMeta, completada: false }]);
      setNuevaMeta("");
    }
  };

  const marcarComoCompletada = (index) => {
    const nuevasMetas = [...metas];
    nuevasMetas[index].completada = !nuevasMetas[index].completada;
    setMetas(nuevasMetas);
  };

  const eliminarMeta = (index) => {
    const nuevasMetas = metas.filter((_, i) => i !== index);
    setMetas(nuevasMetas);
  };

  return (
    <div className="main-meta">
      <div className="padre">
        <h1 className="title">Metas</h1>
        <div className="agregar-texto">
          <input type="text" className="input-nota" placeholder="Nueva Meta..."
            value={nuevaMeta} onChange={(e) => setNuevaMeta(e.target.value)} />
          <button className="boton-nota" onClick={agregarMeta}>Agregar</button>
        </div>
        <div className='container-nota'>
          <p className='nota'></p>
          <div className=''>
            <button className='boton-1'>Completadas:{}</button>
            <button className='boton-2'>Pendientes:{}</button>
          </div>
        </div>
        <div className="nueva-nota">
          <ul>
            {metas.map((meta, index) => (
              <li key={index} className={meta.completada ? "completada" : ""}>
                {meta.texto}
                <div className="borrar-check">
                <button onClick={() => eliminarMeta(index)}>
                <img src={trash}></img> 
                <button onClick={() => marcarComoCompletada(index)}>
                  {meta.completada ? "Desmarcar" : ""}
                <img src={check}></img>
                </button>
                </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Metas;
  

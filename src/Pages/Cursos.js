import React from 'react'
import {useParams} from 'react-router-dom';
function Cursos() {
    let{idCurso} = useParams();
  return (
    <div>Cursos este es su id {idCurso}</div>
  )
}

export default Cursos
import { Input, Button } from "antd";
import React, { useState } from "react";
import './formulario.css'
import axios from "axios";
export default function Formulario() {

    const [value, setValue] = useState();
    function handleChangeValue(value) {
      setValue(prevValue => ({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
    }  
    function handleClick(){
      axios.post("http://localhost:3001/registro",
      {
        title: value.titulo,
        descric: value.descricao,
        tempo: value.horario
      }
      ).then((res)=> {console.log(res)})
    }

    return(        <div className="crud-container">
    <label htmlFor="titulo">Título</label>
    <Input type="text" name="titulo" className="register-input" onChange={handleChangeValue}/>
    <label htmlFor="descricao">Descrição</label>
    <Input type="text" name="descricao" className="register-input" onChange={handleChangeValue} />
    <label htmlFor="horario">Horário</label>
    <Input type="time" name="horario" className="register-input" onChange={handleChangeValue} />
    <Button  onClick={handleClick}>Cadastrar</Button>
    <Button>Editar</Button>
    <Button>Remover</Button>
    <Button>Fechar</Button>
  </div>
)
}
import { List } from "antd";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Lista() {

const [lista, setLista] = useState();
useEffect( () => {axios.get("http://localhost:3001/getlist").then((response) => setLista(response.data))}, [])  
console.log(lista);
return(<>
      <List className="listaTarefas"
    itemLayout="horizontal"
    dataSource={lista}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={item.title}
          description= {item.descric + ". Agendado para o horário " + item.tempo  
         }
        />
      </List.Item>
    )}
  />
    </>
)
}

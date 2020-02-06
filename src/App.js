import React from 'react';
import { List, Avatar } from "antd";
import './App.css';

const data = [
  {
    title: 'Camión de basura 1',
    description: 'Normalmente usado por la noche',
    status: 0
  },
  {
    title: 'Barredora 1',
    description: 'Usada en Málaga',
    status: 1
  },
  {
    title: 'Camión de basura 2',
    description: 'Normalmenta usado por de dia',
    status: 0
  },
  {
    title: 'Camion de Basura 3',
    description: 'Camión de sustitución',
    status: 2
  },
];

function App() {
  const [imgName, setImgName] = React.useState("check-green");
  return (
    <List
      className="List"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`./icons/${getImgName(item.status)}.png`} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}

function getImgName (status) {
  switch (status) {
    case 0:
      return "stop-red"
    case 1:
      return "warning-yelow"
    case 2:
      return "check-green"

    default:
      break;
  }
  ;
}

export default App;

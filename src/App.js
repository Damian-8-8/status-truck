import React from 'react';
import ListCars from './Components/ListCars';
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
  return (
    <ListCars listOfCars={data} />
  );
}

export default App;

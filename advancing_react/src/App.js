// react
import { useState } from 'react';

//styled
import './App.css';

//components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import MessageState from './components/MessageState ';
import ChangeMessageState from './components/ChangeMessageState';

//img
import Night from './assets/night.jpg'
import UserDetails from './components/UserDetails';


function App() {
  const name = "Renata";

  const [userName] = useState("Malaquias");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0, newCar: true },
    { id: 2, brand: "KIA", color: "Branco", km: 200000, newCar: false },
    { id: 3, brand: "Renault", color: "Azul", km: 32000, newCar: false },
  ];

  function showMessage() {
    alert("Evento do componente pai");
  }

  const [message, setMessage] = useState();

  function handleMessage(msg) {
    setMessage(msg)
  };

  const pessoas = [
    { id: 1, name: "Rafael", age: "20", job: "Programador" },
    { id: 2, name: "Renata", age: "23", job: "Advogada" },
    { id: 3, name: "Nany", age: "25", job: "Arquiteta" },
    { id: 4, name: "Mirela", age: "15", job: "Estudante" },
    { id: 5, name: "Agata", age: "10", job: "Estudante" }
  ];

  return (
    <div className="App">
      <h1>ola</h1>
      <div>
        {/* imagem em public */}
        <img src="/img.jpg" alt="imagem da rua" />
      </div>
      <div>
        {/* imagem em src/asset */}
        <img src={Night} alt="mar de noite" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Utulizando Props */}
      <ShowUserName userName={userName} name={name} nameFixo="rafael" />
      {/* utulizando destructuring */}
      <CarDetails barnd="VW" km={10000} color="Azul" newCar={false} />
      {/* Reaproveitamento */}
      <CarDetails barnd="BMW" km={0} color="Azul" newCar={true} />
      <CarDetails barnd="FIAT" km={4500} color="Azul" newCar={false} />
      {/* 11 - renderizacao de lista */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          barnd={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar} />
      ))}
      {/* Fragments */}
      <Fragment />
      {/* Children */}
      <Container myValue="test">
        <p>Esse é o conteudo</p>
      </Container>
      <Container myValue="test 2">
        <p>Ele de novo</p>
      </Container>
      {/* 14 - funcao em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          name={pessoa.name}
          age={pessoa.age}
          job={pessoa.job} />
      ))}
    </div>
  );
}

export default App;

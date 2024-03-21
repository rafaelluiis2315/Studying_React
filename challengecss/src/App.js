import './App.css';
import Car from './components/Car';

function App() {
  const cars = [
    {name: "Fusca", km:10000, color:"Branca"},
    {name: "Polo", km:32000, color:"Cinza"},
    {name: "Onix", km:0, color:"Preto"}
  ]

  return (
    <div className="App-header">
      <h1>Showroom de carros</h1>
      <div className="cars-container">
        {cars.map((car)=>(
          <Car car={car} key={car.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

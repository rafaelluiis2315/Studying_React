import './App.css';
import MyComponent from './components/MyComponent';

const n = 15;
const redTitle = false;

function App() {
  return (
    <div className="App">
      {/* css global */}
      <h1>Css no React</h1>
      {/* 2 - css de componente */}
      <p>Pegou CSS do componente</p>
      <MyComponent />
      {/* css inline */}
      <p style={{color: "blue", padding: "25px", borderTop:"2px solid red"}} >Esse elemento foi estilizado de forma inline</p>
      {/* Css dinamico */}
      <h3 style={ n > 10 ? ({color:"purple"}) : ({color:"pink"}) } >Css dinamico</h3>
      <h3 style={ n < 10 ? {color:"purple"} : {color:"pink"} } >Css dinamico</h3>  {/* pode tirar os parentesess */}
      {/* classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"} >Este titulo vai ter classe dinamica</h2>

    </div>
  );
}

export default App;

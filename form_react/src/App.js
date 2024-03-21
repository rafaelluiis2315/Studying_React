
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App-header">
        <h2>forms</h2>
        <MyForm user = {{ name:"rafael", email:"rafael@gmail.com", bio:"sou um programador", role:"admin"}}/>
    </div>
  );
}

export default App;

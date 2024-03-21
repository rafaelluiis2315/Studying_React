// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Challenge from './components/Challenge';
// Styles | CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>React Foundations</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <Challenge/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
// 4 - importando componente
import FirstComponent from './components/FirstComponent';
// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
// 6 - Utilizando hook
import State from './components/State';
// 9 - Criando Contexto
import { createContext } from 'react';
// 10 - Utilizando contexto
import Context from './components/Context';

interface IAppContext {
  language: string,
  framework: string,
  porjects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis 
  const name: string = "Rafael";
  const age: number = 20;
  const isWorking: boolean = false;

  // 2 - funções
  const useGreeting = (name: string): string => {
    return `Olá ${name}, com função`;
  }


  // 8 - utilizando type
  type textOrNull = string | null;

  type textOp = "ra" | "fa" | "el"

  const myText: textOrNull = null;

  const parteMeuNome: textOp = "el";

  // 9 - Criando Contexto
  const contextValue: IAppContext = {
    language: "TipyScrip",
    framework: "React",
    porjects: 5
  }


  return (
    // 9 - Criando Contexto
    <AppContext.Provider value={contextValue}>
      <div className="App">
        {/* 1 - variaveis  */}
        <h1>TypeScript com react</h1>
        <h2>Nome: {name}</h2>
        <h3>Idade: {age}</h3>
        {isWorking ? <h3>Trabalhando: Sim</h3> : <h3>Trabalhando: Não</h3>}
        {/* 2 - funções */}
        <p>{useGreeting(name)}</p>
        {/* 4 - importando componente */}
        <FirstComponent />
        {/* 5 - Desestruturando props */}
        <SecondComponent name='segundo' />
        <Destructuring
          title='Primeiro Post'
          content='Conteudo do Primeiro Post'
          commentQty={8}
          tags={['js', 'ts']}
          // 7 - Utilizando enum
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem um texto</p>}
        {/* 10 - Utilizando contexto */}
        <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;

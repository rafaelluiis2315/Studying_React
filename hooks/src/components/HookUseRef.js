import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    // com useRef não ocorre loop infinito
    ++numberRef.current;

    // com useState faz um loop infinito
    // setCounter(counter +1)
  })

  // useRef e DOM
  const inputRef = useRef();
  const [text, setText]  = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");

    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef</h2>
      {/* useRef */}
      <p>O Componente Renderizou: {numberRef.current}</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 1: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      {/* useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  )
}

export default HookUseRef;
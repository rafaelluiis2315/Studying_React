import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true);

    const [nome, setNome] = useState("Matias");

    return (
        <div>
            <h2>Isso será exibido?</h2>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso!</p>}
            <h2>if ternario</h2>
            {nome === "joão" ? (
                <p>é joão</p>
            ) : (
                <p>Nome não encontrado</p>
            )}
            <button onClick={() => setNome("joão")}>Mudar nome</button>
        </div>
    )
}

export default ConditionalRender

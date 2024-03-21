import React, { useState, ChangeEvent } from 'react'



const State = () => {
    const [text, setText] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h4>Estou usando {text}</h4>
            <input type="text" onChange={handleChange} placeholder='Atere o valor do Hook' />
        </div>
    )
}

export default State
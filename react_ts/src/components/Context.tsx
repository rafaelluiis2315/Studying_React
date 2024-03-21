// 10 - Utilizando contexto
import React, { useContext } from 'react'

import { AppContext } from '../App'

const Context = () => {

    const context = useContext(AppContext);

    return (
        <div>
            <h4>contexto</h4>
            <p>{context?.language}</p>
            <p>{context?.framework}</p>
            <p>{context?.porjects}</p>
        </div>
    )
}

export default Context
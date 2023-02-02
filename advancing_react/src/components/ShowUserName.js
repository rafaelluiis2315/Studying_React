import React from 'react'

const ShowUserName = (props) => {
    return (
        <div>
            <h2>O nome do Usuario fixo: {props.nameFixo}</h2>
            <h2>O nome do Usuario em uma variavel: {props.name}</h2>
            <h2>O nome do Usuario em um useState: {props.userName}</h2>
        </div>
    )
}

export default ShowUserName

import React from 'react'

const UserDetails = ({name, age, job}) => {
    return (
        <div>
            <h4>Nome: {name}</h4>
            <h4>Idade: {age}</h4>
            <h4>Pofissão: {job}</h4>

            {age >= 18 ? (<h4>pode tirar a habilitação ✅</h4>) : (<h4>Não pode tirar a habilitação ⛔</h4>)}
            
        </div>
    )
}

export default UserDetails

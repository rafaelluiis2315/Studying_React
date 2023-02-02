import React from 'react'

const Container = ({ children, myValue}) => {
  return (
    <div>
      <h1>Conteúdo do componente pai:</h1>
        {children}
        {myValue}
    </div>
  )
}

export default Container

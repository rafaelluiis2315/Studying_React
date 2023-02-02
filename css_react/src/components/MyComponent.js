import './MyComponent.css'

const MyComponent = () => {
  return (
    <div>
      <p>Paragrafo dentro do componente</p>
      <p className="my-comp-p"> paragrafo que o css não vaza</p>
    </div>
  )
}

export default MyComponent

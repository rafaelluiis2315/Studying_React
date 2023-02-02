import styled from './Car.module.css'

const car = ({car}) => {
  return (
    <div className={styled.card}>
        <h2>{car.name}</h2>
        <h3>{car.km}</h3>
        <h3>{car.color}</h3>
    </div>
  )
}

export default car

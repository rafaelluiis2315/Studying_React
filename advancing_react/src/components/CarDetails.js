
const CarDetails = ({barnd, km, color, newCar}) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {barnd} </li>
                <li>KM: {km} </li>
                <li>Cor: {color} </li>
            </ul>
            {newCar && <p>O carro é novo!</p>}
        </div>
    )
}

export default CarDetails

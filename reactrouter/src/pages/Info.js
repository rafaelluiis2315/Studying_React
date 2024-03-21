import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams();
    return (
        <div>Info do produto {id}</div>
    )
}

export default Info
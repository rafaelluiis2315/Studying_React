import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const { id } = useParams();

    const url = `http://localhost:3000/products/${id}`;
    const { data: product, error, loading } = useFetch(url);

    return (
        <>
            <p>O id do produto é: {id}</p>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>R$ {product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </>
    )
}

export default Product;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import './Home.css'

const Home = () => {
    const url = "http://localhost:3000/products";
    const { data, error, loading } = useFetch(url);

    const [items, setItems] = useState([]);

    const createLink = (parceLink) => {
        return `htttps:${parceLink}.com`;
    }

    useEffect(() => {
        if (data) {
            const firstFourItems = data.slice(0, 4); //garantindo que apareça só os 4 primeiros items
            data.map((item) => item['link'] = createLink(item.name) )    
            setItems(firstFourItems);
        }
    }, [data]);

    // colocando todos os items
    const addAllItems = () => {
        data.map((item) => item['link'] = createLink(item.name) )
        setItems(data);
    }

    return (
        <div>
            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map((item)=> (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$ {item.price}</p>
                        <a href={item.link}>link</a>
                        <br />
                        <Link to={`/products/${item.id}`} >Detalhes...</Link>
                    </li>
                ))}
            </ul>
            <button onClick={addAllItems}>Mostrar mais</button>
        </div>
    )
}

export default Home;

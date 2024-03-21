import {useState, useEffect} from 'react';
import './App.css';

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const {data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando dados 
  // useEffect(() => {
  //   async function fetchData(){
  //     const response = await fetch(url);
  
  //     const data = await response.json()
  
  //     setProducts(data)
  //   }

  //   fetchData()
  // }, [])

  // 2- add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST", 
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body:JSON.stringify(product)
    // });

    // // 3 - Carregamento dinamico
    // const dataAddProduct = await res.json()
    // setProducts((prevProduct) => [
    //   ...prevProduct,
    //   dataAddProduct
    // ])

    // 5 - refatorando POST
    httpConfig(product, "POST")

    setName("");
    setPrice("")
  };


  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} | R$ {product.price}</li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>Nome:
            <input type="text" value={name} onChange={(name) => setName(name.target.value)}/>
          </label>
          <label>Preco:
            <input type="number" value={price} onChange={(price) => setPrice(price.target.value)} />
          </label>
          <input type="submit" value="criar"/>
        </form>
      </div>
    </div>
  );
}

export default App;

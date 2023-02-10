import {useState, useEffect} from 'react';
import './App.css';

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando dados 
  useEffect(() => {
    async function fetchData(){
      const response = await fetch(url);
  
      const data = await response.json()
  
      setProducts(data)
    }

    fetchData()
  }, [])

  // 2- add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(product)
    });

    // 3 - Carregamento dinamico
    const dataAddProduct = await res.json()
    setProducts((prevProduct) => [
      ...prevProduct,
      dataAddProduct
    ])

    setName("");
    setPrice("")
  };

  console.log(products)

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} | R$ {product.price}</li>
        ))}
      </ul>
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

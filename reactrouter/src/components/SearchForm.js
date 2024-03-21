import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {

    const navigate = useNavigate();

    const [query, setQuary] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/search?q=" + query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(q) => setQuary(q.target.value)}/>
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForm
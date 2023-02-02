import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(['Rafael', 'Iuri', 'Joao', 'Renata'])

    const [users, setUsers] = useState([
        { id: 1, name: "Rafael", age: 31 },
        { id: 2, name: "Berola", age: 19 },
        { id: 3, name: "Nany", age: 201 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers( (prevUsers) =>{
            return prevUsers.filter( (user) => randomNumber !== user.id)
        })
    } 

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
                <button onClick={deleteRandom}>Delete random users</button>
            </ul>
        </div>
    )
}

export default ListRender

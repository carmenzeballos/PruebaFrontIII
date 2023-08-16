import { useState } from 'react'
import Form from './Form'


let autoId = 0

const App = () => {
  const [users, setUsers] = useState([])

  const handleSubmit = (values) => {
    setUsers([...users, { id: autoId++, data: values }])
  }

  return (
    <div>
      <h2>Formulario</h2>
      <Form onSubmit={handleSubmit} />
      <h3>Valores ingresados:</h3>
      <ul>
        {users.map((user) => (
          <li className='card' key={user.id}>
            <p>Nombre: {user.data.nombre}</p>
            <p>Helado favorito: {user.data.helado}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

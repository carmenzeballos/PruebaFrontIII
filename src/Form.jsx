import { useState } from "react";


const Form = (props) => {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState('')
  const [helado, setHelado] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    nombre.trimStart();
    if (nombre.length < 3) {
      setMensajeError('Por favor chequea que la informacion sea correcta')
    } else if (helado.length < 6) {
      setMensajeError('Debe tener mas de 6 caracteres el helado')
    } else {
      props.onSubmit({ nombre, helado })
      setNombre('')
      setHelado('')
      setMensajeError('')
    }
  }
          return (
            <div>
              <h1>Elige tu helado favorito</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Nombre:
                  <input
                    type='text'
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                  />
                </label>
                <br /><br /><br />
                <label>
                  Helado favorito:
                  <input
                    type='text'
                    value={helado}
                    onChange={(event) => setHelado(event.target.value)}
                  />
                </label>
                <br /><br /><br />

                <button type='submit'>Submit</button>
              </form>
              {mensajeError && <p>{mensajeError}</p>}
            </div>
          )
          };      
          
export default Form;
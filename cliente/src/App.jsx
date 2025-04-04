import React, {useEffect, useState} from 'react'

function App() {
  const [datos, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3000/Usuarios')
    .then(res => res.json())
    .then(data => setData(data.data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div style={{padding:"50px"}}>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>contraseña</th>
          <th>rol</th>
          <th>fecha de creacion</th>
          </tr>
        </thead>
        <tbody>
           {datos.map((d, i) => (
            <tr key={i}> 
            <td>{d.id}</td> 
            <td>{d.nombre}</td> 
            <td>{d.Email}</td> 
            <td>{d.contraseña}</td> 
            <td>{d.Rol}</td> 
            <td>{d.fecha_creacion}</td> 
            </tr> 
          ))} 
        </tbody>
      </table>
    </div>
  )
}

export default App

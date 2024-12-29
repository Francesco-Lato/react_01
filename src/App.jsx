import { useState } from 'react';
import './App.css';
import { datos } from './assets/datos';


function App() {
  const [productos, setProductos] = useState(datos)
  const [misProductos, setMisProductos] = useState([])
  return (
    <>
    <section>
      {productos.map(dato => 
        <div key={dato.id}>
          {dato.producto}
        </div>
      )}
    </section>
    </>
  );
}

export default App

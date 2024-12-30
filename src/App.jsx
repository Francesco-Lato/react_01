import { useEffect, useState } from 'react';
import './App.css';
import { datos } from './assets/datos';
import estrella from "./assets/estrella.png"


function App() {
  const [productos, setProductos] = useState(datos)
  const [misProductos, setMisProductos] = useState([])
  const [productosOrdenados, setProductosOrdenados] = useState([])
  let lasEstrellas = [];
  
  const comprar = (elID, elNombre) => {
    setMisProductos([...misProductos, {
      producto: elNombre,
      estrellas: 1
    }])
    setProductos(prevItems => 
      prevItems.map(item => {
        if(item.id === elID){
          return{...item, estado:true}
        }
        return item;
      })
    )
  }

  const construirEstrellas = (cantidad)=> {
    lasEstrellas = [];
    for(let i=0; i<cantidad; i++){
      lasEstrellas.push(<img key={i} src={estrella} ></img>)
    }
    return lasEstrellas;
  }

  const incrementar = (elNombre, cuantas )=> {
    setMisProductos(prevItems => prevItems.map(item => {
      if(item.producto === elNombre ){
        return {...item, estrellas: (cuantas < 5) ? cuantas+1 : 1}
      }
      return item;
    }))
  }
  useEffect(()=>{
    setProductosOrdenados(misProductos.sort((a,b)=> a.estrellas -b.estrellas))
  }, [misProductos])

  return (
    <>
  <section className='contenedor'>

    <h1>React</h1>

    <section>
      {productos.filter(dato => dato.estado === false).map(dato => 
        <div key={dato.id} onClick={()=> comprar(dato.id, dato.producto)} className='producto'>
          {dato.producto}
        </div>
      )}
    </section>

    <section>
      {productosOrdenados.map(dato => 
        <div key={dato.producto} className='cuadro'>
          <div onClick={() => incrementar(dato.producto, dato.estrellas)}>
            {dato.producto}
          </div>
          <div>
            {construirEstrellas(dato.estrellas)}
          </div>
        </div>
      )}
    </section>

  </section>
    </>
  );
}

export default App

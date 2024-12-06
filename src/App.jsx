import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from './data/db'


function App() {
 

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const MAX_ITEMS = 4
  const MIN_ITEMS = 1

  function addToCard(item){
    
    const itemExists = cart.findIndex(guitar=>guitar.id === item.id)
    console.log(itemExists)
    if(itemExists >= 0){
      if(cart[itemExists].quantity >= MAX_ITEMS)return
      const updateCart = [...cart]
      updateCart[itemExists].quantity++
      setCart(updateCart)
    }else{
      item.quantity = 1 
      setCart([...cart, item])
    }
  }

  function removeFromCart(id){
    setCart(prevCart=> prevCart.filter(guitar => guitar.id !== id))
  }

  function increaseQuantity(id){
    console.log("incrementando", id)
    const updateCart = cart.map(item =>{
      if (item.id === id && item.quantity < MAX_ITEMS){
        return {...item, quantity: item.quantity + 1}//toma los otros componentes de carrito y quantity lo actualiza
      }
      return item //toma los otros componentes de carrito
    })
    setCart(updateCart) 
  }

  function decreaseQuantity(id){
    const updateCart = cart.map(item =>{
      if(item.id === id && item.quantity > MIN_ITEMS){
        return{
          ...item,
          quantity: item.quantity - 1}    
        }
      return item
    })
    setCart(updateCart)
  }


  return (
    <>

    < Header
    cart={cart} 
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    /> 
       
    

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar)=>(
              <Guitar
                guitar={guitar}
                key={guitar.id}
                cart={cart}
                setCart = {setCart}
                addToCard = {addToCard}
              /> 
            ))}
                     

           
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App


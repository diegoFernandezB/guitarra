import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useCart } from '../hooks/useCart'


function App() {

  const { 
    data,
    cart,
    addToCard,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotaL } = useCart()
  

  return (
    <>

    < Header
    cart={cart} 
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    clearCart={clearCart}
    isEmpty={isEmpty}
    cartTotaL={cartTotaL}
    /> 
       
    

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar)=>(
              <Guitar
                guitar={guitar}
                key={guitar.id}
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


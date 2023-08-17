import {createContext, useEffect, useState} from "react"

const addCartItem = (cartItems: any, productsToAdd: any) => {
    console.log("yes")
    //check if item exists in the cart
    const existingCartItem = cartItems.find((cartItem: any) => 
         cartItem.id === productsToAdd.id
    )
    console.log("yeeess")
    //increase count of the quantity in the dropdown or add a new one
    if(existingCartItem){
        return cartItems.map((cartItem: any) => 
            cartItem.id === productsToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        )
    }
    console.log("yeahhhhh")
    //return modified array of cartItems
    return [...cartItems, {...productsToAdd, quantity: 1}]

}

export const CartContext: any = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartContextProvider = ({children}: any) => {
    const [isCartOpen, setIsCartOpen] = useState<any>(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

   useEffect(() => {
    const newCartCount = cartItems.reduce((total: number, cartitem: number | any) => (total + cartitem.quantity), 0)
    setCartCount(newCartCount)
   }, [cartItems])

    const addItemToCart = (productsToAdd: any) => {
        console.log("clicking")
        setCartItems(addCartItem(cartItems, productsToAdd))
        console.log("clicked")
    }

    const value: any = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
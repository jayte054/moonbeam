import {createContext, useEffect, useState} from "react"

const addCartItem = (cartItems: any, productsToAdd: any) => {
    console.log("yes")
    //check if item exists in the cart
    const existingCartItem = cartItems.find((cartItem: any) => 
         cartItem.id === productsToAdd.id
    )
    //increase count of the quantity in the dropdown or add a new one
    if(existingCartItem){
        return cartItems.map((cartItem: any) => 
            cartItem.id === productsToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        )
    }
    //return modified array of cartItems
    return [...cartItems, {...productsToAdd, quantity: 1}]

}

const removeCartItem = (cartItems: any, cartItemToRemove: any) => {
    //check if item exists
    const existingCartItem = cartItems.find((cartItem: any) => 
          cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1) {
      return  cartItems.filter((cartItem: any) =>  cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem: any) => 
            cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
}

const clearCartItem = (cartItems: any, cartItemToClear: any) => {
    return cartItems.filter((cartItem: any) => cartItem.id !== cartItemToClear.id)
}

export const CartContext: any = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartContextProvider = ({children}: any) => {
    const [isCartOpen, setIsCartOpen] = useState<any>(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

   useEffect(() => {
    const newCartCount = cartItems.reduce((total: number, cartitem: number | any) => (total + cartitem.quantity), 0)
    setCartCount(newCartCount)
   }, [cartItems])

   useEffect(() => {
    const newCartTotal = cartItems.reduce((total: number, cartItem: number| any) => total + cartItem.quantity * cartItem.price , 0)
    setCartTotal(newCartTotal)
   }, [cartItems])

    const addItemToCart = (productsToAdd: any) => {
        setCartItems(addCartItem(cartItems, productsToAdd))
    }

    const removeItemFromCart = (cartItemToRemove: any) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear: any) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value: any = {isCartOpen, 
                        setIsCartOpen, 
                        addItemToCart, 
                        cartItems, 
                        cartCount, 
                        removeItemFromCart,
                        clearItemFromCart,
                        cartTotal
                    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
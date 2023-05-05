import {createContext, useState} from "react"

export const CartContext: any = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
})

export const CartContextProvider = ({children}: any) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value: any = {isCartOpen, setIsCartOpen}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
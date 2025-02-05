import { createContext } from "react"
import { ProductData } from "@/interfaces/ProductData"
import { useState } from "react"

export interface Products extends ProductData {
    quantity: number
}

interface CartContextProps {
    cart: Products[];
    addProductIntoCart: (product: ProductData) => void
    removeProductFromCart: (product: Products) => void
    productCartIncrement: (product: Products) => void
    productCartDecrement: (product: Products) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider = ( {children}: CartProviderProps ) => {
    const [ cart, setCart ] = useState<Products[]>([])

    function addProductIntoCart(product: ProductData) : void {
        const productExistentInCart = cart.find(item => item.name === product.name && item.id === product.id)

        if (productExistentInCart){
            const newCart = cart.map(item => {
                if (item.id === product.id) {
                    const quantity = item.quantity + 1

                    return { ...item, quantity }
                }

                return item
            })

            setCart(newCart)

            return
        }

        const newProduct = { ...product, quantity: 1 }
        const newCart = [ ...cart, newProduct ]

        setCart(newCart)

    }

    function removeProductFromCart(product: Products) : void {
        const newCart = cart.filter(item => !(item.id === product.id && item.name === product.name) )

        setCart(newCart)
    }

    function updateProductQuantity(product: Products, newQuantity: number) : void {
        if (newQuantity <= 0) return

        const productExistentInCart = cart.find(item => item.name === product.name && item.id === product.id)

        if (!productExistentInCart) return

        const newCart = cart.map(item => {
            if (item.id === productExistentInCart.id && item.name === productExistentInCart.name) {
                return { ...item, quantity: newQuantity }
            }

            return item
        })

        setCart(newCart)

    }

    function productCartIncrement(product: Products) : void {
        updateProductQuantity(product, product.quantity + 1)
    }

    function productCartDecrement(product: Products) : void {
        updateProductQuantity(product, product.quantity - 1)
    }

    return (
        <CartContext.Provider value={{ cart, productCartDecrement, productCartIncrement, addProductIntoCart, removeProductFromCart }}>
            { children }
        </CartContext.Provider>
    )
}
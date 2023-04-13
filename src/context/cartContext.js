import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext()
const CartDispatchContext = createContext()
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item]
        case 'ADD_QTY': {
            console.log('add qty')
            for (let i of state) {
                if (i.idcart === action.item.idcart) {
                    i.qty = i.qty + 1
                    return [...state]
                }
            }

        }
        case 'MINUS_QTY': {
            for (let i of state) {
                if (i.idcart === action.item.idcart) {
                    i.qty = i.qty - 1
                    return [...state]
                }
            }
        }
        case 'DEL': {
            state = state.filter((i) => { return i.idcart !== action.item.idcart })
            return [...state]
        }
        case 'FIX': {
            let idx = state.findIndex((i) => i.idcart===action.item.idcart)
            state[idx] = action.item
            return [...state]
        }
        case 'PAY': {
            return []
        }
        default:
            throw new Error('No action type' + `${action.type}`)
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)

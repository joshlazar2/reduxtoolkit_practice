import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload

            const inCart = state.items.find((item) => item._id === product._id);

            if(inCart){
                inCart.quantity +=1
            } else {
                product.quantity += 1
                state.items.push(product)
            }
            
        },
        removeFromCart: (state, action) => {
            const product = action.payload
            state.items = state.items.filter((item) => item._id !== product._id)
        }
    }
})

export const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
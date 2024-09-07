import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { isHovered: false }

const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers:{
        show(state){
            state.isHovered = true
        },
        hide(state){
            state.isHovered = false
        }
    }
})


const store = configureStore({
    reducer: {cursor: cursorSlice.reducer}
})

export const cursorActions = cursorSlice.actions

export default store
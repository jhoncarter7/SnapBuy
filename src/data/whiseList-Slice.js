import { createSlice } from '@reduxjs/toolkit'
// import React from 'react'

const whiseListSlice = createSlice({
    name: "whiseList",
    initialState: {
        items: [],
        change: false
    },
    reducers: {
        addingWhiseList(state, action){
        const newitem = action.payload;
        const exsistingItem = state.items.find(item => item.id === newitem.id)
        if(!exsistingItem){
            state.items.push({
                id: newitem.id,
                Title: newitem.Text,
                img: newitem.img,
                RealPrice: newitem.RealPrice,
                price: newitem.price,
                
            })
            state.change = true;
        }else if (exsistingItem){
            return;
        }
        },

        removingWhiseList(state, action){
           const id = action.payload;
            state.items = state.items.filter(item => item.id !== id); 
            
        }

    }

})
console.log(whiseListSlice.getInitialState.items)
export const whiseListAction = whiseListSlice.actions

export default whiseListSlice
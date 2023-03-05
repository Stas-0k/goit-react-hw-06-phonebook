import { createSlice } from '@reduxjs/toolkit';


const filterInitialState = ""

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {query:filterInitialState},
    reducers: {
        changeFilter: {
            reducer(state, action) { 
                state.query=action.payload
            }
        }
    }
})



export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions
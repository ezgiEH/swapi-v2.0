import { createSlice } from "@reduxjs/toolkit";
import { fetchStarships, FetchStarship, FetchFilms } from "./Sevices";


export const StarwarsSlice = createSlice ({
    name: 'starwars',
    initialState:{
        starships: [],
        films: [],
        status: 'idle',
        error: null,
    },
    reducers: {},

    extraReducers:(builder) => {
    builder
    //fetch starships
    .addCase(fetchStarships.pending, (state) =>{
        state.status = "loading"
    })
    .addCase(fetchStarships.fulfilled, (state, action) => {
        state.status = "succeded"
        state.starships = [...state.starships, ...action.payload];
    })
    .addCase(fetchStarships.rejected, (state) => {
        state.status = "failed"
    })
    }
})

export default StarwarsSlice.reducer
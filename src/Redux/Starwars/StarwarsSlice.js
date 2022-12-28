import { createSlice } from "@reduxjs/toolkit";
import { fetchStarships, fetchStarship } from "./Sevices";


export const StarwarsSlice = createSlice ({
    name: 'starwars',
    initialState:{
        starships: [],
        starship:[],
        films: [],
        StarshipsStatus: 'idle',
        StarshipStatus: 'idle',
        error: null,
    },
    reducers: {},

    extraReducers:(builder) => {
    
    //fetch starships
    builder.addCase(fetchStarships.pending, (state) =>{
        state.StarshipsStatus = "loading"
    })
    builder.addCase(fetchStarships.fulfilled, (state, action) => {
        state.StarshipsStatus = "succeded"
        state.starships = [...state.starships, ...action.payload];
    })
    builder.addCase(fetchStarships.rejected, (state) => {
        state.StarshipsStatus = "failed"
    })
    // //fetch only one
    
    builder.addCase(fetchStarship.pending, (state) => {
        state.StarshipStatus = "loading"
    })
    builder.addCase(fetchStarship.fulfilled, (state, action) => {
        state.StarshipStatus = "succeded"
        state.starship = action.payload
    })
    builder.addCase(fetchStarship.rejected, (state) => {
        state.StarshipStatus = "failed"
    })
    }
})

export default StarwarsSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import StarwarsSlice from './Starwars/StarwarsSlice'

export const store = configureStore({
    reducer: {
        starwars: StarwarsSlice,
    }
})
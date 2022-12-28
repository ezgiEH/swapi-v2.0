import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = "https://swapi.dev/api/";


//fetch starships per page
export const fetchStarships = createAsyncThunk(
    `Starships`,
    async ({page}) => {
        try {
            const response = await axios(`${api_url}/starships/?page=${page}`)
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    }
)

//fetch starship 
export const fetchStarship = createAsyncThunk(
    `Starship`,
    async ({id}) => {
        try {
            const response = await axios(`${api_url}/starships/${id}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

//fetch films
export const fetchFilms = createAsyncThunk(
    'starwars/films',
    async () => {
        try {
            const response = await axios(`${api_url}/films/`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)
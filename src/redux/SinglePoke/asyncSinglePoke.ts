import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

type TypeSinglePoke = {
    id: number
}

export const fetchSinglePoke = createAsyncThunk('SinglePoke/fetchSinglePoke', async(params: TypeSinglePoke) => {
    const {id} = params;
    const fetchData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return fetchData.data
})
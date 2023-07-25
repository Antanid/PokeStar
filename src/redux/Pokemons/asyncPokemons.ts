import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type fetchPokemonsProps = {
    paramsApi: string
}

export const fetchPokemons = createAsyncThunk('PokemonTV/fetchPokemonTV', async (params: fetchPokemonsProps) => {
    const { paramsApi } = params;
    const fetchPokemonTV = await axios.get(paramsApi);
console.log(fetchPokemonTV)
    return fetchPokemonTV.data
})


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type fetchPokemonsProps = {
    paramsApi: string;
    input: string;
}

export const fetchPokemons = createAsyncThunk('PokemonTV/fetchPokemonTV', async (params: fetchPokemonsProps) => {
    const { paramsApi, input } = params;
    const inputParams = input.match(/\d+/g)?.join('')
    const fetchPokemonTV = await axios.get(input.length > 0 ? `https://pokeapi.co/api/v2/pokemon/${inputParams}` : paramsApi);
    console.log(fetchPokemonTV.data)
    return fetchPokemonTV.data

})


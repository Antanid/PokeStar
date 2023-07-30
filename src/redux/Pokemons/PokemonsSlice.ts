import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { Status } from "../type";
import { fetchPokemons } from "./asyncPokemons";

const initialState = {
    pokemons: [],
    nextPage: null,
    prevPage: null,
    status: Status.LOADING
}

const PokemonSlice = createSlice({
    name: 'PokemonTv',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase (fetchPokemons.pending, (state) => {
            state.status = Status.LOADING;
            state.pokemons = [];
            state.nextPage = null;
            state.prevPage = null;
        });
        builder.addCase(fetchPokemons.fulfilled, (state, action : any) => {
            state.pokemons = action.payload.results;
            state.nextPage = action.payload.next
            state.prevPage = action.payload.previous
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchPokemons.rejected, (state) => {
            state.pokemons = [];
            state.nextPage = null;
            state.prevPage = null;
            state.status = Status.ERROR;
        })
    }
});

export const setPokemons = (state: RootState) => state.PokemonSlice.pokemons;
export const setNextPage = (state: RootState) => state.PokemonSlice.nextPage;
export const setPrevPage = (state: RootState) => state.PokemonSlice.prevPage;

export default PokemonSlice.reducer;
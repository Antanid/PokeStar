import { createSlice } from "@reduxjs/toolkit"
import { fetchPokemons } from "../Pokemons/asyncPokemons";
import { RootState } from "../store";
import { Status } from "../type";


const initialState = {
    searchPokemons:[]   ,
    status: Status.LOADING
}

const SearchSlice = createSlice({
    name: 'SearchSlice',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase (fetchPokemons.pending, (state) => {
            state.status = Status.LOADING;
            state.searchPokemons = [];
        });
        builder.addCase(fetchPokemons.fulfilled, (state, action : any) => {
             // @ts-ignore
            state.searchPokemons.push(action.payload);
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchPokemons.rejected, (state) => {
            state.searchPokemons = [];
            state.status = Status.ERROR;
        })
    }
});

export const setSearchPokemons = (state: RootState) => state.SearchSlice.searchPokemons;


export default SearchSlice.reducer;
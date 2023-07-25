import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import PokemonSlice from './Pokemons/PokemonsSlice';


export const store = configureStore({
    reducer: {
        PokemonSlice
    }
})


export type RootState = ReturnType <typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
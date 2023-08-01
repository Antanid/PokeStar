import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import PokemonSlice from './Pokemons/PokemonsSlice';
import SinglePoke from './SinglePoke/SinglePokeSlice';
import SearchSlice from './Search/SearchSlice';
import FavoriteSlice from "./FavoritePoke/FavoriteSlice";

export const store = configureStore({
    reducer: {
        PokemonSlice,
        SinglePoke,
        SearchSlice,
        FavoriteSlice
    }
})


export type RootState = ReturnType <typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
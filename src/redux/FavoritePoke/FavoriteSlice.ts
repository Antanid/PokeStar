import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

const initialState = {
    favorite: [],
}

const FavoriteSlice = createSlice({
    name: 'FavoriteSlice',
    initialState,
    reducers: {
        addFavorite(state, action) {
             // @ts-ignore
            const findItems = state.favorite.find((obj) => obj.id === action.payload.id)
            if (findItems) {
                 // @ts-ignore
                state.favorite = state.favorite.filter((obj) => obj.id === action.payload)
            }
            else {
                 // @ts-ignore
                state.favorite.push({
                    ...action.payload
                })
            }


        }
    },
});

export const { addFavorite } = FavoriteSlice.actions;

export const setFavorite = (state: RootState) => state.FavoriteSlice.favorite;

export default FavoriteSlice.reducer;
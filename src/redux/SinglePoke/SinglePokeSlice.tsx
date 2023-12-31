import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Status } from "../type";
import { fetchSinglePoke } from "./asyncSinglePoke";

const initialState = {
    name: '',
    image: '',
    spritesFront: '',
    spritesBack: '',
    spritesShinyFront: '',
    spritesShinyBack: '',
    types: [],
    stats: [],
    abilities: [],
    height: 0,
    weight: 0,
    status: Status.LOADING
}

const SinglePoke = createSlice({
    name: 'SinglePoke',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase (fetchSinglePoke.pending, (state) => {
            state.status = Status.LOADING;
            state.name = '';
            state.image = '';
            state.stats = [];
            state.abilities = [];
            state.height = 0;
            state.weight = 0;
            state.types = [];
        });
        builder.addCase(fetchSinglePoke.fulfilled, (state, action : any) => {
            state.name = action.payload.name;
            state.image = action.payload.sprites.other.dream_world.front_default;
      
            state.spritesFront = action.payload.sprites.front_default;
            state.spritesBack = action.payload.sprites.back_default;
            state.spritesShinyBack = action.payload.sprites.back_shiny;
            state.spritesShinyFront = action.payload.sprites.front_shiny;

            state.types = action.payload.types;
            state.stats = action.payload.stats;
            state.abilities = action.payload.abilities;
            state.height = action.payload.height;
            state.weight = action.payload.weight;
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchSinglePoke.rejected, (state) => {
            state.abilities = [];
            state.height = 0;
            state.weight = 0;
            state.name = '';
            state.image = '';
            state.spritesFront = '';
            state.spritesBack = '';
            state.types = [];
            state.stats = [];
            state.status = Status.ERROR;
        })
    }
})


export const setSingleName = (state: RootState) => state.SinglePoke.name;
export const setSingleImage = (state: RootState) => state.SinglePoke.image;
export const setSingleStats = (state: RootState) => state.SinglePoke.stats;
export const setSingleHeight = (state: RootState) => state.SinglePoke.height;
export const setSingleWeight = (state: RootState) => state.SinglePoke.weight;
export const setSingleAbilities = (state: RootState) => state.SinglePoke.abilities;
export const setSingleFrontImg = (state: RootState) => state.SinglePoke.spritesFront;
export const setSingleBackImg = (state: RootState) => state.SinglePoke.spritesBack;
export const setSingleShinyBack = (state: RootState) => state.SinglePoke.spritesShinyBack;
export const setSingleShinyFront = (state: RootState) => state.SinglePoke.spritesShinyFront;
export const setSingleTypes = (state: RootState) => state.SinglePoke.types;

export default SinglePoke.reducer;

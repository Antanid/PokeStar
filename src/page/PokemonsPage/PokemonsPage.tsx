import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllPokemons from "../../componets/AllPokemons/AllPokemons";
import PokeButton from "../../componets/AllPokemons/PokeButton";
import { fetchPokemons } from "../../redux/Pokemons/asyncPokemons";
import { setNextPage, setPokemons, setPrevPage } from "../../redux/Pokemons/PokemonsSlice";

const PokemonsPage = () => {
  const [paramsApi, setParamsApi] = useState('https://pokeapi.co/api/v2/pokemon')
  const dispatch = useDispatch();
  const dataPokemons = useSelector(setPokemons);
  const nextPage = useSelector(setNextPage);
  const prevPage = useSelector(setPrevPage);

  useEffect(() => {
    async function getApi() {
      //@ts-ignore: Unreachable code error
      await dispatch(fetchPokemons({paramsApi}));
    }
    getApi();
  }, [paramsApi, setParamsApi]);

  const onNextPage = () => {
    if(nextPage !== null){
      setParamsApi(nextPage)
    }
  }

  const onPrevPage = () => {
    if(prevPage !== null){
      setParamsApi(prevPage)
    }
  }

  return (
    <div>
      <AllPokemons dataPokemons={dataPokemons} />
      <PokeButton onNextPage={onNextPage} onPrevPage={onPrevPage}/>
    </div>
  );
};

export default PokemonsPage;

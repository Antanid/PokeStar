import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllPokemons from "../../componets/AllPokemons/AllPokemons";
import PokeButton from "../../componets/AllPokemons/PokeButton";
import Loader from "../../componets/Loader/Loader";
import SearchPoke from "../../componets/Search/SearchPoke";
import { fetchPokemons } from "../../redux/Pokemons/asyncPokemons";
import { setNextPage, setPokemons, setPrevPage } from "../../redux/Pokemons/PokemonsSlice";
import { setSearchPokemons } from "../../redux/Search/SearchSlice";

const PokemonsPage = () => {
  const [paramsApi, setParamsApi] = useState("https://pokeapi.co/api/v2/pokemon");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const searchRes = useSelector(setSearchPokemons);
  const dataPokemons = useSelector(setPokemons);
  const nextPage = useSelector(setNextPage);
  const prevPage = useSelector(setPrevPage);

  useEffect(() => {
    setLoading(true);
    async function getApi() {
      //@ts-ignore: Unreachable code error
      await dispatch(fetchPokemons({ input, paramsApi }));
      setLoading(false);
    }
    const time = setTimeout(() => {
      getApi();
    }, 500)
  return () => {
    clearTimeout(time)
  }
  }, [paramsApi, setParamsApi, dispatch, input, setInput]);
  


  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value); 
  };
  const onClearSearch = () => {
    setInput("");
  };


  const onNextPage = () => {
    if (nextPage !== null) {
      setParamsApi(nextPage);
    }
  };

  const onPrevPage = () => {
    if (prevPage !== null) {
      setParamsApi(prevPage);
    }
  };


  return (
    <div>
      <SearchPoke onChangeInput={onChangeInput} input={input} onClearSearch={onClearSearch}/>
      {loading ? (
        <Loader />
      ) :
       input.length > 0 ? (
        <AllPokemons dataPokemons={searchRes} />
      ) : 
      (
        <>
          {" "}
          <AllPokemons dataPokemons={dataPokemons} />
          <PokeButton onNextPage={onNextPage} onPrevPage={onPrevPage} />
        </>
      )}
    </div>
  );
};

export default PokemonsPage;

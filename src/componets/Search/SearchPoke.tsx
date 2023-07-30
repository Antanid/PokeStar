import React from "react";
import style from './style/style.module.scss'

type SearchPokeType = {
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    input: string;
    onClearSearch: () => void;
}

const SearchPoke: React.FC <SearchPokeType> = ({onChangeInput, input, onClearSearch}) => {
  return (
    <div className={style.search_mainBlock}>
      <input className={style.search_input}  maxLength={5} type='string' onChange={onChangeInput} value={input} placeholder="searchByID" />
      <button>Search</button>
      <button onClick={onClearSearch}>Clear</button>
    </div>
  );
};

export default SearchPoke;

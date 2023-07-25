import React from "react";
import style from "./style/style.module.scss";

type AllPokemonsTypes = {
  dataPokemons: {
    name: string;
    url: string;
  }[];
};

const AllPokemons: React.FC<AllPokemonsTypes> = ({ dataPokemons }) => {
  return (
    <div className={style.all_mainBlock}>
      {dataPokemons &&
        dataPokemons.map((item) => (
          <div className={style.pokemons_list} key={item.name}>
            <div className={style.img_div}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  item.url.split("/").reverse()[1]
                }.png`}
                alt={item.name}
              />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default AllPokemons;

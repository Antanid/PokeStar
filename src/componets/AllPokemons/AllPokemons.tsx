import React from "react";
import { Link } from "react-router-dom";
import style from "./style/style.module.scss";

type AllPokemonsTypes = {
  dataPokemons: {
    name: string;
    url: any;
    id: number | null;
  }[];
  onOpenPage: (url: string) => void;
};

const AllPokemons: React.FC<AllPokemonsTypes> = ({ dataPokemons, onOpenPage }) => {
  return (
    <div className={style.all_mainBlock}>
      {dataPokemons &&
        dataPokemons.map((item) => (
          <div className={style.pokemons_list} key={item.name}>
           <Link to={`pokemons/${item.url ? item.url.split("/").reverse()[1] : item.id}`} onClick={() => onOpenPage(item.url ? item.url : item.id)}>
            <div className={style.img_div}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url ?  item.url.split("/").reverse()[1] : item.id}.png`}
                alt={item.name}
              />
            </div>
            <p>{item.name ? item.name[0].toUpperCase() + item.name.slice(1, item.name.length) : ''} <span>#{item.url ? item.url.split("/").reverse()[1] : item.id}</span></p>
           </Link>
          </div>
        ))}
    </div>
  );
};

export default AllPokemons;

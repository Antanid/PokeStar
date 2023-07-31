import style from "./style/style.module.scss";

type SinglePokeType = {
  name: string;
  img: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  id: string;
  spritesImg: string;
  onFrontImage: () => void;
  frontImage: string;
  onDefault: () => void;
  onShiny: () => void;
  arrowImg: string;
  pokemonTypes: {
    slot: number,
    type: {
      name: string,
      url: string,
    }
  }[];
  backImage: string,
  frontShinyImage: string
};

const SinglePoke: React.FC<SinglePokeType> = ({
  name,
  img,
  stats,
  height,
  weight,
  abilities,
  id,
  spritesImg,
  onFrontImage,
  frontImage,
  onDefault,
  onShiny,
  arrowImg,
  pokemonTypes,
  backImage,
  frontShinyImage,
}) => {
  return (
    <div className={style.single_mainBlock}>
      <div className={style.single_meinStats}>
        <div className={style.single_info_imgText}>
          <h1>
            {name.toUpperCase()} <span>#{id}</span>
          </h1>
          {img !== null ? <img src={img} alt={name} /> : <img src={frontImage} alt="imageSide" />}
        </div>
        <div className={style.stats_hpAbilty}>
          <ul className={style.ul_hp}>
            <li>
              <span>Height</span>
              <div>{height}</div>
            </li>
            <li>
              <span>Weigth</span>
              <div>{weight}</div>
            </li>
          </ul>

          <ul className={style.ul_ability}>
            <p>Ability</p>
            {abilities.map((i) => (
              <li>
                <div>{i.ability.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.single_spritesImg}>
        <div className={style.spritesBut}>
          <button disabled={backImage !==null ? false : true} className={style.fronButton} onClick={onFrontImage}>
            <img src={arrowImg} alt="fronImg" />
          </button>
          <button disabled={frontImage !== null ? false : true} onClick={onDefault}>Default</button>
          <button disabled={frontShinyImage !== null ? false : true} onClick={onShiny}>Shiny</button>
          <button disabled={backImage !==null ? false : true} 
          className={style.backButton} onClick={onFrontImage}>
            <img src={arrowImg} alt="backImg" />
          </button>
        </div>

        <div className={style.sprites_Image_Div}>
          <img src={spritesImg} alt="imageSide" />
          <div className={style.pokemon_types}>
          {pokemonTypes.map((i: any) => (
            <h4 className={
              i.type.name === 'normal' ?
              style.normal : i.type.name === 'fire' ? 
              style.fire : i.type.name === 'whater' ? 
              style.whater : i.type.name === 'electric' ?
              style.electric : i.type.name === 'grass'?
              style.grass : i.type.name === 'ice' ?
              style.ice : i.type.name === 'fighting' ?
              style.fighting : i.type.name === 'poison' ? 
              style.poison : i.type.name === 'ground' ?
              style.ground : i.type.name === 'flying' ?
              style.flying :  i.type.name === 'psychic' ?
              style.psychic : i.type.name === 'bug' ?
              style.bug : i.type.name === 'rock' ?
              style.rock : i.type.name === 'ghost' ?
              style.ghost : i.type.name === 'dragon' ?
              style.dragon : i.type.name === 'dark' ?
              style.dark : i.type.name === 'steel' ?
              style.steel : style.fairy
            }>
              {i.type.name.toUpperCase()}
              </h4>
          ))}
          </div>
        </div>

        <table className={style.sprites_stats}>
          <tr>
            <th>Base</th>
            <th>Stats</th>
          </tr>
          {stats.map((i) => (
            <tr>
              <td> {i.stat.name.toUpperCase()}</td>
              <td>{i.base_stat}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SinglePoke;

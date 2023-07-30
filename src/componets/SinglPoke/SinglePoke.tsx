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
  id: number;
  spritesImg: string;
  onFrontImage: () => void;
  frontImage: string,
  onDefault: () => void;
  onShiny: () => void;
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
  onShiny
}) => {
  return (
    <div className={style.single_mainBlock}>
      <div className={style.single_info_imgText}>
        <h1>
          {name.toUpperCase()} <span>{id}</span>
        </h1>
        {img !== null ? <img src={img} alt={name} /> : <img src={frontImage} alt="imageSide" />}
      </div>

      <div className={style.single_spritesImg}>
        <div>
        <button onClick={onFrontImage}>Front</button>
        <button onClick={onDefault}>Default</button>
        <button onClick={onShiny}>Shiny</button>
        <button onClick={onFrontImage}>Back</button>
        </div>
        <img src={spritesImg} alt="imageSide" />
      </div>

      <ul>
        <li>
          <span>Height</span> {height}
        </li>
        <li>
          <span>Weigth</span>
          {weight}
        </li>
      </ul>

      <ul>
        <p>Ability</p>
        {abilities.map((i) => (
          <li>{i.ability.name}</li>
        ))}
      </ul>

      <ul>
        {stats.map((i) => (
          <li>
            <p>
              {i.stat.name.toUpperCase()} - {i.base_stat}/300
            </p>
            <progress value={i.base_stat} max="300"></progress>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SinglePoke;

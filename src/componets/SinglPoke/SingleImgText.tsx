import style from "./style/style.module.scss";

type ImgText = {
  name: string;
  img: string;
  id: string;
  frontImage: string;
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
  onFavoriteClick: () => void;
  noFavoriteImg: string;
  imgFavoriteSwap: any;
  FavoriteImg: string;
};

const SingleImgText: React.FC<ImgText> = ({
  name,
  id,
  img,
  frontImage,
  height,
  weight,
  abilities,
  onFavoriteClick,
  imgFavoriteSwap,
  FavoriteImg,
  noFavoriteImg
}) => {
  return (
    <div className={style.single_meinStats}>
      <div className={style.single_info_imgText}>
        <h1>
          {name.toUpperCase()} <span>#{id}</span>
          <button onClick={onFavoriteClick}>
            <img src={imgFavoriteSwap ? FavoriteImg : noFavoriteImg} alt="favoriteButton" />
          </button>
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
  );
};

export default SingleImgText;

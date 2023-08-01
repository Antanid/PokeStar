import SingleImgText from "./SingleImgText";
import SingleTableStats from "./SingleTableStats";
import SpritesButton from "./SpritesButton";
import SpritesImgDiv from "./SpritesImgDiv";
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
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  backImage: string;
  frontShinyImage: string;
  onFavoriteClick: () => void;
  noFavoriteImg: string;
  imgFavoriteSwap: any;
  FavoriteImg: string;
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
  onFavoriteClick,
  noFavoriteImg,
  imgFavoriteSwap,
  FavoriteImg
}) => {
  return (
    <div className={style.single_mainBlock}>
      <SingleImgText
        onFavoriteClick={onFavoriteClick}
        noFavoriteImg={noFavoriteImg}
        imgFavoriteSwap={imgFavoriteSwap}
        FavoriteImg={FavoriteImg}
        frontImage={frontImage}
        name={name}
        img={img}
        height={height}
        weight={weight}
        abilities={abilities}
        id={id}
      />
      <div className={style.single_spritesImg}>
        <SpritesButton
          backImage={backImage}
          onFrontImage={onFrontImage}
          arrowImg={arrowImg}
          frontImage={frontImage}
          onDefault={onDefault}
          frontShinyImage={frontShinyImage}
          onShiny={onShiny}
        />
        <SpritesImgDiv pokemonTypes={pokemonTypes} spritesImg={spritesImg} />
        <SingleTableStats stats={stats} />
      </div>
    </div>
  );
};

export default SinglePoke;

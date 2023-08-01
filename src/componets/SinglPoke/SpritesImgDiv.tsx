import style from "./style/style.module.scss";

type TypeSpritesImgDiv = {
    spritesImg: string;
    pokemonTypes: {
        slot: number;
        type: {
          name: string;
          url: string;
        };
      }[];
}

const SpritesImgDiv: React.FC <TypeSpritesImgDiv> = ({spritesImg, pokemonTypes}) => {
  return (
     <div className={style.sprites_Image_Div}>
          <img src={spritesImg} alt="imageSide" />
          <div className={style.pokemon_types}>
            {pokemonTypes.map((i: any) => (
              <h4
                className={
                  i.type.name === "normal"
                    ? style.normal
                    : i.type.name === "fire"
                    ? style.fire
                    : i.type.name === "whater"
                    ? style.whater
                    : i.type.name === "electric"
                    ? style.electric
                    : i.type.name === "grass"
                    ? style.grass
                    : i.type.name === "ice"
                    ? style.ice
                    : i.type.name === "fighting"
                    ? style.fighting
                    : i.type.name === "poison"
                    ? style.poison
                    : i.type.name === "ground"
                    ? style.ground
                    : i.type.name === "flying"
                    ? style.flying
                    : i.type.name === "psychic"
                    ? style.psychic
                    : i.type.name === "bug"
                    ? style.bug
                    : i.type.name === "rock"
                    ? style.rock
                    : i.type.name === "ghost"
                    ? style.ghost
                    : i.type.name === "dragon"
                    ? style.dragon
                    : i.type.name === "dark"
                    ? style.dark
                    : i.type.name === "steel"
                    ? style.steel
                    : style.fairy
                }
              >
                {i.type.name.toUpperCase()}
              </h4>
            ))}
          </div>
        </div>
  )
}

export default SpritesImgDiv
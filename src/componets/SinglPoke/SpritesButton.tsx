import style from "./style/style.module.scss";

type SpritesButtType = {
  backImage: string;
  onFrontImage: () => void;
  arrowImg: string;
  frontImage: string;
  onDefault: () => void;
  frontShinyImage: string;
  onShiny: () => void;
};

const SpritesButton: React.FC<SpritesButtType> = ({
 backImage ,
  onFrontImage,
  arrowImg,
  frontImage,
  onDefault,
  frontShinyImage,
  onShiny,
}) => {
  return (
    <div className={style.spritesBut}>
      <button
        disabled={backImage !== null ? false : true}
        className={style.fronButton}
        onClick={onFrontImage}
      >
        <img src={arrowImg} alt="fronImg" />
      </button>
      <button disabled={frontImage !== null ? false : true} onClick={onDefault}>
        Default
      </button>
      <button disabled={frontShinyImage !== null ? false : true} onClick={onShiny}>
        Shiny
      </button>
      <button
        disabled={backImage !== null ? false : true}
        className={style.backButton}
        onClick={onFrontImage}
      >
        <img src={arrowImg} alt="backImg" />
      </button>
    </div>
  );
};

export default SpritesButton;

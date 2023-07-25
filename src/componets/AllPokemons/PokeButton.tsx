import React from "react";
import style from "./style/style.module.scss";

type PokeButtonType = {
  onNextPage: () => void;
  onPrevPage: () => void;
};

const PokeButton: React.FC<PokeButtonType> = ({ onNextPage, onPrevPage }) => {
  return (
    <div className={style.all_button}>
      <button onClick={onPrevPage}>Previus</button>
      <button onClick={onNextPage}>Next</button>
    </div>
  );
};

export default PokeButton;

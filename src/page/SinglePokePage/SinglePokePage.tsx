import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../componets/Loader/Loader";
import SinglePoke from "../../componets/SinglPoke/SinglePoke";
import { fetchSinglePoke } from "../../redux/SinglePoke/asyncSinglePoke";
import {
  setSingleAbilities,
  setSingleBackImg,
  setSingleFrontImg,
  setSingleHeight,
  setSingleImage,
  setSingleName,
  setSingleShinyBack,
  setSingleShinyFront,
  setSingleStats,
  setSingleTypes,
  setSingleWeight,
} from "../../redux/SinglePoke/SinglePokeSlice";
import arrowImg from '../../assets/img/arrow.png'
import { useLocation } from "react-router";
import { addFavorite, setFavorite } from "../../redux/FavoritePoke/FavoriteSlice";
import noFavoriteImg from '../../assets/img/no_favorite.png';
import FavoriteImg from '../../assets/img/favorite.png';

const SinglePokePage = () => {

  const image = useSelector(setSingleImage);
  const name = useSelector(setSingleName);
  const stats = useSelector(setSingleStats);
  const height = useSelector(setSingleHeight);
  const weight = useSelector(setSingleWeight);
  const abilities = useSelector(setSingleAbilities);

  const frontImage = useSelector (setSingleFrontImg);
  const backImage = useSelector (setSingleBackImg);
  const backShinyImage = useSelector (setSingleShinyBack);
  const frontShinyImage = useSelector (setSingleShinyFront);
  const pokemonTypes = useSelector (setSingleTypes);
  const favoriteData = useSelector(setFavorite);

  const [loading, setLoading] = useState(true);
  const [boolTypes, setBoolTypes] = useState(false);
  const [typeSprites, setTypeSprites] = useState('default');
  const [spritesImg, setSpritesImg] = useState(frontImage);
  const dispatch = useDispatch();
  const urlParamsSingle = useLocation();
  const id = urlParamsSingle.pathname.split('/').reverse()[0]


  useEffect(() => {
    setLoading(true);
    async function getApi() {
      //@ts-ignore: Unreachable code error
      await dispatch(fetchSinglePoke({ id }));
      setLoading(false);
    };
    getApi();
  }, [id, dispatch]);
  
  useEffect(() => {
    setSpritesImg(frontImage);
  }, [frontImage])

  const onFrontImage = () => {
    if(backImage !== null){
      setBoolTypes(prev => !prev)
      if(boolTypes === true){
        setSpritesImg(typeSprites === 'default' ? frontImage : frontShinyImage)
      }
      else{
        setSpritesImg(typeSprites === 'default' ? backImage : backShinyImage)
      }
     
    }
  }

  const onShiny = () => {
    if(frontShinyImage !== null){
      setTypeSprites('shiny')
      setSpritesImg(frontShinyImage)
    }
    
  }

  const onDefault = () => {
    setTypeSprites('default')
    setSpritesImg(frontImage)
  }

  const imgFavoriteSwap = favoriteData.filter((obj: any) => obj.id === id).length === 0 ? false : true;

  const onFavoriteClick = () => {
    const newObj = {
      name: name,
      image: image,
      spritesFront: frontImage,
      spritesBack: backImage,
      spritesShinyFront: frontShinyImage,
      spritesShinyBack: backShinyImage,
      id: id
    }
dispatch(addFavorite(newObj))
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <SinglePoke
        FavoriteImg={FavoriteImg}
        imgFavoriteSwap={imgFavoriteSwap}
        noFavoriteImg={noFavoriteImg}
        onFavoriteClick={onFavoriteClick}
        frontShinyImage={frontShinyImage}
        backImage={backImage}
        pokemonTypes={pokemonTypes}
        arrowImg={arrowImg}
        onShiny={onShiny}
        onDefault={onDefault}
        frontImage={frontImage}
        onFrontImage={onFrontImage}
        spritesImg={spritesImg}
        id={id}
          height={height}
          weight={weight}
          abilities={abilities}
          img={image}
          name={name}
          stats={stats}
        />
      )}
    </div>
  );
};

export default SinglePokePage;

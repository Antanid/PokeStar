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
  setSingleId,
  setSingleImage,
  setSingleName,
  setSingleShinyBack,
  setSingleShinyFront,
  setSingleStats,
  setSingleWeight,
} from "../../redux/SinglePoke/SinglePokeSlice";

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

  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState(false);
  const [typeSprites, setTypeSprites] = useState('default');
  const [spritesImg, setSpritesImg] = useState(frontImage);
  const id = useSelector(setSingleId);
  const dispatch = useDispatch();



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

  console.log(test)
  console.log(typeSprites)

  const onFrontImage = () => {
    if(frontImage !== null){
      setTest(prev => !prev)
      if(test === true){
        setSpritesImg(typeSprites === 'default' ? frontImage : frontShinyImage)
      }
      else{
        setSpritesImg(typeSprites === 'default' ? backImage : backShinyImage)
      }
     
    }
  }

  const onShiny = () => {
    setTypeSprites('shiny')
    setSpritesImg(frontShinyImage)
  }

  const onDefault = () => {
    setTypeSprites('default')
    setSpritesImg(frontImage)
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <SinglePoke
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
import { useSelector } from "react-redux";
import AllPokemons from "../../componets/AllPokemons/AllPokemons";
import { setFavorite } from "../../redux/FavoritePoke/FavoriteSlice";

const FavoritePage = () => {
const favoritePageData = useSelector(setFavorite)
  return <div>
    <AllPokemons dataPokemons={favoritePageData}/> 
  </div>;
};

export default FavoritePage;

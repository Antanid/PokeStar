import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";

import Layout from "./page/Layout/Layout";
import { setSingleId } from "./redux/SinglePoke/SinglePokeSlice";
const PokemonsPage = lazy(() => import("./page/PokemonsPage/PokemonsPage"));
const PokemonTVPage = lazy(() => import("./page/TvPage/TvPage"));
const SinglePokePage = lazy(() => import("./page/SinglePokePage/SinglePokePage"));

function App() {
  const id = useSelector(setSingleId)
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <PokemonsPage />
              </Suspense>
            }
          />
          <Route
            path="pokemonTV"
            element={
              <Suspense>
                <PokemonTVPage />
              </Suspense>
            }
          />
          <Route
            path={`pokemons/${id}`}
            element={
              <Suspense>
                <SinglePokePage />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

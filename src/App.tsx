import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";

import Layout from "./page/Layout/Layout";
const PokemonsPage = lazy(() => import("./page/PokemonsPage/PokemonsPage"));
const PokemonTVPage = lazy(() => import("./page/TvPage/TvPage"));
const SinglePokePage = lazy(() => import("./page/SinglePokePage/SinglePokePage"));

function App() {
  const {pathname} = useLocation();
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
            path={pathname}
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

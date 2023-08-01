import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";

import Layout from "./page/Layout/Layout";
const PokemonsPage = lazy(() => import("./page/PokemonsPage/PokemonsPage"));
const FavoritePage = lazy(() => import("./page/FavoritePage/FavoritePage"));
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
            path="favorite"
            element={
              <Suspense>
                <FavoritePage />
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

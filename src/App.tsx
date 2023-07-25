import React from "react";
import { Route, Routes } from "react-router";
import PokemonsPage from "./page/PokemonsPage/PokemonsPage";
import Layout from "./page/Layout/Layout";
import PokemonTVPage from "./page/TvPage/TvPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<PokemonsPage />} />
          <Route path="pokemonTV" element={<PokemonTVPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import style from "./style/style.module.scss";


import Menu from "./Menu";
import headerImg from "../../assets/img/headerImg.png";
import Footer from "./Footer";


type LayoutProps = {
  children: JSX.Element|JSX.Element[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menu] = useState([
    {
      title: "Pokemons",
      link: '/',
      id: 1
    },
    {
      title: "PokemonTV",
      link: 'PokemonTV',
      id: 2
    },
  ]);
  return (
    <div className={style.layout_main}>
      <Menu menu={menu} headerImg={headerImg} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

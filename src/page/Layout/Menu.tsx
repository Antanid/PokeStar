import React from "react";
import { Link } from "react-router-dom";
import style from "./style/style.module.scss";

type MenuProps = {
  menu: {
    title: string;
    link: string;
    id: number
  }[];
  headerImg: string;
};

const Menu: React.FC<MenuProps> = ({ menu, headerImg }) => {
  return (
    <div className={style.menu_Main}>
      <div className={style.menu_imgBlock}>
        <Link to='/'>
        <img src={headerImg} alt='goHome'/>
        </Link>
      </div>
      <ul className={style.menu_ul}>
        {menu.map((i) => (
          <Link key={i.link} to={i.link}>
          <li className={style.menu_li_select}>{i.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

import React from "react";
import SearchBox from "../../Components/SearchBox";

import "./style.scss";

const Header = () => {
  return (
    <header>
      <span>Logo da marca</span>
      <SearchBox />
      <div className="header__user-icons">
        <span className="user-icon">
          <ion-icon name="apps-outline"></ion-icon>
        </span>
        <span className="user-icon">
          <ion-icon name="notifications"></ion-icon>
        </span>
        <span className="user-icon">
          <ion-icon name="person"></ion-icon>
        </span>
      </div>
    </header>
  );
};

export default Header;

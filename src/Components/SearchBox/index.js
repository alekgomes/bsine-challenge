import React from "react";
import './style.scss'

const SearchBox = () => {
  return (
    <div className="search-box">
      <input className="search-box__input" type="text" placeholder="Pesquisar"/>
      <span className="search-box__icon"><ion-icon name="search-outline"/></span>
    </div>
  );
};

export default SearchBox;

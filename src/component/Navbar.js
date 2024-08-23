import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    { name: "TSHIRT", category: "tshirt" },
    { name: "TOPS", category: "tops" },
    { name: "SHIRT", category: "shirt" },
    { name: "KNIT", category: "knit" },
    { name: "OUTWEAR", category: "outwear" },
    { name: "DRESS", category: "dress" },
    { name: "BAG", category: "bag" },
  ];
  const [searchOn, setSearchOn] = useState(false);
  const SearchBar = () => {
    if (searchOn) {
      setSearchOn(false);
    } else {
      setSearchOn(true);
    }
  };
  const searchClose = () => {
    setSearchOn(false);
  };
  const navigate = useNavigate();
  const goLoginPage = () => {
    if (authenticate === false) {
      navigate("/login");
    } else {
      setAuthenticate(false);
    }
  };
  const goHome = () => {
    setIsMenuOpen(false);
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      //입력한 검색어 긁어와서 url 변경
      let keyword = event.target.value || document.querySelector("input").value;
      navigate(`/?q=${keyword}`);
    }
  };
  const [keyword, setKeyword] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const search2 = (event, category) => {
    let searchQuery = keyword.get("q") || "";
    let keyword2 = category;
    navigate(`/?q=${keyword2}`);
  };
  const search3 = (event, category) => {
    let searchQuery = keyword.get("q") || "";
    let keyword2 = category;
    setIsMenuOpen(false);
    navigate(`/?q=${keyword2}`);
  };
  const moMenuClass = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="dfbox header">
        <div className="left" onClick={goHome}>
          <img
            src="https://mardimercredi.com/web/mardi/assets/images/logo.svg"
            alt="logo"
          />
        </div>
        <div className="right dfbox">
          <div className="dfbox search" onClick={() => SearchBar()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>SEARCH</p>
          </div>
          <div className="dfbox login">
            <FontAwesomeIcon icon={faUser} />
            <p onClick={goLoginPage}>
              {authenticate === false ? "LOGIN" : "LOGOUT"}
            </p>
          </div>
          <div className="bar">
            <FontAwesomeIcon
              icon={faBars}
              className="mo"
              onClick={() => moMenuClass()}
            />
          </div>
        </div>
      </div>
      <div className={`mobile_menu ${isMenuOpen ? "open" : ""}`}>
        <div className="logo" onClick={goHome}>
          <img
            src="https://mardimercredi.com/web/mardi/assets/images/logo.svg"
            alt="logo"
          />
        </div>
        <div className="close">
          <FontAwesomeIcon icon={faXmark} onClick={() => moMenuClass()} />
        </div>
        <ul className="menu dfbox">
          {menuList.map((menu) => (
            <li
              className={keyword.get("q") === menu.category ? "active" : ""}
              onClick={(event) => search3(event, menu.category)}
            >
              {menu.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={`search_wrap ${searchOn ? "on" : ""}`}>
        <div className="close">
          <FontAwesomeIcon icon={faXmark} onClick={() => searchClose()} />
        </div>
        <div className="input_wrap">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            onKeyPress={(event) => search(event)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="sch"
            onClick={(event) => search(event)}
          />
        </div>
      </div>
      <div className="menuWrap">
        <ul className="menu dfbox">
          {menuList.map((menu) => (
            <li
              className={keyword.get("q") === menu.category ? "active" : ""}
              onClick={(event) => search2(event, menu.category)}
            >
              {menu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

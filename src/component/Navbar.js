import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Navbar = ({ authenticate }) => {
  const menuList = [
    "TSHIRT",
    "TOPS",
    "SHIRT",
    "KNIT",
    "OUTWEAR",
    "DRESS",
    "BAG",
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
    navigate("/login");
  };
  const goHome = () => {
    navigate("/");
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
        </div>
      </div>
      <div className={`search_wrap ${searchOn ? "on" : ""}`}>
        <div className="close">
          <FontAwesomeIcon icon={faXmark} onClick={() => searchClose()} />
        </div>
        <div className="input_wrap">
          <input type="text" placeholder="검색어를 입력하세요" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="sch" />
        </div>
      </div>
      <div className="menuWrap">
        <ul className="menu dfbox">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

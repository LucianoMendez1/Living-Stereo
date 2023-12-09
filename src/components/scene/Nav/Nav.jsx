import { useEffect, useState } from "react";
import "./style.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const styleLinks =
    "text-[#ffffff] text-[3rem] md:text-[5.5rem] font-bold  uppercase";

  return (
    <div className="navigation ">
      <div
        className={`main-navigation ${
          toggle ? "main-navigation-active" : "main-navigation-close"
        }`}
      >
        <div
          className={`main-navigation-inner ${
            toggle
              ? "main-navigation-inner-active"
              : "main-navigation-inner-close"
          }`}
        >
          <ul className="">
            <li>
              <a
                href="#"
                className={`${styleLinks} link`}
                onClick={handleToggle}
              >
                INICIO <span className="spanLink">INICIO </span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#biography"
                className={`${styleLinks} link`}
                onClick={handleToggle}
              >
                <p className={`${styleLinks} link`} onClick={handleToggle}>
                  Biografia <span className="spanLink">Biografia </span>
                </p>
              </a>
            </li>
            <li>
              <a
                href="#artist"
                className={`${styleLinks} link`}
                onClick={handleToggle}
              >
                ARTISTAS <span className="spanLink">ARTISTAS </span>
              </a>
            </li>
            <li>
              <p className={`${styleLinks} link`} onClick={handleToggle}>
                CONTACTO <span className="spanLink">CONTACTO </span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`main-navigation-duplicate-1 ${
          toggle
            ? "main-navigation-duplicate-1-active"
            : "main-navigation-duplicate-1-close"
        }`}
      >
        {" "}
      </div>
      <div
        className={`main-navigation-duplicate-2 ${
          toggle
            ? "main-navigation-duplicate-2-active"
            : "main-navigation-duplicate-2-close"
        }`}
      >
        {" "}
      </div>

      <div className="hamburger" onClick={handleToggle}>
        <div className={`bar first ${toggle && "first_active"}`}></div>
        <div className={`bar middle ${toggle && "middle_active"}`}></div>
        <div className={`bar last ${toggle && "last_active"}`}></div>
        <strong className={`menuButton  ${toggle && "menu_active"}`}>
          Menu
        </strong>
      </div>
    </div>
  );
};

export default Nav;

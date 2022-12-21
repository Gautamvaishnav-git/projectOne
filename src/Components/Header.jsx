import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState("hide");
  const routes = [
    ["/#", "home"],
    ["/#about", "about"],
    ["/contact", "contact"],
    ["/services", "services"],
    ["/#brands", "brands"],
  ];
  const toggleMenu = () => {
    console.log("clicked");
    toggle === "hide" ? setToggle("show") : setToggle("hide");
  };

  return (
    <>
      <nav>
        <div className="toggleMenu" onClick={toggleMenu}>
          <AiOutlineMenu />
        </div>
        <h1>
          <HashLink to="/" onClick={toggleMenu}>
            Gautamjs
          </HashLink>
        </h1>
        <main className={`${toggle}`}>
          {routes.map(([path, pathVal]) => {
            return (
              <HashLink to={path} key={pathVal} onClick={toggleMenu}>
                {pathVal}
              </HashLink>
            );
          })}
        </main>
      </nav>
    </>
  );
};

export default Header;

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as GithubIcon } from "../../assets/img/github.svg";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="flex py-4 px-4 shadow-md">
        <Link className="mr-auto" to="/">
          <Logo />
        </Link>
        <NavLink className="nav-link" to="/" exact>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about" exact>
          About
        </NavLink>
        <a
          href="https://github.com/alex-safian/-inscale-assessment"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon className="w-6" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

import { StyledNavHeaderMobile } from "./NavHeaderMobile.styled";
import { IRoute } from "../../constants";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

interface INavProps {
  routes: IRoute[];
}

const NavHeaderMobile: React.FC<INavProps> = ({ routes }) => {
  return (
    <StyledNavHeaderMobile>
      <Link to="/">
        <img src="logo.png" alt="logo" width="50px" />
      </Link>
      <div style={{ width: "40px", height: "40px" }}>
        <GiHamburgerMenu style={{ width: "100%", height: "100%" }} />
      </div>
    </StyledNavHeaderMobile>
  );
};

export default NavHeaderMobile;

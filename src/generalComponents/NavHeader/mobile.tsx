import { StyledNavHeaderMobile } from "./NavHeaderMobile.styled";
import { IRoute, routes } from "../../constants";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import NavTree from "../NavTree";

interface INavProps {
  routes: IRoute[];
}

const NavModal: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "80%",
        position: "absolute",
        top: 0,
        right: 0,
        border: "1px solid",
        background: "white",
        zIndex: "1",
      }}
    >
      <NavTree routes={routes} />
    </div>
  );
};

const NavHeaderMobile: React.FC<INavProps> = ({ routes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <StyledNavHeaderMobile>
      <Link to="/">
        <img src="logo.png" alt="logo" width="50px" />
      </Link>
      <div
        style={{ width: "40px", height: "40px" }}
        onClick={() => setIsMenuOpen(true)}
      >
        <GiHamburgerMenu style={{ width: "100%", height: "100%" }} />
      </div>
      {isMenuOpen && (
        <div ref={modalRef}>
          <NavModal />
        </div>
      )}
    </StyledNavHeaderMobile>
  );
};

export default NavHeaderMobile;

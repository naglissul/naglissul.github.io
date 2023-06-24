import { StyledNavHeaderMobile } from "./NavHeaderMobile.styled";
import { IRoute, routes } from "../../constants";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import NavTree from "../NavTree";
import { enableScroll } from "../../app/slices/backgroundLayerSlice";
import { useDispatch } from "react-redux";

interface INavProps {
  routes: IRoute[];
}

const NavModal: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: "5",
        border: "1px solid",
        background: "white",
        width: "60%",
        height: "80%",
        overflowY: "hidden",
        padding: "10% 0 0 10%",
      }}
    >
      <NavTree routes={routes} />
    </div>
  );
};

const NavHeaderMobile: React.FC<INavProps> = ({ routes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <StyledNavHeaderMobile>
      <Link to="/">
        <img src="logo.png" alt="logo" width="50px" />
      </Link>
      {!isMenuOpen && (
        <div
          style={{ width: "40px", height: "40px" }}
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <GiHamburgerMenu style={{ width: "100%", height: "100%" }} />
        </div>
      )}
      {isMenuOpen && (
        <div ref={modalRef}>
          <NavModal />
        </div>
      )}
    </StyledNavHeaderMobile>
  );
};

export default NavHeaderMobile;

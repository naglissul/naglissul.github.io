import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { StyledNavHeaderWeb } from "./NavHeaderWeb.styled";
import { IRoute } from "../../constants";
import React, { useEffect, useRef, useState } from "react";

interface ISubRoute extends IRoute {}

interface ISuperRoute {
  path: string;
  title: string;
  element: JSX.Element;
  children: JSX.Element[];
}

interface INavProps {
  routes: IRoute[];
}

const SuperRoute: React.FC<ISuperRoute> = ({ path, title, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setIsExpanded(false);
  }, [navigate]);

  return React.Children.count(children) !== 0 ? (
    <div style={{ width: "100px" }}>
      <button
        onClick={() => {
          navigate(path);
          setIsExpanded(false);
        }}
      >
        {title}
      </button>
      {!isExpanded && <button onClick={() => setIsExpanded(true)}>v</button>}
      {isExpanded && (
        <div
          style={{
            background: "white",
            border: "1px solid",
            marginLeft: "1em",
            marginTop: "1em",
            padding: "0.5em",
            width: "100px",
            zIndex: "1",
          }}
          ref={modalRef}
        >
          {children}
        </div>
      )}
    </div>
  ) : (
    <div>
      <button onClick={() => navigate(path)}>{title}</button>
    </div>
  );
};

const SubRoute: React.FC<ISubRoute> = ({ path, title }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div style={{ margin: "10px" }}>
      <button
        onClick={() => {
          navigate(path);
        }}
      >
        {title}
      </button>
    </div>
  );
};

const NavHeaderWeb: React.FC<INavProps> = ({ routes }) => {
  function numOfSlashes(str: string): number {
    return str.split("/").length - 1;
  }

  return (
    <StyledNavHeaderWeb>
      <Link to="/">
        <img src="logo.png" alt="logo" width="50px" height="50px" />
      </Link>
      {routes
        .filter(
          (route) =>
            numOfSlashes(route.path) === 2 || numOfSlashes(route.path) === 1
        )
        .map((route) => (
          <SuperRoute
            {...route}
            key={route.title}
            title={route.path === "/" ? "Home" : route.title}
          >
            {routes
              .filter(
                (subroute) =>
                  numOfSlashes(subroute.path) === 3 &&
                  subroute.path.includes(route.path) &&
                  route.path !== "/"
              )
              .map((subroute) => (
                <SubRoute key={subroute.title} {...subroute} />
              ))}
          </SuperRoute>
        ))}
    </StyledNavHeaderWeb>
  );
};

export default NavHeaderWeb;

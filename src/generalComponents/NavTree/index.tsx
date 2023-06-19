import { NavigateFunction, useNavigate } from "react-router-dom";
import { StyledNavTree } from "./NavTree.styled";
import { IRoute } from "../../constants";
import React, { useState } from "react";

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
  const navigate: NavigateFunction = useNavigate();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return React.Children.count(children) !== 0 ? (
    <div style={{ width: "100px" }}>
      <button onClick={() => navigate(path)}>{title}</button>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "ʌ" : "v"}
      </button>

      {isExpanded && children}
    </div>
  ) : (
    <div style={{ width: "100px" }}>
      <button onClick={() => navigate(path)}>{title}</button>
    </div>
  );
};

const SubRoute: React.FC<ISubRoute> = ({ path, title }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div style={{ paddingLeft: "1em" }}>
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

const NavTree: React.FC<INavProps> = ({ routes }) => {
  function numOfSlashes(str: string): number {
    return str.split("/").length - 1;
  }

  return (
    <StyledNavTree>
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
    </StyledNavTree>
  );
};

export default NavTree;

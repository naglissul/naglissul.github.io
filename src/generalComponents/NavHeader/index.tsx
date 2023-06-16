import { NavigateFunction, useNavigate } from "react-router-dom";
import { StyledNavHeader } from "./NavHeader.styled";

interface IRoute {
  path: string;
  title: string;
  element: JSX.Element;
}

interface INavProps {
  routes: Array<IRoute>;
}

const SubRoute: React.FC<IRoute> = ({ path, title }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <span style={{ backgroundColor: "wheat" }}>
      <button onClick={() => navigate(path)}>{title}</button>
    </span>
  );
};

const SuperRoute: React.FC<IRoute> = ({ path, title }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <span style={{ backgroundColor: "red" }}>
      <button onClick={() => navigate(path)}>{title}</button>
    </span>
  );
};

const NavHeader: React.FC<INavProps> = ({ routes }) => {
  return (
    <StyledNavHeader>
      {routes.map((route: IRoute, index: number) =>
        route.path.split("/").length - 1 > 1 ? (
          <SubRoute key={index} {...route} />
        ) : (
          <SuperRoute key={index} {...route} />
        )
      )}
    </StyledNavHeader>
  );
};

export default NavHeader;

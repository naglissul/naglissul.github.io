import { NavigateFunction, useNavigate } from "react-router-dom";
import { StyledNavHeader } from "./NavHeader.styled";

interface IRoute {
  path: string;
  title: string;
  element: JSX.Element;
  routes?: Array<IRoute>;
}

interface INavProps {
  routes: Array<IRoute>;
}

const SubTree: React.FC<IRoute> = ({ path, title, routes }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <details style={{ backgroundColor: "wheat", width: "100px" }}>
      <summary>
        <button onClick={() => navigate(path)}>{title}</button>
      </summary>
      <ul>
        {routes?.map((route: IRoute, index: number) => (
          <SubTree key={index} {...route} />
        ))}
      </ul>
    </details>
  );
};

const NavHeader: React.FC<INavProps> = ({ routes }) => {
  return (
    <StyledNavHeader>
      {routes.map((route: IRoute, index: number) => (
        <SubTree key={index} {...route} />
      ))}
    </StyledNavHeader>
  );
};

export default NavHeader;

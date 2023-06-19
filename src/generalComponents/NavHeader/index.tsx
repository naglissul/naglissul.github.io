import { IRoute, MOBILE_THRESHOLD } from "../../constants";
import NavHeaderMobile from "./mobile";
import NavHeaderWeb from "./web";

interface INavProps {
  routes: IRoute[];
}

const NavHeader: React.FC<INavProps> = ({ routes }) => {
  return window.innerWidth > MOBILE_THRESHOLD ? (
    <NavHeaderWeb routes={routes} />
  ) : (
    <NavHeaderMobile routes={routes} />
  );
};

export default NavHeader;

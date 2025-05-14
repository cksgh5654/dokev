import useDevice from "../../hooks/useDevice";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobileAndTablet from "./HeaderMobileAndTablet";

const Header = () => {
  const { isDesktop } = useDevice();
  return <>{isDesktop ? <HeaderDesktop /> : <HeaderMobileAndTablet />}</>;
};
export default Header;

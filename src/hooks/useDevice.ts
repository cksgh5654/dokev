import useMatchMedia from "./useMatchMedia";

const useDevice = () => {
  const isMobile = useMatchMedia("(max-width: 768px)");
  const isTablet = useMatchMedia("(min-width: 769px) and (max-width: 1023px)");
  const isDesktop = useMatchMedia("(min-width: 1024px)");
  return { isMobile, isTablet, isDesktop };
};

export default useDevice;

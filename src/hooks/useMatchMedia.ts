import { useEffect, useState } from "react";

//"(min-width: 400px)" :400px이상일 때
//"(max-width: 400px)" :400px 이하 일때
//"(min-width: 400px) and (max-width: 800px)" :400px이상 800px 이하 일때
const useMatchMedia = (mediaQuery: string) => {
  const getIsMatch = (query: string) => {
    return window && window.matchMedia(query).matches; //true || false
  };

  const [isMatch, setIsmatch] = useState<boolean>(getIsMatch(mediaQuery));

  const handleResize = () => {
    setIsmatch(getIsMatch(mediaQuery));
  };

  useEffect(() => {
    //1) mount 시점에 mediaQuery.matches()가 true | false 인지
    handleResize();

    //2) resize 시에  mediaQuery.matches()가 true | false 인지
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mediaQuery]);

  return isMatch;
};

export default useMatchMedia;

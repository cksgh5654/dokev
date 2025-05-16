import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../../assets/Icons/ArrowIcon";
import ArrowIcon2 from "../../assets/Icons/ArrowIcon2";
import PearlAbyssLogo from "../../assets/PearlAbyssLogo";
import blackDesertBg from "@header-img/bg_network_bdo.jpg";
import blackDesertLogo from "@header-img/blackdessert-logo.png";
import { platformData } from "../../const/headerData";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import YoutubeIcon from "../../assets/Icons/YoutubeIcon";
import InstagramIcon from "../../assets/Icons/InstagramIcon";
import XIcon from "../../assets/Icons/XIcon";

interface CurrentPlatform {
  title: string;
  background: string;
  logo: string;
  category: string;
  name: string;
  desc: string;
  url: string;
  consoleUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  xUrl: string;
}

const HeaderDesktop = () => {
  const [currentPlatform, setCurrentPlatform] = useState<CurrentPlatform>({
    title: "검은사막",
    background: blackDesertBg,
    logo: blackDesertLogo,
    category: "PC & CONSOLE / MMORPG",
    name: "펄어비스 MMO의 시작",
    desc: "리마스터링으로 더더욱 현실에 가까워진 모험이 당신을 기다립니다. 리얼함을 넘어 감동이 되는 여기는 검은사막입니다.",
    url: "https://www.kr.playblackdesert.com/",
    consoleUrl: "https://www.console.playblackdesert.com/",
    facebookUrl: "https://www.facebook.com/BlackDesertKR",
    youtubeUrl: "https://www.youtube.com/channel/UCEExGXSozNsReY3i3s4yhhQ",
    instagramUrl: "",
    xUrl: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const contentsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [opacity, setOpacity] = useState(0.7);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      contentsRef.current &&
      !contentsRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 288,
        behavior: "smooth",
      });
    }
  };

  const handleRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 288,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setAtStart(isAtStart());
      setAtEnd(isAtEnd());
    }
  };

  const isAtStart = () => {
    return scrollRef.current ? scrollRef.current.scrollLeft === 0 : true;
  };

  const isAtEnd = () => {
    if (!scrollRef.current) return false;
    const scrollEnd =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    return Math.abs(scrollEnd - scrollRef.current.scrollLeft) < 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setAtStart(isAtStart());
      setAtEnd(isAtEnd());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <header
      ref={contentsRef}
      className="sticky top-0 w-full h-[35px] font-nanum z-999"
    >
      <div className="flex items-center bg-[#222229] h-full px-[35px] relative z-2">
        <a
          href="https://www.pearlabyss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <PearlAbyssLogo
            className="h-4 cursor-pointer"
            opacity={opacity}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0.7)}
          />
        </a>
        <ul className="ml-[52px] flex gap-[56px] items-center text-[13px] text-[#777786]">
          <li>
            <a
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-1 cursor-pointer hover:text-white transition duration-150 ease-in-out ${
                isOpen && "text-white"
              } group`}
            >
              GAMES
              <ArrowIcon
                className={`h-3 transition duration-150 ease-in-out group-hover:stroke-white ${
                  isOpen
                    ? "rotate-180 stroke-white"
                    : "rotate-0 stroke-[#777786]"
                }`}
                strokeWidth="6"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.pearlabyss.com/news_public_list?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-150 ease-in-out"
            >
              NEWS
            </a>
          </li>
          <li>
            <a
              href="https://pearlabyss.gururang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-150 ease-in-out"
            >
              GEAR
            </a>
          </li>
        </ul>
      </div>
      <div
        className={` bg-[#151419] transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-[580px] opacity-0 overflow-hidden"
        } transition-all duration-300 ease-in-out relative z-1`}
      >
        <div className="flex justify-center">
          <button
            onClick={handleLeft}
            className="flex justify-center items-center w-[100px] h-[100px]"
          >
            <ArrowIcon2
              className={`${
                atStart && "hidden"
              } h-[56px] opacity-30 hover:opacity-100 transition duration-300 ease-in-out`}
              stroke="white"
              strokeWidth="1"
            />
          </button>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex-shrink-0 w-[864px] xl:w-[1152px] 2xl:w-[1440px] overflow-x-scroll whitespace-nowrap"
            style={{ scrollbarWidth: "none" }}
          >
            {platformData.map((item) => {
              return (
                <a
                  key={item.title}
                  onMouseEnter={() =>
                    setCurrentPlatform({
                      title: item.title,
                      background: item.background,
                      logo: item.logo,
                      category: item.category,
                      name: item.name,
                      desc: item.desc,
                      url: item.url,
                      consoleUrl: item.consoleUrl,
                      facebookUrl: item.facebookUrl,
                      youtubeUrl: item.youtubeUrl,
                      instagramUrl: item.instagramUrl,
                      xUrl: item.xUrl,
                    })
                  }
                  href={item.url}
                  target="_blank"
                  className={`inline-flex justify-center items-center text-white text-lg opacity-30 w-[288px] h-[99px] border-b-4 border-b-[rgba(174,137,84,0)] transition duration-300 ease-in-out ${
                    currentPlatform.title === item.title &&
                    "border-b-[rgba(174,137,84,1)] opacity-100"
                  }`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
          <button
            onClick={handleRight}
            className="flex justify-center items-center w-[100px] h-[100px]"
          >
            <ArrowIcon2
              className={`${
                atEnd && "hidden"
              } rotate-180 h-[56px] opacity-30 hover:opacity-100 transition duration-300 ease-in-out`}
              stroke="white"
              strokeWidth="1"
            />
          </button>
        </div>
        <div className="flex justify-center bg-[#23232a] w-full">
          <div
            style={{ backgroundImage: `url(${currentPlatform.background})` }}
            className="flex flex-col justify-between w-[1600px] h-120 bg-cover bg-center pl-[30px] py-[45px]"
          >
            <div className="flex flex-col gap-4">
              <a
                href={currentPlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(${currentPlatform.logo})` }}
                className="h-[50px] bg-contain bg-no-repeat"
              ></a>
              <p className="text-[#8484a384] text-[15px]">
                {currentPlatform.category}
              </p>
              <h1 className="text-white text-[40px] whitespace-pre-line tracking-[-0.1rem] leading-[1.4]">
                {currentPlatform.name}
              </h1>
              <p className="whitespace-pre-line text-[#d8d8ec90] text-[15px] leading-[24px]">
                {currentPlatform.desc}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {currentPlatform.consoleUrl ? (
                <>
                  <div className="flex gap-4">
                    <a
                      href={currentPlatform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white inline-flex justify-center items-center w-[300px] h-[54px] px-4 border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#ae8954] transition duration-150 ease-in-out"
                    >
                      PC 공식 홈페이지
                    </a>
                    <a
                      href={currentPlatform.consoleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white inline-flex justify-center items-center w-[300px] h-[54px] px-4 border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#ae8954] transition duration-150 ease-in-out"
                    >
                      콘솔 공식 홈페이지
                    </a>
                  </div>
                  <div className="flex gap-[10px]">
                    {currentPlatform.facebookUrl !== "" && (
                      <a
                        href={currentPlatform.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[54px] h-[54px] border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#0866ff] transition duration-150 ease-in-out"
                      >
                        <FacebookIcon className="w-8" />
                      </a>
                    )}
                    {currentPlatform.youtubeUrl !== "" && (
                      <a
                        href={currentPlatform.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[54px] h-[54px] border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#fc0f00] transition duration-150 ease-in-out"
                      >
                        <YoutubeIcon className="w-8" />
                      </a>
                    )}
                    {currentPlatform.instagramUrl !== "" && (
                      <a
                        href={currentPlatform.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[54px] h-[54px] border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#ff087f] transition duration-150 ease-in-out"
                      >
                        <InstagramIcon className="w-8" />
                      </a>
                    )}
                    {currentPlatform.xUrl !== "" && (
                      <a
                        href={currentPlatform.xUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[54px] h-[54px] border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#000000] transition duration-150 ease-in-out"
                      >
                        <XIcon className="w-8" />
                      </a>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-[10px]">
                    <a
                      href={currentPlatform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white inline-flex justify-center items-center w-[300px] h-[54px] px-4 border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#ae8954] transition duration-150 ease-in-out"
                    >
                      PC 공식 홈페이지
                    </a>
                    {currentPlatform.facebookUrl !== "" && (
                      <a
                        href={currentPlatform.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[54px] h-[54px] border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#0866ff] transition duration-150 ease-in-out"
                      >
                        <FacebookIcon className="w-8" />
                      </a>
                    )}
                    {currentPlatform.youtubeUrl !== "" && (
                      <a
                        href={currentPlatform.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[54px] h-[54px] border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#fc0f00] transition duration-150 ease-in-out"
                      >
                        <YoutubeIcon className="w-8" />
                      </a>
                    )}
                    {currentPlatform.instagramUrl !== "" && (
                      <a
                        href={currentPlatform.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[54px] h-[54px] border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-linear-45 from-yellow-500 via-red-500 to-purple-500 transition duration-150 ease-in-out"
                      >
                        <InstagramIcon className="w-8" />
                      </a>
                    )}
                    {currentPlatform.xUrl !== "" && (
                      <a
                        href={currentPlatform.xUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[54px] h-[54px] border rounded-full border-[rgba(131,131,145,0.4)] hover:bg-[#000000] transition duration-150 ease-in-out"
                      >
                        <XIcon className="w-8" />
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderDesktop;

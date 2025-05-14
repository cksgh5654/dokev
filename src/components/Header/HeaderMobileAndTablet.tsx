import { useEffect, useRef, useState } from "react";
import EllipsesIcon from "../../assets/Icons/EllipsesIcon";
import Logo from "../../assets/Logo";
import PearlAbyssLogo from "../../assets/PearlAbyssLogo";
import CloseIcon from "../../assets/Icons/CloseIcon";
import ArrowIcon from "../../assets/Icons/ArrowIcon";
import { platformData } from "../../const/headerData";

const HeaderMobileAndTablet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <header className="fixed top-0 w-full h-[56px] font-nanum z-99">
      <div className="flex justify-center items-center bg-[#222229] h-full">
        <div className="flex items-center justify-center w-full">
          <Logo className="h-[34px]" />
        </div>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="w-[56px] h-[56px] flex items-center justify-center cursor-pointer"
        >
          <EllipsesIcon className="w-7" fill="#fff" fillOpacity={0.7} />
        </button>
      </div>
      <div
        ref={menuRef}
        className={`sticky top-0 overflow-x-hidden z-[99] bg-white w-[375px] h-screen transform ${
          isOpen ? "translate-x-[calc(100vw-375px)]" : "translate-x-[100vw]"
        } duration-300 ease-in-out`}
      >
        <div className="h-[56px] flex justify-center items-center px-4 border-b border-[#e5e5e5]">
          <div className="flex items-center justify-center w-full">
            <a href="https://www.pearlabyss.com">
              <PearlAbyssLogo
                className="w-[134px] translate-x-[24px] cursor-pointer"
                fill="black"
              />
            </a>
          </div>
          <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <CloseIcon className="w-8" />
          </button>
        </div>
        <ul className="flex flex-col">
          <li
            className={`transition-all duration-300 ease-in-out ${
              isGameOpen ? "h-[393px]" : "h-[56px]"
            }`}
          >
            <div className="h-[56px] flex items-center px-4 border-b border-[#e5e5e5]">
              <button
                onClick={() => setIsGameOpen((prev) => !prev)}
                className="pl-[20px] flex items-center gap-2 cursor-pointer"
              >
                GAMES
                <ArrowIcon
                  className={`h-3 transition duration-150 ease-in-out stroke-[#3d3d3d] ${
                    isGameOpen ? "rotate-180" : "rotate-0"
                  }`}
                  strokeWidth="6"
                />
              </button>
            </div>

            <ul
              className={`flex flex-col gap-8 pl-[56px] py-[44px] border-b border-[#e5e5e5] transition duration-300 ease-in-out ${
                isGameOpen ? "translate-y-0" : "-translate-y-[16px]"
              }`}
            >
              {platformData.map((item) => (
                <li key={item.title}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>

          <li className="h-[56px] flex items-center px-4 border-b border-[#e5e5e5]  bg-white z-10">
            <a
              href="https://www.pearlabyss.com/news_public_list?lang=ko"
              className="pl-[20px]"
            >
              NEWS
            </a>
          </li>
          <li className="h-[56px] flex items-center px-4 border-b border-[#e5e5e5] bg-white z-10">
            <a href="https://pearlabyss.gururang.com" className="pl-[20px]">
              GEAR
            </a>
          </li>
          <div className="flex justify-center text-[#7f7e7e] text-xs py-[110px] bg-white z-10">
            Copyright © Pearl Abyss Corp. All Rights Reserved.
          </div>
        </ul>
      </div>
      {isOpen && (
        <div className="fixed top-0 w-screen h-screen bg-black/70 z-[98]"></div>
      )}
    </header>
  );
};
export default HeaderMobileAndTablet;

import { useEffect, useRef } from "react";
import FacebookIcon from "../assets/Icons/FacebookIcon";
import InstagramIcon from "../assets/Icons/InstagramIcon";
import XIcon from "../assets/Icons/XIcon";
import YoutubeIcon from "../assets/Icons/YoutubeIcon";
import GallerySection from "../components/main/GallerySection";
import MainSection from "../components/main/MainSection";
import SubscribeSection from "../components/main/SubscribeSection";
import VideoSection from "../components/main/VideoSection";
import useDevice from "../hooks/useDevice";

const sns = [
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCwI4MlybmpoWdFI4faRSs_A",
    icon: YoutubeIcon,
  },
  {
    name: "x",
    link: "https://x.com/DokeVGame",
    icon: XIcon,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/dokevgame",
    icon: InstagramIcon,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/DokeVGameKR",
    icon: FacebookIcon,
  },
];

const MainPage = () => {
  const { isDesktop, isTablet } = useDevice();
  const containerRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        Math.max(-rect.top / (rect.height - windowHeight), 0),
        1
      );
      container.style.backgroundPosition = `center ${progress * 100}%`;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", animate);
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("scroll", animate);
      window.removeEventListener("resize", animate);
    };
  }, []);

  return (
    <>
      {(isDesktop || isTablet) && (
        <nav className="fixed top-[88px] right-0 flex justify-end gap-4 h-[48px] pr-8 z-100">
          {sns.map(({ name, link, icon: Icon }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[48px] h-[48px] rounded-full border border-white/50 group duration-300 ease-in-out hover:bg-white"
            >
              <Icon className="w-[32px] duration-300 ease-in-out group-hover:invert" />
            </a>
          ))}
        </nav>
      )}

      <main className="contain-paint">
        <MainSection />
        <div
          ref={containerRef}
          className="bg-[url('/src/assets/images/bg_vertical.jpg')] pt-32 bg-no-repeat"
          style={{
            backgroundPosition: "center 100%",
          }}
        >
          <VideoSection />
          <GallerySection />
          <SubscribeSection />
        </div>
      </main>
    </>
  );
};

export default MainPage;

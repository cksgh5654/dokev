import { useEffect, useRef } from "react";
import mvImg from "../../assets/images/video-section-img/img_musicvideo_bg.jpg";
import mvLogo from "../../assets/images/video-section-img/rockstar_logo.png";
import boxObj from "../../assets/images/video-section-img/img_box_object.png";
import trailerImg from "../../assets/images/video-section-img/img_movie_bg_v3.jpg";
import trailerLogo from "../../assets/images/video-section-img/img_text_dokev_trailer_ko.png";
import spark from "../../assets/images/video-section-img/img_board_spark_v2.png";
import board from "../../assets/images/video-section-img/img_board_v2.png";
import useDevice from "../../hooks/useDevice";
import DownloadIcon from "../../assets/Icons/DownloadIcon";
import rockstar from "../../assets/ROCKSTAR.mp3";
import rockstarRemix from "../../assets/ROCKSTAR(TAK_Remix).mp3";
import XIcon from "../../assets/Icons/XIcon";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import PlayButtonIcon from "../../assets/Icons/PlayButtonIcon";
import CloseIcon from "../../assets/Icons/CloseIcon";

const VideoSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mvRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);
  const iframeTrailerRef = useRef<HTMLIFrameElement>(null);
  const { isDesktop, isTablet } = useDevice();

  const animate = () => {
    requestAnimationFrame(() => {
      const timeline = timelineRef.current;
      const container = containerRef.current;
      if (!timeline || !container) return;
      const rect = timeline.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      const progress = Math.min(
        Math.max(-rect.top / (rect.height - windowHeight), 0),
        1
      );

      container.style.transform = `translateX(${progress * -50}%)`;
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mvRef.current &&
        !mvRef.current.contains(event.target as Node) &&
        iframeRef.current
      ) {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "pauseVideo",
          }),
          "https://www.youtube.com"
        );
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trailerRef.current &&
        !trailerRef.current.contains(event.target as Node) &&
        iframeTrailerRef.current
      ) {
        iframeTrailerRef.current.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "pauseVideo",
          }),
          "https://www.youtube.com"
        );
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handlePause = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
        }),
        "https://www.youtube.com"
      );
    }
  };

  const handlePauseTrailer = () => {
    if (iframeTrailerRef.current) {
      iframeTrailerRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
        }),
        "https://www.youtube.com"
      );
    }
  };

  return (
    <section ref={timelineRef} className="h-[200vh]">
      <div
        ref={containerRef}
        className="w-[200vw] flex gap-8 items-center sticky top-0 h-[100vh] overflow-hidden px-4"
      >
        <div className="w-screen flex justify-center">
          <figure className="relative w-full md:max-w-[1440px] bg-[#0098ff] h-[80vh] md:h-[820px] flex flex-col md:flex-row justify-center items-center py-[32px] px-[5vw] gap-8 rounded-br-3xl rounded-tl-3xl">
            <button
              popoverTarget="mv-popover"
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                className="duration-300 ease-in-out group-hover:scale-110"
                src={mvImg}
                alt="musicvideo"
                onDragStart={(e) => e.preventDefault()}
              />
              <PlayButtonIcon className="absolute w-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-80 group-hover:opacity-100 duration-300 ease-in-out" />
            </button>
            <figcaption className="flex flex-col gap-4 text-white">
              <img
                src={mvLogo}
                alt="musicvideoLogo"
                className="w-[259px] pb-4"
                onDragStart={(e) => e.preventDefault()}
              />
              <h1 className="text-5xl font-bold">스페셜 퍼포먼스</h1>
              <p className="text-lg">
                시선을 사로잡는 비주얼과 재미가 가득한
                {(isDesktop || isTablet) && <br />} 도깨비 ROCKSTAR 공식 댄스
                MV! 함께 춤춰볼까요?
              </p>
              <div className="flex flex-col gap-3 mt-4 pb-4">
                <h4 className="text-[#ffee93] text-2xl font-light">CREDITS</h4>
                <ul className="text-[#aed9fc] text-sm flex flex-col gap-1 list-disc pl-3">
                  <li>EXECUTIVE PRODUCER: PEARL ABYSS</li>
                  <li>MUSIC PRODUCER: 별들의전쟁 * (GALACTIKA *)</li>
                  <li>MIXED BY TAK(NEWTYPE)</li>
                  <li>CHOREOGRAPHY BY 1MILLION DANCE STUDIO</li>
                  <li>VOCALS BY LUENA</li>
                </ul>
              </div>
              <div className="flex gap-2 w-full p-4 bg-black/15 rounded-full">
                <a
                  download="ROCKSTAR.mp3"
                  href={rockstar}
                  className="w-[50%] flex gap-2 justify-center items-center rounded-full bg-[#ff4775] text-white py-3 cursor-pointer hover:bg-[#ff004f] duration-300 ease-in-out"
                >
                  Original
                  <DownloadIcon className="w-6" fill="white" />
                </a>
                <a
                  download="ROCKSTAR(TAK_Remix).mp3"
                  href={rockstarRemix}
                  className="w-[50%] flex gap-2 justify-center items-center rounded-full bg-[#def4ff] text-[#0072be] py-3 cursor-pointer hover:bg-[#ffffff] duration-300 ease-in-out"
                >
                  Remix
                  <DownloadIcon className="w-6" fill="#0072be" />
                </a>
              </div>
            </figcaption>
            {(isDesktop || isTablet) && (
              <img
                className="w-[30vw] max-w-[500px] absolute bottom-[-20px] left-[5vw] animate-[move_4s_ease-in-out_infinite_alternate]"
                src={boxObj}
                alt="box"
                onDragStart={(e) => e.preventDefault()}
              />
            )}
            <div
              ref={mvRef}
              id="mv-popover"
              popover="auto"
              className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[1280px] aspect-video bg-white/0 backdrop:backdrop-blur-sm backdrop:bg-black/50"
            >
              <button
                onClick={handlePause}
                className="absolute right-2 cursor-pointer"
                popoverTarget="mv-popover"
                popoverTargetAction="hide"
              >
                <CloseIcon fill="white" className="w-8" />
              </button>
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/xkELKW1waos?enablejsapi=1"
                title="rockstar musicvideo"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </figure>
        </div>
        <div className="w-screen flex justify-center">
          <figure className="relative w-full md:max-w-[1440px] h-[80vh] md:h-[820px] bg-[#ff004f] flex flex-col md:flex-row justify-center items-center py-[32px] px-[5vw] gap-8 rounded-br-3xl rounded-tl-3xl">
            <button
              popoverTarget="trailer-popover"
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={trailerImg}
                alt="trailer"
                className="duration-300 ease-in-out group-hover:scale-110"
              />
              <PlayButtonIcon
                color="#0098ff"
                className="absolute w-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-80 group-hover:opacity-100 duration-300 ease-in-out"
              />
            </button>
            <figcaption className="flex flex-col gap-4 text-white">
              <img
                src={trailerLogo}
                alt="musicvideoLogo"
                className="w-[259px] pb-4"
              />
              <div className="flex flex-col gap-2 pb-2">
                <p className="text-2xl text-amber-200 font-semibold">
                  우리와 함께 살아가고 있던 존재와
                </p>
                <h1 className="text-5xl font-bold">처음으로 마주하다</h1>
              </div>
              <div className="flex flex-col gap-2 pb-8">
                <p className="text-lg text-white/70">
                  독특한 세계관, 모두가 공감할 이야기를 담은
                  <br />
                  도깨비 수집
                  <em className="text-white">
                    &nbsp;오픈월드 액션 어드벤처 DokeV
                  </em>
                  . <br />
                </p>
                <p className="text-lg text-white/70">
                  사람들의 꿈에서 힘을 얻고
                  <br />
                  함께 성장하며 응원하는 도깨비들을 찾고,
                </p>
                <p className="text-lg text-white/70">
                  <em className="text-white">
                    그들과 함께 새로운 모험을 떠나보세요!
                  </em>
                </p>
              </div>
              <div className="flex gap-2 w-full">
                <a
                  href="https://x.com/intent/post?url=https%3A%2F%2Fyoutu.be%2FS7Xlr_EQysA&text=%EB%8F%84%EA%B9%A8%EB%B9%84(DokeV)%20-%20%EC%9B%94%EB%93%9C%20%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4%20%EA%B2%8C%EC%9E%84%ED%94%8C%EB%A0%88%EC%9D%B4%20%ED%8A%B8%EB%A0%88%EC%9D%BC%EB%9F%AC&via=YouTube&related=YouTube%2CYouTubeTrends%2CYTCreators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 w-[50%] text-nowrap rounded-full bg-[#2e3234] text-white px-8 py-3 cursor-pointer hover:bg-black duration-300 ease-in-out"
                >
                  X 공유하기
                  <XIcon className="w-5" />
                </a>
                <a
                  href="https://www.facebook.com/dialog/share?app_id=87741124305&href=https%3A//www.youtube.com/watch%3Fv%3DS7Xlr_EQysA&display=popup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 w-[50%] text-nowrap rounded-full bg-[#3781ff] text-white px-8 py-3 cursor-pointer hover:bg-[#176bff] duration-300 ease-in-out"
                >
                  페이스북 공유하기
                  <FacebookIcon className="w-18" />
                </a>
              </div>
            </figcaption>
            {(isDesktop || isTablet) && (
              <>
                <img
                  className="w-[25vw] max-w-[350px] absolute bottom-0 left-[5vw] animate-[move_4s_ease-in-out_infinite_alternate]"
                  src={board}
                  alt="board"
                />
                <img
                  className="w-[30vw] max-w-[500px] absolute bottom-0 left-[calc(5vw-30px)] animate-[moveSpark_4s_ease-in-out_infinite_alternate]"
                  src={spark}
                  alt="spark"
                />
              </>
            )}
            <div
              ref={trailerRef}
              id="trailer-popover"
              popover="auto"
              className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[1280px] aspect-video bg-white/0 backdrop:backdrop-blur-sm backdrop:bg-black/50"
            >
              <button
                onClick={handlePauseTrailer}
                className="absolute right-2 cursor-pointer"
                popoverTarget="trailer-popover"
                popoverTargetAction="hide"
              >
                <CloseIcon fill="white" className="w-8" />
              </button>
              <iframe
                ref={iframeTrailerRef}
                src="https://www.youtube.com/embed/S7Xlr_EQysA?enablejsapi=1"
                title="trailer"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
export default VideoSection;

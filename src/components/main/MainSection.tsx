import Logo from "../../assets/Logo";

interface MainSectionProps {
  scrollToSubscribe: () => void;
}

const MainSection = ({ scrollToSubscribe }: MainSectionProps) => {
  return (
    <section className="flex justify-center items-center h-screen bg-[url('/src/assets/images/page1_main_bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center gap-16">
        <Logo className="w-[70vw] md:w-[520px]" />
        <div className="flex w-full gap-4 px-4">
          <button
            popoverTarget="trailer-popover"
            className="bg-[#39a3fb] text-white text-nowrap w-full px-6 py-4 font-bold md:text-[20px] rounded-bl-2xl rounded-tr-2xl hover:bg-[#0098ff] hover:translate-y-[-8px] cursor-pointer duration-300 ease-in-out"
          >
            트레일러 보기
          </button>
          <button
            onClick={scrollToSubscribe}
            className="bg-[#ff3467] text-white text-nowrap w-full px-6 py-4 font-bold md:text-[20px] rounded-bl-2xl rounded-tr-2xl hover:bg-[#ff004f] hover:translate-y-[-8px] cursor-pointer duration-300 ease-in-out"
          >
            뉴스레터 구독
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

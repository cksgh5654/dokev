import Logo from "../../assets/Logo";

const MainSection = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-[url('/src/assets/images/page1_main_bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center gap-16">
        <Logo className="w-[70vw] md:w-[520px]" />
        <div className="flex gap-4 px-4">
          <button className="bg-[#39a3fb] text-white text-nowrap px-16 py-4 font-bold text-[20px] rounded-bl-2xl rounded-tr-2xl hover:bg-[#0098ff] hover:translate-y-[-8px] cursor-pointer duration-300 ease-in-out">
            트레일러 보기
          </button>
          <button className="bg-[#ff3467] text-white text-nowrap px-16 py-4 font-bold text-[20px] rounded-bl-2xl rounded-tr-2xl hover:bg-[#ff004f] hover:translate-y-[-8px] cursor-pointer duration-300 ease-in-out">
            뉴스레터 구독
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

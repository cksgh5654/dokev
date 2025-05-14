import { CarouselInfinite, Modal } from "parkchanho-react-ui-kit";
import ChevronIcon from "../../assets/Icons/ChevronIcon";
import { galleryBigData, galleryData } from "../../const/galleryData";
import { useState } from "react";
import CloseIcon from "../../assets/Icons/CloseIcon";
import radio from "../../assets/images/gallery-section-img/img_radio_v2.png";
import spark from "../../assets/images/gallery-section-img/img_radio_spark.png";
import useDevice from "../../hooks/useDevice";

const GallerySection = () => {
  const { isDesktop, isTablet } = useDevice();
  const [bigGalleryIndex, setBigGalleryIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="pt-[128px]">
      <div className="w-screen">
        <CarouselInfinite className="relative pb-[128px]">
          {(isDesktop || isTablet) && (
            <>
              <img
                className="w-[10vw] max-w-[300px] absolute top-0 right-[20vw] animate-[move_4s_ease-in-out_infinite_alternate] z-10"
                src={radio}
                alt="radio"
              />
              <img
                className="w-[10vw] max-w-[300px] absolute top-[20px] right-[calc(20vw+15px)] animate-[moveSpark_4s_ease-in-out_infinite_alternate] z-10"
                src={spark}
                alt="spark"
              />
            </>
          )}
          <CarouselInfinite.ItemContainer>
            <CarouselInfinite.ItemList>
              <CarouselInfinite.Item
                key={0}
                className={`w-full max-h-[80vh] 2xl:w-[1440px]`}
              >
                {() => (
                  <div className="h-full flex justify-center items-center px-4">
                    <div className="w-full h-full md:h-fit grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 justify-items-center items-center gap-4">
                      <button
                        onClick={() => {
                          setBigGalleryIndex(1);
                          handleOpenModal();
                        }}
                        className="cursor-pointer row-span-2 md:row-span-1 md:col-span-2 w-full h-full md:w-fit md:h-fit overflow-hidden rounded-3xl"
                      >
                        <img
                          src={galleryData[0].images}
                          alt={galleryData[0].alt}
                          className="hover:scale-110 duration-300 w-full h-full object-cover ease-in-out"
                        />
                      </button>
                      <div className="flex md:flex-col gap-4 w-full h-full">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(2);
                            handleOpenModal();
                          }}
                          popoverTarget="big-gallery"
                          className="cursor-pointer overflow-hidden w-full h-full rounded-3xl"
                        >
                          <img
                            src={galleryData[1].images}
                            alt={galleryData[1].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(3);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full rounded-3xl"
                        >
                          <img
                            src={galleryData[2].images}
                            alt={galleryData[2].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                      <div className="flex items-center gap-4 row-span-2 md:row-span-1 md:col-span-2 w-full h-full">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(4);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[3].images}
                            alt={galleryData[3].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(5);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[4].images}
                            alt={galleryData[4].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </CarouselInfinite.Item>

              <CarouselInfinite.Item
                key={1}
                className={`w-full max-h-[80vh] 2xl:w-[1440px]`}
              >
                {() => (
                  <div className="h-full flex justify-center items-center px-4">
                    <div className="w-full h-full md:h-fit grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 justify-items-center items-center gap-4">
                      <button
                        onClick={() => {
                          setBigGalleryIndex(6);
                          handleOpenModal();
                        }}
                        className="cursor-pointer w-full h-full md:w-fit md:h-fit overflow-hidden rounded-3xl"
                      >
                        <img
                          src={galleryData[5].images}
                          alt={galleryData[5].alt}
                          className="hover:scale-110 duration-300 w-full h-full object-cover ease-in-out"
                        />
                      </button>
                      <div className="relative flex md:flex-col gap-4 w-full h-full row-span-2 md:row-span-1 md:col-span-2">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(7);
                            handleOpenModal();
                          }}
                          popoverTarget="big-gallery"
                          className="cursor-pointer overflow-hidden w-full h-full rounded-3xl"
                        >
                          <img
                            src={galleryData[6].images}
                            alt={galleryData[6].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(8);
                            handleOpenModal();
                          }}
                          className="absolute bottom-0 right-0 cursor-pointer overflow-hidden w-[calc(50%-16px)] h-[calc(50%-16px)] rounded-3xl"
                        >
                          <img
                            src={galleryData[7].images}
                            alt={galleryData[7].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                      <div className="flex items-center gap-4 row-span-2 md:row-span-1 md:col-span-2 w-full h-full">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(9);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[8].images}
                            alt={galleryData[8].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(10);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[9].images}
                            alt={galleryData[9].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </CarouselInfinite.Item>

              <CarouselInfinite.Item
                key={2}
                className={`w-full max-h-[80vh] 2xl:w-[1440px]`}
              >
                {() => (
                  <div className="h-full flex justify-center items-center px-4">
                    <div className="w-full h-full md:h-fit grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 justify-items-center items-center gap-4">
                      <div className="relative flex items-center gap-4 w-full h-full md:h-fit row-span-2 md:row-span-1 md:col-span-3">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(11);
                            handleOpenModal();
                          }}
                          className="cursor-pointer h-full w-[calc(66%-16px)] md:h-fit overflow-hidden rounded-3xl"
                        >
                          <img
                            src={galleryData[10].images}
                            alt={galleryData[10].alt}
                            className="hover:scale-110 duration-300 w-full h-full object-cover ease-in-out"
                          />
                        </button>

                        <button
                          onClick={() => {
                            setBigGalleryIndex(12);
                            handleOpenModal();
                          }}
                          popoverTarget="big-gallery"
                          className="cursor-pointer overflow-hidden  w-[67%] h-[43%] rounded-3xl absolute top-0 right-0"
                        >
                          <img
                            src={galleryData[11].images}
                            alt={galleryData[11].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(13);
                            handleOpenModal();
                          }}
                          className="absolute bottom-0 right-0 cursor-pointer overflow-hidden w-[33%] h-[53%] rounded-3xl"
                        >
                          <img
                            src={galleryData[12].images}
                            alt={galleryData[12].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          setBigGalleryIndex(14);
                          handleOpenModal();
                        }}
                        className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl md:translate-y-[64px]"
                      >
                        <img
                          src={galleryData[13].images}
                          alt={galleryData[13].alt}
                          className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                        />
                      </button>
                      <div className="flex md:flex-col justify-center gap-4 row-span-2 md:row-span-1 md:col-span-1 w-full h-full md:translate-y-[30px]">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(15);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[14].images}
                            alt={galleryData[14].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(16);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[15].images}
                            alt={galleryData[15].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </CarouselInfinite.Item>
              <CarouselInfinite.Item
                key={3}
                className={`w-full max-h-[80vh] 2xl:w-[1440px]`}
              >
                {() => (
                  <div className="h-full flex justify-center items-center px-4">
                    <div className="w-full h-full md:h-fit grid grid-rows-5 grid-cols-1 md:grid-rows-1 md:grid-cols-5 justify-items-center items-center md:gap-4">
                      <div className="md:col-span-3 row-span-3 md:row-span-1 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 w-full h-full">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(17);
                            handleOpenModal();
                          }}
                          className="col-span-2 cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl self-end"
                        >
                          <img
                            src={galleryData[16].images}
                            alt={galleryData[16].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(19);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl self-end"
                        >
                          <img
                            src={galleryData[18].images}
                            alt={galleryData[18].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(18);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:w-fit md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[17].images}
                            alt={galleryData[17].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(20);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:h-fit rounded-3xl col-span-2"
                        >
                          <img
                            src={galleryData[19].images}
                            alt={galleryData[19].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                      <div className="relative col-span-2 row-span-2 md:row-span-1 w-full h-full md:h-fit self-center pt-4 md:pt-0">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(21);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[20].images}
                            alt={galleryData[20].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(22);
                            handleOpenModal();
                          }}
                          className="absolute bottom-0 right-0 cursor-pointer overflow-hidden w-[53%] h-[51%] rounded-3xl"
                        >
                          <img
                            src={galleryData[21].images}
                            alt={galleryData[21].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </CarouselInfinite.Item>
              <CarouselInfinite.Item
                key={4}
                className={`w-full max-h-[80vh] 2xl:w-[1440px]`}
              >
                {() => (
                  <div className="h-full flex justify-center items-center px-4">
                    <div className="w-full h-full md:h-fit grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 justify-items-center items-center gap-4">
                      <button
                        onClick={() => {
                          setBigGalleryIndex(23);
                          handleOpenModal();
                        }}
                        className="cursor-pointer w-full h-full md:w-fit md:h-fit overflow-hidden rounded-3xl md:translate-y-[-16%]"
                      >
                        <img
                          src={galleryData[22].images}
                          alt={galleryData[22].alt}
                          className="hover:scale-110 duration-300 object-cover ease-in-out w-full h-full"
                        />
                      </button>

                      <div className="relative md:col-span-2 row-span-2 md:row-span-1 w-full h-full md:h-fit self-center">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(24);
                            handleOpenModal();
                          }}
                          className="cursor-pointer overflow-hidden w-full h-full md:h-fit rounded-3xl"
                        >
                          <img
                            src={galleryData[23].images}
                            alt={galleryData[23].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(25);
                            handleOpenModal();
                          }}
                          className="absolute bottom-0 right-0 cursor-pointer overflow-hidden w-[48%] h-[47%] rounded-3xl"
                        >
                          <img
                            src={galleryData[24].images}
                            alt={galleryData[24].alt}
                            className="hover:scale-110 duration-300 ease-in-out w-full h-full object-cover"
                          />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          setBigGalleryIndex(26);
                          handleOpenModal();
                        }}
                        className="cursor-pointer w-full h-full md:h-fit overflow-hidden rounded-3xl"
                      >
                        <img
                          src={galleryData[25].images}
                          alt={galleryData[25].alt}
                          className="hover:scale-110 duration-300 object-cover ease-in-out w-full h-full"
                        />
                      </button>
                      <div className="flex md:flex-col justify-center gap-4 w-full h-full md:translate-y-[6%]">
                        <button
                          onClick={() => {
                            setBigGalleryIndex(27);
                            handleOpenModal();
                          }}
                          className="cursor-pointer w-full md:h-fit overflow-hidden rounded-3xl"
                        >
                          <img
                            src={galleryData[26].images}
                            alt={galleryData[26].alt}
                            className="hover:scale-110 duration-300 w-full h-full object-cover ease-in-out"
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBigGalleryIndex(28);
                            handleOpenModal();
                          }}
                          className="cursor-pointer w-full md:h-fit overflow-hidden rounded-3xl"
                        >
                          <img
                            src={galleryData[27].images}
                            alt={galleryData[27].alt}
                            className="hover:scale-110 duration-300 w-full h-full object-cover ease-in-out"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </CarouselInfinite.Item>
            </CarouselInfinite.ItemList>
          </CarouselInfinite.ItemContainer>
          <CarouselInfinite.Navigator className="w-full max-w-[1440px] absolute top-[calc(50%-96px)] left-1/2 transform -translate-x-1/2 flex items-center justify-between gap-2 px-8 pointer-events-none">
            {(handlePrev, handleNext, isTransitioning) => (
              <>
                <button
                  className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-90 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2 cursor-pointer pointer-events-auto"
                  onClick={handlePrev}
                  disabled={isTransitioning}
                >
                  <ChevronIcon height="60px" color="#fff" thickness="6" />
                </button>

                <button
                  className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-90 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2 cursor-pointer pointer-events-auto"
                  onClick={handleNext}
                  disabled={isTransitioning}
                >
                  <ChevronIcon
                    height="60px"
                    color="#fff"
                    thickness="6"
                    className="rotate-180"
                  />
                </button>
              </>
            )}
          </CarouselInfinite.Navigator>
          <CarouselInfinite.Indicator
            styleType="dots"
            dotSize={16}
            activeColor="#ff004f"
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          />
        </CarouselInfinite>
      </div>
      <Modal
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        open={isOpen}
      >
        <Modal.Backdrop className="z-1 bg-black/50 backdrop-blur-lg">
          <Modal.Close>
            <CloseIcon
              fill="white"
              className="absolute top-4 right-4 cursor-pointer"
            />
          </Modal.Close>
        </Modal.Backdrop>
        <Modal.Content fixed className="z-2 top-0 w-full px-4">
          <CarouselInfinite initialIndex={bigGalleryIndex}>
            <CarouselInfinite.ItemContainer>
              <CarouselInfinite.ItemList className="items-center h-fit">
                {galleryBigData.map((item) => (
                  <CarouselInfinite.Item
                    key={item.index}
                    className={`w-full max-w-[1440px] h-full max-h-[80vh]`}
                  >
                    {() => (
                      <div className="flex justify-center items-center">
                        <img src={item.images} alt={item.alt} />
                      </div>
                    )}
                  </CarouselInfinite.Item>
                ))}
              </CarouselInfinite.ItemList>
            </CarouselInfinite.ItemContainer>
            <CarouselInfinite.Indicator
              styleType="numbers"
              activeColor="white"
              className="absolute bottom-[-32px] left-1/2 transform -translate-x-1/2"
            />
            <CarouselInfinite.Navigator className="w-full max-w-[1440px] absolute top-[calc(50%-32px)] left-1/2 transform -translate-x-1/2 flex items-center justify-between gap-2 px-8">
              {(handlePrev, handleNext, isTransitioning) => (
                <>
                  <button
                    className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-90 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2 cursor-pointer"
                    onClick={handlePrev}
                    disabled={isTransitioning}
                  >
                    <ChevronIcon height="60px" color="#fff" thickness="6" />
                  </button>

                  <button
                    className="bg-[rgba(0,0,0,0.5)] rounded-full opacity-90 hover:opacity-100 duration-300 ease-in-out backdrop-blur-sm p-2 cursor-pointer"
                    onClick={handleNext}
                    disabled={isTransitioning}
                  >
                    <ChevronIcon
                      height="60px"
                      color="#fff"
                      thickness="6"
                      className="rotate-180"
                    />
                  </button>
                </>
              )}
            </CarouselInfinite.Navigator>
          </CarouselInfinite>
        </Modal.Content>
      </Modal>
    </section>
  );
};
export default GallerySection;

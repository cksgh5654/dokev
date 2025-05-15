import { ChangeEvent, ReactNode, useState, useMemo } from "react";
import char from "../../assets/images/subscribe-section-img/img_char.png";
import cleaner from "../../assets/images/subscribe-section-img/img_cleaner_v2.png";
import Logo from "../../assets/Logo";
import useDevice from "../../hooks/useDevice";
import { Select, useToast } from "parkchanho-react-ui-kit";
import PearlAbyssLogo from "../../assets/PearlAbyssLogo";
import CloseIcon from "../../assets/Icons/CloseIcon";

interface SelectedItem {
  label: ReactNode;
  value: string;
}

interface SubscriberInfo {
  email: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  privacy: boolean;
  marketing: boolean;
}

const years = Array.from(
  { length: 2009 - 1925 + 1 },
  (_, index) => 2009 - index
);
const months = Array.from({ length: 12 }, (_, index) => index + 1);

const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const getDaysInMonth = (month: number, year: number): number => {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  }
  return 31;
};

const SubscribeSection = () => {
  const { isDesktop, isTablet, isMobile } = useDevice();

  const { toast } = useToast();

  const [subscriberInfo, setSubscriberInfo] = useState<SubscriberInfo>({
    email: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    privacy: false,
    marketing: false,
  });
  const [emailError, setEmailError] = useState<string>("");

  const [selectedYear, setSelectedYear] = useState<SelectedItem>({
    label: "년도",
    value: "",
  });
  const [selectedMonth, setSelectedMonth] = useState<SelectedItem>({
    label: "월",
    value: "",
  });
  const [selectedDay, setSelectedDay] = useState<SelectedItem>({
    label: "일",
    value: "",
  });

  const days = useMemo(() => {
    const year = parseInt(subscriberInfo.birthYear) || 2009;
    const month = parseInt(subscriberInfo.birthMonth) || 1;
    const maxDays = getDaysInMonth(month, year);
    return Array.from({ length: maxDays }, (_, index) => index + 1);
  }, [subscriberInfo.birthYear, subscriberInfo.birthMonth]);

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(
      isValid || email === "" ? "" : "유효한 이메일 형식이 아닙니다."
    );
    setSubscriberInfo((prev) => ({
      ...prev,
      email,
    }));
  };

  const handleChangeYear = (value: string) => {
    setSelectedYear({
      label: value,
      value: value,
    });
    setSubscriberInfo((prev) => ({
      ...prev,
      birthYear: value,
      birthDay:
        parseInt(prev.birthDay) >
        getDaysInMonth(parseInt(prev.birthMonth) || 1, parseInt(value) || 2009)
          ? ""
          : prev.birthDay,
    }));
    setSelectedDay((prev) => ({
      ...prev,
      label:
        parseInt(prev.value) >
        getDaysInMonth(
          parseInt(subscriberInfo.birthMonth) || 1,
          parseInt(value) || 2009
        )
          ? "일"
          : prev.label,
      value:
        parseInt(prev.value) >
        getDaysInMonth(
          parseInt(subscriberInfo.birthMonth) || 1,
          parseInt(value) || 2009
        )
          ? ""
          : prev.value,
    }));
  };

  const handleChangeMonth = (value: string) => {
    setSelectedMonth({
      label: value,
      value: value,
    });
    setSubscriberInfo((prev) => ({
      ...prev,
      birthMonth: value,
      birthDay:
        parseInt(prev.birthDay) >
        getDaysInMonth(parseInt(value) || 1, parseInt(prev.birthYear) || 2009)
          ? ""
          : prev.birthDay,
    }));
    setSelectedDay((prev) => ({
      ...prev,
      label:
        parseInt(prev.value) >
        getDaysInMonth(
          parseInt(value) || 1,
          parseInt(subscriberInfo.birthYear) || 2009
        )
          ? "일"
          : prev.label,
      value:
        parseInt(prev.value) >
        getDaysInMonth(
          parseInt(value) || 1,
          parseInt(subscriberInfo.birthYear) || 2009
        )
          ? ""
          : prev.value,
    }));
  };

  const handleChangeDay = (value: string) => {
    setSelectedDay({
      label: value,
      value: value,
    });
    setSubscriberInfo((prev) => ({
      ...prev,
      birthDay: value,
    }));
  };

  const handleChangePrivacy = (e: ChangeEvent<HTMLInputElement>) => {
    setSubscriberInfo((prev) => ({
      ...prev,
      privacy: e.target.checked,
    }));
  };

  const handleChangeMarketing = (e: ChangeEvent<HTMLInputElement>) => {
    setSubscriberInfo((prev) => ({
      ...prev,
      marketing: e.target.checked,
    }));
  };

  const handleSubmit = () => {
    if (!subscriberInfo.privacy) {
      toast(
        {
          title: "개인정보 수집 동의가 필요합니다.",
          description: "개인정보 수집 동의을 체크해주세요.",
          duration: 3000,
        },
        {
          position: "top-center",
        }
      );
      return;
    }
    if (emailError) {
      toast(
        {
          title: "유효한 이메일 형식이 아닙니다.",
          description: "이메일을 확인해주세요.",
          duration: 3000,
        },
        {
          position: "top-center",
        }
      );
      return;
    }
    if (
      !subscriberInfo.email ||
      !subscriberInfo.birthYear ||
      !subscriberInfo.birthMonth ||
      !subscriberInfo.birthDay
    ) {
      toast(
        {
          title: "이메일 또는 생년월일을 입력해야 됩니다.",
          description: "이메일 또는 생년월일을 입력해주세요.",
          duration: 3000,
        },
        {
          position: "top-center",
        }
      );
      return;
    }
    toast(
      {
        title: "정보",
        description: `이메일: ${subscriberInfo.email}, ${subscriberInfo.birthDay}일 ${subscriberInfo.birthMonth}월 ${subscriberInfo.birthYear}년 생으로 구독 신청이 완료되었습니다.`,
        duration: 5000,
      },
      {
        position: "top-center",
      }
    );
  };

  return (
    <div className="relative flex justify-end pt-16 md:pt-32">
      {(isDesktop || isTablet) && (
        <img
          className="w-[30vw] max-w-[400px] absolute top-0 left-[4vw] animate-[move_4s_ease-in-out_infinite_alternate] z-10"
          src={char}
          alt="char"
        />
      )}

      <div className="bg-[#f4235c] text-white flex gap-8 w-full md:w-[70vw] items-center justify-center lg:justify-start lg:rounded-tl-3xl py-16 md:py-32">
        <div className="flex flex-col gap-8 w-full px-4 lg:px-16">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 md:pb-2">
              <p className="text-lg md:text-2xl text-amber-200 font-semibold">
                세상을 흔들어!
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-15">
                <span className="flex items-center gap-2 text-nowrap">
                  <Logo className="inline h-12 md:h-20" />
                  에서 무슨 일이
                </span>
                벌어지는지 확인하세요!
              </h1>
            </div>
            <div className="flex flex-col text-sm md:text-base">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">이메일</label>
                <input
                  onChange={handleChangeEmail}
                  type="email"
                  id="email"
                  placeholder="이메일을 입력하세요"
                  className="bg-[#75d5ff] text-[#141414] p-3 rounded-lg placeholder:text-[#141414]"
                  maxLength={50}
                  required
                  value={subscriberInfo.email}
                />
                <div className="h-4 flex justify-end">
                  {emailError && (
                    <p className="text-yellow-200 text-xs">{emailError}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label>생년월일</label>
                <div className="flex gap-2 w-full">
                  <Select
                    onChange={handleChangeYear}
                    value={subscriberInfo.birthYear}
                    item={selectedYear}
                    setItem={setSelectedYear}
                    selectId="year-popover"
                    className="w-full"
                  >
                    <Select.Trigger className="bg-[#75d5ff] text-[#141414] p-3 rounded-lg w-full justify-between" />
                    <Select.Content className="bg-white p-4 rounded-lg shadow-lg max-h-[200px] overflow-y-auto translate-y-2">
                      {years.map((year) => (
                        <Select.Item key={year} value={`${year}`}>
                          {year}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select>
                  <Select
                    onChange={handleChangeMonth}
                    value={subscriberInfo.birthMonth}
                    item={selectedMonth}
                    setItem={setSelectedMonth}
                    selectId="month-popover"
                    className="w-full"
                  >
                    <Select.Trigger className="bg-[#75d5ff] text-[#141414] p-3 rounded-lg w-full justify-between" />
                    <Select.Content className="bg-white p-4 rounded-lg shadow-lg max-h-[200px] overflow-y-auto translate-y-2">
                      {months.map((month) => (
                        <Select.Item key={month} value={`${month}`}>
                          {month}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select>
                  <Select
                    onChange={handleChangeDay}
                    value={subscriberInfo.birthDay}
                    item={selectedDay}
                    setItem={setSelectedDay}
                    selectId="day-popover"
                    className="w-full"
                  >
                    <Select.Trigger className="bg-[#75d5ff] text-[#141414] p-3 rounded-lg w-full justify-between" />
                    <Select.Content className="bg-white p-4 rounded-lg shadow-lg max-h-[200px] overflow-y-auto translate-y-2">
                      {days.map((day) => (
                        <Select.Item key={day} value={`${day}`}>
                          {day}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={subscriberInfo.privacy}
                  onChange={handleChangePrivacy}
                  className="appearance-none w-5 h-5 border-2 border-white rounded-md cursor-pointer relative checked:bg-white checked:after:content-['✔'] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-[#f4235c]"
                />
                <label
                  htmlFor="privacy"
                  className="flex items-center gap-2 text-sm"
                >
                  개인정보 수집 및 이용에 동의합니다.
                  <button
                    popoverTarget="privacy-popover"
                    className="border border-white px-3 py-1 cursor-pointer hover:bg-white hover:text-[#f4235c] duration-300 ease-in-out"
                  >
                    자세히 보기
                  </button>
                  <div
                    id="privacy-popover"
                    popover="auto"
                    className="bg-[#75d5ff] rounded-tr-2xl rounded-bl-2xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 backdrop:bg-black/80 backdrop:backdrop-blur-xl"
                  >
                    <div className="flex items-center flex-col gap-4 px-4 py-8 shadow-lg max-h-[40vh] w-[calc(100vw-32px)] max-w-[700px] overflow-y-auto">
                      <button
                        className="absolute right-2 top-1 cursor-pointer"
                        popoverTarget="privacy-popover"
                        popoverTargetAction="hide"
                      >
                        <CloseIcon fill="#0f62bd" className="w-8" />
                      </button>
                      <h2 className="text-2xl text-[#0f62bd] font-semibold">
                        개인정보 수집 및 이용 동의 안내
                      </h2>
                      <p className="text-sm text-gray-800 text-center font-semibold">
                        (주)펄어비스(이하 "회사")는 도깨비와 관련하여 <br />
                        아래와 같이 귀하의 개인정보를 수집 및 이용하고자 합니다.
                        <br /> 자세히 읽은 후 동의하여 주시기 바랍니다.
                      </p>
                      <div className="flex flex-col gap-2 w-full">
                        <dl className="flex">
                          <dt className="bg-[#3596e7] text-[#bfd7fd] flex justify-center items-center w-1/3 p-4">
                            개인정보 수집 및 이용 목적
                          </dt>
                          <dd className="bg-[#baeaff] flex items-center w-2/3 p-4 text-gray-800">
                            도깨비 관련 새소식, 공지사항, 이벤트 등 관련
                            뉴스레터 전달
                          </dd>
                        </dl>
                        <dl className="flex">
                          <dt className="bg-[#3596e7] text-[#bfd7fd] flex justify-center items-center w-1/3 p-4">
                            수집하는 개인정보 항목
                          </dt>
                          <dd className="bg-[#baeaff] flex items-center w-2/3 p-4 text-gray-800">
                            이메일 주소, 생년월일, IP 주소
                          </dd>
                        </dl>
                        <dl className="flex">
                          <dt className="bg-[#3596e7] text-[#bfd7fd] flex justify-center items-center w-1/3 p-4">
                            개인정보 보유 및 이용 기간
                          </dt>
                          <dd className="bg-[#baeaff] flex items-center w-2/3 p-4 text-gray-800">
                            개인정보 수집 동의 철회 시 까지
                          </dd>
                        </dl>
                      </div>
                      <ul className="flex flex-col gap-2 text-sm list-disc pl-4 ">
                        <li>
                          개인정보 수집 및 이용에 대해 동의를 거부 할 경우,
                          도깨비 관련 뉴스레터를 받을 수 없습니다.
                        </li>
                        <li>
                          <a
                            href="https://dokev.pearlabyss.com/ko/policy/index?type=privacy&ver=ver5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0f62bd] cursor-pointer"
                          >
                            이메일 문의
                          </a>
                          를 통해 개인정보 수집 동의를 철회 하실 수 있습니다.
                          뉴스레터 발송을 위해 수집된 개인정보는 지체없이
                          삭제됩니다.
                        </li>
                        <li>
                          본 “개인정보 수집 및 이용 동의”에 명시되지 않은 사항에
                          대해서는 “회사”의{" "}
                          <a
                            href="https://dokev.pearlabyss.com/ko/policy/index?type=privacy&ver=ver5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0f62bd] cursor-pointer"
                          >
                            “개인정보 처리방침”
                          </a>
                          의 규정에 따릅니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={subscriberInfo.marketing}
                  onChange={handleChangeMarketing}
                  className="appearance-none w-5 h-5 border-2 border-white rounded-md cursor-pointer relative checked:bg-white checked:after:content-['✔'] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-[#f4235c]"
                />
                <label htmlFor="marketing" className="flex gap-2 text-sm">
                  DokeV 관련 새소식, 공지사항, 이벤트 등 {isMobile && <br />}
                  관련 뉴스레터를 수신하는 것에 동의합니다.
                </label>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="rounded-tr-2xl rounded-bl-2xl text-2xl text-white font-semibold py-4 px-2 bg-[#3596E7] cursor-pointer hover:bg-[#0098ff] hover:translate-y-[-8px] duration-300 ease-in-out"
            >
              구독
            </button>
          </section>
          <footer className="flex flex-col gap-2 items-center justify-center text-center">
            <div className="flex gap-1 text-[10px] text-[#fdbcce]">
              <a
                href="https://dokev.pearlabyss.com/ko/policy/index?type=privacy&ver=ver5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300 ease-in-out text-nowrap footer-a"
              >
                개인정보처리방침
              </a>
              <a
                href="https://account.pearlabyss.com/ko-KR/Policy/policy?_policyNo=46"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300 ease-in-out text-nowrap footer-a"
              >
                개인정보처리방침 개정 안내
              </a>
              <a
                href="https://dokev.pearlabyss.com/ko/policy/index?type=contentguide&ver=ver1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300 ease-in-out text-nowrap footer-a"
              >
                팬 콘텐츠 가이드라인
              </a>
              <a
                href="https://dokev.pearlabyss.com/ko/policy/index?type=fankit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300 ease-in-out text-nowrap"
              >
                팬 키트
              </a>
            </div>
            <div className="flex gap-2 text-xs text-[#ff9db9] text-nowrap">
              <a
                href="https://www.pearlabyss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PearlAbyssLogo className="w-20 opacity-60 hover:opacity-100 transition duration-300 ease-in-out cursor-pointer" />
              </a>

              <span className="text-[8px] ">
                © Pearl Abyss Corp. All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
        {isDesktop && (
          <img src={cleaner} alt="cleaner" className="w-[30vw] max-w-[300px]" />
        )}
      </div>
      <style>{`
        .footer-a::after {
          content: "|";
          color: #fdbcce;
          margin: 0 4px;
        }
        
      `}</style>
    </div>
  );
};

export default SubscribeSection;

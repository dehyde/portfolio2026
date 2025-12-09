import svgPaths from "./svg-1rspo22epy";
import imgPxl202109060928293391 from "figma:asset/b2bcf78b29c9bd88b75822e3370731620672a6d9.png";
import imgCaseStudyVariant3 from "figma:asset/1056e94b8aa2b0cf8d31aa5313eebc36dec96deb.png";
import imgMonitoringHealth from "figma:asset/561b6229b5045b5f0539fc7699517aa9fc30abc7.png";
import imgFrame19585 from "figma:asset/e592199402521024d72470dbd2db367cf55ccbaf.png";
import imgFrame19567 from "figma:asset/ec0894087eabce704b3f79fd5fc6692869ec475d.png";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const greetings = [
  "Hello",
  "Hi",
  "Hey",
  "Yo",
  "Sup",
  "What's up",
  "Hello, world",
  "Aloha",
  "Howdy",
  "Hiya",
  "Oh hi there",
  "How you doin'",
  "Hey you",
  "Look who's here",
  "Well hello",
  "Greetings",
  "Ahoy",
  "Yo yo",
  "Heyo",
  "Welcome",
  "Hi friend",
  "Good to see you",
  "👀 oh hi",
  "🙋 hello",
];

function TypingGreeting() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentGreeting = greetings[phraseIndex];
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (!isDeleting && displayText === currentGreeting) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % greetings.length);
    } else {
      const nextLength = isDeleting
        ? displayText.length - 1
        : displayText.length + 1;

      timeoutId = setTimeout(() => {
        setDisplayText(currentGreeting.slice(0, nextLength));
      }, isDeleting ? 45 : 95);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <span className="inline-flex items-center gap-[4px]">
      <span aria-live="polite" className="whitespace-nowrap">
        {displayText}
      </span>
      <motion.span
        aria-hidden="true"
        className="block h-[0.9em] w-[2px] bg-[#2c2c2c]"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
      />
    </span>
  );
}

function Frame20() {
  return (
    <div className="basis-0 grow h-[424px] min-h-px min-w-px shrink-0" />
  );
}

function Group2() {
  return (
    <div className="absolute h-[38px] left-[435px] top-[116px] w-[67px]">
      <div className="absolute inset-[-44.74%_-29.85%_-60.53%_-29.85%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 107 78"
        >
          <g filter="url(#filter0_di_1_334)" id="Group 40">
            <rect
              fill="var(--fill-0, white)"
              height="32"
              id="Rectangle 91"
              rx="4"
              width="67"
              x="20"
              y="17"
            />
            <path
              d="M38.5 55L32 48.5H45L38.5 55Z"
              fill="var(--fill-0, white)"
              id="Vector 2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="78"
              id="filter0_di_1_334"
              width="107"
              x="0"
              y="0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_334"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_334"
                mode="normal"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
              />
              <feBlend
                in2="shape"
                mode="normal"
                result="effect2_innerShadow_1_334"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[435px] top-[116px]">
      <Group2 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] h-[12px] leading-[0.94] left-[442px] text-[13px] text-black top-[126px] w-[54px] whitespace-pre-wrap not-italic">{`👁  ❤  🎨`}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['IBM_Plex_Sans:ExtraLight',sans-serif] h-[43.125px] leading-[normal] ml-0 mt-0 not-italic relative text-[#2c2c2c] text-[16.967px] w-[313.89px]">
        I'm a principal UX Lead @ Autodesk
        <br />
        and product design educator for 5 years+
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['IBM_Plex_Sans:ExtraLight',sans-serif] h-[61px] leading-[normal] ml-0 mt-0 not-italic relative text-[#2c2c2c] text-[16.967px] w-[335px]">
        I like finding smart, creative and inspiring solutions,
        creating delightful user experiences and beautiful
        interactions.
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start leading-[0] relative shrink-0">
      <Group1 />
      <Group4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] md:gap-[70px] items-start left-[20px] md:left-[626px] top-[80px] md:top-[134px] max-w-[calc(100%-40px)] md:max-w-[335.099px]">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] not-italic leading-[0.94] relative shrink-0 text-[#2c2c2c] text-[28px] md:text-[42.418px] w-full md:w-[335.099px]">
        <span className="font-['IBM_Plex_Mono:Bold',sans-serif]">
          <TypingGreeting />
        </span>
        <span>
          {" "}
          <br aria-hidden="true" />
        </span>
        <span className="font-['IBM_Plex_Sans:Light',sans-serif]">
          My name is
        </span>
        <span className="font-['IBM_Plex_Sans:Regular',sans-serif]">
          {" "}
        </span>
        Tom
      </p>
      <Frame12 />
    </div>
  );
}

function Component() {
  return (
    <div
      className="absolute h-[23.596px] left-[189px] top-[317px] w-[57.809px]"
      data-name="Component 5"
    >
      <p className="absolute bottom-[23.71%] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[-1.73%] not-italic right-[1.4%] text-[13.726px] text-[rgba(0,0,0,0.4)] text-center text-nowrap top-0 uppercase whitespace-pre">
        Loading
      </p>
      <div className="absolute bg-[#898989] bottom-0 left-0 right-[97.96%] top-[90%]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[300px] md:h-[496px] left-[20px] md:left-[145px] top-[450px] md:top-[47px] w-[calc(100%-40px)] max-w-[412px] hidden md:block">
      <Component />
      <div
        className="absolute inset-[18.53%_15.18%_-13.51%_18.7%]"
        data-name="PXL_20210906_092829339 2 (Traced)"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 273 472"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p2c2f65f0}
            fill="var(--fill-0, black)"
            fillOpacity="0.25"
            fillRule="evenodd"
            id="PXL_20210906_092829339 2 (Traced)"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[-67px] h-[512px] left-0 w-[384px]"
        data-name="PXL_20210906_092829339 1"
      >
        <div className="absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0)_70%)] blur-[60px] opacity-80" />
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgPxl202109060928293391}
        />
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] inset-[-26.22%_-26.82%_123.19%_96.24%] leading-[normal] not-italic text-[11.634px] text-black text-center text-nowrap uppercase whitespace-pre">
        UI without context
      </p>
    </div>
  );
}

function WelcomeSection() {
  return (
    <div
      id="welcome"
      className="h-auto min-h-[543px] overflow-clip relative shrink-0 w-full max-w-[1250px]"
      data-name="Welcome section"
    >
      <div className="absolute bg-[#f0fe50] h-full min-h-[543px] left-0 rounded-[16px] top-0 w-full" />
      <Group3 />
      <Frame13 />
      <Frame2 />
    </div>
  );
}

function Frame15() {
  return <div className="h-[2px] shrink-0 w-[339px]" />;
}

function Frame4() {
  return (
    <div className="flex flex-col gap-[6px] items-start relative shrink-0 text-[#2c2c2c] justify-between h-auto md:h-[450px] w-full md:w-auto">
      <div className="flex flex-col gap-[6px]">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] not-italic leading-[0.94] relative shrink-0 text-[25px] w-full md:w-[157px]">
          <span className="font-['IBM_Plex_Sans:Bold',sans-serif]">{`Autodesk `}</span>
          platform data system enablement
        </p>
        <p className="font-['IBM_Plex_Sans:ExtraLight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.967px] w-full md:w-[214px]">{`Multi-layered project to enable module and project level integration of account custom data & data standardisation infrastructure`}</p>
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic text-[12px] text-[#626262] uppercase mt-[16px]">
          Dec 2025
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-start">
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          Project architecture
        </span>
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          Cross-org
        </span>
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          Systems thinking
        </span>
      </div>
    </div>
  );
}

function CaseStudyVariant() {
  return (
    <div
      className="absolute h-[475.059px] left-[-63.89px] top-[-36.54px] w-[800.38px]"
      data-name="Case Study/Variant3"
    >
      <div className="absolute bg-[rgba(0,0,0,0.7)] h-[409.103px] left-[82px] rounded-[14.261px] top-[35.65px] w-[623.013px]" />
      <div
        className="absolute h-[475.059px] left-0 top-0 w-[800.38px]"
        data-name="Case Study/Variant3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-0 max-w-none size-full top-0"
            src={imgCaseStudyVariant3}
          />
        </div>
      </div>
    </div>
  );
}

function Desktop02TextContainerHoverCopy20NewCopy() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0)] h-[401.081px] left-[41px] shadow-[0px_3.711px_21.337px_0px_rgba(0,0,0,0.02)] top-[24.46px] w-[672.313px]"
      data-name="Desktop_02_Text_Container_Hover Copy 20 new Copy 33"
    >
      {[...Array(2).keys()].map((_, i) => (
        <CaseStudyVariant key={i} />
      ))}
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-auto md:h-[450px] relative shrink-0 w-full md:w-[754.313px]">
      <Desktop02TextContainerHoverCopy20NewCopy />
    </div>
  );
}

function CaseStudy() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#f6f6f6] content-stretch flex flex-col md:flex-row items-start justify-between p-[40px] md:p-[80px] relative rounded-[16px] shrink-0 w-full max-w-[1254px] cursor-pointer transition-colors duration-300 group overflow-hidden gap-[40px] md:gap-0"
      data-name="Case Study"
      style={{
        backgroundColor: isHovered ? "#FDFFE1" : "#f6f6f6",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Frame4 />
      <motion.div
        animate={{ scale: isHovered ? 1.07 : 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 13,
        }}
        className="w-full md:w-auto"
      >
        <Frame21 />
      </motion.div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex flex-col gap-[6px] items-start relative shrink-0 text-[#2c2c2c] justify-between h-auto md:h-[490px] w-full md:w-auto">
      <div className="flex flex-col gap-[6px]">
        <div className="font-['IBM_Plex_Sans:Regular',sans-serif] not-italic leading-[0.94] relative shrink-0 text-[25px] w-full md:w-[157px]">
          <p className="mb-0">
            <span className="font-['IBM_Plex_Sans:Bold',sans-serif] not-italic">
              Augury
            </span>
            <span>
              <br aria-hidden="true" />
              monitoring
              <br aria-hidden="true" />
              {`& IoT `}
            </span>
          </p>
          <p>status</p>
        </div>
        <p className="font-['IBM_Plex_Sans:ExtraLight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.967px] w-full md:w-[214px]">
          Helping users understand monitoring status, prioritize
          IoT maintenance actions, and plan IoT repair
        </p>
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic text-[12px] text-[#626262] uppercase mt-[16px]">
          Jan 2023
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-start">
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          IoT
        </span>
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          Startup
        </span>
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          Iterative design
        </span>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-auto md:h-[490px] relative shrink-0 w-full md:w-[754px]">
      <div
        className="absolute h-full md:h-[490px] left-0 top-0 w-full md:w-[754px]"
        data-name="Monitoring health"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-0 max-w-none size-full top-0"
            src={imgMonitoringHealth}
          />
        </div>
      </div>
    </div>
  );
}

function CaseStudy1() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#f6f6f6] content-stretch flex flex-col md:flex-row items-start justify-between p-[40px] md:p-[80px] relative rounded-[16px] shrink-0 w-full max-w-[1254px] cursor-pointer transition-colors duration-300 group overflow-hidden gap-[40px] md:gap-0"
      data-name="Case Study"
      style={{
        backgroundColor: isHovered ? "#FDFFE1" : "#f6f6f6",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Frame5 />
      <motion.div
        animate={{ scale: isHovered ? 1.07 : 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 13,
        }}
        className="w-full md:w-auto"
      >
        <Frame17 />
      </motion.div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f0fe50] content-stretch flex items-start relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] not-italic leading-[normal] relative shrink-0 text-[#2c2c2c] text-[16.967px] text-nowrap whitespace-pre">
        <span className="font-['IBM_Plex_Sans:Regular',sans-serif] not-italic">{`🚧 `}</span>
        Completion status ~80%
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex flex-col gap-[6px] items-start relative shrink-0 justify-between h-auto md:h-[450px] w-full md:w-auto">
      <div className="flex flex-col gap-[6px]">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] not-italic leading-[0.94] relative shrink-0 text-[#2c2c2c] text-[25px] w-full md:w-[157px]">
          <span className="font-['IBM_Plex_Sans:Bold',sans-serif]">{`Shutterfly `}</span>
          Cards shopping refactor
        </p>
        <p className="font-['IBM_Plex_Sans:ExtraLight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2c2c2c] text-[16.967px] w-full md:w-[214px]">
          Research and exploration of Shutterfly's next
          generation of cards shopping and creation experience
        </p>
        <Frame18 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic text-[12px] text-[#626262] uppercase mt-[16px]">
          Jan 2020
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-start">
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          B2C
        </span>
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          eCommerce
        </span>
        <span className="bg-white font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic px-[8px] py-[4px] rounded-[4px] text-[11px] text-[#2c2c2c]">
          Conversion rate optimization
        </span>
      </div>
    </div>
  );
}

function Desktop02TextContainerHoverCopy20NewCopy1() {
  return (
    <div
      className="bg-white h-auto md:h-[450px] relative shadow-[0px_4.163px_23.939px_0px_rgba(0,0,0,0.25)] shrink-0 w-full md:w-[754.313px]"
      data-name="Desktop_02_Text_Container_Hover Copy 20 new Copy 33"
    >
      <div className="relative h-auto md:h-[450.538px] w-full">
        <div className="relative inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="relative left-0 w-full h-auto top-0"
            src={imgFrame19585}
          />
        </div>
      </div>
    </div>
  );
}

function CaseStudy2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#f6f6f6] content-stretch flex flex-col md:flex-row items-start justify-between p-[40px] md:p-[80px] relative rounded-[16px] shrink-0 w-full max-w-[1254px] cursor-pointer transition-colors duration-300 group overflow-hidden gap-[40px] md:gap-0"
      data-name="Case Study"
      style={{
        backgroundColor: isHovered ? "#FDFFE1" : "#f6f6f6",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Frame6 />
      <motion.div
        animate={{ scale: isHovered ? 1.07 : 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 13,
        }}
        className="w-full md:w-auto"
      >
        <Desktop02TextContainerHoverCopy20NewCopy1 />
      </motion.div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex flex-col gap-[6px] items-start relative shrink-0 text-[#2c2c2c] justify-between h-[486px]">
      <div className="flex flex-col gap-[6px]">
        <div className="font-['IBM_Plex_Sans:Regular',sans-serif] not-italic leading-[0.94] relative shrink-0 text-[25px] w-[157px]">
          <p className="mb-0">
            <span className="font-['IBM_Plex_Sans:Bold',sans-serif] not-italic">
              Amplio
            </span>
            <span>
              <br aria-hidden="true" />
              EdTech
            </span>
          </p>
          <p className="mb-0">platform</p>
          <p>restructure</p>
        </div>
        <p className="font-['IBM_Plex_Sans:ExtraLight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.967px] w-[214px]">
          Restructure of Amplio's core interfaces and flows in
          hyper-lean processes
        </p>
        <p className="font-['IBM_Plex_Sans:ExtraLight',sans-serif] not-italic leading-[normal] relative shrink-0 text-[16.967px] w-[214px]">
          <span>{`Case study completion status: `}</span>
          <span className="font-['IBM_Plex_Sans:Bold',sans-serif]">
            0% 😥
          </span>
        </p>
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic text-[12px] text-[#626262] uppercase mt-[16px]">
          Jun 2020
        </p>
      </div>
    </div>
  );
}

function CaseStudy3() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#f6f6f6] content-stretch flex items-start justify-between p-[80px] relative rounded-[16px] shrink-0 w-[1254px] cursor-not-allowed transition-colors duration-300 group overflow-hidden"
      data-name="Case Study"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Frame9 />
      <motion.div
        className="h-[486px] relative shrink-0 w-[730px]"
        animate={{ scale: isHovered ? 1.07 : 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 13,
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-0 max-w-none size-full top-0"
            src={imgFrame19567}
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-[rgba(0,0,0,0.5)] rounded-[16px] flex items-center justify-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p
          className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic text-[17.451px] text-white text-center"
          dir="auto"
        >
          Case study under construction 🚧
        </p>
      </motion.div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <CaseStudy3 />
    </div>
  );
}

function Frame10() {
  return (
    <div
      id="case-studies"
      className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0"
    >
      <div
        className="h-[177.559px] relative shrink-0 w-[313.89px]"
        data-name="Case studies title"
      >
        <div
          className="absolute flex h-[177.559px] items-center justify-center left-[26.93px] top-0 w-[260.112px]"
          style={
            {
              "--transform-inner-width": "239.640625",
              "--transform-inner-height": "109.859375",
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[17.572deg] skew-x-[0.83deg]">
            <div className="bg-[#f0fe50] h-[109.864px] rounded-[69.462px] w-[239.646px]" />
          </div>
        </div>
        <p className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] h-[39px] not-italic leading-[0.94] left-[156.5px] text-[#2c2c2c] text-[35px] text-center top-[45.34px] translate-x-[-50%] w-[293px]">
          Case Studies
        </p>
        <p
          className="absolute font-['IBM_Plex_Sans:ExtraLight',sans-serif] h-[43.125px] leading-[normal] left-[156.95px] not-italic text-[#2c2c2c] text-[16.967px] text-center top-[93.34px] translate-x-[-50%] w-[313.89px]"
          dir="auto"
        >
          Project stories that showcase process, research,
          analysis and solutions
        </p>
      </div>
      <CaseStudy />
      <CaseStudy1 />
      <CaseStudy2 />
      <Frame3 />
    </div>
  );
}

function Frame14() {
  return <div className="h-[162px] shrink-0 w-[427px]" />;
}

function Frame8() {
  return (
    <div className="absolute content-stretch cursor-pointer flex flex-col font-['IBM_Plex_Sans:Light',sans-serif] gap-[8px] items-start leading-[0] left-[471px] not-italic text-[#2c2c2c] text-[16.967px] text-center top-[139px]">
      <a
        className="block relative shrink-0 w-[313.89px]"
        href="https://www.linkedin.com/in/tom-bar-gal/"
      >
        <p className="leading-[normal]">
          👔 Tom Bar-Gal on LinkedIn
        </p>
      </a>
      <a
        className="block relative shrink-0 w-[313.89px]"
        href="https://wa.me/972545393406?text=Hi%20Tom!%20%F0%9F%91%8B%0A%0AI\'m%20reaching%20out%20to%20you%20through%20your%20Website"
      >
        <p className="leading-[normal]">💬 WhatsApp</p>
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div
      id="contact"
      className="bg-white h-auto min-h-[277px] overflow-clip relative rounded-[16px] shrink-0 w-full max-w-[1254px] py-[80px] md:py-0"
      data-name="Contact section"
    >
      <div
        className="absolute flex h-[308.367px] items-center justify-center left-[50%] md:left-[500px] top-[-15px] w-[253.866px] translate-x-[-50%] md:translate-x-0"
        style={
          {
            "--transform-inner-width": "297.453125",
            "--transform-inner-height": "109.859375",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[302.66deg] skew-x-[0.83deg]">
          <div className="bg-[#f0fe50] h-[109.864px] rounded-[69.462px] w-[297.457px]" />
        </div>
      </div>
      <Frame8 />
      <p
        className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] h-[39px] not-italic leading-[0.94] left-[50%] md:left-[626.5px] text-[#2c2c2c] text-[35px] text-center top-[74.46px] translate-x-[-50%] w-[293px]"
        dir="auto"
      >
        Contact
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-center pb-[219px] pt-0 px-0 relative shrink-0">
      <WelcomeSection />
      <Frame15 />
      <Frame10 />
      <Frame14 />
      <ContactSection />
    </div>
  );
}

function Portfolio() {
  return (
    <div
      className="absolute bg-white content-stretch flex flex-col gap-[61px] items-center left-1/2 overflow-clip pb-0 pt-[60px] px-0 top-[29px] translate-x-[-50%] w-[1437px]"
      data-name="Portfolio"
    >
      <Frame11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white h-[33px] left-1/2 top-0 translate-x-[-50%] w-full max-w-[1437px]" />
  );
}

function ButtonYellow() {
  return (
    <div
      className="[grid-area:1_/_1] content-stretch flex h-[29px] items-start ml-0 mt-0 px-0 py-[5.8px] relative rounded-[5.8px]"
      data-name="Button - Yellow"
    >
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.533px] text-black text-center text-nowrap uppercase whitespace-pre">
        Welcome
      </p>
    </div>
  );
}

function Group() {
  const handleClick = () => {
    document
      .getElementById("welcome")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
    >
      <ButtonYellow />
    </button>
  );
}

function ButtonYellow1() {
  const handleClick = () => {
    document
      .getElementById("case-studies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="content-stretch cursor-pointer flex h-[29px] items-start px-0 py-[5.8px] relative rounded-[5.8px] shrink-0"
      data-name="Button - Yellow"
    >
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#626262] text-[13.533px] text-center text-nowrap uppercase whitespace-pre">
        Case studies
      </p>
    </button>
  );
}

function ButtonYellow2() {
  const handleClick = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="content-stretch cursor-pointer flex h-[29px] items-start px-0 py-[5.8px] relative rounded-[5.8px] shrink-0"
      data-name="Button - Yellow"
    >
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#626262] text-[13.533px] text-center text-nowrap uppercase whitespace-pre">
        Contact
      </p>
    </button>
  );
}

function ButtonYellow3() {
  return (
    <a
      className="content-stretch cursor-pointer flex h-[29px] items-start px-0 py-[5.8px] relative rounded-[5.8px] shrink-0"
      data-name="Button - Yellow"
      href="https://pdfhost.io/v/NK6MTMntm_Tom_BarGal_CV"
    >
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#626262] text-[13.533px] text-center text-nowrap uppercase whitespace-pre">
        CV.pdf
      </p>
    </a>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ButtonYellow3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-[20px] md:gap-[37.223px] items-center justify-center left-1/2 top-[2px] translate-x-[-50%] px-4">
      <Group />
      <ButtonYellow1 />
      <ButtonYellow2 />
      <Frame7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white h-[1216px] relative shrink-0 w-[1437px]">
      <Frame />
      <Frame1 />
      <Portfolio />
    </div>
  );
}

export default function Frame19() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start justify-center relative size-full overflow-x-hidden">
      <Frame20 />
      <Frame16 />
      <Frame20 />
    </div>
  );
}

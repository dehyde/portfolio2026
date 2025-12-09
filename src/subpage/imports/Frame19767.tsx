function Frame() {
  return (
    <div className="bg-[#f1ff46] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[27px] shrink-0">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Project architecture</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f1ff46] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[27px] shrink-0">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Cross-org</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f1ff46] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[27px] shrink-0">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Systems thinking</p>
      </div>
    </div>
  );
}

function PersonalOrAgencyWebsiteProjectDetailPageSummarySection() {
  return (
    <div className="[grid-area:2_/_1_/_auto_/_span_5] content-start flex flex-wrap gap-[16px] items-start relative shrink-0" data-name="Personal or Agency Website Project Detail Page Summary Section">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="gap-[32px] grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] grid relative shrink-0 w-full" data-name="textContent">
      <div className="[grid-area:1_/_1_/_auto_/_span_3] font-['Domine:Bold',sans-serif] font-bold leading-[0] relative self-start shrink-0 text-[64px] text-white tracking-[-1.28px]">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[68px] mb-0 not-italic">{`Platform-Enabling `}</p>
        <p className="leading-[68px] mb-0 not-italic">
          <span className="font-['Segoe_UI:Bold',sans-serif]">AEC Standardized Data</span>
          <span className="font-['Segoe_UI:Regular',sans-serif]"> </span>
          <span className="font-['Segoe_UI:Bold',sans-serif]">Experience</span>
          <span className="font-['Segoe_UI:Bold',sans-serif]"> </span>
        </p>
        <p className="leading-[68px] not-italic">
          <span className="font-['Segoe_UI:Regular',sans-serif]">{`in `}</span>
          <span className="font-['Segoe_UI:Bold',sans-serif]">Autodesk Construction Cloud</span>
        </p>
      </div>
      <div className="[grid-area:1_/_4_/_auto_/_span_2] font-['Segoe_UI:Regular',sans-serif] leading-[24px] not-italic relative self-start shrink-0 text-[18px] text-[rgba(235,235,235,0.62)]">
        <p className="mb-0">Dec 2025</p>
        <p className="mb-0">&nbsp;</p>
        <p>A complex integration project for enhanced customizability of construction management entities and standardization of construction data definition.</p>
      </div>
      <PersonalOrAgencyWebsiteProjectDetailPageSummarySection />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <TextContent />
    </div>
  );
}
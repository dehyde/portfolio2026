import imgImage39 from '../assets/98606a13aaaca56b3bcf4312633cd547b36e02ef.png';
import imgImage38 from '../assets/a6891fcf21a49a07eb64d833b8a9503d4cb76d2d.png';

function Component() {
  return (
    <div className="content-stretch flex flex-col font-['Segoe_UI:Regular',sans-serif] gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Component 5">
      <p className="leading-[32px] relative shrink-0 text-[#f1ff46] text-[28px] text-nowrap tracking-[-0.56px] whitespace-pre">Title of the solution</p>
      <p className="leading-[28px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.62)] w-[770.108px]">Description text of the solution</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[814px]">
      <p className="font-['Segoe_UI:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[17px] text-white w-full">Solution:</p>
      <Component />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[44px] left-[859px] top-[-4px] w-[362.178px]">
      <div className="absolute h-[44px] left-0 rounded-[8px] top-0 w-[42px]" data-name="image 39">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage39} />
      </div>
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] h-[19.502px] leading-[21.52px] left-[57px] not-italic text-[18.83px] text-white top-[9px] tracking-[-0.3766px] w-[305.178px]">ACC Project modules</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[828.64px] left-[2px] top-[11px] w-[1347px]">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] h-[20.872px] leading-[23.031px] left-[26px] not-italic text-[20.152px] text-white top-[58px] tracking-[-0.403px] w-[62.33px]">REVIT</p>
      <Frame4 />
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[28px] left-[859px] not-italic text-[17px] text-[rgba(255,255,255,0.62)] top-[494px] w-[313px]">Contextual text for the solution</p>
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[44px] left-[240px] top-[7px] w-[362.178px]" />;
}

function Frame5() {
  return (
    <div className="absolute h-[42px] left-[-30px] top-0 w-[362.178px]">
      <p className="absolute font-['Segoe_UI:Bold','Noto_Sans:Regular',sans-serif] h-[19.502px] leading-[21.52px] left-[57px] text-[18.83px] text-white top-[11px] tracking-[-0.3766px] w-[305.178px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <span>{`AEC Data management `}</span>
        <span className="font-['Segoe_UI:Regular','Noto_Sans:Regular',sans-serif] text-[rgba(255,255,255,0.62)]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          (account)
        </span>
      </p>
      <div className="absolute left-0 size-[42px] top-0" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage38} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[839.64px] left-[28px] top-0 w-[1349px]">
      <Frame2 />
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[845px] relative shrink-0 w-full" data-name="Image">
      <Frame6 />
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[28px] left-0 not-italic text-[17px] text-[rgba(255,255,255,0.62)] top-[817px] w-[346px]">More contextual text</p>
    </div>
  );
}

function Frame() {
  return <div className="absolute h-[148.902px] left-0 top-[1568.69px] w-[221.101px]" />;
}

function Frame1() {
  return <div className="absolute h-[74px] left-[64px] top-[71px] w-[634px]" />;
}

export default function SolutionAread() {
  return (
    <div className="bg-[#272727] relative rounded-[16px] size-full" data-name="Solution aread">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[130px] items-start overflow-clip pb-[88px] pt-[38px] px-[64px] relative size-full">
          <Frame7 />
          <Image />
          <Frame />
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
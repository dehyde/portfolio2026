import { ReactNode } from 'react';

interface SolutionAreaProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function SolutionArea({ title, description, children }: SolutionAreaProps) {
  return (
    <div className="bg-[#272727] relative rounded-[16px] size-full" data-name="Solution area">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[130px] items-start overflow-clip pb-[88px] pt-[38px] px-[64px] relative size-full">
          {/* Title and Description Section */}
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
            <p className="font-['Segoe_UI:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[17px] text-white w-full">Solution:</p>
            <div className="content-stretch flex flex-col font-['Segoe_UI:Regular',sans-serif] gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Component 5">
              <p className="leading-[32px] relative shrink-0 text-[#f1ff46] text-[28px] text-nowrap tracking-[-0.56px] whitespace-pre">{title}</p>
              <p className="leading-[28px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.62)] w-full">{description}</p>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="relative shrink-0 w-full overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-[32px] [&_img]:max-w-full [&_img]:h-auto [&_img]:object-contain">
            {children}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
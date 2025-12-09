import { ReactNode } from 'react';

interface SolutionCardProps {
  gridArea?: string;
  icon: ReactNode;
  children: ReactNode;
}

export function SolutionCard({ gridArea, icon, children }: SolutionCardProps) {
  return (
    <div className={`${gridArea || ''} bg-[#272727] relative rounded-[16px] shrink-0 min-h-[145px] max-h-[145px]`} data-name="Image">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pl-[44px] pr-[77px] py-[37px] relative w-full">
          {icon}
          <div className="basis-0 font-['Segoe_UI',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-white">
            {children}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
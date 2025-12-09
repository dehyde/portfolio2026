import Frame from '../imports/Frame19597';

export function UserProblemsSection() {
  return (
    <section id="user-problems" className="py-[64px]">
      <div className="content-stretch flex flex-col gap-[54px] items-start relative size-full">
        {/* Section title */}
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <p className="basis-0 font-['Segoe_UI:Bold',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[28px] text-white tracking-[-0.56px]">User problems</p>
        </div>
        
        {/* Problem content from Figma */}
        <Frame />
      </div>
    </section>
  );
}
export function ContextSection() {
  return (
    <section id="context" className="py-[64px]">
      <div className="grid grid-cols-5 gap-[32px]">
        {/* Section title - columns 1-2 */}
        <div className="col-span-2 mb-[24px]">
          <h2 className="font-['Segoe_UI:Bold',sans-serif] leading-[32px] text-[28px] text-white tracking-[-0.56px]">
            Context
          </h2>
        </div>
        
        {/* Content - columns 1-4 */}
        <div className="col-span-4 mb-[96px]">
          <div className="mb-[96px]">
            <h3 className="font-['Segoe_UI:Bold',sans-serif] leading-[32px] text-white tracking-[-0.56px] mb-[32px]">
              Background and context:
            </h3>
            
            <div className="mb-[48px]">
              <h4 className="font-['Segoe_UI',sans-serif] leading-[32px] text-white tracking-[-0.56px] mb-[16px]">
                Autodesk AEC
              </h4>
              <p className="font-['Segoe_UI',sans-serif] leading-[28px] text-[rgba(235,235,235,0.62)]">
                AEC is the overarching Autodesk organization of design and engineering to construction related workflows
              </p>
            </div>

            <div>
              <h4 className="font-['Segoe_UI',sans-serif] leading-[28px] text-white mb-[16px]">
                Construction Project Manager
              </h4>
              <ul className="list-disc pl-[25.5px] font-['Segoe_UI',sans-serif] leading-[28px] text-[rgba(235,235,235,0.62)] space-y-2">
                <li>
                  Background: at least 5-7 years experience in construction. Male dominated
                </li>
                <li>
                  Responsibility: managing project&apos;s strategic aspect - timelines and budget.
                </li>
                <li>
                  JTBD: Identify and mitigate risks to project&apos;s critical timelines, safety and compliance.
                </li>
                <li className="text-[#f1ff46]">
                  Wants to reduce redundant work, make sure project data is standardized and compliant with required regulations.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f1ff46]/10 p-[32px] rounded-lg">
            <h4 className="font-['Segoe_UI:Bold',sans-serif] leading-[40px] text-[#f1ff46] tracking-[-0.56px]">
              Expected role chart - the data definition system
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

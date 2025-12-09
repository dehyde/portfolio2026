import { SolutionArea } from './SolutionArea';

export function GovernanceSection() {
  return (
    <section id="governance" className="py-[64px]">
      <div className="grid grid-cols-5 gap-[32px]">
        {/* Section title - columns 1-2 */}
        <div className="col-span-2 mb-[24px]">
          <h2 className="font-['Segoe_UI:Bold',sans-serif] leading-[32px] text-[28px] text-white tracking-[-0.56px]">
            Defining a Coherent and practical Layered Governance model
          </h2>
        </div>
        
        {/* Subsection 1 */}
        <div className="col-span-2 mb-[24px]">
          <h3 id="governance-sub1" className="font-['Segoe_UI',sans-serif] leading-[32px] text-white tracking-[-0.48px]">
            Governance Subsection 1
          </h3>
        </div>
        
        <div className="col-span-5 mb-[96px]">
          <SolutionArea 
            title="Title of the solution" 
            description="Description text of the solution"
          >
            <p className="font-['Segoe_UI:Regular',sans-serif] leading-[28px] not-italic text-[17px] text-[rgba(255,255,255,0.62)]">
              Content area - add images, diagrams, and text here
            </p>
          </SolutionArea>
        </div>

        {/* Subsection 2 */}
        <div className="col-span-2 mb-[24px]">
          <h3 id="account-autonomy" className="font-['Segoe_UI',sans-serif] leading-[32px] text-white tracking-[-0.48px]">
            Balancing account autonomy with project data preservation
          </h3>
        </div>
        
        <div className="col-span-5 mb-[96px]">
          <SolutionArea 
            title="Title of the solution" 
            description="Description text of the solution"
          >
            <p className="font-['Segoe_UI:Regular',sans-serif] leading-[28px] not-italic text-[17px] text-[rgba(255,255,255,0.62)]">
              Content area - add images, diagrams, and text here
            </p>
          </SolutionArea>
        </div>

        {/* Subsection 3 */}
        <div className="col-span-2 mb-[24px]">
          <h3 id="module-scalability" className="font-['Segoe_UI',sans-serif] leading-[32px] text-white tracking-[-0.48px]">
            Allowing scalability of governance on a module level
          </h3>
        </div>
        
        <div className="col-span-5">
          <SolutionArea 
            title="Title of the solution" 
            description="Description text of the solution"
          >
            <p className="font-['Segoe_UI:Regular',sans-serif] leading-[28px] not-italic text-[17px] text-[rgba(255,255,255,0.62)]">
              Content area - add images, diagrams, and text here
            </p>
          </SolutionArea>
        </div>
      </div>
    </section>
  );
}
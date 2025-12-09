export function SummarySection() {
  return (
    <section id="summary" className="py-[64px]">
      <div className="grid grid-cols-5 gap-[32px]">
        {/* Section title - columns 1-2 */}
        <div className="col-span-2 mb-[24px]">
          <h2 className="font-['Segoe_UI:Bold',sans-serif] leading-[32px] text-[28px] text-white tracking-[-0.56px]">
            Summary
          </h2>
        </div>
        
        {/* Content - columns 1-4 */}
        <div className="col-span-4">
          <p className="font-['Segoe_UI',sans-serif] leading-[28px] text-[rgba(235,235,235,0.62)]">
            Content to be added...
          </p>
        </div>
      </div>
    </section>
  );
}

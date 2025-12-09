import { SolutionArea } from './SolutionArea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import constructionImage from '../assets/ac7f785dc600f0b783043952ae8324f882b6ab18.png';
import constructionImageRight from '../assets/2497890ca8621de20527ae2c783972ebb03e88a2.png';
import crossSoftwareLeft from '../assets/f10d79f06765df49a944e58109f964acff0dc803.png';
import crossSoftwareRight from '../assets/e13f4fa1891d88681652308afbd8010310dd0712.png';
import navFamiliarityImage1 from '../assets/8a1f68f9a41e44320d3541fe09f40b238a201a25.png';
import navFamiliarityImage2 from '../assets/83434706e7ccd3116528b14fe09ad2b38dcb231b.png';
import navFamiliarityImage3 from '../assets/71175ea20a6c6ebadd24b76259d0112dd053e726.png';
import navFamiliarityImage4 from '../assets/1a238ca0f767a8b00c44c72fd1a4efb4b6efcfea.png';
import reuseStandardisationImage from '../assets/efcbfd29374280e182611abeca34026a0d85eae1.png';

export function MultiAxisSection() {
  return (
    <section id="multi-axis" className="py-[64px]">
      <div className="grid grid-cols-5 gap-[32px]">
        {/* Section title - columns 1-2 */}
        <div className="col-span-2 mb-[24px]">
          <h2 className="font-['Segoe_UI:Bold',sans-serif] leading-[32px] text-[28px] text-white tracking-[-0.56px]">
            Cracking Multi-Axis Consistency
          </h2>
        </div>
        
        {/* Subsection 1 */}
        <div className="col-span-2 mb-[24px]">
          <h3 id="cross-software" className="font-['Segoe_UI',sans-serif] leading-[32px] text-white tracking-[-0.48px]">
            Maintaining cross-software experience consistency
          </h3>
        </div>
        
        <div className="col-span-5 mb-[96px]">
          <SolutionArea 
            title="Title of the solution" 
            description="Description text of the solution"
          >
            <img 
              src={crossSoftwareLeft}
              alt="Software interface comparison"
              className="rounded-[8px]"
            />
            <img 
              src={crossSoftwareRight}
              alt="Construction software screen"
              className="rounded-[8px]"
            />
          </SolutionArea>
        </div>

        {/* Subsection 2 */}
        <div className="col-span-2 mb-[24px]">
          <h3 id="construction-context" className="font-['Segoe_UI',sans-serif] leading-[32px] text-white tracking-[-0.48px]">
            Adapting Components to construction context
          </h3>
        </div>
        
        <div className="col-span-5 mb-[96px]">
          <SolutionArea 
            title="Title of the solution" 
            description="Description text of the solution"
          >
            <img 
              src={constructionImage}
              alt="Create Parameter dialog"
              className="rounded-[8px]"
            />
            <img 
              src={constructionImageRight}
              alt="Create Parameter dialog with highlights"
              className="rounded-[8px]"
            />
          </SolutionArea>
        </div>

        {/* Subsection 3 */}
        <div className="col-span-2 mb-[24px]">
          <h3 id="navigational-familiarity" className="font-['Segoe_UI',sans-serif] leading-[32px] text-white tracking-[-0.48px]">
            Maintaining navigational familiarity for construction persona
          </h3>
        </div>
        
        <div className="col-span-5 mb-[96px]">
          <SolutionArea 
            title="Title of the solution" 
            description="Description text of the solution"
          >
            <img 
              src={navFamiliarityImage1}
              alt="Navigation familiar to construction persona"
              className="rounded-[8px]"
            />
            <img 
              src={navFamiliarityImage2}
              alt="Navigation familiar to construction persona"
              className="rounded-[8px]"
            />
            <img 
              src={navFamiliarityImage3}
              alt="Navigation familiar to construction persona"
              className="rounded-[8px]"
            />
            <img 
              src={navFamiliarityImage4}
              alt="Navigation familiar to construction persona"
              className="rounded-[8px]"
            />
          </SolutionArea>
        </div>

        {/* Subsection 4 */}
        <div className="col-span-2 mb-[24px]">
          <h3 id="reuse-standardisation" className="font-['Segoe_UI',sans-serif] leading-[32px] text-white tracking-[-0.48px]">
            Encouraging reuse and standardisation
          </h3>
        </div>
        
        <div className="col-span-5">
          <SolutionArea 
            title="Title of the solution" 
            description="Description text of the solution"
          >
            <img 
              src={reuseStandardisationImage}
              alt="Reuse and standardisation"
              className="rounded-[8px]"
            />
          </SolutionArea>
        </div>
      </div>
    </section>
  );
}
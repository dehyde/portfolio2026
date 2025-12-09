import Frame3 from '../imports/Frame19767';
import heroImage from '../assets/1056e94b8aa2b0cf8d31aa5313eebc36dec96deb.png';

export function HeroSection() {
  return (
    <section className="py-[64px]">
      <Frame3 />
      <div className="grid grid-cols-5 gap-[32px] w-full mt-[64px]">
        
        {/* Hero image spanning columns 2-5 (4 columns) */}
        <div className="col-span-4">
          <img src={heroImage} alt="Platform overview" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
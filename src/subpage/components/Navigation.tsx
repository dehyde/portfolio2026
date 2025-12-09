import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'context', label: 'Context' },
    { id: 'user-problems', label: 'User problems' },
    { id: 'goals', label: 'Project Goals' },
    { id: 'organizational', label: 'Organizational Challenges & Process Response' },
    { id: 'multi-axis', label: 'Cracking Multi-Axis Consistency', subsections: [
      { id: 'cross-software', label: 'Maintaining cross-software experience consistency' },
      { id: 'construction-context', label: 'Adapting Components to construction context' },
      { id: 'navigational-familiarity', label: 'Maintaining navigational familiarity for construction persona' },
      { id: 'reuse-standardisation', label: 'Encouraging reuse and standardisation' },
    ]},
    { id: 'governance', label: 'Defining a Coherent and practical Layered Governance model', subsections: [
      { id: 'project-autonomy', label: 'Balancing project autonomy with account tidiness' },
      { id: 'account-autonomy', label: 'Balancing account autonomy with project data preservation' },
      { id: 'module-scalability', label: 'Allowing scalability of governance on a module level' },
    ]},
    { id: 'summary', label: 'Summary' },
  ];

  useEffect(() => {
    // Collect all section and subsection IDs
    const allIds: string[] = [];
    sections.forEach(section => {
      allIds.push(section.id);
      if (section.subsections) {
        section.subsections.forEach(sub => allIds.push(sub.id));
      }
    });

    // Track intersection ratios
    const intersectionRatios = new Map<string, number>();

    // Create IntersectionObserver with multiple thresholds
    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05); // 0, 0.05, 0.1, ..., 1

    const observer = new IntersectionObserver(
      (entries) => {
        // Update intersection ratios
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectionRatios.set(entry.target.id, entry.intersectionRatio);
          } else {
            intersectionRatios.set(entry.target.id, 0);
          }
        });

        // Find section with largest intersection ratio
        let maxRatio = 0;
        let maxId = '';
        
        intersectionRatios.forEach((ratio, id) => {
          // Ignore very small ratios to avoid flicker (hysteresis)
          if (ratio > 0.15 && ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });

        // Update active section if we found one with significant visibility
        if (maxId) {
          setActiveSection(maxId);
        }
      },
      {
        threshold: thresholds,
        rootMargin: '-10% 0px -10% 0px', // Bias towards center of viewport
      }
    );

    // Observe all sections
    allIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 32;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-[32px] pt-[32px]">
      <ul className="space-y-6">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`block text-left font-['Segoe_UI',sans-serif] text-[14px] leading-[20px] transition-colors relative pl-3 pr-4 py-1 ${
                activeSection === section.id 
                  ? 'text-white border-l-2 border-[#f1ff46] bg-[#f1ff46]/10' 
                  : 'text-white/60 hover:text-white border-l-2 border-transparent'
              }`}
            >
              {section.label}
            </button>
            {section.subsections && (
              <ul className="mt-2 ml-4 space-y-2">
                {section.subsections.map((subsection) => (
                  <li key={subsection.id}>
                    <button
                      onClick={() => scrollToSection(subsection.id)}
                      className={`block text-left font-['Segoe_UI',sans-serif] text-[12px] leading-[18px] transition-colors relative pl-3 pr-4 py-1 ${
                        activeSection === subsection.id 
                          ? 'text-white border-l-2 border-[#f1ff46] bg-[#f1ff46]/10' 
                          : 'text-white/40 hover:text-white/60 border-l-2 border-transparent'
                      }`}
                    >
                      {subsection.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
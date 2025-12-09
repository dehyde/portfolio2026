import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { ContextSection } from './components/ContextSection';
import { UserProblemsSection } from './components/ProblemSection';
import { GoalsSection } from './components/GoalsSection';
import { OrganizationalChallengesSection } from './components/OrganizationalChallengesSection';
import { MultiAxisSection } from './components/MultiAxisSection';
import { GovernanceSection } from './components/GovernanceSection';
import { SummarySection } from './components/SummarySection';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* 6-column grid container with 32px margins */}
      <div className="relative mx-[32px]">
        {/* Grid system - 6 columns with 32px gutters */}
        <div className="grid grid-cols-6 gap-[32px]">
          {/* Left navigation - column 1, sticky */}
          <div className="col-span-1">
            <Navigation />
          </div>
          
          {/* Main content - columns 2-6 */}
          <div className="col-span-5">
            <HeroSection />
            <OverviewSection />
            <ContextSection />
            <UserProblemsSection />
            <GoalsSection />
            <OrganizationalChallengesSection />
            <MultiAxisSection />
            <GovernanceSection />
            <SummarySection />
            
            {/* Bottom spacer - one viewport height */}
            <div className="h-screen"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
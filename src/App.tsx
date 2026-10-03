import React, { useState, useEffect } from 'react';
import type { CareerItem, SkillItem, PreparationPhase, StudentProfile, ExternalConnection } from './types';
import { initialCareersData } from './data/careersData';
import { initialSkillsData } from './data/skillsData';
import { initialPreparationData } from './data/preparationData';
import { initialLearningResources } from './data/learningData';
import { initialOpportunitiesData } from './data/opportunitiesData';
import { initialConnectionsData } from './data/connectionsData';

import { ParticleField } from './components/3d/ParticleField';
import { Navbar, type NavTab } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyClaritySection } from './components/WhyClaritySection';
import { ExploreCareersSection } from './components/ExploreCareersSection';
import { CareerDetailModal } from './components/CareerDetailModal';
import { CareerFutureSection } from './components/CareerFutureSection';
import { EducationPathwaySection } from './components/EducationPathwaySection';
import { SkillsSection } from './components/SkillsSection';
import { PreparationPlanSection } from './components/PreparationPlanSection';
import { LearningHubSection } from './components/LearningHubSection';
import { ProjectRecommendationsSection } from './components/ProjectRecommendationsSection';
import { OpportunityHubSection } from './components/OpportunityHubSection';
import { ExternalConnectionsSection } from './components/ExternalConnectionsSection';
import { AICareerAssistant } from './components/AICareerAssistant';
import { StudentProgressSection } from './components/StudentProgressSection';
import { PersonalizedGuidanceModal } from './components/PersonalizedGuidanceModal';
import { StudentProfileModal } from './components/StudentProfileModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  // Core Data States with LocalStorage fallback
  const [careers, setCareers] = useState<CareerItem[]>(() => {
    try {
      const saved = localStorage.getItem('careerpath_careers');
      return saved ? JSON.parse(saved) : initialCareersData;
    } catch {
      return initialCareersData;
    }
  });

  const [skills, setSkills] = useState<SkillItem[]>(initialSkillsData);

  const [phases, setPhases] = useState<PreparationPhase[]>(() => {
    try {
      const saved = localStorage.getItem('careerpath_phases');
      return saved ? JSON.parse(saved) : initialPreparationData;
    } catch {
      return initialPreparationData;
    }
  });

  const [connections, setConnections] = useState<ExternalConnection[]>(initialConnectionsData);

  const [savedCareerIds, setSavedCareerIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('careerpath_saved_ids');
      return saved ? JSON.parse(saved) : ['ai-engineer', 'fullstack-software-architect'];
    } catch {
      return ['ai-engineer', 'fullstack-software-architect'];
    }
  });

  const [profile, setProfile] = useState<StudentProfile>({
    name: 'Alex Sharma',
    educationLevel: 'Class 11',
    stream: 'Science (PCM)',
    schoolOrCollege: 'Delhi Public School / Frontier Academy',
    interests: ['Artificial Intelligence', 'Space Systems', 'Robotics', 'Quantum Computing'],
    strongSkills: ['Python & PyTorch', 'Linear Algebra', 'SQL Data Design', 'Communication'],
    developingSkills: ['ROS2 Robotics', 'System Architecture', 'Statistical Inference'],
    savedCareerIds: ['ai-engineer', 'fullstack-software-architect'],
    targetGoals: [
      'Build and publish an end-to-end AI document assistant by mid-Class 11',
      'Score 98%+ percentile in National Engineering Mathematics Aptitude',
      'Contribute to a major open source AI framework on GitHub'
    ],
    completedTasksCount: 3,
    totalTasksCount: 16,
    journeyStage: 'EXPLORE'
  });

  // Modal Visibility States
  const [activeDetailCareerId, setActiveDetailCareerId] = useState<string | null>(null);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync state changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('careerpath_careers', JSON.stringify(careers));
    } catch (e) {
      console.warn(e);
    }
  }, [careers]);

  useEffect(() => {
    try {
      localStorage.setItem('careerpath_phases', JSON.stringify(phases));
    } catch (e) {
      console.warn(e);
    }
  }, [phases]);

  useEffect(() => {
    try {
      localStorage.setItem('careerpath_saved_ids', JSON.stringify(savedCareerIds));
    } catch (e) {
      console.warn(e);
    }
  }, [savedCareerIds]);

  // Handlers
  const handleToggleSaveCareer = (careerId: string) => {
    setSavedCareerIds(prev => 
      prev.includes(careerId) ? prev.filter(id => id !== careerId) : [...prev, careerId]
    );
  };

  const handleToggleTask = (phaseId: number, taskId: string) => {
    setPhases(prev =>
      prev.map(p => {
        if (p.id !== phaseId) return p;
        return {
          ...p,
          tasks: p.tasks.map(t => {
            if (t.id !== taskId) return t;
            return { ...t, completed: !t.completed };
          })
        };
      })
    );
  };

  const handleToggleConnection = (id: string) => {
    setConnections(prev =>
      prev.map(c => {
        if (c.id !== id) return c;
        return {
          ...c,
          connected: !c.connected,
          lastSynced: !c.connected ? 'Just now' : undefined,
          profileIdentifier: !c.connected ? `@student-verified-${id}` : undefined
        };
      })
    );
  };

  const handleUpdateCareer = (updated: CareerItem) => {
    setCareers(prev => prev.map(c => (c.id === updated.id ? updated : c)));
  };

  const handleAddCareer = (newCareer: CareerItem) => {
    setCareers(prev => [newCareer, ...prev]);
  };

  const handleSaveDiagnosticSuggestions = (suggestedIds: string[]) => {
    setSavedCareerIds(prev => Array.from(new Set([...prev, ...suggestedIds])));
  };

  // Metrics
  const totalTasksCount = phases.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedTasksCount = phases.reduce((acc, p) => acc + p.tasks.filter(t => t.completed).length, 0);
  const savedCareersList = careers.filter(c => savedCareerIds.includes(c.id));
  const activeDetailCareer = careers.find(c => c.id === activeDetailCareerId);

  return (
    <div className="min-h-screen text-gray-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Star Particle Canvas */}
      <ParticleField />

      {/* Floating 3D Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenWizard={() => setIsWizardOpen(true)}
        savedCareersCount={savedCareerIds.length}
      />

      {/* Main App Content View */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <>
            {/* 1. Spectacular 3D Landing-Page Hero */}
            <HeroSection
              onExploreCareers={() => {
                setActiveTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onDiscoverPath={() => setIsWizardOpen(true)}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />

            {/* 2. Why Career Clarity Matters (Cinematic 3D Doubt Orbit) */}
            <WhyClaritySection
              onOpenWizard={() => setIsWizardOpen(true)}
              onExploreCareers={() => {
                setActiveTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 3. Explore Career Universe (Catalog Preview) */}
            <ExploreCareersSection
              careers={careers}
              savedCareerIds={savedCareerIds}
              onToggleSaveCareer={handleToggleSaveCareer}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />

            {/* 4. See Where Careers Are Going (Holographic Road Timeline) */}
            <CareerFutureSection
              careers={careers}
              selectedCareerId={careers[0]?.id}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />

            {/* 5. 8-Step Education Pathway Roadmap */}
            <EducationPathwaySection />

            {/* 6. Skills Ecosystem (3D Spheres & Rings) */}
            <SkillsSection
              skills={skills}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />

            {/* 7. Personalized 5-Phase Preparation Plan */}
            <PreparationPlanSection
              phases={phases}
              onToggleTask={handleToggleTask}
            />

            {/* 8. Build Experience (Tiered Projects) */}
            <ProjectRecommendationsSection
              careers={careers}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />

            {/* 9. Learning Marketplace */}
            <LearningHubSection
              resources={initialLearningResources}
            />

            {/* 10. Student Opportunities & Scholarships */}
            <OpportunityHubSection
              opportunities={initialOpportunitiesData}
            />

            {/* 11. External Connections (Privacy-First) */}
            <ExternalConnectionsSection
              connections={connections}
              onToggleConnection={handleToggleConnection}
            />

            {/* 12. Holographic CareerPath AI Assistant */}
            <AICareerAssistant
              careers={careers}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />

            {/* 13. My Career Journey Dashboard */}
            <StudentProgressSection
              profile={profile}
              savedCareers={savedCareersList}
              completedTasksCount={completedTasksCount}
              totalTasksCount={totalTasksCount}
              onExploreCareers={() => setActiveTab('explore')}
              onOpenPreparation={() => setActiveTab('preparation')}
            />

            {/* 14. Final Cinematic CTA with Philosophy Creed */}
            <FinalCTASection
              onStartJourney={() => {
                setActiveTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenWizard={() => setIsWizardOpen(true)}
            />
          </>
        )}

        {/* Dedicated Tab Views */}
        {activeTab === 'explore' && (
          <div className="pt-20">
            <ExploreCareersSection
              careers={careers}
              savedCareerIds={savedCareerIds}
              onToggleSaveCareer={handleToggleSaveCareer}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />
          </div>
        )}

        {activeTab === 'future' && (
          <div className="pt-20">
            <CareerFutureSection
              careers={careers}
              selectedCareerId={careers[0]?.id}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />
          </div>
        )}

        {activeTab === 'pathways' && (
          <div className="pt-20">
            <EducationPathwaySection />
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="pt-20">
            <SkillsSection
              skills={skills}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />
          </div>
        )}

        {activeTab === 'preparation' && (
          <div className="pt-20">
            <PreparationPlanSection
              phases={phases}
              onToggleTask={handleToggleTask}
            />
          </div>
        )}

        {activeTab === 'learning' && (
          <div className="pt-20">
            <LearningHubSection
              resources={initialLearningResources}
            />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="pt-20">
            <ProjectRecommendationsSection
              careers={careers}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />
          </div>
        )}

        {activeTab === 'opportunities' && (
          <div className="pt-20">
            <OpportunityHubSection
              opportunities={initialOpportunitiesData}
            />
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="pt-20">
            <StudentProgressSection
              profile={profile}
              savedCareers={savedCareersList}
              completedTasksCount={completedTasksCount}
              totalTasksCount={totalTasksCount}
              onExploreCareers={() => setActiveTab('explore')}
              onOpenPreparation={() => setActiveTab('preparation')}
            />
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="pt-20">
            <AICareerAssistant
              careers={careers}
              onSelectCareer={(id) => setActiveDetailCareerId(id)}
            />
          </div>
        )}

        {activeTab === 'connections' && (
          <div className="pt-20">
            <ExternalConnectionsSection
              connections={connections}
              onToggleConnection={handleToggleConnection}
            />
          </div>
        )}
      </main>

      {/* Career Deep Dive Modal */}
      {activeDetailCareer && (
        <CareerDetailModal
          career={activeDetailCareer}
          isSaved={savedCareerIds.includes(activeDetailCareer.id)}
          onToggleSave={handleToggleSaveCareer}
          onClose={() => setActiveDetailCareerId(null)}
        />
      )}

      {/* Personalized Diagnostic Guidance Wizard */}
      {isWizardOpen && (
        <PersonalizedGuidanceModal
          careers={careers}
          onClose={() => setIsWizardOpen(false)}
          onSelectCareer={(id) => {
            setIsWizardOpen(false);
            setActiveDetailCareerId(id);
          }}
          onSaveSuggestions={handleSaveDiagnosticSuggestions}
        />
      )}

      {/* Student Profile Command Center Modal */}
      {isProfileOpen && (
        <StudentProfileModal
          profile={profile}
          savedCareers={savedCareersList}
          onUpdateProfile={(updated) => setProfile(prev => ({ ...prev, ...updated }))}
          onClose={() => setIsProfileOpen(false)}
        />
      )}

      {/* Admin Panel Modal for Data & Trend Citation Management */}
      {isAdminOpen && (
        <AdminPanelModal
          careers={careers}
          onUpdateCareer={handleUpdateCareer}
          onAddCareer={handleAddCareer}
          onClose={() => setIsAdminOpen(false)}
        />
      )}

      {/* Futuristic Footer */}
      <Footer
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWizard={() => setIsWizardOpen(true)}
      />
    </div>
  );
}

export default App;

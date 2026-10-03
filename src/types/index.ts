export type EducationLevel = 'Class 10' | 'Class 11' | 'Class 12' | 'Undergraduate' | 'All';
export type AcademicStream = 'Science (PCM)' | 'Science (PCB)' | 'Science (PCMB)' | 'Commerce' | 'Humanities / Arts' | 'Vocational / Technical' | 'Any';

export type CareerCategory = 
  | 'Engineering'
  | 'Computer Science & IT'
  | 'Artificial Intelligence'
  | 'Cybersecurity'
  | 'Medicine & Healthcare'
  | 'Science & Research'
  | 'Business & Management'
  | 'Finance'
  | 'Law'
  | 'Design & Media'
  | 'Government & Public Services'
  | 'Education'
  | 'Architecture'
  | 'Environmental Careers'
  | 'Emerging Careers'
  | 'Skilled & Vocational Careers';

export interface CareerTrendTimelineStage {
  phase: 'TODAY' | 'NEXT' | 'EMERGING' | 'FUTURE';
  period: string;
  headline: string;
  description: string;
  skillsInDemand: string[];
  keyTechnologies: string[];
  certaintyLevel: 'Observed Reality' | 'High Probability' | 'Emerging Trend' | 'Speculative Direction';
}

export interface CareerFutureData {
  careerToday: string;
  careerEvolution: string;
  emergingAreas: string[];
  futureSkills: string[];
  futureLearning: string[];
  sourceInfo: {
    sourceName: string;
    publication: string;
    publishDate: string;
    verifiedDate: string;
  };
  timeline: CareerTrendTimelineStage[];
}

export interface EducationPathwayStage {
  id: string;
  stageName: string;
  subTitle: string;
  suitableStreams: string[];
  duration: string;
  whatToLearn: string[];
  whyItMatters: string;
  options: {
    pathType: 'Degree Path' | 'Diploma Path' | 'Skill-Based Path' | 'Certification Path';
    title: string;
    institutesOrCertifiers: string[];
    duration: string;
  }[];
  usefulResources: string[];
  suggestedProjects: string[];
}

export interface CareerProject {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: string;
  description: string;
  skillsLearned: string[];
  toolsUsed: string[];
  deliverable: string;
  steps: string[];
}

export interface CareerItem {
  id: string;
  title: string;
  category: CareerCategory;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  badge: string;
  accentColor: string; // hex or tailwind color
  secondaryColor: string;
  metaphorType: 'brain' | 'shield' | 'dna' | 'rocket' | 'code' | 'atom' | 'crystal' | 'compass' | 'camera' | 'gear';
  educationFit: EducationLevel[];
  streamFit: AcademicStream[];
  avgStartingSalary: string;
  growthOutlook: string; // e.g. "+24% projected growth"
  demandIndex: number; // 0 - 100
  
  whatTheyDo: string[];
  whereTheyWork: string[];
  problemsSolved: string[];
  usefulDegrees: string[];
  keySkills: { name: string; level: number; category: string }[];
  technologiesUsed: string[];
  typicalRoles: { level: string; title: string; exp: string }[];
  industriesHiring: string[];
  careerDirections: string[];
  
  careerFuture: CareerFutureData;
  educationPathways: EducationPathwayStage[];
  projects: CareerProject[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Technical' | 'Analytical' | 'Creative' | 'Soft & Leadership' | 'Domain';
  status: 'Strong' | 'Developing' | 'Explore';
  proficiency: number; // 0 - 100
  relatedCareers: string[];
  whyItMatters: string;
  whereItIsUsed: string;
  howToLearn: string[];
  beginnerResources: { title: string; url: string; platform: string; isFree: boolean }[];
  practiceIdeas: string[];
  projectIdeas: string[];
}

export interface PreparationTask {
  id: string;
  title: string;
  description: string;
  category: 'Tasks' | 'Skills' | 'Resources' | 'Projects' | 'Milestones';
  estimatedTime: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  tips?: string;
}

export interface PreparationPhase {
  id: number;
  phaseCode: string;
  name: string;
  tagline: string;
  targetTimeline: string;
  tasks: PreparationTask[];
}

export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  careerCategory: CareerCategory | 'General';
  skill: string;
  educationLevel: EducationLevel;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topic: string;
  format: 'Interactive Course' | 'Video Track' | 'Hands-on Lab' | 'Book / Guide' | 'Project Sandbox';
  estimatedTime: string;
  rating: number;
  reviewsCount: number;
  isFree: boolean;
  url: string;
  whyItHelps: string;
  featured: boolean;
}

export interface OpportunityItem {
  id: string;
  title: string;
  type: 'Scholarship' | 'Competition' | 'Olympiad' | 'Workshop' | 'Hackathon' | 'Internship' | 'Skill Program' | 'Graduate Opportunity';
  organization: string;
  eligibleClasses: EducationLevel[];
  deadline: string;
  award: string;
  location: string;
  careerRelevance: string[];
  description: string;
  requirements: string[];
  applyUrl: string;
  isLive: boolean;
}

export interface ExternalConnection {
  id: string;
  name: 'GitHub' | 'LinkedIn' | 'Resume' | 'LeetCode' | 'Coursera';
  description: string;
  connected: boolean;
  lastSynced?: string;
  permissionsRequired: string[];
  whyNeeded: string;
  profileIdentifier?: string;
}

export interface StudentProfile {
  name: string;
  educationLevel: EducationLevel;
  stream: AcademicStream;
  schoolOrCollege: string;
  interests: string[];
  strongSkills: string[];
  developingSkills: string[];
  savedCareerIds: string[];
  targetGoals: string[];
  completedTasksCount: number;
  totalTasksCount: number;
  journeyStage: 'UNDERSTAND' | 'EXPLORE' | 'LEARN' | 'BUILD' | 'EXPERIENCE' | 'PREPARE' | 'GROW';
}

export interface AIMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  text: string;
  suggestedPrompts?: string[];
  linkedCareerId?: string;
}

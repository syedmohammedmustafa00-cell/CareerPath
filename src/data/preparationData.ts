import type { PreparationPhase } from '../types';

export const initialPreparationData: PreparationPhase[] = [
  {
    id: 1,
    phaseCode: 'PHASE 1',
    name: 'Foundation & Self-Discovery',
    tagline: 'Understand your innate strengths, clarify stream options, and master foundational thinking.',
    targetTimeline: 'Class 10 - Early Class 11 (Month 1 - 3)',
    tasks: [
      {
        id: 'task-1-1',
        title: 'Complete Multi-Disciplinary Career Exploration',
        description: 'Explore at least 5 diverse career profiles across STEM, Commerce, and Humanities without premature specialization.',
        category: 'Tasks',
        estimatedTime: '4 - 6 Hours',
        completed: true,
        priority: 'High',
        tips: 'Look at daily work reality rather than glamorous titles or salary averages.'
      },
      {
        id: 'task-1-2',
        title: 'Map Academic Strengths & Subject Alignments',
        description: 'Evaluate your comfort with Mathematics, Biology, Critical Writing, and Logic to inform stream choices.',
        category: 'Milestones',
        estimatedTime: '2 Hours',
        completed: true,
        priority: 'High',
        tips: 'Stream selection after Class 10 should balance passion with long-term college eligibility.'
      },
      {
        id: 'task-1-3',
        title: 'Master Modern Digital Tooling (Git, Markdown, Notion)',
        description: 'Set up a professional GitHub account, install VS Code or Obsidian, and start maintaining a digital learning journal.',
        category: 'Skills',
        estimatedTime: '5 Hours',
        completed: true,
        priority: 'Medium',
        tips: 'Documenting what you learn turns passive reading into active retention.'
      },
      {
        id: 'task-1-4',
        title: 'Conduct First Informational Interview',
        description: 'Reach out to an engineer, doctor, lawyer, or entrepreneur in your extended network to ask 5 structured questions about their day.',
        category: 'Tasks',
        estimatedTime: '2 Hours',
        completed: false,
        priority: 'Medium',
        tips: 'Ask: "What is the most challenging or mundane part of your job that students do not know?"'
      }
    ]
  },
  {
    id: 2,
    phaseCode: 'PHASE 2',
    name: 'Core Skills Mastery',
    tagline: 'Acquire rigorous fundamental technical, mathematical, or analytical competence.',
    targetTimeline: 'Class 11 - Mid Class 12 (Month 4 - 8)',
    tasks: [
      {
        id: 'task-2-1',
        title: 'Complete First Rigorous Coding / Analytical Track',
        description: 'Complete Harvard CS50, Fast.ai, or Khan Academy Advanced Mathematics curriculum with verified exercises.',
        category: 'Skills',
        estimatedTime: '40 - 50 Hours',
        completed: false,
        priority: 'High',
        tips: 'Focus on completing all lab assignments without looking up immediate answers.'
      },
      {
        id: 'task-2-2',
        title: 'Build Quantitative & Statistical Intuition',
        description: 'Master probability, statistics, and basic linear algebra concepts necessary for data and research literacy.',
        category: 'Skills',
        estimatedTime: '20 Hours',
        completed: false,
        priority: 'High',
        tips: 'Visualize concepts with geometric animations (like 3Blue1Brown).'
      },
      {
        id: 'task-2-3',
        title: 'Complete Foundational Certification / Course Milestone',
        description: 'Earn a verified course certificate in Python, Web Development, or Data Analysis from an accredited provider.',
        category: 'Resources',
        estimatedTime: '15 Hours',
        completed: false,
        priority: 'Medium',
        tips: 'Certificates prove follow-through; the real proof is in the code you write.'
      },
      {
        id: 'task-2-4',
        title: 'Solve 30 Algorithmic / Logical Challenges',
        description: 'Practice on LeetCode, Codeforces, or logic puzzles to build mental stamina under time constraints.',
        category: 'Tasks',
        estimatedTime: '15 Hours',
        completed: false,
        priority: 'Medium',
        tips: 'Analyze time complexity (Big-O) for every solution you code.'
      }
    ]
  },
  {
    id: 3,
    phaseCode: 'PHASE 3',
    name: 'Independent Proof-of-Work Projects',
    tagline: 'Stop just following tutorials. Build original tangible software, research papers, or designs.',
    targetTimeline: 'Class 12 - Early College (Month 9 - 14)',
    tasks: [
      {
        id: 'task-3-1',
        title: 'Ship Beginner Proof-of-Work Project',
        description: 'Build and deploy a functional project (e.g. AI study assistant, interactive data visualizer, or civic memo).',
        category: 'Projects',
        estimatedTime: '25 Hours',
        completed: false,
        priority: 'High',
        tips: 'Make sure it is publicly accessible via a live URL or open-source repository.'
      },
      {
        id: 'task-3-2',
        title: 'Author Comprehensive Technical Documentation & README',
        description: 'Write a professional README file with architecture diagrams, installation guides, and demo GIFs.',
        category: 'Projects',
        estimatedTime: '4 Hours',
        completed: false,
        priority: 'Medium',
        tips: 'Recruiters and admissions committees look at project READMEs before reading code.'
      },
      {
        id: 'task-3-3',
        title: 'Launch Intermediate Multi-Tier Project',
        description: 'Engineer a system involving a database, API integration, and user authentication with error handling.',
        category: 'Projects',
        estimatedTime: '40 Hours',
        completed: false,
        priority: 'High',
        tips: 'Solve a real problem you personally experience or that helps your school/community.'
      },
      {
        id: 'task-3-4',
        title: 'Contribute to an Open-Source Project on GitHub',
        description: 'Submit an issue triage, documentation fix, or pull request to a recognized open-source tool.',
        category: 'Milestones',
        estimatedTime: '10 Hours',
        completed: false,
        priority: 'Medium',
        tips: 'Look for issues tagged "good first issue" in Python or web repositories.'
      }
    ]
  },
  {
    id: 4,
    phaseCode: 'PHASE 4',
    name: 'Real-World Experience & Validation',
    tagline: 'Compete in national hackathons, publish student research, and secure junior apprenticeships.',
    targetTimeline: 'College Year 1 - 2 (Month 15 - 20)',
    tasks: [
      {
        id: 'task-4-1',
        title: 'Participate in a 36-Hour Hackathon or Innovation Challenge',
        description: 'Form a multidisciplinary team and build a prototype under intense deadline pressure (e.g. Smart India Hackathon).',
        category: 'Tasks',
        estimatedTime: '36 Hours',
        completed: false,
        priority: 'High',
        tips: 'Teamwork and pitching the working prototype are as vital as the technical codebase.'
      },
      {
        id: 'task-4-2',
        title: 'Secure First Research Fellowship or Industry Internship',
        description: 'Apply to academic summer programs, professor research labs, or startup junior developer roles.',
        category: 'Milestones',
        estimatedTime: '30 Hours',
        completed: false,
        priority: 'High',
        tips: 'Personalize each application letter with specific references to their recent publications or products.'
      },
      {
        id: 'task-4-3',
        title: 'Apply for Prestigious Student Scholarships & Grants',
        description: 'Submit applications for merit scholarships, STEM fellowships, or national innovation grants.',
        category: 'Resources',
        estimatedTime: '12 Hours',
        completed: false,
        priority: 'Medium',
        tips: 'Highlight community impact and leadership alongside test scores.'
      }
    ]
  },
  {
    id: 5,
    phaseCode: 'PHASE 5',
    name: 'Career Launch & Professional Trajectory',
    tagline: 'Admissions, portfolio polish, interview mastery, and long-term industry momentum.',
    targetTimeline: 'Pre-Graduation / Senior Year (Month 21+)',
    tasks: [
      {
        id: 'task-5-1',
        title: 'Build World-Class Personal Portfolio Website',
        description: 'Publish a sleek personal domain showcasing your top 3 projects, live interactive demos, and written case studies.',
        category: 'Projects',
        estimatedTime: '20 Hours',
        completed: false,
        priority: 'High',
        tips: 'Keep the UI clean, responsive, and easy to navigate in under 60 seconds.'
      },
      {
        id: 'task-5-2',
        title: 'Master Technical & Behavioral Interviews',
        description: 'Complete 10 mock interviews covering system design, live coding, and STAR behavioral leadership scenarios.',
        category: 'Skills',
        estimatedTime: '25 Hours',
        completed: false,
        priority: 'High',
        tips: 'Practice thinking out loud and clarifying assumptions before writing code or solutions.'
      },
      {
        id: 'task-5-3',
        title: 'Establish Industry Mentorship Network',
        description: 'Connect with 3 experienced professionals in your chosen sector for quarterly strategic guidance.',
        category: 'Milestones',
        estimatedTime: '10 Hours',
        completed: false,
        priority: 'Medium',
        tips: 'Maintain relationships by sharing updates on projects they gave advice on.'
      }
    ]
  }
];

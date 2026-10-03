import type { ExternalConnection } from '../types';

export const initialConnectionsData: ExternalConnection[] = [
  {
    id: 'conn-github',
    name: 'GitHub',
    description: 'Sync your public repositories, commits, and pull requests to build an authentic engineering proof-of-work portfolio.',
    connected: true,
    lastSynced: '2 hours ago',
    permissionsRequired: ['read:user (Public Profile)', 'read:org (Public Organizations)', 'public_repo (Public Repositories)'],
    whyNeeded: 'Verifies real code contributions, open-source pull requests, and project commit streaks for your student dashboard without accessing private code.',
    profileIdentifier: '@alex-quantum-26'
  },
  {
    id: 'conn-linkedin',
    name: 'LinkedIn',
    description: 'Import your extracurricular honors, school leadership, and verified course completion licenses.',
    connected: false,
    permissionsRequired: ['r_basicprofile (Basic Profile)', 'r_emailaddress (Verified Email)'],
    whyNeeded: 'Populates your student profile with verified school credentials and allows direct discovery of alumni working in your target career areas.',
    profileIdentifier: undefined
  },
  {
    id: 'conn-resume',
    name: 'Resume',
    description: 'Upload your latest PDF resume to extract structured academic achievements, competitive test percentiles, and project bullet points.',
    connected: true,
    lastSynced: 'Yesterday at 4:15 PM',
    permissionsRequired: ['file:read (Local PDF Parsing)', 'client_storage (Local Sandbox Encrypted)'],
    whyNeeded: 'Enables our AI career assistant to tailor guidance directly to your exact academic accomplishments without sending files to third parties.',
    profileIdentifier: 'Resume_Alex_Sharma_2026.pdf'
  },
  {
    id: 'conn-leetcode',
    name: 'LeetCode',
    description: 'Verify your algorithmic problem-solving ranking, contest rating, and total solved problems count.',
    connected: false,
    permissionsRequired: ['read:public_stats (Public User Contest Profile)'],
    whyNeeded: 'Tracks your data structures & algorithmic stamina for technical engineering and quantitative finance preparation tracks.',
    profileIdentifier: undefined
  },
  {
    id: 'conn-coursera',
    name: 'Coursera',
    description: 'Automatically import verified completion certificates and university honors directly to your profile badge showcase.',
    connected: false,
    permissionsRequired: ['read:certificates (Verified Course Badges)'],
    whyNeeded: 'Validates completion of high-standard university curriculum from Harvard, Stanford, and IITs for scholarship applications.',
    profileIdentifier: undefined
  }
];

import type { CareerItem } from '../types';

export const initialCareersData: CareerItem[] = [
  {
    id: 'ai-engineer',
    title: 'Artificial Intelligence & Machine Learning Engineer',
    category: 'Artificial Intelligence',
    tagline: 'Designing neural architectures, intelligent agents, and foundation models that solve complex human challenges.',
    shortDesc: 'AI Engineers research, build, and deploy machine learning models and intelligent autonomous systems.',
    longDesc: 'Artificial Intelligence Engineers sit at the frontier of computational intelligence. Rather than writing traditional deterministic rules, they train models to discover patterns from massive datasets, interpret natural language, navigate robotics, and assist medical diagnostics. After Class 10/12, students start with mathematics and programming, progressing towards tensor algebra, deep learning architectures, and production MLOps.',
    badge: 'High Impact • 2026-2035 Exponential Growth',
    accentColor: '#38bdf8', // Cyan
    secondaryColor: '#818cf8',
    metaphorType: 'brain',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Science (PCM)', 'Science (PCMB)', 'Any'],
    avgStartingSalary: '$95,000 - $140,000 / ₹14L - ₹28L p.a.',
    growthOutlook: '+38% growth through 2032',
    demandIndex: 96,
    whatTheyDo: [
      'Architect and train neural networks (Transformers, Diffusion models, Reinforcement Learning agents)',
      'Design retrieval-augmented generation (RAG) pipelines for enterprise knowledge systems',
      'Optimize models for low-latency inference on edge devices, smartphones, and robots',
      'Evaluate model safety, mitigate hallucinations, and audit algorithmic fairness',
      'Build end-to-end data pipelines and automated retraining systems in cloud environments'
    ],
    whereTheyWork: [
      'Frontier AI Research Labs (OpenAI, DeepMind, Anthropic)',
      'Global Technology Giants & Cloud Providers (Google, Microsoft, AWS, Apple)',
      'Autonomous Vehicle & Robotics Enterprises (Tesla, Waymo, Boston Dynamics)',
      'Bio-informatics & Drug Discovery Institutes',
      'High-Frequency Algorithmic Trading Firms'
    ],
    problemsSolved: [
      'Accelerating early cancer and genomic anomaly detection from radiological scans',
      'Enabling real-time translation across 100+ low-resource spoken languages',
      'Optimizing renewable electrical grids to balance solar/wind power supply',
      'Creating personalized adaptive tutoring systems for neurodiverse learners'
    ],
    usefulDegrees: [
      'B.Tech / B.S. in Computer Science & Artificial Intelligence',
      'B.S. in Mathematics & Scientific Computing',
      'B.Tech in Data Science & Machine Learning',
      'Dual Degree M.S. in Cognitive Systems or Robotics'
    ],
    keySkills: [
      { name: 'Python & PyTorch', level: 95, category: 'Technical' },
      { name: 'Linear Algebra & Calculus', level: 90, category: 'Analytical' },
      { name: 'Transformer Architectures', level: 88, category: 'Technical' },
      { name: 'MLOps & Distributed GPU Training', level: 82, category: 'Technical' },
      { name: 'Algorithmic Problem Solving', level: 92, category: 'Analytical' }
    ],
    technologiesUsed: ['Python', 'PyTorch', 'CUDA', 'Hugging Face', 'Docker', 'Kubernetes', 'Triton', 'vLLM', 'LangChain'],
    typicalRoles: [
      { level: 'Entry-Level (0-2 yrs)', title: 'Associate Machine Learning Engineer', exp: 'Data curation, baseline model training, API integration' },
      { level: 'Mid-Level (3-5 yrs)', title: 'Senior AI System Specialist', exp: 'Custom model architecture, latency distillation, multi-GPU scaling' },
      { level: 'Senior (6-9 yrs)', title: 'Staff Applied Scientist', exp: 'R&D leadership, novel architecture research, enterprise-scale AI strategy' },
      { level: 'Executive (10+ yrs)', title: 'VP of AI Research & Chief AI Officer', exp: 'Corporate AI vision, ethics council, high-stakes infrastructure investments' }
    ],
    industriesHiring: ['Healthcare & Biotech', 'Automotive & Aerospace', 'Consumer Electronics', 'FinTech & Banking', 'Defense & Space'],
    careerDirections: [
      'Frontier Model Researcher',
      'AI Alignment & Safety Scientist',
      'Autonomous Robotics Specialist',
      'Edge AI / Hardware Acceleration Architect'
    ],
    careerFuture: {
      careerToday: 'Today, AI engineers primarily fine-tune existing foundation models, develop vector search embeddings, and build RAG enterprise search engines.',
      careerEvolution: 'Over the next 5-10 years, AI is shifting from static chat models toward multimodal autonomous agents that execute multi-step workflows, self-reflect, and collaborate.',
      emergingAreas: [
        'Agentic AI Workflow Orchestration',
        'Physical AI & Embodied World Models for Humanoids',
        'Neuro-Symbolic Reasoning & Formal Verification',
        'Quantum Machine Learning for Molecular Simulation'
      ],
      futureSkills: [
        'Agentic framework architecture (LangGraph, CrewAI)',
        'Model interpretability and mechanistic unlearning',
        'Energy-efficient small language model (SLM) quantization',
        'Synthetic data generation and RL from AI Feedback (RLAIF)'
      ],
      futureLearning: [
        'Start with Python and linear algebra fundamentals in high school',
        'Explore open-source weights on HuggingFace and local Ollama inference',
        'Build multi-agent collaboration systems with memory and tools'
      ],
      sourceInfo: {
        sourceName: 'World Economic Forum Future of Jobs Report & Stanford AI Index',
        publication: 'Global Technology Skills Assessment 2026',
        publishDate: 'January 2026',
        verifiedDate: 'October 2026'
      },
      timeline: [
        {
          phase: 'TODAY',
          period: '2024 - 2026',
          headline: 'Foundation Models & Prompt Augmentation',
          description: 'Deploying LLMs with retrieval databases, prompt engineering, and basic fine-tuning for customer assist and code synthesis.',
          skillsInDemand: ['Python', 'Vector DBs', 'RAG Pipelines', 'OpenAI/Anthropic APIs'],
          keyTechnologies: ['PyTorch', 'LangChain', 'Pinecone', 'Docker'],
          certaintyLevel: 'Observed Reality'
        },
        {
          phase: 'NEXT',
          period: '2027 - 2029',
          headline: 'Autonomous Multi-Agent Networks & Edge AI',
          description: 'Models operate as proactive digital co-workers with sensory inputs (vision, audio, tactile) running locally on user hardware.',
          skillsInDemand: ['Agent Swarm Protocols', 'Model Distillation', 'On-device NPU Optimization'],
          keyTechnologies: ['vLLM', 'WebGPU', 'Quantization (AWQ/GGUF)', 'Robotic Middlewares'],
          certaintyLevel: 'High Probability'
        },
        {
          phase: 'EMERGING',
          period: '2030 - 2033',
          headline: 'Embodied Spatial AI & World Models',
          description: 'AI systems that model physical 3D spaces, enabling autonomous robotics, bipedal navigation, and automated scientific laboratories.',
          skillsInDemand: ['Spatial Computing', 'World Model Simulation', 'Sim2Real Transfer', 'Neuro-Symbolic Logic'],
          keyTechnologies: ['Nvidia Isaac Sim', 'Gaussian Splatting', 'Custom Neuromorphic Chips'],
          certaintyLevel: 'Emerging Trend'
        },
        {
          phase: 'FUTURE',
          period: '2034+',
          headline: 'Self-Improving Automated Scientific Discovery',
          description: 'Autonomous synthetic labs generating and testing hypotheses in biology, material physics, and quantum chemistry without human delay.',
          skillsInDemand: ['Automated Experiment Design', 'Complex System Dynamics', 'AI Safety Verification'],
          keyTechnologies: ['Quantum Accelerators', 'Molecular DNA Synthesizers', 'Automated Lab Robotics'],
          certaintyLevel: 'Speculative Direction'
        }
      ]
    },
    educationPathways: [
      {
        id: 'stage-1',
        stageName: 'Class 10 Foundation',
        subTitle: 'Mathematical intuition, computational logic, curiosity',
        suitableStreams: ['Any Stream (Exploration Stage)'],
        duration: '1 Year',
        whatToLearn: [
          'High School Algebra, Coordinate Geometry & Basic Statistics',
          'Fundamental Logic and Python basics (Variables, Loops, Functions)',
          'Algorithmic puzzles (Khan Academy, Project Euler)'
        ],
        whyItMatters: 'AI is fundamentally applied mathematics. Building genuine comfort with numbers early removes fear and unlocks rapid learning.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'Self-Paced Python & Logic Track',
            institutesOrCertifiers: ['CS50 Python (Harvard OpenCourseWare)', 'Kaggle Python'],
            duration: '3-6 Months'
          },
          {
            pathType: 'Certification Path',
            title: 'Introduction to Computational Thinking',
            institutesOrCertifiers: ['IIT Madras Online School Track', 'Coursera'],
            duration: '4 Months'
          }
        ],
        usefulResources: ['CS50P: Intro to Programming with Python', '3Blue1Brown: Essence of Linear Algebra', 'Khan Academy AP Statistics'],
        suggestedProjects: ['Build a text-based guess-the-number game with computer solver', 'Analyze your personal study time with Python Pandas and Matplotlib']
      },
      {
        id: 'stage-2',
        stageName: 'Class 11 & 12 Focus',
        subTitle: 'Mathematics depth, Physics/Logic, entrance preparation',
        suitableStreams: ['Science (PCM)', 'Science (PCMB)'],
        duration: '2 Years',
        whatToLearn: [
          'Calculus (Derivatives, Gradients, Integrals)',
          'Probability theory, Matrices & Vectors',
          'Data structures (Lists, Trees, Dictionaries, Hashmaps)',
          'Introductory machine learning concepts (Linear Regression, Classification)'
        ],
        whyItMatters: 'Gradient descent—the engine of modern AI—is pure multivariable calculus. Mastering 11/12 math directly translates to AI mastery.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'JEE Main / Advanced & University Entrance Prep',
            institutesOrCertifiers: ['IITs, NITs, BITS, IIITs, Top Global Universities (MIT, Stanford, Cambridge)'],
            duration: '2 Years Schooling'
          },
          {
            pathType: 'Skill-Based Path',
            title: 'Applied AI High School Portfolio',
            institutesOrCertifiers: ['Kaggle Competitions', 'Open-Source GitHub Contributions'],
            duration: 'Self-Paced Weekends'
          }
        ],
        usefulResources: ['Fast.ai Practical Deep Learning for Coders', 'StatQuest with Josh Starmer', 'MIT OpenCourseWare 18.06 Linear Algebra'],
        suggestedProjects: ['Train an image classifier to detect plant leaf diseases', 'Create an automated spam/toxic message detector using Naive Bayes']
      },
      {
        id: 'stage-3',
        stageName: 'Undergraduate Degree / Specialization',
        subTitle: 'B.Tech / B.S. in CS, AI, Math or Robotics',
        suitableStreams: ['Science (PCM) Graduates'],
        duration: '3 to 4 Years',
        whatToLearn: [
          'Deep Learning & Convolutional / Recurrent / Transformer Networks',
          'Distributed Systems, Operating Systems & GPU Programming (CUDA)',
          'Natural Language Processing (NLP) & Computer Vision',
          'Model Deployment, Cloud APIs & Production Monitoring'
        ],
        whyItMatters: 'Translates theoretical understanding into engineering ability to train scalable, robust models for millions of users.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'B.Tech in Computer Science / Artificial Intelligence',
            institutesOrCertifiers: ['IIIT Hyderabad, IIT Delhi, IIT Bombay, Carnegie Mellon, NUS'],
            duration: '4 Years'
          },
          {
            pathType: 'Diploma Path',
            title: 'BS in Data Science & Applications (Online / Hybrid)',
            institutesOrCertifiers: ['IIT Madras Online Degree', 'University of London'],
            duration: '3-4 Years Flexible'
          },
          {
            pathType: 'Skill-Based Path',
            title: 'Full-Stack Machine Learning Bootcamp + Open-Source Apprenticeship',
            institutesOrCertifiers: ['Full Stack Deep Learning', 'Weights & Biases Fellowship'],
            duration: '9-12 Months'
          }
        ],
        usefulResources: ['Stanford CS224N (NLP with Deep Learning)', 'Stanford CS231N (Computer Vision)', 'Andrej Karpathy: Neural Networks: Zero to Hero'],
        suggestedProjects: ['Build a RAG research paper query engine with local Llama 3', 'Train a custom vision model for autonomous drone obstacle avoidance']
      }
    ],
    projects: [
      {
        id: 'proj-ai-1',
        title: 'Intelligent Study Assistant Chatbot with Custom Knowledge',
        difficulty: 'Beginner',
        estimatedHours: '12 - 15 Hours',
        description: 'Build a private AI assistant that reads your Class 10/12 textbooks and quizzes you with generated flashcards.',
        skillsLearned: ['Python basics', 'API integration', 'Document chunking', 'Streamlit UI'],
        toolsUsed: ['Python', 'OpenAI/Groq API', 'Streamlit', 'PyPDF2'],
        deliverable: 'A running web app where students upload notes and ask questions with cited chapter excerpts.',
        steps: [
          'Set up Python environment and install Streamlit and requests library',
          'Extract raw text from PDF textbook chapters',
          'Create prompts that instruct the model to only answer based on provided text',
          'Build an interactive chat interface with Streamlit'
        ]
      },
      {
        id: 'proj-ai-2',
        title: 'Autonomous Plant Disease Vision Classifier with Heatmap Explainability',
        difficulty: 'Intermediate',
        estimatedHours: '25 - 35 Hours',
        description: 'Train a convolutional neural network (ResNet or MobileNet) on 5,000+ agricultural leaf images to classify crop diseases.',
        skillsLearned: ['PyTorch', 'Data augmentation', 'Transfer learning', 'Grad-CAM visual explainability'],
        toolsUsed: ['PyTorch', 'Torchvision', 'Kaggle PlantVillage Dataset', 'Matplotlib'],
        deliverable: 'A trained PyTorch model with 94%+ accuracy and Grad-CAM overlay highlighting the diseased leaf region.',
        steps: [
          'Download and preprocess the PlantVillage dataset into train/val/test splits',
          'Fine-tune a pretrained MobileNetV3 with cross-entropy loss',
          'Implement Grad-CAM to produce heatmaps explaining why the model made each diagnosis',
          'Package the inference script into a lightweight FastAPI service'
        ]
      },
      {
        id: 'proj-ai-3',
        title: 'Real-Time Edge Audio-to-Action Robotic Assistant',
        difficulty: 'Advanced',
        estimatedHours: '60 - 80 Hours',
        description: 'Develop an on-device whisper-based speech pipeline connected to an embodied agent that plans multi-step domestic tasks.',
        skillsLearned: ['Quantized model deployment', 'Asynchronous streaming', 'Agent tool calling', 'Robotics simulation'],
        toolsUsed: ['Whisper.cpp', 'Ollama / Llama-3-8B-Instruct', 'ROS2 / Webots', 'Python asyncio'],
        deliverable: 'A simulated robot that listens to spoken commands ("Find the red cup and bring it to the kitchen counter") and generates planning coordinates.',
        steps: [
          'Set up real-time audio capture and local streaming transcription with Whisper.cpp',
          'Implement an agentic loop with tool calling to query simulated environment coordinates',
          'Connect outputs to ROS2 navigation stack inside Webots simulator',
          'Benchmark token latency and optimize inference footprint to run under 4GB RAM'
        ]
      }
    ]
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist & Ethical Hacker',
    category: 'Cybersecurity',
    tagline: 'Defending critical national infrastructure, enterprise systems, and user privacy against sophisticated cyber adversaries.',
    shortDesc: 'Cybersecurity experts identify vulnerabilities, secure networks, and respond to global digital threats.',
    longDesc: 'In a deeply interconnected world, everything from hospitals and electrical grids to banking networks and satellites depends on resilient security architecture. Cybersecurity specialists work either as offensive security engineers (Ethical Hackers / Red Team) testing defenses or defensive architects (Blue Team) monitoring security operations centers (SOC) and building zero-trust protocols.',
    badge: 'Critical Defense • Zero Unemployment Rate',
    accentColor: '#10b981', // Emerald
    secondaryColor: '#06b6d4',
    metaphorType: 'shield',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Science (PCM)', 'Commerce', 'Any'],
    avgStartingSalary: '$85,000 - $130,000 / ₹10L - ₹24L p.a.',
    growthOutlook: '+32% growth through 2033',
    demandIndex: 94,
    whatTheyDo: [
      'Conduct penetration testing to uncover vulnerabilities in web apps, networks, and cloud APIs',
      'Implement Zero-Trust network architecture and multi-factor biometric authentication protocols',
      'Analyze malware samples and reverse engineer binary exploits in isolated sandboxes',
      'Investigate live security breaches, perform digital forensics, and restore compromised systems',
      'Ensure strict compliance with data protection laws (GDPR, DPDP Act, HIPAA)'
    ],
    whereTheyWork: [
      'National Cyber Defense Agencies & Defense Research (CERT-In, NSA, NATO)',
      'Enterprise Technology & Cloud Providers (Cloudflare, CrowdStrike, Palo Alto Networks)',
      'Financial Institutions & Global Banks (JPMorgan, HSBC, Reserve Bank of India)',
      'Aviation, Energy, and Critical Infrastructure Operators',
      'Top-Tier Penetration Testing & Red Team Consultancies'
    ],
    problemsSolved: [
      'Preventing ransomware attacks from shutting down intensive care hospital networks',
      'Protecting democratic elections and electronic voting hardware from foreign tampering',
      'Securing billions in digital payments across real-time banking gateways',
      'Stopping nation-state actors from accessing municipal water treatment control systems'
    ],
    usefulDegrees: [
      'B.Tech in Information Security / Cybersecurity',
      'B.Tech / B.S. in Computer Science',
      'B.Sc. in Forensic Science & Digital Security',
      'Professional Certifications: OSCP, CEH, CompTIA Security+, CISSP'
    ],
    keySkills: [
      { name: 'Computer Networking (TCP/IP, DNS, BGP)', level: 94, category: 'Technical' },
      { name: 'Linux System Administration & Bash', level: 90, category: 'Technical' },
      { name: 'Web Application Vulnerabilities (OWASP Top 10)', level: 88, category: 'Technical' },
      { name: 'Reverse Engineering & Assembly/C', level: 78, category: 'Technical' },
      { name: 'Threat Hunting & SIEM Analytics', level: 85, category: 'Analytical' }
    ],
    technologiesUsed: ['Wireshark', 'Burp Suite', 'Metasploit', 'Nmap', 'Ghidra', 'Splunk', 'Kali Linux', 'Snort', 'Python'],
    typicalRoles: [
      { level: 'Entry-Level (0-2 yrs)', title: 'Junior SOC Analyst / Security Engineer', exp: 'Log monitoring, alert triage, vulnerability scanning' },
      { level: 'Mid-Level (3-5 yrs)', title: 'Penetration Tester / Incident Responder', exp: 'Red teaming, web exploit development, malware isolation' },
      { level: 'Senior (6-9 yrs)', title: 'Security Architect & Threat Intelligence Lead', exp: 'Zero-trust infrastructure design, cryptosystem architecture' },
      { level: 'Executive (10+ yrs)', title: 'Chief Information Security Officer (CISO)', exp: 'Boardroom cybersecurity governance, cyber insurance, crisis leadership' }
    ],
    industriesHiring: ['Banking & Finance', 'Defense & Aerospace', 'Healthcare Systems', 'E-commerce & Cloud Services', 'Government Infrastructure'],
    careerDirections: [
      'Offensive Security / Red Team Lead',
      'Digital Forensics & Incident Response (DFIR) Investigator',
      'Cloud & DevSecOps Security Architect',
      'Cryptographer & Quantum-Resistant Security Specialist'
    ],
    careerFuture: {
      careerToday: 'Organizations fight daily phishing, credential theft, and misconfigured cloud buckets using commercial firewalls and SIEM alarms.',
      careerEvolution: 'Adversaries now utilize automated AI attack swarms and polymorphic malware. Cyber defense is transforming into autonomous, self-healing networks and post-quantum encryption.',
      emergingAreas: [
        'Post-Quantum Cryptography (PQC) Migration',
        'AI Red Teaming & Jailbreak Mitigation',
        'Hardware-Level Supply Chain Security & Silicon Enclaves',
        'Autonomous AI-driven SOC Agents'
      ],
      futureSkills: [
        'Lattice-based cryptography algorithms (Kyber, Dilithium)',
        'Prompt injection & LLM adversarial defense',
        'eBPF kernel-level Linux observability',
        'Automated SOAR playbook scripting'
      ],
      futureLearning: [
        'Master basic networking: understand how IP packets travel across the web',
        'Practice on free, legal platforms like OverTheWire and TryHackMe',
        'Participate in student Capture The Flag (CTF) cyber competitions'
      ],
      sourceInfo: {
        sourceName: 'ISC2 Cybersecurity Workforce Study & NIST Security Directives',
        publication: 'Global Cyber Defense Trends & Shortage Analysis 2026',
        publishDate: 'February 2026',
        verifiedDate: 'October 2026'
      },
      timeline: [
        {
          phase: 'TODAY',
          period: '2024 - 2026',
          headline: 'Cloud Migration & Zero-Trust Verification',
          description: 'Eliminating static passwords, enforcing hardware tokens, and patching perimeter vulnerabilities.',
          skillsInDemand: ['Cloud IAM', 'OWASP Pentesting', 'Wireshark', 'EDR Operations'],
          keyTechnologies: ['CrowdStrike', 'Burp Suite', 'Okta', 'Splunk'],
          certaintyLevel: 'Observed Reality'
        },
        {
          phase: 'NEXT',
          period: '2027 - 2029',
          headline: 'AI-Powered Defensive Automation',
          description: 'Autonomous security bots identifying and neutralizing lateral network movement within milliseconds without human analyst intervention.',
          skillsInDemand: ['SOAR Automation', 'Adversarial Machine Learning', 'API Security Auditing'],
          keyTechnologies: ['Extended Detection and Response (XDR)', 'eBPF', 'Synthetic Honeynets'],
          certaintyLevel: 'High Probability'
        },
        {
          phase: 'EMERGING',
          period: '2030 - 2033',
          headline: 'Post-Quantum Cryptography & Quantum Key Distribution',
          description: 'Replacing legacy RSA and ECC encryption across all banking and government networks to prevent future quantum decryption.',
          skillsInDemand: ['NIST PQC Standards', 'Quantum Security Protocols', 'Firmware Auditing'],
          keyTechnologies: ['FIPS 203/204/205 Algorithms', 'HSM Hardware', 'QKD Satellite Links'],
          certaintyLevel: 'Emerging Trend'
        },
        {
          phase: 'FUTURE',
          period: '2034+',
          headline: 'Self-Synthesizing Cyber Immunity',
          description: 'Software ecosystems that automatically rewrite vulnerable compiler code and self-heal memory corruptions in real time.',
          skillsInDemand: ['Self-Verifying Compilers', 'Formal Software Proofs', 'Autonomous Immune Systems'],
          keyTechnologies: ['Rust / Memory-Safe Kernels', 'Proof Assistants', 'Biological Metaphor Defense'],
          certaintyLevel: 'Speculative Direction'
        }
      ]
    },
    educationPathways: [
      {
        id: 'cyber-stage-1',
        stageName: 'Class 10 Foundation',
        subTitle: 'Digital literacy, basic command line, internet architecture',
        suitableStreams: ['Any Stream'],
        duration: '1 Year',
        whatToLearn: [
          'How the internet works (IP addresses, Routers, Ports, HTTP vs HTTPS)',
          'Linux operating system basics (Terminal commands, file permissions)',
          'Basic scripting in Python to automate simple tasks'
        ],
        whyItMatters: 'Hackers and defenders must understand the underlying operating system and networking rules before they can discover bypasses.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'TryHackMe Pre-Security & Linux Fundamentals',
            institutesOrCertifiers: ['TryHackMe', 'OverTheWire Bandit'],
            duration: '2-4 Months'
          },
          {
            pathType: 'Certification Path',
            title: 'Cisco Networking Basics & Cyber Essentials',
            institutesOrCertifiers: ['Cisco Networking Academy (Free for students)'],
            duration: '3 Months'
          }
        ],
        usefulResources: ['OverTheWire: Bandit Wargame', 'NetworkChuck: CCNA series on YouTube', 'TryHackMe Pre-Security Learning Path'],
        suggestedProjects: ['Configure a secure home Wi-Fi network with custom DNS and ad-blocking (Pi-hole)', 'Write a Python port scanner to map open ports on your local test machine']
      },
      {
        id: 'cyber-stage-2',
        stageName: 'Class 11 & 12 Focus',
        subTitle: 'Networking depth, web technologies, ethical hacking labs',
        suitableStreams: ['Science (PCM)', 'Commerce with Computers', 'Any'],
        duration: '2 Years',
        whatToLearn: [
          'Deep dive into TCP/IP handshake, DNS spoofing, and ARP poisoning',
          'Web vulnerabilities: SQL Injection, Cross-Site Scripting (XSS), CSRF',
          'Basic Cryptography (Symmetric vs Asymmetric, Hashing vs Encryption)'
        ],
        whyItMatters: 'Web applications are the primary target for modern cybercrime. Understanding application layer vulnerabilities opens direct entry into bug bounties.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'PortSwigger Web Security Academy Track',
            institutesOrCertifiers: ['PortSwigger Web Security Academy (Free)'],
            duration: '6 Months'
          },
          {
            pathType: 'Certification Path',
            title: 'CompTIA Security+ or Certified Ethical Hacker (CEH) prep',
            institutesOrCertifiers: ['CompTIA / EC-Council / Coursera'],
            duration: '4-6 Months'
          }
        ],
        usefulResources: ['PortSwigger Web Security Academy', 'IppSec YouTube walkthroughs', 'Professor Messer Security+ Free Training'],
        suggestedProjects: ['Solve 20 beginner lab rooms on Hack The Box or TryHackMe', 'Build an encrypted command-line password manager in Python with AES-256']
      },
      {
        id: 'cyber-stage-3',
        stageName: 'Undergraduate Degree / Professional Certification',
        subTitle: 'B.Tech Cybersecurity / CS or OffSec Certifications',
        suitableStreams: ['Class 12 High School Graduates'],
        duration: '3 to 4 Years',
        whatToLearn: [
          'Operating System Kernels, Memory Management & Buffer Overflows',
          'Cloud Security Architecture (AWS/Azure/GCP identity and VPC isolation)',
          'Malware Analysis, Assembly disassembly, and Incident Response Playbooks'
        ],
        whyItMatters: 'Hands-on practical certifications (like OSCP) combined with an engineering degree provide unmatched credibility in the global job market.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'B.Tech in Cybersecurity / Information Technology',
            institutesOrCertifiers: ['National Forensic Sciences University (NFSU), IIITs, Top Tech Universities'],
            duration: '4 Years'
          },
          {
            pathType: 'Certification Path',
            title: 'Offensive Security Certified Professional (OSCP)',
            institutesOrCertifiers: ['OffSec'],
            duration: '3-6 Months Dedicated Practice'
          },
          {
            pathType: 'Skill-Based Path',
            title: 'Bug Bounty Hunter on HackerOne / Bugcrowd',
            institutesOrCertifiers: ['HackerOne Community'],
            duration: 'Continuous Portfolio'
          }
        ],
        usefulResources: ['Practical Malware Analysis Book', 'TCM Security Practical Ethical Hacking', 'OWASP Official Guidelines'],
        suggestedProjects: ['Build an automated threat-hunting SIEM dashboard using ElasticSearch and Suricata IDS', 'Conduct an authorized penetration test on a test environment and write a formal corporate report']
      }
    ],
    projects: [
      {
        id: 'proj-cyber-1',
        title: 'Personal Network Traffic Visualizer & Packet Sniffer',
        difficulty: 'Beginner',
        estimatedHours: '10 - 14 Hours',
        description: 'Use Python and Scapy to capture local network traffic, decode protocols, and highlight insecure plaintext passwords.',
        skillsLearned: ['TCP/IP packets', 'Python Scapy', 'Network protocols', 'Data privacy'],
        toolsUsed: ['Python', 'Scapy', 'Wireshark', 'Terminal'],
        deliverable: 'A terminal program that streams packets in real time and alerts if unencrypted HTTP passwords or DNS queries are detected.',
        steps: [
          'Install Scapy and set up promiscuous mode on your network adapter',
          'Filter for DNS (port 53) and HTTP (port 80) packets',
          'Extract domain names and payload text in real time',
          'Document how HTTPS TLS encryption protects user privacy against packet sniffing'
        ]
      },
      {
        id: 'proj-cyber-2',
        title: 'OWASP Vulnerable Web Application Security Audit & Fixer',
        difficulty: 'Intermediate',
        estimatedHours: '20 - 30 Hours',
        description: 'Set up an intentionally vulnerable web application (DVWA or Juice Shop) and demonstrate three attack exploits followed by code-level remediation.',
        skillsLearned: ['SQL Injection', 'Cross-Site Scripting (XSS)', 'Burp Suite Proxy', 'Secure Coding'],
        toolsUsed: ['OWASP Juice Shop', 'Burp Suite Community', 'Docker', 'Node.js/SQL'],
        deliverable: 'A detailed 10-page professional vulnerability assessment report including proof-of-concept exploits and sanitized patch code.',
        steps: [
          'Run OWASP Juice Shop inside a local Docker container',
          'Intercept requests with Burp Suite and bypass authentication via SQL injection',
          'Execute stored XSS to extract simulated session cookies',
          'Implement parameterized SQL queries and input sanitization to fix the flaws'
        ]
      },
      {
        id: 'proj-cyber-3',
        title: 'Automated Honeypot & Threat Intelligence Dashboard',
        difficulty: 'Advanced',
        estimatedHours: '45 - 60 Hours',
        description: 'Deploy a cloud honeypot simulating vulnerable SSH/FTP services, collect real-world attacker brute-force attempts from around the globe, and map them to MITRE ATT&CK tactics.',
        skillsLearned: ['Cloud server deployment', 'Honeypot architecture (Cowrie)', 'GeoIP visualization', 'Threat intelligence'],
        toolsUsed: ['Cowrie Honeypot', 'AWS EC2 / DigitalOcean', 'Elasticsearch / Kibana', 'Python'],
        deliverable: 'A live interactive dashboard mapping attack origins, top attempted usernames/passwords, and malware payloads downloaded by attackers.',
        steps: [
          'Provision an isolated Linux VPS and deploy Cowrie SSH honeypot',
          'Configure logging pipeline to forward session recordings to an Elasticsearch instance',
          'Create a Kibana world map visualizing attacker IP geolocation and attack frequencies',
          'Analyze malware binaries dropped in the honeypot using VirusTotal API'
        ]
      }
    ]
  },
  {
    id: 'cardiothoracic-surgeon',
    title: 'Surgeon & Medical Technology Innovator',
    category: 'Medicine & Healthcare',
    tagline: 'Combining surgical mastery, robotic precision, and biotechnology to save lives and heal human hearts.',
    shortDesc: 'Medical surgeons perform intricate interventions while pioneering digital healthcare and robotic procedures.',
    longDesc: 'Medicine is both an ancient calling and the most technologically accelerated field today. Modern surgeons do not merely hold traditional scalpels; they navigate robotic arms with sub-millimeter precision, plan complex surgeries using 3D patient holograms, and utilize stem-cell regenerative medicine. For high school students with an affinity for biology, human empathy, and rigorous scientific discipline, this pathway offers extraordinary life meaning.',
    badge: 'Noble Calling • High Societal Value',
    accentColor: '#f43f5e', // Rose
    secondaryColor: '#fb7185',
    metaphorType: 'dna',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Science (PCB)', 'Science (PCMB)'],
    avgStartingSalary: '$70,000 - $180,000 / ₹12L - ₹35L p.a. (Specialist)',
    growthOutlook: '+18% steady lifelong demand',
    demandIndex: 98,
    whatTheyDo: [
      'Perform delicate operative procedures on coronary arteries, heart valves, and cardiovascular anomalies',
      'Operate high-precision robotic surgical consoles (da Vinci Surgical System)',
      'Conduct emergency trauma resuscitation and critical intensive care stabilization',
      'Collaborate with bioengineers to design patient-specific 3D printed implants and heart valves',
      'Lead clinical trials for innovative pharmacotherapies and minimally invasive catheter therapies'
    ],
    whereTheyWork: [
      'Premier Multi-Specialty & Academic Research Hospitals (AIIMS, Mayo Clinic, Cleveland Clinic)',
      'Medical University Teaching Faculties & Trauma Centers',
      'Biomedical Device Research & Development Labs',
      'Global Health Missions & Disaster Relief Organizations (Doctors Without Borders / WHO)',
      'Cardiovascular Innovation Centers'
    ],
    problemsSolved: [
      'Repairing congenital heart defects in premature newborns smaller than a palm',
      'Restoring blood perfusion to ischemic cardiac tissue during acute myocardial infarction',
      'Replacing diseased heart valves through femoral artery incisions without cracking the chest open',
      'Eliminating surgical hand tremors through multi-axis robotic magnification'
    ],
    usefulDegrees: [
      'MBBS / MD (Doctor of Medicine)',
      'MS in General Surgery',
      'MCh / Fellowship in Cardiothoracic Surgery',
      'Dual Degree: MD-Ph.D. in Biomedical Engineering or Regenerative Medicine'
    ],
    keySkills: [
      { name: 'Surgical Anatomy & Pathophysiology', level: 98, category: 'Domain' },
      { name: 'Crisis Decision Making Under Pressure', level: 96, category: 'Soft & Leadership' },
      { name: 'Micro-Surgical Hand-Eye Dexterity', level: 94, category: 'Technical' },
      { name: 'Patient Empathy & Compassionate Communication', level: 92, category: 'Soft & Leadership' },
      { name: 'Robotic & Laparoscopic Console Operation', level: 85, category: 'Technical' }
    ],
    technologiesUsed: ['da Vinci Robotic Console', 'Heart-Lung Machine', 'Transesophageal Echocardiography', '3D Slicer', 'Arterial Blood Gas Analyzers'],
    typicalRoles: [
      { level: 'Foundation (5-6 yrs)', title: 'Medical Intern & Junior Resident', exp: 'Clinical rotations, ward management, emergency procedures' },
      { level: 'Specialist (3-4 yrs)', title: 'General Surgical Resident / MS', exp: 'Laparoscopy, surgical techniques, critical care management' },
      { level: 'Super-Specialist (3 yrs)', title: 'Cardiothoracic Fellow / MCh', exp: 'Cardiopulmonary bypass, valve replacements, coronary artery bypass grafting' },
      { level: 'Senior Consultant (10+ yrs)', title: 'Chief of Cardiothoracic Surgery', exp: 'Complex adult & pediatric surgery, department director, clinical trial PI' }
    ],
    industriesHiring: ['Healthcare Systems', 'Academic Medical Centers', 'Medical Robotics Manufacturers', 'Biotechnology Firms', 'Public Health Services'],
    careerDirections: [
      'Minimally Invasive Robotic Cardiac Surgeon',
      'Pediatric Congenital Heart Surgeon',
      'Heart-Lung Transplant Specialist',
      'Chief Medical Officer & HealthTech Founder'
    ],
    careerFuture: {
      careerToday: 'Surgeons perform sternotomies and catheter-based interventions utilizing real-time fluoroscopy and echocardiogram guidance.',
      careerEvolution: 'Surgery is shifting toward incisionless robotic procedures, augmented-reality spatial overlays on patient organs, and bio-printed living heart tissue.',
      emergingAreas: [
        'Holographic Augmented Reality Surgical Navigation',
        'Bio-Printed Autologous Cardiac Patches & Living Valves',
        'Autonomous Robotic Suturing for Micro-Anastomosis',
        'Telesurgery via Ultra-Low-Latency 6G Networks'
      ],
      futureSkills: [
        'Spatial AR headset navigation during active surgery',
        'Interpretation of real-time AI tissue pathology during operations',
        'Stem-cell scaffold integration techniques',
        'Digital twin patient simulation before surgery'
      ],
      futureLearning: [
        'Focus intensively on Human Biology, Physics, and Chemistry in Class 11-12',
        'Volunteer at local community health clinics to observe patient care dynamics',
        'Practice delicate hand-dexterity hobbies (origami, musical instruments, fine sketching)'
      ],
      sourceInfo: {
        sourceName: 'The Lancet Commission on Global Surgery & American College of Surgeons',
        publication: 'Future of Operative Surgery & Robotic Medicine 2026',
        publishDate: 'March 2026',
        verifiedDate: 'October 2026'
      },
      timeline: [
        {
          phase: 'TODAY',
          period: '2024 - 2026',
          headline: 'Minimally Invasive Catheters & Robotic Assistance',
          description: 'Widespread adoption of TAVR (Transcatheter Aortic Valve Replacement) and multiport laparoscopic robotics reducing patient recovery from weeks to days.',
          skillsInDemand: ['Echocardiography', 'Robotic Console Control', 'Cardiovascular Pharmacology'],
          keyTechnologies: ['da Vinci Xi', 'Fluoroscopy', 'Heart-Lung Machines'],
          certaintyLevel: 'Observed Reality'
        },
        {
          phase: 'NEXT',
          period: '2027 - 2029',
          headline: 'Spatial AR Overlays & Preoperative Digital Twins',
          description: 'Surgeons wear lightweight AR glasses projecting a 3D hologram of the patient’s exact coronary arteries directly onto their chest during incision.',
          skillsInDemand: ['3D Anatomical Modeling', 'AR Headset Navigation', 'Micro-Telemetry'],
          keyTechnologies: ['Apple Vision Pro / HoloLens Medical', 'Patient Digital Twin Simulators'],
          certaintyLevel: 'High Probability'
        },
        {
          phase: 'EMERGING',
          period: '2030 - 2033',
          headline: 'Bio-Printed Tissue Replacement & Stem Cell Patches',
          description: 'Instead of synthetic or bovine valves, surgeons graft living, 3D bio-printed patient-cellular tissue that grows with younger patients.',
          skillsInDemand: ['Regenerative Medicine', 'Cellular Scaffold Handling', 'Biocompatibility Testing'],
          keyTechnologies: ['Extrusion Bio-Printers', 'Induced Pluripotent Stem Cells (iPSC)'],
          certaintyLevel: 'Emerging Trend'
        },
        {
          phase: 'FUTURE',
          period: '2034+',
          headline: 'Autonomous Micro-Robotic Nanocare & Remote Telesurgery',
          description: 'Surgeons in central research hubs operate on patients in remote rural or space stations using tactile-feedback haptic suits.',
          skillsInDemand: ['Haptic Feedback Surgery', 'Micro-Robotic Navigation', 'Nanomedicine'],
          keyTechnologies: ['Sub-millisecond 6G Networks', 'Nanobotic Vascular Cleaners'],
          certaintyLevel: 'Speculative Direction'
        }
      ]
    },
    educationPathways: [
      {
        id: 'med-stage-1',
        stageName: 'Class 10 Foundation',
        subTitle: 'Biological systems, human physiology curiosity, scientific method',
        suitableStreams: ['Any Stream'],
        duration: '1 Year',
        whatToLearn: [
          'Cell biology, genetics basics, circulatory and nervous system fundamentals',
          'Chemistry foundations (Atomic structure, organic compounds)',
          'Observational science and ethical curiosity in healthcare'
        ],
        whyItMatters: 'Medicine requires intense lifelong learning. Developing an innate fascination with how biological organisms function fuels long-term motivation.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'Human Biology & First Aid Certification Track',
            institutesOrCertifiers: ['Red Cross Youth First Aid', 'Coursera Anatomy Specialization'],
            duration: '2-3 Months'
          },
          {
            pathType: 'Degree Path',
            title: 'Preparation for Science Stream Selection',
            institutesOrCertifiers: ['School Board (CBSE, ICSE, State Boards)'],
            duration: '1 Year'
          }
        ],
        usefulResources: ['CrashCourse Biology & Anatomy on YouTube', 'Khan Academy MCAT / Pre-Med Biology', 'Gray’s Anatomy for Students'],
        suggestedProjects: ['Build a 3D physical or digital working model of human heart blood flow', 'Conduct a community health survey on sleep patterns and blood pressure awareness']
      },
      {
        id: 'med-stage-2',
        stageName: 'Class 11 & 12 Focus (PCB)',
        subTitle: 'NEET / Medical entrance preparation & intensive biology/chemistry',
        suitableStreams: ['Science (PCB)', 'Science (PCMB)'],
        duration: '2 Years',
        whatToLearn: [
          'NCERT / High School Biology (Zoology, Botany, Human Physiology, Genetics)',
          'Organic, Inorganic and Physical Chemistry',
          'Physics (Fluid dynamics, Optics, Thermodynamics relevant to physiology)',
          'High-stress exam endurance and speed problem solving'
        ],
        whyItMatters: 'Admission to medical colleges in India (via NEET-UG) and worldwide is competitive. Conceptual clarity in 11th/12th biology is non-negotiable.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'NEET-UG / Medical Entrance Track',
            institutesOrCertifiers: ['AIIMS, JIPMER, State Government Medical Colleges, CMC Vellore'],
            duration: '2 Years'
          },
          {
            pathType: 'Skill-Based Path',
            title: 'Hospital Shadowing & Volunteer Internship',
            institutesOrCertifiers: ['Local Accredited Hospitals & Community Clinics'],
            duration: 'Summer Vacations (2-4 Weeks)'
          }
        ],
        usefulResources: ['NCERT Biology Textbooks', 'Biomentors / PhysicsWallah / Allen NEET Modules', 'Osmosis Medical Learning Videos'],
        suggestedProjects: ['Shadow a doctor in an outpatient clinic and maintain a reflective clinical diary', 'Write a research paper on the mechanism of mRNA vaccines for a school science journal']
      },
      {
        id: 'med-stage-3',
        stageName: 'MBBS Medical Undergraduate Degree',
        subTitle: '5.5 Years including 1 Year Compulsory Rotatory Internship',
        suitableStreams: ['Class 12 PCB Graduates'],
        duration: '5.5 Years',
        whatToLearn: [
          'Pre-Clinical: Human Anatomy (Cadaveric dissection), Physiology, Biochemistry',
          'Para-Clinical: Pathology, Microbiology, Pharmacology, Forensic Medicine',
          'Clinical: General Surgery, Internal Medicine, Pediatrics, Obstetrics & Gynecology'
        ],
        whyItMatters: 'Builds comprehensive clinical diagnostic instincts, patient communication, and legal medical licensing.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'Bachelor of Medicine & Bachelor of Surgery (MBBS / MD)',
            institutesOrCertifiers: ['AIIMS New Delhi, King George Medical University, Global Universities'],
            duration: '5.5 Years'
          },
          {
            pathType: 'Certification Path',
            title: 'BLS / ACLS (Basic & Advanced Cardiac Life Support)',
            institutesOrCertifiers: ['American Heart Association (AHA)'],
            duration: 'During Internship'
          }
        ],
        usefulResources: ['Robbins & Cotran Pathologic Basis of Disease', 'Guyton and Hall Textbook of Medical Physiology', 'Bailey & Love’s Short Practice of Surgery'],
        suggestedProjects: ['Complete clinical rotations in trauma emergency wards', 'Publish an observational clinical case report on unusual arterial branching in an academic journal']
      }
    ],
    projects: [
      {
        id: 'proj-med-1',
        title: 'Interactive 3D Heart Anatomy & Blood Circuit Simulation',
        difficulty: 'Beginner',
        estimatedHours: '12 - 16 Hours',
        description: 'Create an interactive digital visualization showing the 4 heart chambers, valves, electrical conduction node (SA node), and systemic vs pulmonary circuits.',
        skillsLearned: ['Cardiovascular anatomy', 'Blood flow dynamics', 'Medical terminology', 'Interactive web presentation'],
        toolsUsed: ['3D Anatomy Tools / Blender', 'HTML5 Canvas or Figma', 'Medical References'],
        deliverable: 'A web-based or physical interactive guide explaining how oxygen-depleted blood enters the right atrium and travels to the lungs and aorta.',
        steps: [
          'Study and label the 14 key anatomical structures of the human heart',
          'Map out the cardiac cycle: atrial systole, ventricular systole, and diastole',
          'Identify what causes the "lub-dub" heart sounds (valve closures)',
          'Create interactive quiz popups explaining common conditions like mitral valve prolapse'
        ]
      },
      {
        id: 'proj-med-2',
        title: 'Virtual Laparoscopic Dexterity Simulator & Tremor Analysis',
        difficulty: 'Intermediate',
        estimatedHours: '25 - 35 Hours',
        description: 'Build a low-cost surgical trainer box with a webcam and run a Python script using OpenCV to track instrument tip stability, movement smoothness, and speed.',
        skillsLearned: ['Surgical hand-eye coordination', 'Computer Vision (OpenCV)', 'Tremor tracking', 'Objective skill metrics'],
        toolsUsed: ['Cardboard Laparoscopy Box', 'Laparoscopic Graspers / Chopsticks', 'Webcam', 'Python OpenCV'],
        deliverable: 'A working physical trainer box that outputs your hand steadiness score and peg-transfer completion time.',
        steps: [
          'Construct a laparoscopic training box with angled webcam and internal lighting',
          'Attach colored markers to the tips of long grasping instruments',
          'Write a Python OpenCV script to track coordinates and measure path economy (shortest distance traveled)',
          'Conduct 10 trials of transferring rubber rings across pegs and document learning curve progression'
        ]
      },
      {
        id: 'proj-med-3',
        title: 'Patient-Specific 3D Coronary Artery Segmentation & Flow Simulation',
        difficulty: 'Advanced',
        estimatedHours: '50 - 65 Hours',
        description: 'Take open-source anonymous cardiovascular CT angiogram DICOM scans, segment the coronary artery tree using 3D Slicer, and evaluate arterial stenosis.',
        skillsLearned: ['DICOM medical imaging', '3D Slicer segmentation', 'Computational Fluid Dynamics basics', 'Clinical diagnostic reporting'],
        toolsUsed: ['3D Slicer (Open Source Medical)', 'NIH Cancer Imaging Archive (Open DICOM)', 'MeshLab', 'Python'],
        deliverable: 'A segmented 3D virtual model of a patient’s left anterior descending coronary artery showing the exact percentage of lumen blockage.',
        steps: [
          'Import anonymous contrast CT scans into 3D Slicer',
          'Apply thresholding and level-set segmentation to isolate the aorta and coronary arteries',
          'Generate a 3D surface mesh (STL) suitable for surgical planning or 3D printing',
          'Write a simulated clinical pre-operative briefing note recommending whether a stent or bypass is indicated'
        ]
      }
    ]
  },
  {
    id: 'fullstack-software-architect',
    title: 'Full-Stack Software Architect & Cloud Engineer',
    category: 'Computer Science & IT',
    tagline: 'Designing planet-scale web platforms, distributed cloud architectures, and intuitive digital experiences.',
    shortDesc: 'Software Architects build the core digital systems that power the internet, modern commerce, and human interaction.',
    longDesc: 'From planetary messaging systems processing billions of messages per second to sleek consumer web apps, full-stack software architects master both the human-facing interface and the deep backend distributed infrastructure. After Class 10/12, students start by learning fundamental programming and web protocols, rapidly evolving into distributed databases, microservices, and system architecture.',
    badge: 'Versatile • Highest Industry Volume',
    accentColor: '#3b82f6', // Blue
    secondaryColor: '#60a5fa',
    metaphorType: 'code',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Science (PCM)', 'Commerce', 'Humanities / Arts', 'Vocational / Technical', 'Any'],
    avgStartingSalary: '$80,000 - $135,000 / ₹9L - ₹25L p.a.',
    growthOutlook: '+26% growth through 2032',
    demandIndex: 93,
    whatTheyDo: [
      'Design modular distributed systems, microservices, and event-driven architectures (Kafka, RabbitMQ)',
      'Build hyper-responsive client interfaces with modern frameworks (React, Next.js, WebGL)',
      'Optimize database schemas, caching layers (Redis), and SQL/NoSQL query throughput',
      'Automate CI/CD pipelines, container orchestration (Docker, Kubernetes), and cloud infrastructure as code',
      'Review engineering codebases for security, maintainability, and scalability bottlenecks'
    ],
    whereTheyWork: [
      'Global Tech Giants (Google, Meta, Netflix, Microsoft, Stripe)',
      'High-Growth Tech Startups and Unicorns',
      'Fintech & Digital Banking Platforms',
      'SaaS & Cloud Infrastructure Companies',
      'Remote Global Engineering Hubs'
    ],
    problemsSolved: [
      'Serving live video streams and chat to 100M+ simultaneous users with sub-second latency',
      'Preventing race conditions and financial double-spending in high-volume payment processing',
      'Migrating monolithic legacy systems to resilient zero-downtime microservices',
      'Building accessible, fast web apps that function seamlessly on low-bandwidth rural networks'
    ],
    usefulDegrees: [
      'B.Tech / B.E. in Computer Science & Engineering',
      'B.C.A. / M.C.A. (Computer Applications)',
      'B.S. in Information Systems / Software Engineering',
      'Self-Taught Portfolio + Open-Source Track'
    ],
    keySkills: [
      { name: 'Full-Stack JavaScript/TypeScript & React', level: 96, category: 'Technical' },
      { name: 'System Design & Scalability Principles', level: 92, category: 'Technical' },
      { name: 'Distributed Databases (PostgreSQL, Redis, Cassandra)', level: 88, category: 'Technical' },
      { name: 'Cloud Infrastructure (AWS/GCP, Docker, Kubernetes)', level: 85, category: 'Technical' },
      { name: 'Algorithmic Efficiency & Data Structures', level: 90, category: 'Analytical' }
    ],
    technologiesUsed: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Go', 'Docker', 'Kubernetes', 'Redis', 'AWS'],
    typicalRoles: [
      { level: 'Entry-Level (0-2 yrs)', title: 'Junior Software Engineer', exp: 'Feature development, frontend UI, REST API endpoints, bug fixes' },
      { level: 'Mid-Level (3-5 yrs)', title: 'Senior Full-Stack Developer', exp: 'System design, database architecture, team mentoring, code reviews' },
      { level: 'Senior (6-9 yrs)', title: 'Staff / Principal Software Architect', exp: 'Cross-organization technical decisions, high-throughput scalability, technology roadmaps' },
      { level: 'Executive (10+ yrs)', title: 'VP of Engineering / CTO', exp: 'Engineering organization strategy, product scalability, executive leadership' }
    ],
    industriesHiring: ['Software & SaaS', 'FinTech & Payments', 'E-Commerce', 'Media & Entertainment', 'Logistics & Supply Chain'],
    careerDirections: [
      'Principal Cloud Solutions Architect',
      'Frontend Engineering Specialist / Creative Technologist',
      'High-Scale Backend & Distributed Systems Lead',
      'Founder / Chief Technology Officer (CTO)'
    ],
    careerFuture: {
      careerToday: 'Developers write frontend components, REST/GraphQL APIs, and manage containerized cloud microservices with relational and document databases.',
      careerEvolution: 'AI-assisted code generation has democratized boilerplate. The architect’s value has shifted from writing syntax to high-level system boundaries, reliability guarantees, and secure data orchestration.',
      emergingAreas: [
        'Edge-Native Compute & Distributed State Engines',
        'AI-Augmented Autonomous Code Generation & Refactoring',
        'Zero-Knowledge Proofs & Decentralized Identity Protocols',
        'WebAssembly (Wasm) Micro-Runtimes'
      ],
      futureSkills: [
        'Architecture specification and prompt-to-production review',
        'Rust for high-performance systems and Wasm compilation',
        'Local-first software design (CRDTs for offline sync)',
        'Serverless cloud economics & green compute optimization'
      ],
      futureLearning: [
        'Start building real projects early: code a personal website from scratch',
        'Understand browser devtools, HTTP requests, and how data moves across APIs',
        'Learn Git and contribute to open-source software on GitHub'
      ],
      sourceInfo: {
        sourceName: 'IEEE Computer Society & GitHub State of the Octoverse',
        publication: 'Global Software Engineering Trends & Architecture Evolution 2026',
        publishDate: 'January 2026',
        verifiedDate: 'October 2026'
      },
      timeline: [
        {
          phase: 'TODAY',
          period: '2024 - 2026',
          headline: 'Full-Stack TypeScript & Cloud Microservices',
          description: 'Standardization around TypeScript, React/Next.js frontends, managed cloud databases, and AI coding assistants (Copilot, Cursor).',
          skillsInDemand: ['TypeScript', 'React', 'Docker', 'PostgreSQL', 'Tailwind CSS'],
          keyTechnologies: ['Next.js', 'Supabase', 'AWS', 'Redis'],
          certaintyLevel: 'Observed Reality'
        },
        {
          phase: 'NEXT',
          period: '2027 - 2029',
          headline: 'AI Agent Workflows & Edge-Native Execution',
          description: 'Frontends compile to lightweight WebAssembly running at edge CDN nodes with AI agents automatically repairing broken tests and security vulnerabilities.',
          skillsInDemand: ['Wasm', 'CRDTs', 'Edge Compute', 'AI Code Orchestration'],
          keyTechnologies: ['Cloudflare Workers', 'Rust', 'Vite', 'Turborepo'],
          certaintyLevel: 'High Probability'
        },
        {
          phase: 'EMERGING',
          period: '2030 - 2033',
          headline: 'Self-Synthesizing Modular Architectures',
          description: 'Architects define natural-language system requirements and schema contracts; autonomous compiler pipelines generate, test, and benchmark the services.',
          skillsInDemand: ['Formal Specification', 'System Boundary Design', 'Fault Injection Testing'],
          keyTechnologies: ['Formal Verifiers', 'Autonomous DevOps Agents'],
          certaintyLevel: 'Emerging Trend'
        },
        {
          phase: 'FUTURE',
          period: '2034+',
          headline: 'Unified Planetary Real-Time Compute Fabrics',
          description: 'Boundaries between client, edge, and cloud dissolve into an ambient distributed runtime where data locality and computation automatically self-balance.',
          skillsInDemand: ['Distributed Consensus', 'Decentralized Compute', 'Quantum Cloud Routing'],
          keyTechnologies: ['Global Mesh Networks', 'Photonic Processing Clouds'],
          certaintyLevel: 'Speculative Direction'
        }
      ]
    },
    educationPathways: [
      {
        id: 'se-stage-1',
        stageName: 'Class 10 Foundation',
        subTitle: 'Web fundamentals, computational logic, basic coding',
        suitableStreams: ['Any Stream'],
        duration: '1 Year',
        whatToLearn: [
          'HTML5 semantic markup, modern CSS styling, and responsive design',
          'JavaScript fundamentals (variables, functions, DOM manipulation, events)',
          'Version control with Git and hosting websites on GitHub Pages'
        ],
        whyItMatters: 'Seeing your code instantly render live on the internet provides immediate feedback and builds genuine engineering confidence.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'FreeCodeCamp Responsive Web Design & JavaScript',
            institutesOrCertifiers: ['FreeCodeCamp.org (Free)'],
            duration: '3-5 Months'
          },
          {
            pathType: 'Certification Path',
            title: 'CS50x: Introduction to Computer Science',
            institutesOrCertifiers: ['Harvard Online (Free Audit)'],
            duration: '3-6 Months'
          }
        ],
        usefulResources: ['The Odin Project: Foundations Track', 'MDN Web Docs', 'Traversy Media Web Dev Crash Courses'],
        suggestedProjects: ['Build your personal digital portfolio website from scratch', 'Create an interactive calculator or quiz app with JavaScript DOM manipulation']
      },
      {
        id: 'se-stage-2',
        stageName: 'Class 11 & 12 Focus',
        subTitle: 'Modern frameworks, full-stack APIs, database modeling',
        suitableStreams: ['Science (PCM)', 'Commerce with Computers', 'Any'],
        duration: '2 Years',
        whatToLearn: [
          'Modern React (components, hooks, state management)',
          'Node.js & Express REST APIs or serverless functions',
          'Databases: SQL (PostgreSQL) vs NoSQL (MongoDB)',
          'Data Structures & Algorithms (Arrays, Linked Lists, Stacks, Queues, Sorting)'
        ],
        whyItMatters: 'Understanding how frontends communicate with backend databases separates hobbyist site builders from genuine software developers.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'Full-Stack JavaScript / MERN Stack Mastery',
            institutesOrCertifiers: ['The Odin Project Full Stack JavaScript Track'],
            duration: '6-9 Months'
          },
          {
            pathType: 'Degree Path',
            title: 'Engineering College Entrance Prep (JEE / BITSAT / State CETs)',
            institutesOrCertifiers: ['Top Technical Universities'],
            duration: '2 Years'
          }
        ],
        usefulResources: ['Full Stack Open (University of Helsinki)', 'NeetCode.io (Data Structures & Algorithms)', 'Kent C. Dodds React Articles'],
        suggestedProjects: ['Build a real-time collaborative task manager with React, Node.js, and WebSockets', 'Create a school club resource portal with user authentication and database storage']
      },
      {
        id: 'se-stage-3',
        stageName: 'Undergraduate Degree / Open Source Apprenticeship',
        subTitle: 'B.Tech / B.C.A. / B.S. or High-Impact Engineering Portfolio',
        suitableStreams: ['Class 12 High School Graduates'],
        duration: '3 to 4 Years',
        whatToLearn: [
          'Distributed Systems, Microservices, Caching (Redis), and Message Brokers (Kafka)',
          'Cloud infrastructure: AWS/GCP, Docker containers, Kubernetes deployment',
          'High-level System Design: scalability, fault tolerance, database sharding'
        ],
        whyItMatters: 'Top tech employers look for developers who understand how to design systems that handle millions of simultaneous queries without crashing.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'B.Tech in Computer Science & Engineering',
            institutesOrCertifiers: ['IITs, NITs, BITS Pilani, Global Universities'],
            duration: '4 Years'
          },
          {
            pathType: 'Diploma Path',
            title: 'BCA + MCA Integrated Fast-Track',
            institutesOrCertifiers: ['Accredited Universities'],
            duration: '3-5 Years'
          },
          {
            pathType: 'Skill-Based Path',
            title: 'Open Source Contributor & Startup Engineering Intern',
            institutesOrCertifiers: ['GitHub, Google Summer of Code (GSoC)'],
            duration: 'Ongoing'
          }
        ],
        usefulResources: ['Designing Data-Intensive Applications (Martin Kleppmann)', 'System Design Primer (GitHub)', 'ByteByteGo System Design Videos'],
        suggestedProjects: ['Build a globally distributed URL shortener with rate limiting and analytics', 'Design an e-commerce checkout microservice with idempotency and transactional guarantees']
      }
    ],
    projects: [
      {
        id: 'proj-se-1',
        title: 'Real-Time Interactive Markdown Documentation & Note Vault',
        difficulty: 'Beginner',
        estimatedHours: '12 - 16 Hours',
        description: 'Build a browser-based personal note-taking app with live Markdown preview, local storage persistence, and tagging.',
        skillsLearned: ['React fundamentals', 'LocalStorage API', 'Markdown parsing', 'Component state'],
        toolsUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Marked.js'],
        deliverable: 'A slick, responsive web app where students write Markdown notes and see live rendered previews with code syntax highlighting.',
        steps: [
          'Create a React project with TypeScript and Tailwind CSS',
          'Implement a dual-pane editor (raw text input on left, rendered preview on right)',
          'Store and retrieve documents from browser LocalStorage with timestamp metadata',
          'Add a search filter and tag system'
        ]
      },
      {
        id: 'proj-se-2',
        title: 'Full-Stack Collaborative Digital Whiteboard with WebSockets',
        difficulty: 'Intermediate',
        estimatedHours: '25 - 35 Hours',
        description: 'Create a live multiplayer drawing and ideation canvas where multiple users see each other’s mouse cursors and drawings update in real time.',
        skillsLearned: ['WebSockets (Socket.io)', 'HTML5 Canvas API', 'Node.js server', 'State synchronization'],
        toolsUsed: ['React', 'Node.js', 'Socket.io', 'HTML5 Canvas', 'Tailwind CSS'],
        deliverable: 'A running web application supporting multiple rooms where 10+ students draw and brainstorm together synchronously.',
        steps: [
          'Build an HTML5 Canvas drawing engine with brush color, stroke size, and undo stack',
          'Set up a Node.js Express server with Socket.io for bidirectional communication',
          'Broadcast drawing stroke coordinates and cursor positions to all connected room peers',
          'Deploy the client on Vercel and backend on Render'
        ]
      },
      {
        id: 'proj-se-3',
        title: 'High-Throughput Distributed Rate Limiter & API Gateway',
        difficulty: 'Advanced',
        estimatedHours: '40 - 55 Hours',
        description: 'Design and deploy a reverse-proxy API gateway that enforces sliding-window rate limiting using Redis, protects downstream services, and logs analytics.',
        skillsLearned: ['Go or Node.js concurrency', 'Redis token bucket / sliding log', 'Reverse proxying', 'Docker containerization'],
        toolsUsed: ['Go or TypeScript', 'Redis', 'Docker', 'Prometheus / Grafana'],
        deliverable: 'A production-grade API gateway benchmarked to handle 10,000+ requests/sec while rejecting abusive traffic with HTTP 429.',
        steps: [
          'Implement the sliding-window log algorithm using atomic Redis scripts (Lua)',
          'Create proxy middleware that forwards authorized requests and headers to backend microservices',
          'Containerize the gateway and Redis with Docker Compose',
          'Benchmark throughput using Apache Bench / k6 and visualize latency p99 metrics'
        ]
      }
    ]
  },
  {
    id: 'renewable-energy-engineer',
    title: 'CleanTech & Renewable Energy Engineer',
    category: 'Environmental Careers',
    tagline: 'Pioneering solar grids, green hydrogen plants, battery gigafactories, and the planetary clean energy transition.',
    shortDesc: 'Renewable energy engineers invent and deploy sustainable power systems to eliminate carbon emissions.',
    longDesc: 'The transition from fossil fuels to renewable energy represents the largest capital reallocation and engineering transformation in modern human history. CleanTech engineers design next-generation perovskite solar cells, monumental offshore wind turbines, advanced lithium/solid-state grid storage, and hydrogen electrolyzers. For students passionate about tackling climate change with real physical engineering, this career is world-defining.',
    badge: 'Planetary Mission • Global Investment Surge',
    accentColor: '#14b8a6', // Teal
    secondaryColor: '#2dd4bf',
    metaphorType: 'atom',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Science (PCM)', 'Science (PCMB)'],
    avgStartingSalary: '$75,000 - $120,000 / ₹8L - ₹20L p.a.',
    growthOutlook: '+42% exponential green growth',
    demandIndex: 91,
    whatTheyDo: [
      'Design utility-scale photovoltaic (PV) solar farms and offshore wind generation parks',
      'Engineer Battery Energy Storage Systems (BESS) for continuous grid stability',
      'Optimize green hydrogen electrolysis plants powered by surplus renewable electricity',
      'Model renewable grid integration using computational power flow simulations',
      'Conduct environmental impact assessments and life-cycle carbon lifecycle analyses'
    ],
    whereTheyWork: [
      'Renewable Energy Developers & IPPs (Adani Green, Tata Power, NextEra Energy, Ørsted)',
      'Electric Vehicle & Battery Gigafactories (Tesla, BYD, Northvolt)',
      'National Renewable Energy Research Laboratories (NREL, TERI)',
      'CleanTech Startups & Venture Studios',
      'International Energy Agencies & Policy Bodies'
    ],
    problemsSolved: [
      'Eliminating renewable intermittency through smart AI battery dispatch when the sun sets',
      'Decarbonizing heavy industries (steel, cement, aviation) using green hydrogen',
      'Lowering the cost of clean electricity to under $0.02 per kilowatt-hour globally',
      'Recycling 95%+ of battery minerals (lithium, cobalt, nickel) in circular supply chains'
    ],
    usefulDegrees: [
      'B.Tech in Electrical & Energy Engineering',
      'B.Tech in Mechanical / Chemical Engineering',
      'B.Tech in Environmental Science & Engineering',
      'M.S. in Renewable Energy Systems / Energy Storage'
    ],
    keySkills: [
      { name: 'Power Systems & Electrical Grid Modeling', level: 90, category: 'Technical' },
      { name: 'Solar PV & Wind Aerodynamic Design', level: 88, category: 'Technical' },
      { name: 'Electrochemistry & Battery Cell Chemistry', level: 84, category: 'Technical' },
      { name: 'Thermodynamics & Fluid Dynamics', level: 86, category: 'Analytical' },
      { name: 'Climate Economics & Project Financing', level: 80, category: 'Domain' }
    ],
    technologiesUsed: ['MATLAB / Simulink', 'PVsyst', 'HOMER Pro', 'AutoCAD Electrical', 'Battery Management Systems (BMS)', 'Python'],
    typicalRoles: [
      { level: 'Entry-Level (0-2 yrs)', title: 'Renewable Site & Simulation Engineer', exp: 'Solar yield modeling, site irradiance surveys, PV layout drafting' },
      { level: 'Mid-Level (3-5 yrs)', title: 'Energy Storage Systems Architect', exp: 'Megawatt-scale BESS design, inverter selection, grid interconnection' },
      { level: 'Senior (6-9 yrs)', title: 'Principal CleanTech Project Director', exp: 'Gigawatt pipeline engineering, power purchase agreements (PPA), technology evaluation' },
      { level: 'Executive (10+ yrs)', title: 'Chief Technology Officer (CTO) - Clean Energy', exp: 'National decarbonization strategy, capital deployment, novel tech venture investments' }
    ],
    industriesHiring: ['Solar & Wind Power Generation', 'Battery & EV Manufacturing', 'Green Hydrogen & Chemical Synthetics', 'Smart Grid Utilities', 'Government Energy Ministries'],
    careerDirections: [
      'Grid Storage & Battery Systems Lead',
      'Green Hydrogen Systems Specialist',
      'Smart Grid & Virtual Power Plant (VPP) Architect',
      'CleanTech Venture Capitalist & Technologist'
    ],
    careerFuture: {
      careerToday: 'Engineers construct conventional silicon solar installations, onshore wind turbines, and utility-scale lithium-ion battery banks.',
      careerEvolution: 'The frontier is moving toward perovskite-tandem solar cells hitting 35%+ efficiency, solid-state batteries, and AI-orchestrated Virtual Power Plants balancing millions of distributed rooftop panels.',
      emergingAreas: [
        'Tandem Perovskite-Silicon Photovoltaics',
        'Sodium-Ion and Iron-Air Long-Duration Energy Storage',
        'Direct Air Carbon Capture (DAC) Integration',
        'Virtual Power Plants (VPP) using Machine Learning dispatch'
      ],
      futureSkills: [
        'Advanced electrochemistry of non-lithium storage',
        'Machine learning for weather-dependent power forecasting',
        'Carbon accounting standards and green credit verification',
        'Microgrid islanding and decentralized peer-to-peer energy trading'
      ],
      futureLearning: [
        'Excel in High School Physics (Electricity, Magnetism, Thermodynamics)',
        'Build small DIY solar charger circuits using breadboards and photovoltaic cells',
        'Read reports from the International Renewable Energy Agency (IRENA)'
      ],
      sourceInfo: {
        sourceName: 'International Energy Agency (IEA) World Energy Outlook',
        publication: 'Clean Energy Workforce & Infrastructure Transition 2026',
        publishDate: 'April 2026',
        verifiedDate: 'October 2026'
      },
      timeline: [
        {
          phase: 'TODAY',
          period: '2024 - 2026',
          headline: 'Solar & Lithium Battery Industrialization',
          description: 'Record deployment of gigawatt solar arrays and four-hour lithium battery storage providing peaker plant replacement.',
          skillsInDemand: ['PVsyst', 'BMS Integration', 'Substation Design', 'Grid Compliance'],
          keyTechnologies: ['Bifacial TOPCon Solar', 'LFP Battery Chemistries', 'Central Inverters'],
          certaintyLevel: 'Observed Reality'
        },
        {
          phase: 'NEXT',
          period: '2027 - 2029',
          headline: 'Perovskite Tandem Cells & 100-Hour Long Duration Storage',
          description: 'Next-gen solar panels surpass 30% commercial efficiency while sodium-ion and iron-flow batteries enable multi-day cloudy grid backup.',
          skillsInDemand: ['Material Degradation Testing', 'Flow Battery Fluidics', 'Microgrid Modeling'],
          keyTechnologies: ['Perovskite-on-Silicon', 'Iron-Air Storage (Form Energy)', 'Sodium Cells'],
          certaintyLevel: 'High Probability'
        },
        {
          phase: 'EMERGING',
          period: '2030 - 2033',
          headline: 'Green Hydrogen at Parity & Industrial Decarbonization',
          description: 'Electrolyzer costs drop below $200/kW, enabling zero-emission green steel, synthetic aviation fuel, and global clean hydrogen ammonia shipping.',
          skillsInDemand: ['Proton Exchange Membrane (PEM) Electrolysis', 'Hydrogen Safety Engineering'],
          keyTechnologies: ['Solid Oxide Electrolyzers', 'Cryogenic Hydrogen Transport'],
          certaintyLevel: 'Emerging Trend'
        },
        {
          phase: 'FUTURE',
          period: '2034+',
          headline: 'Commercial Nuclear Fusion & Planetary Power Supergrids',
          description: 'First net-electricity magnetic confinement fusion reactors synchronize with transcontinental high-voltage DC (HVDC) power supergrids.',
          skillsInDemand: ['Plasma Physics Engineering', 'Superconducting Magnets', 'Ultra-HVDC Power Electronics'],
          keyTechnologies: ['Tokamak / Stellarator Fusion', 'High-Temperature Superconductors (HTS)'],
          certaintyLevel: 'Speculative Direction'
        }
      ]
    },
    educationPathways: [
      {
        id: 'clean-stage-1',
        stageName: 'Class 10 Foundation',
        subTitle: 'Energy principles, environmental science, physics curiosity',
        suitableStreams: ['Any Stream'],
        duration: '1 Year',
        whatToLearn: [
          'Conservation of energy, basic electricity (Voltage, Current, Resistance, Power)',
          'Carbon cycle, greenhouse effect, and global energy consumption statistics',
          'Introductory chemistry of redox reactions and chemical bonding'
        ],
        whyItMatters: 'Energy is the foundational currency of human civilization. Understanding basic electrical and thermal units grounds future engineering choices.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'Hands-on Solar Science Kit & Energy Literacy',
            institutesOrCertifiers: ['Student DIY Science Kits', 'National Geographic Climate Track'],
            duration: '2-3 Months'
          },
          {
            pathType: 'Certification Path',
            title: 'Introduction to Renewable Energy',
            institutesOrCertifiers: ['Coursera / TU Delft Open Courseware'],
            duration: '3 Months'
          }
        ],
        usefulResources: ['Our World in Data: Energy Section', 'YouTube: Undecided with Matt Ferrell', 'Khan Academy Physics: Work and Energy'],
        suggestedProjects: ['Measure the voltage output of a mini solar cell at different angles and temperatures', 'Audit your household electrical appliances and calculate monthly kilowatt-hour consumption']
      },
      {
        id: 'clean-stage-2',
        stageName: 'Class 11 & 12 Focus (PCM)',
        subTitle: 'Physics, Chemistry, Calculus & engineering entrance preparation',
        suitableStreams: ['Science (PCM)', 'Science (PCMB)'],
        duration: '2 Years',
        whatToLearn: [
          'Electromagnetism, alternating currents, electromagnetic induction (Faraday’s laws)',
          'Electrochemistry (Galvanic cells, Nernst equation, Gibbs free energy)',
          'Thermodynamic heat engines and efficiency limits (Carnot cycle)'
        ],
        whyItMatters: 'Batteries are pure electrochemistry; wind turbines and solar inverters are pure electromagnetic physics. Class 11-12 PCM is directly applicable.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'Engineering Entrance Exams (JEE Main & Advanced, BITSAT)',
            institutesOrCertifiers: ['IITs, NITs, BITS, Top Global Engineering Colleges'],
            duration: '2 Years'
          },
          {
            pathType: 'Skill-Based Path',
            title: 'Arduino Renewable Energy Monitoring Project',
            institutesOrCertifiers: ['Arduino Education & Open Source Hardware'],
            duration: 'School Science Exhibition'
          }
        ],
        usefulResources: ['MIT OpenCourseWare: Physics 8.02 Electricity and Magnetism', 'PV Education Online Knowledge Base (pveducation.org)'],
        suggestedProjects: ['Build an Arduino-controlled dual-axis solar tracker that follows sunlight automatically', 'Construct a miniature wind turbine with a 3D-printed rotor and test power generation with a multimeter']
      },
      {
        id: 'clean-stage-3',
        stageName: 'Undergraduate Engineering Degree',
        subTitle: 'B.Tech in Electrical / Energy / Mechanical Engineering',
        suitableStreams: ['Class 12 High School Graduates (PCM)'],
        duration: '4 Years',
        whatToLearn: [
          'Power Electronics: Inverters, DC-DC Converters, Rectifiers, Maximum Power Point Tracking (MPPT)',
          'Power Systems Analysis: Grid stability, transmission lines, reactive power',
          'Solar PV Plant Design software (PVsyst) & Battery Chemistry testing'
        ],
        whyItMatters: 'Graduates with rigorous power electronics and grid modeling skills are recruited heavily by global clean energy and EV giants.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'B.Tech in Electrical Engineering / Energy Science',
            institutesOrCertifiers: ['IIT Bombay Energy Science Department, IIT Madras, UC Berkeley, TU Delft'],
            duration: '4 Years'
          },
          {
            pathType: 'Diploma Path',
            title: 'Polytechnic Diploma in Renewable Energy Technology',
            institutesOrCertifiers: ['State Technical Education Boards'],
            duration: '3 Years'
          },
          {
            pathType: 'Certification Path',
            title: 'NABCEP PV Associate / Certified Energy Manager',
            institutesOrCertifiers: ['North American Board of Certified Energy Practitioners'],
            duration: 'During Senior Year'
          }
        ],
        usefulResources: ['Solar Engineering of Thermal Processes (Duffie & Beckman)', 'Renewable and Efficient Electric Power Systems (Gilbert Masters)'],
        suggestedProjects: ['Design a complete 50kW rooftop solar system simulation with battery storage in PVsyst', 'Model an EV fast-charging station connected to a solar microgrid in MATLAB/Simulink']
      }
    ],
    projects: [
      {
        id: 'proj-clean-1',
        title: 'Smart Dual-Axis Solar Tracker with LDR Light Sensors',
        difficulty: 'Beginner',
        estimatedHours: '12 - 16 Hours',
        description: 'Build a physical tabletop model using an Arduino, two servo motors, and light-dependent resistors to keep a solar cell facing the light source.',
        skillsLearned: ['Basic electronics', 'Arduino C++', 'Photovoltaic efficiency', 'Servo motor control'],
        toolsUsed: ['Arduino Uno', 'Micro Servos (SG90)', 'Mini Solar Panel', 'LDR Sensors'],
        deliverable: 'A working physical solar tracker demonstrating a 25-35% daily energy harvest improvement over a static panel.',
        steps: [
          'Mount 4 LDR sensors in a cross formation separated by a light divider',
          'Read analog light intensity values from opposite quadrants in the Arduino code',
          'Rotate horizontal and vertical servos until light intensity is equalized',
          'Measure and graph electrical power generated versus a fixed flat panel'
        ]
      },
      {
        id: 'proj-clean-2',
        title: 'Campus Solar Microgrid Feasibility & Financial Payback Model',
        difficulty: 'Intermediate',
        estimatedHours: '20 - 30 Hours',
        description: 'Use satellite imagery and open-source solar simulation tools to design a rooftop solar array for your school or college, calculating solar irradiance, energy output, and financial break-even.',
        skillsLearned: ['PVWatts / PVsyst simulation', 'Solar irradiance modeling', 'Levelized Cost of Electricity (LCOE)', 'Financial ROI analysis'],
        toolsUsed: ['NREL PVWatts Calculator', 'Google Earth Pro', 'Excel / Python'],
        deliverable: 'A professional 15-page techno-economic feasibility proposal suitable for presentation to school management.',
        steps: [
          'Measure unobstructed rooftop surface area and roof azimuth using Google Earth',
          'Fetch 20-year historical solar irradiance and weather data from NREL databases',
          'Size the inverter and panel wattage to offset 60%+ of the institution’s electricity bill',
          'Calculate payback period in years considering capital expenditure, maintenance, and grid tariffs'
        ]
      },
      {
        id: 'proj-clean-3',
        title: 'Virtual Power Plant (VPP) Optimization Engine with Battery Dispatch',
        difficulty: 'Advanced',
        estimatedHours: '45 - 60 Hours',
        description: 'Write a Python optimization algorithm that coordinates a simulated network of 50 homes with rooftop solar and batteries, minimizing grid electricity costs using dynamic day-ahead pricing.',
        skillsLearned: ['Linear programming (SciPy/PuLP)', 'Time-series forecasting', 'Battery degradation modeling', 'Smart grid economics'],
        toolsUsed: ['Python', 'PuLP / SciPy', 'Pandas', 'Matplotlib / Streamlit'],
        deliverable: 'A simulated Virtual Power Plant dashboard demonstrating cost savings of 40%+ by charging batteries during cheap solar hours and discharging during peak evening prices.',
        steps: [
          'Generate synthetic 24-hour solar generation and household load profiles for 50 homes',
          'Incorporate realistic hourly dynamic power pricing (e.g. CAISO or European spot market)',
          'Formulate an optimization model constrained by battery charge/discharge rates and state of health',
          'Visualize collective grid stress reduction and financial arbitrage on a web dashboard'
        ]
      }
    ]
  },
  {
    id: 'cyber-corporate-lawyer',
    title: 'Cyber, Corporate & Tech Policy Counsel',
    category: 'Law',
    tagline: 'Navigating artificial intelligence ethics, cross-border corporate mergers, digital privacy, and international technology treaties.',
    shortDesc: 'Tech lawyers and corporate counsels advise innovators, draft complex agreements, and protect constitutional rights in the digital era.',
    longDesc: 'The law shapes every modern innovation—from intellectual property on neural network weights and autonomous vehicle liability to privacy rights under the Digital Personal Data Protection Act. High-caliber corporate and tech attorneys structure multi-billion dollar tech investments, argue landmark constitutional privacy cases, and negotiate international treaties. For students with analytical precision, sharp reasoning, and passionate debate skills, law offers exceptional authority and influence.',
    badge: 'High Prestige • Intellectual Rigor',
    accentColor: '#ec4899', // Pink
    secondaryColor: '#f472b6',
    metaphorType: 'crystal',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Humanities / Arts', 'Commerce', 'Science (PCM)', 'Any'],
    avgStartingSalary: '$85,000 - $160,000 / ₹12L - ₹32L p.a.',
    growthOutlook: '+22% growth in Tech & Cyber Law',
    demandIndex: 90,
    whatTheyDo: [
      'Draft and negotiate intellectual property, cross-border mergers, and venture capital investment contracts',
      'Advise technology corporations on regulatory compliance (AI Acts, GDPR, DPDP, antitrust laws)',
      'Represent clients in court litigation, international arbitration, and cyber fraud disputes',
      'Counsel startup founders on corporate governance, employee equity schemes (ESOPs), and securities law',
      'Draft public policy white papers for government bodies regulating frontier technologies'
    ],
    whereTheyWork: [
      'Top-Tier Corporate Law Firms (Shardul Amarchand, Khaitan & Co, Baker McKenzie, Latham & Watkins)',
      'In-House Legal Departments of Global Tech Giants (Google, Apple, Microsoft, Amazon)',
      'Supreme Court & High Court Chambers of Senior Advocates',
      'International Courts & Human Rights Bodies (The Hague, United Nations, WIPO)',
      'Venture Capital & Private Equity Legal Funds'
    ],
    problemsSolved: [
      'Establishing legal accountability when an autonomous car or medical AI model makes an error',
      'Defending citizen privacy against illegal biometric surveillance and data scraping',
      'Protecting indie software developers and artists against unlawful copyright infringement',
      'Facilitating clean multi-jurisdictional acquisitions of breakthrough green-tech patents'
    ],
    usefulDegrees: [
      'B.A. LL.B. (Hons) / B.B.A. LL.B. (5-Year Integrated Law Degree)',
      'LL.B. (3-Year Degree after Graduation in Any Field)',
      'LL.M. in Technology Law, Cyber Crime & Intellectual Property',
      'Bar Council License to Practice'
    ],
    keySkills: [
      { name: 'Legal Reasoning & Case Law Precedent Analysis', level: 96, category: 'Analytical' },
      { name: 'Persuasive Written & Oral Advocacy', level: 94, category: 'Soft & Leadership' },
      { name: 'Contract Drafting & Risk Mitigation', level: 92, category: 'Technical' },
      { name: 'Cyber Law & Data Privacy Directives', level: 90, category: 'Domain' },
      { name: 'Negotiation & High-Stakes Mediation', level: 88, category: 'Soft & Leadership' }
    ],
    technologiesUsed: ['SCC Online', 'Manupatra', 'Westlaw', 'LexisNexis', 'DocuSign', 'Contract Lifecycle Management (Ironclad)', 'Legal AI Research Tools'],
    typicalRoles: [
      { level: 'Entry-Level (0-2 yrs)', title: 'Associate Corporate / Litigation Advocate', exp: 'Legal research, diligence memos, case brief preparation, contract redlining' },
      { level: 'Mid-Level (3-5 yrs)', title: 'Senior Legal Associate', exp: 'Leading transaction deal rooms, court appearances, client advisory, negotiating commercial contracts' },
      { level: 'Senior (6-9 yrs)', title: 'Partner / Senior In-House Legal Counsel', exp: 'Leading practice groups (TMT, M&A), managing high-value litigation portfolios' },
      { level: 'Executive (10+ yrs)', title: 'Senior Partner / General Counsel (GC) / Senior Advocate', exp: 'C-suite strategic counsel, Supreme Court constitution bench arguments, international arbitration' }
    ],
    industriesHiring: ['Technology & Telecommunications', 'Banking & Investment Funds', 'Pharmaceuticals & Biotech', 'Media & Entertainment', 'Government & Regulatory Commissions'],
    careerDirections: [
      'Technology, Media & Telecom (TMT) Law Partner',
      'General Counsel (GC) of Tech Unicorn',
      'International Cyber Crime & Extradition Counsel',
      'Designated Senior Advocate / Constitutional Jurist'
    ],
    careerFuture: {
      careerToday: 'Lawyers research judicial precedent across legal databases, draft commercial contracts, and represent clients in courts and regulatory hearings.',
      careerEvolution: 'AI-assisted contract analysis and electronic discovery have accelerated document review by 10x. The modern lawyer acts as a strategic architect of ethical systems, regulatory navigator, and dispute resolver.',
      emergingAreas: [
        'Algorithmic Copyright & Training Data Licensing',
        'Smart Contracts & Blockchain-based Escrow Verification',
        'Autonomous Weapons & International Humanitarian Law',
        'Space Commerce & Asteroid Resource Mining Treaties'
      ],
      futureSkills: [
        'Technological literacy: understanding code logic and API architecture',
        'Global regulatory arbitrage (navigating EU, US, India, Asia-Pacific differences)',
        'Prompt-assisted statutory research and automated citation verification',
        'Alternative dispute resolution (ADR) and online mediation'
      ],
      futureLearning: [
        'Read supreme court landmark judgments and editorial analyses in major newspapers',
        'Participate actively in school Model United Nations (MUN) and parliamentary debates',
        'Study how the Constitution of your country balances state power and individual freedom'
      ],
      sourceInfo: {
        sourceName: 'International Bar Association (IBA) & Bar Council Directives',
        publication: 'Future of Legal Services & Technology Jurisprudence 2026',
        publishDate: 'May 2026',
        verifiedDate: 'October 2026'
      },
      timeline: [
        {
          phase: 'TODAY',
          period: '2024 - 2026',
          headline: 'Data Privacy Enforcement & Legal Research LLMs',
          description: 'Enforcement of comprehensive personal data protection laws globally and widespread adoption of legal research AI assistants.',
          skillsInDemand: ['DPDP Compliance', 'GDPR Audits', 'Legal LLM Verification', 'Contract Redlining'],
          keyTechnologies: ['Harvey AI', 'Casetext CoCounsel', 'SCC Online', 'DocuSign'],
          certaintyLevel: 'Observed Reality'
        },
        {
          phase: 'NEXT',
          period: '2027 - 2029',
          headline: 'Mandatory AI System Auditing & Autonomous Liability',
          description: 'Statutory requirements for corporations to certify their AI systems for safety, bias, and explainability before market deployment.',
          skillsInDemand: ['AI Ethics Law', 'Model Risk Management', 'Digital Evidence Forensics'],
          keyTechnologies: ['Model Auditing Toolkits', 'Automated E-Discovery'],
          certaintyLevel: 'High Probability'
        },
        {
          phase: 'EMERGING',
          period: '2030 - 2033',
          headline: 'Decentralized Jurisdictions & Smart Contract Dispute Arbitration',
          description: 'Self-executing digital contracts on cryptographic ledgers require specialized arbitration protocols recognized under international commercial treaties.',
          skillsInDemand: ['Smart Contract Law', 'Cross-Border Digital Jurisdictions', 'Cryptocurrency Asset Recovery'],
          keyTechnologies: ['Zero-Knowledge Escrow', 'UNCITRAL Digital Arbitration'],
          certaintyLevel: 'Emerging Trend'
        },
        {
          phase: 'FUTURE',
          period: '2034+',
          headline: 'Planetary Commons, Synthetic Biology & Off-World Law',
          description: 'Treaties governing commercial asteroid mining rights, human genome editing limits, and synthetic biological lifeforms.',
          skillsInDemand: ['Space Law', 'Bioethics Jurisprudence', 'Interplanetary Trade Treaties'],
          keyTechnologies: ['Artemis Accords Frameworks', 'Global Biosecurity Registries'],
          certaintyLevel: 'Speculative Direction'
        }
      ]
    },
    educationPathways: [
      {
        id: 'law-stage-1',
        stageName: 'Class 10 Foundation',
        subTitle: 'Analytical reading, civic institutions, debate and reasoning',
        suitableStreams: ['Any Stream'],
        duration: '1 Year',
        whatToLearn: [
          'Democratic governance, fundamental rights, and the three branches of state (Legislature, Executive, Judiciary)',
          'Logical critical thinking and spotting fallacies in arguments',
          'Advanced reading comprehension and vocabulary enrichment'
        ],
        whyItMatters: 'Legal mastery is built on linguistic precision and logical deduction. Building speed in reading complex texts gives an immense edge.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'School Debate Society & Model United Nations (MUN)',
            institutesOrCertifiers: ['School Extracurricular Clubs & Regional MUN Conferences'],
            duration: 'Continuous'
          },
          {
            pathType: 'Certification Path',
            title: 'Introduction to Constitutional Law & Human Rights',
            institutesOrCertifiers: ['Coursera / EdX (University of Pennsylvania / Yale)'],
            duration: '2-3 Months'
          }
        ],
        usefulResources: ['The Indian Constitution: Cornerstone of a Nation (Granville Austin)', 'Justice with Michael Sandel (Harvard Online)', 'The Hindu / Indian Express Editorial Pages'],
        suggestedProjects: ['Organize a mock parliamentary debate in your school on regulating social media for teenagers', 'Draft a sample student council charter with clearly defined powers and appeal procedures']
      },
      {
        id: 'law-stage-2',
        stageName: 'Class 11 & 12 Focus (Any Stream)',
        subTitle: 'CLAT / AILET / LSAT entrance preparation and legal aptitude',
        suitableStreams: ['Humanities / Arts', 'Commerce', 'Science (PCM/PCB) - Open to All'],
        duration: '2 Years',
        whatToLearn: [
          'CLAT / Law Entrance Syllabus: Legal Aptitude, Logical Reasoning, English, Current Affairs, Quantitative Math',
          'Key legal principles (Torts, Contracts, Criminal Law, Constitutional Law basics)',
          'High-speed comprehension (reading 1,500+ words of dense text in 10 minutes with accuracy)'
        ],
        whyItMatters: 'Top National Law Universities (NLUs) in India and top global law schools admit students from any high school stream based purely on entrance merit.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'CLAT / AILET Law Entrance Coaching Track',
            institutesOrCertifiers: ['NLSIU Bengaluru, NALSAR Hyderabad, WBNUJS Kolkata, NLU Delhi'],
            duration: '2 Years'
          },
          {
            pathType: 'Skill-Based Path',
            title: 'Youth Legal Literacy & Legal Aid Volunteering',
            institutesOrCertifiers: ['State Legal Services Authority (SLSA) Youth Initiatives'],
            duration: 'Summer Vacations'
          }
        ],
        usefulResources: ['Legal Aptitude for the CLAT by A.P. Bhardwaj', 'Bar & Bench / LiveLaw portals', 'The Ken / Economic Times for business context'],
        suggestedProjects: ['Analyze a recent landmark supreme court ruling and summarize it into a 2-page plain-English guide for citizens', 'Score in the 90th percentile on 5 full-length timed CLAT mock examinations']
      },
      {
        id: 'law-stage-3',
        stageName: '5-Year Integrated B.A. LL.B. (Hons) Degree',
        subTitle: 'National Law Universities or Top Law Faculties',
        suitableStreams: ['Class 12 High School Graduates (Any Stream)'],
        duration: '5 Years',
        whatToLearn: [
          'Substantive Law: Corporate Law, Intellectual Property, Cyber Law, Criminal Procedure, Evidence Act',
          'Moot Court Competitions: Preparing formal memorials and arguing simulated cases before sitting judges',
          'Legal internships: Spending 4-6 weeks every vacation at tier-1 law firms, senior counsel chambers, and NGOs'
        ],
        whyItMatters: 'National Law University graduates routinely receive pre-placement offers from top corporate law firms and international chambers.',
        options: [
          {
            pathType: 'Degree Path',
            title: '5-Year Integrated B.A. LL.B. (Hons) / B.B.A. LL.B.',
            institutesOrCertifiers: ['National Law School of India University (NLSIU), NALSAR, Harvard Law, Oxford Law'],
            duration: '5 Years'
          },
          {
            pathType: 'Diploma Path',
            title: 'Post-Graduate Diploma in Cyber Law & Information Security',
            institutesOrCertifiers: ['NLSIU Distance Education / Indian Law Institute'],
            duration: '1 Year (Concurrent)'
          },
          {
            pathType: 'Certification Path',
            title: 'CIPP/E (Certified Information Privacy Professional)',
            institutesOrCertifiers: ['International Association of Privacy Professionals (IAPP)'],
            duration: 'During 4th/5th Year'
          }
        ],
        usefulResources: ['Philip C. Jessup International Law Moot Court Archive', 'Company Law by A. Ramaiya', 'Harvard Law Review'],
        suggestedProjects: ['Participate as lead oralist in a national moot court competition on AI copyright or data privacy', 'Complete an internship with a high-court senior advocate drafting writ petitions']
      }
    ],
    projects: [
      {
        id: 'proj-law-1',
        title: 'Plain-English Digital Privacy Policy Teardown & Redline',
        difficulty: 'Beginner',
        estimatedHours: '10 - 14 Hours',
        description: 'Examine the terms of service and privacy policy of a popular social media app, identify obscure data collection clauses, and rewrite them into a transparent, honest user summary.',
        skillsLearned: ['Contractual reading', 'Privacy disclosures', 'Consumer rights', 'Plain-language drafting'],
        toolsUsed: ['Terms of Service Text', 'GDPR & DPDP Guidelines', 'Google Docs'],
        deliverable: 'A comparative side-by-side table displaying the company’s legalistic jargon versus what data they actually harvest and share.',
        steps: [
          'Select a major tech platform (e.g. TikTok, Instagram, or gaming platform)',
          'Highlight provisions concerning geolocation tracking, third-party advertising, and data retention',
          'Assess compliance with youth privacy safeguards under data protection regulations',
          'Create a 1-page "Nutrition Label" summarizing the platform’s privacy score'
        ]
      },
      {
        id: 'proj-law-2',
        title: 'Moot Court Memorial: Autonomous Vehicle Liability Dispute',
        difficulty: 'Intermediate',
        estimatedHours: '25 - 35 Hours',
        description: 'Draft a formal legal memorial arguing whether an autonomous driving software company or the human backup driver is legally liable for an accident caused during a software glitch.',
        skillsLearned: ['Legal precedent research', 'Memorial drafting', 'Product liability doctrine', 'Statutory interpretation'],
        toolsUsed: ['SCC Online / CanLII', 'Tort Law Precedents', 'Word / LaTeX'],
        deliverable: 'A structured 12-page legal brief featuring Statement of Facts, Issues Raised, Summary of Arguments, and Detailed Pleadings with case citations.',
        steps: [
          'Formulate the legal problem: strict product liability versus driver negligence',
          'Research 5 relevant judicial precedents involving automated systems and failure to warn',
          'Structure arguments for both the Plaintiff victim and Defendant automotive corporation',
          'Deliver a recorded 10-minute oral argument defending your position'
        ]
      },
      {
        id: 'proj-law-3',
        title: 'Comprehensive Startup Seed Investment Term Sheet & ESOP Charter',
        difficulty: 'Advanced',
        estimatedHours: '40 - 55 Hours',
        description: 'Draft an authentic $2,000,000 venture capital Series Seed Term Sheet, including liquidation preference, anti-dilution, board composition, and an Employee Stock Option Plan (ESOP) pool.',
        skillsLearned: ['Venture capital mechanics', 'Corporate securities law', 'Founder protection clauses', 'Commercial negotiation'],
        toolsUsed: ['NVCA Standard Model Legal Documents', 'Excel Cap Table Simulator', 'Contract Editor'],
        deliverable: 'A complete, negotiation-ready investment term sheet with annotated commentary explaining the commercial risk of each clause for the founders.',
        steps: [
          'Model pre-money and post-money valuation math on a spreadsheet cap table',
          'Draft protective provisions and right of first refusal (ROFR) / tag-along rights',
          'Include custom clauses governing intellectual property assignment from founders to the company',
          'Conduct a simulated negotiation session balancing founder control against investor safeguards'
        ]
      }
    ]
  },
  {
    id: 'spatial-ux-designer',
    title: 'Spatial UI/UX & Mixed Reality Designer',
    category: 'Design & Media',
    tagline: 'Crafting spatial operating systems, immersive augmented realities, and tactile digital products for the next computing era.',
    shortDesc: 'Spatial Designers imagine and build the 3D interfaces, gestural interactions, and mixed-reality experiences of tomorrow.',
    longDesc: 'Computing is breaking free of rectangular glass screens. With the rise of spatial headsets, ambient augmented reality, and holographic displays, designers no longer work in flat 2D pixels; they orchestrate volumetric depth, spatial audio, gaze-and-pinch gesture systems, and environmental lighting. For students who bridge artistic creativity with technological curiosity, spatial design is among the most exciting frontiers.',
    badge: 'Creative Frontier • Apple & Meta Ecosystems',
    accentColor: '#8b5cf6', // Violet
    secondaryColor: '#c084fc',
    metaphorType: 'camera',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Humanities / Arts', 'Commerce', 'Science (PCM)', 'Any'],
    avgStartingSalary: '$80,000 - $130,000 / ₹10L - ₹26L p.a.',
    growthOutlook: '+34% growth in Spatial & Game UX',
    demandIndex: 89,
    whatTheyDo: [
      'Design volumetric spatial user interfaces for mixed reality headsets (Apple Vision Pro, Meta Quest)',
      'Create ergonomic interaction models using eye-tracking, hand gestures, and spatial audio cues',
      'Prototype 3D experiences, physics-based UI components, and holographic data visualizations',
      'Conduct spatial usability testing to eliminate visual fatigue, motion sickness, and ergonomics strain',
      'Collaborate with spatial engineers to translate 3D design files into Unity, Unreal Engine, and visionOS code'
    ],
    whereTheyWork: [
      'Spatial Hardware Giants (Apple, Meta Reality Labs, Sony, Magic Leap)',
      'AAA Game Studios & Immersive Entertainment Studios',
      'Automotive Interior Design Centers (Porsche, Tesla HUDs, BMW)',
      'Architecture & Industrial Digital Twin Consultancies',
      'Top Digital Product Design Agencies (Pentagram, Frog, Fantasy)'
    ],
    problemsSolved: [
      'Designing intuitive hands-free medical interfaces for surgeons in sterile operating rooms',
      'Preventing simulator sickness through scientifically tuned field-of-view and motion parallax',
      'Enabling remote architects to walk inside life-size 3D building blueprints across continents',
      'Creating inclusive spatial experiences for users with motor and visual impairments'
    ],
    usefulDegrees: [
      'B.Des in Interaction Design / Digital Product Design (NID, IIT IDC, RISD)',
      'B.S. in Human-Computer Interaction (HCI)',
      'B.Des in Game Design & Animation',
      'Self-Taught 3D Portfolio + Spatial Design Track'
    ],
    keySkills: [
      { name: 'Spatial Interaction Design & Ergonomics', level: 95, category: 'Creative' },
      { name: '3D Modeling & Prototyping (Blender, Spline, Bezel)', level: 92, category: 'Technical' },
      { name: 'Figma & UI Design Systems', level: 90, category: 'Technical' },
      { name: 'Unity / Unreal Engine Prototyping', level: 82, category: 'Technical' },
      { name: 'Human Psychology & Spatial Cognitive Load', level: 88, category: 'Analytical' }
    ],
    technologiesUsed: ['Figma', 'Blender', 'Spline 3D', 'Unity', 'Unreal Engine', 'visionOS SDK', 'ShapesXR', 'After Effects'],
    typicalRoles: [
      { level: 'Entry-Level (0-2 yrs)', title: 'Junior Spatial / 3D Product Designer', exp: '3D icon design, interface assets, motion mockups, Figma prototyping' },
      { level: 'Mid-Level (3-5 yrs)', title: 'Senior Mixed Reality UX Designer', exp: 'Spatial design systems, gaze/gesture ergonomics, interactive Unity prototypes' },
      { level: 'Senior (6-9 yrs)', title: 'Principal Spatial Experience Architect', exp: 'Platform interaction paradigms, cross-device spatial ecosystems, hardware input design' },
      { level: 'Executive (10+ yrs)', title: 'VP of Design / Head of Spatial Product', exp: 'Design leadership, brand visual identity, next-generation product roadmap' }
    ],
    industriesHiring: ['Consumer Electronics', 'Gaming & Virtual Worlds', 'Automotive & Aviation Cockpits', 'Healthcare & Medical Simulation', 'Luxury Retail & E-Commerce'],
    careerDirections: [
      'Head of Spatial Interaction Design',
      'Game World & Metaverse UI Director',
      'Automotive Spatial Experience Designer',
      'Independent Creative Studio Founder'
    ],
    careerFuture: {
      careerToday: 'Designers prototype mixed-reality apps in Spline and Unity, focusing on floating translucent glass panels and hand-pinch interactions.',
      careerEvolution: 'As headsets shrink into everyday augmented-reality spectacles, interfaces will dissolve into context-aware ambient surfaces: digital information seamlessly projected on physical tables, walls, and objects.',
      emergingAreas: [
        'Context-Aware Ambient Spatial Computing',
        'Neural Interface (BCI) & Micro-Electromyography Interaction',
        'Volumetric Telepresence & Photorealistic Avatars',
        'Generative 3D Spatial World Crafting'
      ],
      futureSkills: [
        'Designing for wristband micro-gestures (EMG sensors)',
        'Spatial audio acoustic ecology and directional haptics',
        'Volumetric video capture and gaussian splatting integration',
        'Ethical spatial privacy: protecting user gaze patterns and home scans'
      ],
      futureLearning: [
        'Start learning Blender and Figma (both have free tiers for students)',
        'Study Apple’s Human Interface Guidelines for visionOS',
        'Experiment with web 3D tools like Spline.design directly in your browser'
      ],
      sourceInfo: {
        sourceName: 'Interaction Design Association (IxDA) & ACM SIGCHI',
        publication: 'Future of Spatial Interaction & Immersive Interfaces 2026',
        publishDate: 'June 2026',
        verifiedDate: 'October 2026'
      },
      timeline: [
        {
          phase: 'TODAY',
          period: '2024 - 2026',
          headline: 'Spatial Headsets & Glassmorphic UI Systems',
          description: 'Pioneered by Apple Vision Pro and Meta Quest 3, interfaces feature eye-tracked buttons, spatial audio, and translucent glass layers.',
          skillsInDemand: ['Figma 3D', 'Spline', 'visionOS HIG', 'Unity XR'],
          keyTechnologies: ['visionOS', 'Spline', 'ShapesXR', 'Blender'],
          certaintyLevel: 'Observed Reality'
        },
        {
          phase: 'NEXT',
          period: '2027 - 2029',
          headline: 'Lightweight AR Glasses & Micro-Gesture Controls',
          description: 'All-day smart glasses with wave-guide optics using subtle wrist micro-movements instead of large arm motions.',
          skillsInDemand: ['Micro-Gesture Ergonomics', 'Ambient Notification Design', 'Low-Light UI'],
          keyTechnologies: ['Meta Orion Glasses', 'EMG Wristbands', 'OpenXR'],
          certaintyLevel: 'High Probability'
        },
        {
          phase: 'EMERGING',
          period: '2030 - 2033',
          headline: 'Ambient Spatial Surfaces & Neural Interfaces',
          description: 'Any physical surface can become an interactive display; non-invasive neural decoders predict user intent before explicit physical motion.',
          skillsInDemand: ['Neural Intent Interfaces', 'Spatial Biometrics', 'Contextual Intelligence'],
          keyTechnologies: ['Non-invasive BCI', 'Laser Beam Scanning Projectors'],
          certaintyLevel: 'Emerging Trend'
        },
        {
          phase: 'FUTURE',
          period: '2034+',
          headline: 'Direct Retinal Projection & Full-Sensory Synesthesia',
          description: 'Seamless digital reality overlaid directly onto the retina with haptic ultrasound textures giving digital objects the physical feeling of wood, metal, or water.',
          skillsInDemand: ['Full-Sensory Ecology', 'Haptic Ultrasound Design', 'Synesthetic Aesthetics'],
          keyTechnologies: ['Smart Contact Lenses', 'Acoustic Mid-Air Haptics'],
          certaintyLevel: 'Speculative Direction'
        }
      ]
    },
    educationPathways: [
      {
        id: 'design-stage-1',
        stageName: 'Class 10 Foundation',
        subTitle: 'Visual aesthetics, color theory, 2D design, storytelling',
        suitableStreams: ['Any Stream'],
        duration: '1 Year',
        whatToLearn: [
          'Visual design principles: Balance, Contrast, Hierarchy, Typography, Color Palettes',
          'Basics of digital drawing (vector graphics, sketching, perspective drawing)',
          'Understanding user empathy: why some apps feel delightful while others feel confusing'
        ],
        whyItMatters: 'Spatial design is built upon classic visual design fundamentals. Mastering composition and typography in 2D makes 3D design natural and elegant.',
        options: [
          {
            pathType: 'Skill-Based Path',
            title: 'Figma UI/UX & Graphic Design Bootcamp',
            institutesOrCertifiers: ['Figma for Education (Free)', 'Coursera CalArts Graphic Design'],
            duration: '3-4 Months'
          },
          {
            pathType: 'Certification Path',
            title: 'Google UX Design Professional Certificate',
            institutesOrCertifiers: ['Google / Coursera'],
            duration: '4-6 Months'
          }
        ],
        usefulResources: ['Refactoring UI by Adam Wathan & Steve Schoger', 'DesignCourse YouTube Channel', 'Laws of UX (lawsofux.com)'],
        suggestedProjects: ['Redesign your favorite smartphone app to make it cleaner and more accessible', 'Create a 5-page UI design system in Figma with color tokens and button states']
      },
      {
        id: 'design-stage-2',
        stageName: 'Class 11 & 12 Focus (Any Stream)',
        subTitle: '3D modeling, Spline interactive design, design entrance preparation',
        suitableStreams: ['Humanities / Arts', 'Commerce', 'Science - Open to All'],
        duration: '2 Years',
        whatToLearn: [
          '3D Modeling in Blender: vertices, edges, extrusions, lighting, and materials',
          'Web-based 3D interaction in Spline (physics, camera controls, mouse-follow effects)',
          'Preparation for Design Entrances: UCEED (IITs), NID DAT, NIFT, or International Portfolios'
        ],
        whyItMatters: 'Top design institutes like NID and IIT IDC evaluate spatial ability, sketching, and observational creativity, which can be cultivated in 11th/12th.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'UCEED & NID Design Entrance Preparation',
            institutesOrCertifiers: ['National Institute of Design (NID), IIT Bombay IDC, IIT Delhi'],
            duration: '1-2 Years'
          },
          {
            pathType: 'Skill-Based Path',
            title: '3D Web Portfolio Building with Spline & Three.js',
            institutesOrCertifiers: ['Spline Community Tutorials', 'Three.js Journey'],
            duration: 'Self-Paced'
          }
        ],
        usefulResources: ['Blender Guru 3.0 Donut Tutorial Series', 'Spline.design YouTube channel', 'Apple Human Interface Guidelines for visionOS'],
        suggestedProjects: ['Design an interactive 3D futuristic smartwatch in Spline that rotates and reacts to mouse hover', 'Create an interactive augmented reality product viewer for a shoe brand']
      },
      {
        id: 'design-stage-3',
        stageName: 'Bachelor of Design (B.Des) / HCI Degree',
        subTitle: '4-Year Professional Design Degree or Spatial Portfolio',
        suitableStreams: ['Class 12 High School Graduates (Any Stream)'],
        duration: '4 Years',
        whatToLearn: [
          'Spatial interaction ergonomics, depth perception, visual field-of-view limits',
          'Unity / Unreal Engine prototyping for VR/AR headsets',
          'Design thinking methodologies, user research, heuristic usability evaluations'
        ],
        whyItMatters: 'A standout spatial design portfolio showcasing interactive, playable 3D prototypes is the golden ticket to top technology and game design studios.',
        options: [
          {
            pathType: 'Degree Path',
            title: 'Bachelor of Design (B.Des) in Interaction / Product Design',
            institutesOrCertifiers: ['NID Ahmedabad, IIT Bombay IDC, Carnegie Mellon School of Design, ArtCenter'],
            duration: '4 Years'
          },
          {
            pathType: 'Skill-Based Path',
            title: 'Spatial Design Apprenticeship & visionOS App Launch',
            institutesOrCertifiers: ['Apple Developer Academy', 'Meta XR Hubs'],
            duration: 'Ongoing'
          }
        ],
        usefulResources: ['The Design of Everyday Things (Don Norman)', 'Spatial Design Documentation on Apple Developer', 'ACM SIGCHI Conference Papers'],
        suggestedProjects: ['Design and ship a complete visionOS or Meta Quest spatial app concept with custom 3D design system', 'Conduct usability research on spatial cognitive load and publish findings in an international design conference']
      }
    ],
    projects: [
      {
        id: 'proj-des-1',
        title: 'Futuristic Glassmorphic Spatial Music Controller in Spline',
        difficulty: 'Beginner',
        estimatedHours: '10 - 15 Hours',
        description: 'Design a floating 3D music player interface with frosted translucent glass, glowing play buttons, floating album artwork, and mouse-reactive parallax.',
        skillsLearned: ['3D interface depth', 'Glassmorphism lighting', 'Spline 3D interactions', 'Spatial hierarchy'],
        toolsUsed: ['Spline 3D', 'Figma', 'Web Browser'],
        deliverable: 'A live interactive 3D web prototype where viewers can interact with floating dials and hover over track sliders.',
        steps: [
          'Model 3D rounded panels with high transmission and roughness in Spline',
          'Add directional lighting and point lights for neon rim accents',
          'Set up mouse-hover triggers to tilt the music card in 3D perspective',
          'Export and embed the interactive 3D canvas into a responsive web page'
        ]
      },
      {
        id: 'proj-des-2',
        title: 'Spatial Astronomy Lab for Mixed Reality Headsets',
        difficulty: 'Intermediate',
        estimatedHours: '25 - 35 Hours',
        description: 'Design a full spatial education experience where students pluck planets from an orbiting solar system, expand their internal layers, and examine moons with hand pinch gestures.',
        skillsLearned: ['Spatial interaction models', 'Volumetric scaling', 'ShapesXR / Figma spatial UI', 'Ergonomic comfort'],
        toolsUsed: ['Figma', 'ShapesXR or Blender', 'Unity (optional)', 'Spatial Design Kit'],
        deliverable: 'A comprehensive interactive prototype and design case study showing user flows, pinch-to-scale mechanics, and spatial audio feedback.',
        steps: [
          'Define the user’s physical field of view and comfortable reach zone (within 45cm to 70cm)',
          'Create 3D asset models for planets, orbital rings, and cross-section geological plates',
          'Design spatial UI tooltips that follow the user’s gaze without causing visual obstruction',
          'Produce a cinematic walkthrough video demonstrating the gesture-driven lesson flow'
        ]
      },
      {
        id: 'proj-des-3',
        title: 'Zero-Distraction Heads-Up Display (HUD) for Electric Autonomous Vehicles',
        difficulty: 'Advanced',
        estimatedHours: '45 - 60 Hours',
        description: 'Design and prototype a full windshield augmented reality HUD that highlights pedestrians at night, projects navigation arrows directly onto the road asphalt, and minimizes cognitive distraction.',
        skillsLearned: ['Automotive UX standards', 'Safety-critical human factors', 'Real-world visual contrast', '3D motion design'],
        toolsUsed: ['Unreal Engine / Unity', 'After Effects', 'Figma', 'Blender'],
        deliverable: 'A simulated first-person driving video experience with real-time reactive AR navigation overlay tested across daytime and night rain conditions.',
        steps: [
          'Research NHTSA driver distraction guidelines and eye-off-road time limits',
          'Design conformal AR graphics that visually stick to real-world road geometry with correct depth cues',
          'Implement ambient light adaptation (switching between high-contrast daylight cyan and night amber)',
          'Conduct usability testing measuring how quickly drivers perceive simulated hazard warnings'
        ]
      }
    ]
  },
  {
    id: 'quantum-researcher',
    title: 'Quantum Computing Researcher & Physicist',
    category: 'Science & Research',
    tagline: 'Unlocking subatomic superposition and entanglement to solve intractable planetary-scale computational mysteries.',
    shortDesc: 'Quantum Physicists design quantum algorithms, cryogenic hardware, and error-correcting qubits.',
    longDesc: 'Quantum computing leverages the bizarre physics of the microscopic universe—where particles can exist in superpositions and entangled states—to calculate complex simulations millions of times faster than classical supercomputers. Quantum researchers work on breakthroughs in drug discovery, room-temperature superconductors, and global climate modeling.',
    badge: 'Frontier Science • Deep Tech',
    accentColor: '#a855f7',
    secondaryColor: '#d8b4fe',
    metaphorType: 'atom',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Science (PCM)', 'Science (PCMB)'],
    avgStartingSalary: '$110,000 - $175,000 / ₹18L - ₹38L p.a.',
    growthOutlook: '+45% high-demand research surge',
    demandIndex: 92,
    whatTheyDo: [
      'Formulate novel quantum algorithms (VQE, QAOA, Shor’s & Grover’s implementations)',
      'Design superconducting transmon qubits and neutral-atom laser traps',
      'Develop quantum error correction (QEC) codes to protect fragile qubits from thermal decoherence',
      'Simulate quantum molecular systems using Qiskit, Cirq, and PennyLane'
    ],
    whereTheyWork: ['IBM Quantum, Google Quantum AI, Rigetti, QuEra', 'National Research Labs (CERN, Fermilab, TIFR)', 'Aerospace & Defense Research Centers'],
    problemsSolved: ['Simulating chemical nitrogen fixation to revolutionize fertilizer production without fossil fuels', 'Discovering room-temperature superconductors to eliminate power grid transmission losses'],
    usefulDegrees: ['B.S. / B.Tech in Physics, Engineering Physics, or Mathematics', 'Ph.D. in Quantum Information Science / Condensed Matter Physics'],
    keySkills: [
      { name: 'Quantum Mechanics & Hilbert Spaces', level: 96, category: 'Technical' },
      { name: 'Linear Algebra & Complex Numbers', level: 94, category: 'Analytical' },
      { name: 'Python Qiskit & Cirq', level: 90, category: 'Technical' }
    ],
    technologiesUsed: ['Qiskit', 'Cirq', 'PennyLane', 'Cryogenic Dilution Refrigerators', 'Microwave Pulse Generators'],
    typicalRoles: [
      { level: 'Entry-Level', title: 'Quantum Software Developer', exp: 'Algorithm implementation, quantum simulator benchmarks' },
      { level: 'Senior', title: 'Principal Quantum Physicist', exp: 'Qubit architecture design, coherence time optimization' }
    ],
    industriesHiring: ['Pharmaceuticals & Drug Discovery', 'Aerospace & Materials Science', 'Cryptographic Security & Defense'],
    careerDirections: ['Quantum Algorithm Scientist', 'Cryogenic Hardware Architect', 'Quantum Finance Specialist'],
    careerFuture: {
      careerToday: 'Noisy Intermediate-Scale Quantum (NISQ) devices with 100-1,000 physical qubits exploring quantum error suppression.',
      careerEvolution: 'Shift toward fault-tolerant logical qubits with topological error correction solving commercially viable chemical problems.',
      emergingAreas: ['Neutral Atom & Ion Trap Quantum Computers', 'Quantum Machine Learning (QML)', 'Quantum Communication & Entanglement Networks'],
      futureSkills: ['Surface code error correction', 'Hybrid classical-quantum co-design', 'Cryogenic CMOS integration'],
      futureLearning: ['Master complex numbers, linear algebra, and Dirac bra-ket notation', 'Run free quantum circuits on real IBM Quantum hardware in the cloud'],
      sourceInfo: { sourceName: 'Nature Quantum Information & IBM Quantum Roadmap', publication: 'Decade of Fault-Tolerant Quantum Advantage 2026', publishDate: 'June 2026', verifiedDate: 'October 2026' },
      timeline: [
        { phase: 'TODAY', period: '2024 - 2026', headline: 'NISQ Era & Error Mitigation', description: 'Demonstrating quantum utility on noisy 1,000-qubit processors.', skillsInDemand: ['Qiskit', 'Linear Algebra', 'Pulse Optimization'], keyTechnologies: ['IBM Heron', 'Transmon Qubits'], certaintyLevel: 'Observed Reality' },
        { phase: 'NEXT', period: '2027 - 2029', headline: 'Fault-Tolerant Logical Qubits', description: 'Encoding thousands of physical qubits into 100+ pristine fault-tolerant logical qubits.', skillsInDemand: ['Surface Codes', 'Cryo-Electronics'], keyTechnologies: ['Color Codes', 'Laser Optical Tweezers'], certaintyLevel: 'High Probability' },
        { phase: 'EMERGING', period: '2030 - 2033', headline: 'Commercial Molecular Simulation', description: 'Simulating complex catalyst reactions and battery electrolytes impossible on classical supercomputers.', skillsInDemand: ['Quantum Chemistry Algorithms', 'Hamiltonian Simulation'], keyTechnologies: ['Fault-Tolerant Quantum Processors'], certaintyLevel: 'Emerging Trend' },
        { phase: 'FUTURE', period: '2034+', headline: 'Global Quantum Internet', description: 'Interconnected quantum computers communicating via entangled photon repeaters.', skillsInDemand: ['Quantum Key Distribution', 'Optical Repeaters'], keyTechnologies: ['Quantum Memory Satellites'], certaintyLevel: 'Speculative Direction' }
      ]
    },
    educationPathways: [
      {
        id: 'q-stage-1', stageName: 'Class 10-12 Foundation', subTitle: 'Rigorous Physics, Mathematics & Coding', suitableStreams: ['Science (PCM)'], duration: '2-3 Years',
        whatToLearn: ['Matrices, Vectors, Dot/Cross products, Complex Numbers', 'Atomic structure, Wave-Particle Duality, Photoelectric effect', 'Python programming'],
        whyItMatters: 'Quantum mechanics is linear algebra in complex vector spaces. A rock-solid high-school math foundation makes quantum concepts straightforward.',
        options: [{ pathType: 'Degree Path', title: 'JEE / University Entrance in Physics/CS', institutesOrCertifiers: ['IISc Bangalore, IIT Kanpur, Oxford, MIT'], duration: '2 Years' }],
        usefulResources: ['Qiskit Textbook (Online Free)', '3Blue1Brown Linear Algebra', 'Feynman Lectures on Physics (Vol 3)'],
        suggestedProjects: ['Write a Python program simulating the double-slit interference pattern', 'Run a Bell State entanglement circuit on IBM Quantum Cloud']
      }
    ],
    projects: [
      {
        id: 'proj-q-1', title: 'Quantum Superposition & Bell State Entanglement on Real Hardware', difficulty: 'Beginner', estimatedHours: '10 - 14 Hours',
        description: 'Create your first 2-qubit circuit in Qiskit, generate quantum entanglement (EPR pair), and execute it on a free cloud IBM Quantum superconducting chip.',
        skillsLearned: ['Quantum gates (Hadamard, CNOT)', 'Measurement probabilities', 'Cloud quantum execution'],
        toolsUsed: ['Python', 'Qiskit', 'IBM Quantum Composer'],
        deliverable: 'A Jupyter notebook demonstrating measurement correlation proving non-classical entanglement.',
        steps: ['Install Qiskit and connect IBM Quantum API token', 'Apply Hadamard gate to put Qubit 0 in equal superposition', 'Apply CNOT gate with Qubit 0 as control and Qubit 1 as target', 'Measure 1,024 shots and plot measurement probabilities (00 and 11)']
      }
    ]
  },
  {
    id: 'robotics-engineer',
    title: 'Autonomous Robotics & Humanoid Systems Engineer',
    category: 'Engineering',
    tagline: 'Merging mechanical dynamics, embedded silicon, computer vision, and neural motion control into agile embodied machines.',
    shortDesc: 'Robotics Engineers build physical machines that perceive, navigate, and collaborate with humans.',
    longDesc: 'From bipedal humanoid robots working in logistics to surgical manipulators and planetary rovers on Mars, robotics engineers integrate mechanical kinematics, electrical actuators, embedded microcontrollers, and artificial intelligence into machines that physically transform the world.',
    badge: 'Embodied Tech • Exponential Boom',
    accentColor: '#f59e0b',
    secondaryColor: '#fbbf24',
    metaphorType: 'gear',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Science (PCM)', 'Vocational / Technical'],
    avgStartingSalary: '$88,000 - $138,000 / ₹11L - ₹27L p.a.',
    growthOutlook: '+36% growth through 2033',
    demandIndex: 93,
    whatTheyDo: [
      'Design robotic joints, harmonic drives, and carbon-fiber bipedal chassis in 3D CAD',
      'Program real-time motor control firmware on ARM Cortex microcontrollers using C/C++',
      'Implement Simultaneous Localization and Mapping (SLAM) with LiDAR and stereoscopic cameras',
      'Train Reinforcement Learning policies in physics simulators (Isaac Gym, MuJoCo) for smooth locomotion'
    ],
    whereTheyWork: ['Humanoid Robotics Firms (Tesla Optimus, Figure AI, Boston Dynamics)', 'Industrial Automation & Drone Pioneers', 'Surgical Robotics Manufacturers'],
    problemsSolved: ['Replacing humans in hazardous environments like toxic chemical cleanups and underground mine rescue', 'Automating precision crop harvesting to tackle global food supply disruptions'],
    usefulDegrees: ['B.Tech in Mechatronics, Mechanical, or Robotics Engineering', 'M.S. in Autonomous Robotics'],
    keySkills: [
      { name: 'ROS2 (Robot Operating System)', level: 94, category: 'Technical' },
      { name: 'Kinematics & Dynamics Physics', level: 90, category: 'Analytical' },
      { name: 'C++ & Embedded Systems', level: 92, category: 'Technical' }
    ],
    technologiesUsed: ['ROS2', 'C++', 'Python', 'SolidWorks', 'Isaac Sim', 'STM32 Microcontrollers', 'LiDAR'],
    typicalRoles: [
      { level: 'Entry-Level', title: 'Robotics Perception & Control Engineer', exp: 'Sensor integration, actuator calibration, trajectory planning' },
      { level: 'Senior', title: 'Lead Humanoid Systems Architect', exp: 'Whole-body locomotion control, multi-sensor sensor fusion, hardware reliability' }
    ],
    industriesHiring: ['Manufacturing & Logistics', 'Aerospace & Space Exploration', 'Agriculture & Field Automation'],
    careerDirections: ['Bipedal Locomotion Specialist', 'Perception & SLAM Engineer', 'Robotics Hardware Lead'],
    careerFuture: {
      careerToday: 'Stationary industrial robotic arms behind safety cages and autonomous mobile robots (AMRs) in warehouses.',
      careerEvolution: 'General-purpose bipedal humanoids with end-to-end vision-language-action (VLA) models working safely alongside humans.',
      emergingAreas: ['Foundation Models for Embodied Control', 'Tactile Electronic Skins for Delicate Grasping', 'Soft Robotics & Bio-Mimetic Actuation'],
      futureSkills: ['Sim2Real transfer methodologies', 'Whole-body impedance control', 'High-bandwidth CAN/EtherCAT networking'],
      futureLearning: ['Build an Arduino/ESP32 robot car with ultrasonic distance sensors', 'Learn C++ and Python side by side', 'Simulate robots in Webots or Gazebo'],
      sourceInfo: { sourceName: 'IEEE Robotics & Automation Society', publication: 'Global Robotics & Autonomous Systems 2026', publishDate: 'July 2026', verifiedDate: 'October 2026' },
      timeline: [
        { phase: 'TODAY', period: '2024 - 2026', headline: 'Warehouse AMRs & Quadruped Inspection', description: 'Wheeled robots moving logistics pallets and quadruped robot dogs inspecting power plants.', skillsInDemand: ['ROS2', 'C++', 'LiDAR SLAM'], keyTechnologies: ['TurtleBot', 'Isaac Gym'], certaintyLevel: 'Observed Reality' },
        { phase: 'NEXT', period: '2027 - 2029', headline: 'Bipedal Humanoids in Automotive Assembly', description: 'Humanoid robots loading car chassis parts and unloading shipping containers autonomously.', skillsInDemand: ['Whole-body Control', 'VLA Models'], keyTechnologies: ['Direct-Drive Actuators', 'Stereo Depth Cameras'], certaintyLevel: 'High Probability' },
        { phase: 'EMERGING', period: '2030 - 2033', headline: 'Domestic Assistance & Dexterous Hand Manipulation', description: 'Robots folding clothes, washing dishes, and assisting elderly individuals with delicate touch.', skillsInDemand: ['Tactile Sensor Fusion', 'Human-Robot Interaction'], keyTechnologies: ['Electronic Haptic Skin', 'Pneumatic Artificial Muscles'], certaintyLevel: 'Emerging Trend' },
        { phase: 'FUTURE', period: '2034+', headline: 'Autonomous Off-World Planetary Construction', description: 'Robotic swarms autonomously excavating lunar soil and 3D-printing habitats before astronaut arrival.', skillsInDemand: ['Swarm Coordination', 'Extreme Environment Engineering'], keyTechnologies: ['Radiation-Hardened Silicon', 'Solar Sintering'], certaintyLevel: 'Speculative Direction' }
      ]
    },
    educationPathways: [
      {
        id: 'rob-stage-1', stageName: 'Class 10-12 Foundation', subTitle: 'Mechanics, Electromagnetism, Microcontrollers', suitableStreams: ['Science (PCM)', 'Vocational / Technical'], duration: '2 Years',
        whatToLearn: ['Newtonian mechanics, Rotational kinematics, Torque, Center of mass', 'DC motors, Stepper motors, Pulse Width Modulation (PWM)', 'Basic Arduino / Raspberry Pi tinkering'],
        whyItMatters: 'Robotics requires thinking in physical forces and software instructions simultaneously. Hands-on hobby building removes intimidation.',
        options: [{ pathType: 'Skill-Based Path', title: 'FIRST Robotics / VEX Robotics Competitions', institutesOrCertifiers: ['School Robotics Teams / Regional Maker Faires'], duration: '1 Year' }],
        usefulResources: ['Modern Robotics: Mechanics, Planning, and Control (Kevin Lynch)', 'Robotics by Brian Douglas (YouTube)'],
        suggestedProjects: ['Build an obstacle-avoiding 4-wheel robot car with Arduino and ultrasonic sensor', 'Create a 3D-printed robotic arm with 3 degrees of freedom controlled by potentiometers']
      }
    ],
    projects: [
      {
        id: 'proj-rob-1', title: 'Self-Balancing Inverted Pendulum Two-Wheel Robot', difficulty: 'Intermediate', estimatedHours: '20 - 30 Hours',
        description: 'Build a two-wheeled robot that uses an IMU gyro-accelerometer and a PID control loop in C++ to balance vertically like a Segway.',
        skillsLearned: ['PID control tuning', 'IMU sensor filtering (Complementary filter)', 'Motor PWM control', 'C++ on microcontrollers'],
        toolsUsed: ['Arduino Nano / ESP32', 'MPU6050 Gyro/Accel', 'Geared DC Motors with Encoders'],
        deliverable: 'A physical robot that stays upright on two wheels even when gently nudged.',
        steps: ['Wire the MPU6050 to the I2C pins of the microcontroller', 'Calculate tilt angle using complementary pitch/roll filter', 'Implement proportional, integral, and derivative PID loop', 'Tune PID gains until stable balance is achieved']
      }
    ]
  },
  {
    id: 'investment-banker-fintech',
    title: 'Investment Banker & FinTech Strategist',
    category: 'Finance',
    tagline: 'Fueling planetary enterprise through capital allocation, cross-border M&A, algorithmic liquidity, and financial engineering.',
    shortDesc: 'FinTech Strategists and Investment Bankers structure capital, analyze corporate valuations, and pioneer algorithmic markets.',
    longDesc: 'Capital powers civilization. High-caliber financial strategists analyze company cash flows, orchestrate multi-billion dollar mergers, underwrite Initial Public Offerings (IPOs), and engineer algorithmic high-frequency trading engines. For students with analytical sharpness, market intuition, and high ambition, finance provides unmatched economic leverage.',
    badge: 'High Earning • Global Capital Influence',
    accentColor: '#eab308',
    secondaryColor: '#fde047',
    metaphorType: 'crystal',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Commerce', 'Science (PCM)', 'Humanities / Arts', 'Any'],
    avgStartingSalary: '$95,000 - $165,000 / ₹14L - ₹36L p.a.',
    growthOutlook: '+24% in FinTech & Quantitative Finance',
    demandIndex: 91,
    whatTheyDo: [
      'Build 3-statement financial models, Discounted Cash Flow (DCF), and LBO valuation analyses',
      'Advise corporate boards on strategic acquisitions, hostile takeover defenses, and IPO listings',
      'Structure tokenized asset protocols and automated decentralized liquidity pools',
      'Analyze quantitative portfolio risk, Sharpe ratios, and macro interest-rate sensitivities'
    ],
    whereTheyWork: ['Wall Street & Global Investment Banks (Goldman Sachs, Morgan Stanley, JPMorgan)', 'Private Equity & Sovereign Wealth Funds', 'FinTech Disruptors (Stripe, Revolut, Zerodha)'],
    problemsSolved: ['Funding clean energy gigafactories through innovative green bonds', 'Modernizing cross-border remittance to eliminate 7% predatory transfer fees'],
    usefulDegrees: ['B.Com / B.B.A. in Finance', 'B.Tech in Computer Science / Engineering followed by MBA', 'B.S. in Economics & Mathematical Finance', 'CFA Charter'],
    keySkills: [
      { name: 'Financial Modeling & DCF Valuation', level: 95, category: 'Technical' },
      { name: 'Corporate Finance & M&A Strategy', level: 92, category: 'Domain' },
      { name: 'Quantitative Data Analysis (Python / Excel VBA)', level: 88, category: 'Technical' }
    ],
    technologiesUsed: ['Bloomberg Terminal', 'FactSet', 'Excel', 'Python', 'SQL', 'Tableau'],
    typicalRoles: [
      { level: 'Entry-Level', title: 'Investment Banking Analyst', exp: 'Financial pitchbooks, comparable company analysis, deal data rooms' },
      { level: 'Senior', title: 'Managing Director (MD) - Mergers & Acquisitions', exp: 'Client relationships, deal origination, multi-billion dollar negotiation' }
    ],
    industriesHiring: ['Investment Banking & M&A', 'Private Equity & Venture Capital', 'Asset Management & Hedge Funds'],
    careerDirections: ['M&A Investment Banker', 'Private Equity Principal', 'Quantitative Hedge Fund Trader', 'Chief Financial Officer (CFO)'],
    careerFuture: {
      careerToday: 'Junior analysts spend hours building valuation models in Excel and formatting presentation pitch decks for corporate clients.',
      careerEvolution: 'AI models generate financial tables and initial memos instantly. The modern banker acts as an elite negotiator, macroeconomic strategist, and complex structure creator.',
      emergingAreas: ['Tokenized Real-World Assets (RWA)', 'Algorithmic Automated Market Makers (AMM)', 'AI-Driven Credit Risk Underwriting'],
      futureSkills: ['Python for financial data analysis', 'Smart contract financial derivatives', 'ESG carbon credit valuation'],
      futureLearning: ['Follow business news daily (The Financial Times, Bloomberg, Economic Times)', 'Learn Excel shortcuts without touching the mouse', 'Study how interest rates determine asset valuations'],
      sourceInfo: { sourceName: 'CFA Institute Global Market Surveys', publication: 'Future of Finance & Quantitative Asset Management 2026', publishDate: 'March 2026', verifiedDate: 'October 2026' },
      timeline: [
        { phase: 'TODAY', period: '2024 - 2026', headline: 'Algorithmic Trading & Cloud Financial Modeling', description: 'Financial data automation and algorithmic execution dominant across global equity desks.', skillsInDemand: ['Excel DCF', 'Python Financial APIs', 'Accounting Principles'], keyTechnologies: ['Bloomberg', 'FactSet'], certaintyLevel: 'Observed Reality' },
        { phase: 'NEXT', period: '2027 - 2029', headline: 'Tokenized Corporate Debt & Real-World Assets', description: 'Billion-dollar bond issuances executed on regulated cryptographic ledgers with atomic settlement.', skillsInDemand: ['Smart Contract Finance', 'Regulatory Arbitrage'], keyTechnologies: ['Regulated Digital Asset Networks'], certaintyLevel: 'High Probability' },
        { phase: 'EMERGING', period: '2030 - 2033', headline: 'Autonomous Financial Agents & Real-Time Auditing', description: 'Continuous automated corporate accounting auditing every invoice and transaction in sub-seconds.', skillsInDemand: ['Continuous Audit Architecture', 'Macro Scenario Modeling'], keyTechnologies: ['Autonomous Enterprise LLMs'], certaintyLevel: 'Emerging Trend' },
        { phase: 'FUTURE', period: '2034+', headline: 'Planetary Algorithmic Resource Allocation', description: 'Global synthetic derivative markets dynamically hedging planetary climate and supply chain risks.', skillsInDemand: ['Complex Systems Economics', 'Planetary Risk Hedging'], keyTechnologies: ['Global Economic Simulations'], certaintyLevel: 'Speculative Direction' }
      ]
    },
    educationPathways: [
      {
        id: 'fin-stage-1', stageName: 'Class 10-12 Foundation', subTitle: 'Accounting, Economics, Applied Math', suitableStreams: ['Commerce', 'Science (PCM)', 'Any'], duration: '2 Years',
        whatToLearn: ['Double-entry bookkeeping, Balance Sheets, Profit & Loss, Cash Flow Statements', 'Compound interest, Time Value of Money (TVM), Micro/Macroeconomics', 'Advanced Excel formulas (VLOOKUP, INDEX-MATCH, XLOOKUP)'],
        whyItMatters: 'Accounting is the language of business. When you understand how money enters and leaves an enterprise, business decisions become clear.',
        options: [{ pathType: 'Degree Path', title: 'Commerce / Economics Degree Entrance (CUET / Top Universities)', institutesOrCertifiers: ['SRCC Delhi, St. Stephen’s, Wharton, LSE'], duration: '2 Years' }],
        usefulResources: ['Damodaran Online (Aswath Damodaran Corporate Finance)', 'Investopedia', 'The Intelligent Investor by Benjamin Graham'],
        suggestedProjects: ['Track a virtual portfolio of 5 stocks for 3 months and write an investment thesis explaining your picks', 'Analyze the annual 10-K financial report of Apple or Reliance Industries']
      }
    ],
    projects: [
      {
        id: 'proj-fin-1', title: 'Interactive Discounted Cash Flow (DCF) Valuation Model in Excel', difficulty: 'Beginner', estimatedHours: '12 - 16 Hours',
        description: 'Build a dynamic DCF model for a publicly listed company, projecting 5-year revenues, free cash flows, Weighted Average Cost of Capital (WACC), and fair share price.',
        skillsLearned: ['Financial statements', 'Time value of money', 'Discount rates (WACC)', 'Sensitivity analysis tables'],
        toolsUsed: ['Microsoft Excel / Google Sheets', 'Public SEC 10-K Filings'],
        deliverable: 'A spreadsheet model with dynamic toggle sliders for revenue growth rates and discount rates showing target share value.',
        steps: ['Download 3 years of audited financial statements from Yahoo Finance or SEC Edgar', 'Forecast free cash flows to the firm for years 1 through 5', 'Calculate terminal value using perpetual growth formula', 'Discount cash flows back to present value and compare with current market stock price']
      }
    ]
  },
  {
    id: 'public-policy-director',
    title: 'Public Policy Director & Civil Services Leader',
    category: 'Government & Public Services',
    tagline: 'Shaping national strategy, socioeconomic equity, urban planning, and governance for millions of citizens.',
    shortDesc: 'Public Policy Directors and Civil Servants design laws, administer districts, and solve large-scale societal challenges.',
    longDesc: 'True societal impact requires intelligent governance. Civil servants and policy directors design national health schemes, direct municipal infrastructure for mega-cities, craft international trade accords, and respond to natural disasters. For students who want to touch millions of lives and build a just society, this career offers unrivaled institutional scope.',
    badge: 'National Service • High Societal Influence',
    accentColor: '#0ea5e9',
    secondaryColor: '#38bdf8',
    metaphorType: 'compass',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Humanities / Arts', 'Commerce', 'Science (PCMB)', 'Any'],
    avgStartingSalary: '$60,000 - $110,000 / ₹10L - ₹22L p.a. + High Societal Honor',
    growthOutlook: '+16% sustained governmental leadership need',
    demandIndex: 90,
    whatTheyDo: [
      'Draft national legislation, welfare policy frameworks, and data governance standards',
      'Direct district administration, public health distribution, and law-and-order infrastructure',
      'Analyze econometric data to evaluate the impact of poverty-alleviation and education subsidies',
      'Represent the nation in bilateral diplomatic negotiations and climate treaty forums'
    ],
    whereTheyWork: ['Indian Administrative Service (IAS / IFS / IPS)', 'NITI Aayog & Prime Minister’s Office', 'United Nations, World Bank & IMF', 'Public Policy Think Tanks (Brookings, CPR, ORF)'],
    problemsSolved: ['Designing digital public infrastructure (like UPI and Aadhaar) providing financial inclusion to 500M+ unbanked citizens', 'Eliminating malnutrition across rural school districts through targeted nutrition programs'],
    usefulDegrees: ['B.A. / M.A. in Public Policy, Economics, or Political Science', 'Undergraduate Degree in Any Discipline followed by Civil Services Examination (UPSC CSE)', 'Master of Public Administration (MPA - Harvard Kennedy School, Oxford Blavatnik)'],
    keySkills: [
      { name: 'Public Administration & Constitutional Law', level: 96, category: 'Domain' },
      { name: 'Econometric Policy Evaluation', level: 90, category: 'Analytical' },
      { name: 'Strategic Crisis Management & Leadership', level: 94, category: 'Soft & Leadership' }
    ],
    technologiesUsed: ['STATA / R for Econometrics', 'GIS Spatial Mapping', 'National Citizen Grievance Portals', 'Data Analytics Dashboards'],
    typicalRoles: [
      { level: 'Entry-Level', title: 'Sub-Divisional Magistrate / Policy Analyst', exp: 'Field administration, public grievance redressal, welfare program execution' },
      { level: 'Senior', title: 'Cabinet Secretary / Director General of Public Policy', exp: 'National policy formulation, cabinet briefings, inter-ministerial coordination' }
    ],
    industriesHiring: ['National & State Governments', 'Multilateral International Bodies', 'Global Philanthropies & Policy Consultancies'],
    careerDirections: ['District Magistrate / IAS Officer', 'Ambassador / Foreign Service Diplomat', 'Chief Economist at Think Tank', 'Ministerial Policy Advisor'],
    careerFuture: {
      careerToday: 'Administrators manage physical files, citizen hearings, and welfare distribution monitored by state computer portals.',
      careerEvolution: 'Transformation into algorithmic governance: real-time satellite crop tracking, predictive disaster relief logistics, and digital public goods.',
      emergingAreas: ['Digital Public Infrastructure (DPI) Architecture', 'Climate Migration Resettlement Policy', 'AI Algorithmic Accountability Audits'],
      futureSkills: ['Data-driven policymaking with GIS and R', 'Public-private partnership (PPP) structuring', 'Crisis communications on digital channels'],
      futureLearning: ['Read national newspapers and economic surveys deeply', 'Volunteer in grassroots rural or municipal community projects', 'Study world history and comparative government systems'],
      sourceInfo: { sourceName: 'UNDP Public Governance Reports & NITI Aayog Strategy 2026', publication: 'Digital Public Infrastructure & Future Governance 2026', publishDate: 'April 2026', verifiedDate: 'October 2026' },
      timeline: [
        { phase: 'TODAY', period: '2024 - 2026', headline: 'Digital Public Infrastructure & Direct Benefit Transfer', description: 'Deploying biometrics and real-time bank transfers to eliminate leakages in citizen subsidies.', skillsInDemand: ['Policy Design', 'Public Finance', 'GIS'], keyTechnologies: ['UPI', 'Aadhaar', 'Direct Benefit Transfer'], certaintyLevel: 'Observed Reality' },
        { phase: 'NEXT', period: '2027 - 2029', headline: 'Predictive Disaster & Climate Adaptation Governance', description: 'Using satellite radar and weather models to evacuate flood zones and allocate drought subsidies weeks in advance.', skillsInDemand: ['Satellite Remote Sensing', 'Early Warning Systems'], keyTechnologies: ['GIS Dashboards', 'Predictive Hydrology Models'], certaintyLevel: 'High Probability' },
        { phase: 'EMERGING', period: '2030 - 2033', headline: 'Algorithmic Welfare Allocation & Citizen Feedback Loops', description: 'Direct citizen feedback via voice interfaces in 20+ languages automatically updating municipal funding priorities.', skillsInDemand: ['Conversational Citizen Portals', 'Automated Social Audits'], keyTechnologies: ['Multilingual Voice AI', 'Open Data Registries'], certaintyLevel: 'Emerging Trend' },
        { phase: 'FUTURE', period: '2034+', headline: 'Planetary Ecological Commons Governance', description: 'Real-time global governance treaties monitoring ocean biodiversity, carbon sinks, and orbital satellite debris.', skillsInDemand: ['Transnational Diplomacy', 'Planetary Commons Law'], keyTechnologies: ['Earth Observation Constellations'], certaintyLevel: 'Speculative Direction' }
      ]
    },
    educationPathways: [
      {
        id: 'pol-stage-1', stageName: 'Class 10-12 Foundation', subTitle: 'Social Sciences, Current Affairs, Critical Writing', suitableStreams: ['Humanities / Arts', 'Any Stream'], duration: '2 Years',
        whatToLearn: ['Indian & World History, Political Science, Geography, Economics', 'Constitutional rights, parliamentary system, federal structure', 'Essay writing and articulate argumentation'],
        whyItMatters: 'Civil service examinations and policy leadership reward broad, deep understanding of society, history, and human incentives.',
        options: [{ pathType: 'Degree Path', title: 'Top University Bachelor Degree (B.A. / B.Sc. / B.Tech)', institutesOrCertifiers: ['Delhi University, St. Xavier’s, JNU, Top Colleges'], duration: '3-4 Years' }],
        usefulResources: ['NCERT History & Political Science Textbooks', 'Economic Survey of India (Summary)', 'The Hindu Daily Editorials'],
        suggestedProjects: ['Conduct a community audit on drinking water quality or primary school facilities in your neighborhood', 'Write a 1,000-word policy memo proposing a solution to urban traffic congestion']
      }
    ],
    projects: [
      {
        id: 'proj-pol-1', title: 'Civic Issue Policy Memo & Public Action Plan', difficulty: 'Beginner', estimatedHours: '10 - 15 Hours',
        description: 'Identify a tangible problem in your city (waste segregation, public bus frequency, or street lighting) and write a formal policy memorandum for the municipal commissioner.',
        skillsLearned: ['Stakeholder analysis', 'Budget estimation', 'Evidence-based policy writing', 'Civic governance'],
        toolsUsed: ['Google Docs', 'Municipal Budget Reports', 'Field Survey Questions'],
        deliverable: 'A structured 4-page policy briefing with Executive Summary, Problem Definition, Root Causes, 3 Proposed Solutions, and 1-Year Implementation Timeline.',
        steps: ['Interview 10 local residents to gather firsthand qualitative data', 'Review municipal expenditure data on the civic sector', 'Formulate a cost-effective policy proposal with measurable KPIs', 'Submit the proposal to local ward counselor or civic citizen portal']
      }
    ]
  },
  {
    id: 'precision-mechatronics-specialist',
    title: 'Precision Mechatronics & CNC Automation Specialist',
    category: 'Skilled & Vocational Careers',
    tagline: 'Mastering high-precision computerized manufacturing, aerospace metallurgy, industrial PLC automation, and rapid prototyping.',
    shortDesc: 'Vocational Mechatronics Specialists operate high-precision multi-axis CNC machines and automated factory lines.',
    longDesc: 'Not all high-earning, high-impact careers require a 4-year academic degree. Skilled mechatronics technicians and precision machinists manufacture critical rocket engine components, titanium surgical implants, and robotic assembly cells. In countries like Germany, Japan, and rapidly industrializing nations, master mechatronics technicians command exceptional salaries and job security.',
    badge: 'Hands-On Mastery • High Vocational Demand',
    accentColor: '#64748b',
    secondaryColor: '#94a3b8',
    metaphorType: 'gear',
    educationFit: ['Class 10', 'Class 11', 'Class 12', 'Undergraduate'],
    streamFit: ['Vocational / Technical', 'Science (PCM)', 'Any'],
    avgStartingSalary: '$65,000 - $105,000 / ₹6L - ₹18L p.a.',
    growthOutlook: '+28% global shortage of precision manufacturing experts',
    demandIndex: 90,
    whatTheyDo: [
      'Program and operate 5-axis CNC milling and Swiss lathe machines for micron-tolerance parts',
      'Wire, calibrate, and troubleshoot industrial Programmable Logic Controllers (Siemens & Allen-Bradley PLCs)',
      'Inspect precision components using Coordinate Measuring Machines (CMM) and laser micrometers',
      'Perform additive manufacturing (direct metal laser sintering) for aerospace turbine blades'
    ],
    whereTheyWork: ['Aerospace & Defense Precision Facilities (ISRO, Boeing, Lockheed Martin)', 'Medical Device & Implant Manufacturers', 'Automotive Electric Drivetrain Plants'],
    problemsSolved: ['Machining titanium hip replacement joints with sub-5 micron tolerances', 'Troubleshooting automated assembly lines that produce 10,000 EV batteries per day'],
    usefulDegrees: ['Polytechnic Diploma in Mechanical / Mechatronics Engineering (3 Years after Class 10)', 'Industrial Training Institute (ITI) Machinist / Tool & Die Certification', 'B.Voc in Industrial Automation'],
    keySkills: [
      { name: '5-Axis CNC G-Code Programming', level: 94, category: 'Technical' },
      { name: 'PLC Ladder Logic (Siemens TIA Portal)', level: 90, category: 'Technical' },
      { name: 'Geometric Dimensioning & Tolerancing (GD&T)', level: 92, category: 'Domain' }
    ],
    technologiesUsed: ['Mastercam', 'Siemens NX', 'SolidWorks CAM', 'Siemens S7-1500 PLC', 'Zeiss CMM Metrology'],
    typicalRoles: [
      { level: 'Entry-Level', title: 'Precision CNC Programmer / Mechatronics Technician', exp: 'G-code setup, tool calibration, quality inspection' },
      { level: 'Senior', title: 'Master Toolmaker & Automation Plant Lead', exp: 'Multi-axis toolpath optimization, factory cell automation, lean manufacturing' }
    ],
    industriesHiring: ['Aerospace & Defense', 'Semiconductor Tooling & Fabrication', 'Medical Implants', 'Electric Vehicles'],
    careerDirections: ['Senior Automation Engineer', 'Aerospace Tool & Die Master', 'Precision Manufacturing Entrepreneur'],
    careerFuture: {
      careerToday: 'Technicians set up multi-axis CNC machines and inspect metal chips and tolerances manually.',
      careerEvolution: 'Lights-out autonomous factories where technicians oversee robotic tool-changers, digital twin simulations, and metal 3D printers.',
      emergingAreas: ['Hybrid Subtractive + Additive Laser Metal Sintering', 'Cobot (Collaborative Robot) Integration', 'Predictive Vibration Tool Health Monitoring'],
      futureSkills: ['CAM toolpath simulation with collision avoidance', 'Industrial IoT sensor networking', 'Titanium and Inconel high-temperature metallurgy'],
      futureLearning: ['Enroll in a polytechnic diploma or vocational course right after Class 10', 'Learn CAD/CAM basics in Fusion 360', 'Practice electrical wiring and motor circuit diagrams'],
      sourceInfo: { sourceName: 'National Tooling & Machining Association (NTMA)', publication: 'Advanced Precision Manufacturing & Skilled Workforce 2026', publishDate: 'May 2026', verifiedDate: 'October 2026' },
      timeline: [
        { phase: 'TODAY', period: '2024 - 2026', headline: '5-Axis CNC & Metal Additive Printing', description: 'Precision machining of titanium and aluminum components with automated tool setters.', skillsInDemand: ['Mastercam', 'GD&T', 'PLC Logic'], keyTechnologies: ['Haas / DMG Mori 5-Axis', 'Siemens PLCs'], certaintyLevel: 'Observed Reality' },
        { phase: 'NEXT', period: '2027 - 2029', headline: 'Collaborative Cobot Feeding & Digital Metrology', description: 'Robotic arms loading CNC chucks automatically while blue-light optical scanners inspect parts in 3D.', skillsInDemand: ['Cobot Programming', 'Optical Metrology'], keyTechnologies: ['Universal Robots Cobots', 'GOM Optical Scanners'], certaintyLevel: 'High Probability' },
        { phase: 'EMERGING', period: '2030 - 2033', headline: 'Autonomous Lights-Out Precision Cells', description: 'Fully dark, automated manufacturing cells producing rocket engine fuel injectors 24/7 without human hands touching parts.', skillsInDemand: ['Autonomous Cell Supervision', 'Predictive Tool Wear AI'], keyTechnologies: ['Automated Guided Vehicles (AGV)', 'Laser Powder Bed Fusion'], certaintyLevel: 'Emerging Trend' },
        { phase: 'FUTURE', period: '2034+', headline: 'Micro-Molecular Atomic Layer Fabrication', description: 'Fabrication of micro-scale surgical actuators and quantum sensors assembled atom by atom.', skillsInDemand: ['Nanometrology', 'Electron Beam Lithography'], keyTechnologies: ['Atomic Force Manipulators'], certaintyLevel: 'Speculative Direction' }
      ]
    },
    educationPathways: [
      {
        id: 'mech-stage-1', stageName: 'Class 10 Fast-Track', subTitle: 'Polytechnic Diploma in Mechatronics or ITI', suitableStreams: ['Class 10 Pass (Any Stream)'], duration: '3 Years',
        whatToLearn: ['Engineering Drawing, Blueprint Reading, GD&T symbols', 'Workshop technology: Turning, Milling, Fitting, Welding', 'Electrical circuits, Relays, Sensors, Pneumatics, Hydraulics'],
        whyItMatters: 'A 3-year polytechnic diploma after Class 10 allows students to start earning by age 19 or enter the 2nd year of B.Tech (Lateral Entry).',
        options: [{ pathType: 'Diploma Path', title: 'Polytechnic Diploma in Mechatronics / Tool & Die', institutesOrCertifiers: ['Government Polytechnic Institutes, NTTF, Indo-German Tool Rooms'], duration: '3 Years' }],
        usefulResources: ['Machinery’s Handbook', 'NYC CNC YouTube Channel (Fusion 360 & Machining)', 'Siemens TIA Portal Training Modules'],
        suggestedProjects: ['Design and machine a brass miniature Stirling heat engine that runs on a candle', 'Wire an automated pneumatic sorting cylinder triggered by an optical proximity sensor']
      }
    ],
    projects: [
      {
        id: 'proj-mech-1', title: 'Fusion 360 3D CAD Design & CAM G-Code Simulation', difficulty: 'Beginner', estimatedHours: '12 - 16 Hours',
        description: 'Design a precision aluminum automotive suspension bracket in Fusion 360, apply stress simulation, and generate full 3-axis CNC milling toolpaths.',
        skillsLearned: ['Parametric CAD modeling', 'CAM toolpaths (facing, pocketing, chamfering)', 'Speeds & feeds calculation', 'G-code verification'],
        toolsUsed: ['Autodesk Fusion 360 (Free Student License)'],
        deliverable: 'A 3D CAD model with verified toolpath simulation showing zero tool collisions and machining time estimate.',
        steps: ['Sketch the 2D profile with precise engineering dimensions and fillet radii', 'Extrude the solid body and apply finite element stress analysis to optimize weight', 'Configure tool library with end-mills, feeds, and spindle speeds', 'Simulate toolpath animation and export standard Fanuc G-code file']
      }
    ]
  }
];


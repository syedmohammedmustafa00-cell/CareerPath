import type { SkillItem } from '../types';

export const initialSkillsData: SkillItem[] = [
  {
    id: 'python-programming',
    name: 'Python Programming & Scientific Computing',
    category: 'Technical',
    status: 'Strong',
    proficiency: 88,
    relatedCareers: ['Artificial Intelligence', 'Computer Science & IT', 'Cybersecurity', 'Science & Research', 'Finance'],
    whyItMatters: 'Python is the lingua franca of modern artificial intelligence, data science, scientific research, and cybersecurity automation.',
    whereItIsUsed: 'Neural network training (PyTorch), backend web services (FastAPI), quantitative finance backtesting, and security scripting.',
    howToLearn: [
      'Master fundamental syntax: variables, control flow, functions, and list comprehensions',
      'Learn Object-Oriented Programming (Classes, Methods, Inheritance)',
      'Dive into data libraries: NumPy for array math, Pandas for tabular data, Matplotlib for plots',
      'Build command-line automation scripts and API web scrapers'
    ],
    beginnerResources: [
      { title: 'CS50P: Harvard Introduction to Programming with Python', url: 'https://cs50.harvard.edu/python/', platform: 'Harvard OpenCourseWare', isFree: true },
      { title: 'Python for Everybody Specialization', url: 'https://www.coursera.org/specializations/python', platform: 'Coursera (Charles Severance)', isFree: true },
      { title: 'Kaggle Python Micro-Course', url: 'https://www.kaggle.com/learn/python', platform: 'Kaggle', isFree: true }
    ],
    practiceIdeas: [
      'Solve 25 beginner LeetCode or HackerRank Python challenges',
      'Write a script that organizes your computer Downloads folder automatically by file extension',
      'Build a command-line currency converter using a live exchange rate API'
    ],
    projectIdeas: [
      'Interactive Flashcard Study App with SQLite database',
      'Automated Weather Notification bot sending daily summaries to Telegram',
      'Personal expense tracker with CSV data visualization'
    ]
  },
  {
    id: 'math-linear-algebra',
    name: 'Linear Algebra & Multivariable Calculus',
    category: 'Analytical',
    status: 'Developing',
    proficiency: 74,
    relatedCareers: ['Artificial Intelligence', 'Science & Research', 'Engineering', 'Finance'],
    whyItMatters: 'Every neural network weight update, 3D computer graphics rotation, and quantum wavefunction is fundamentally a matrix transformation.',
    whereItIsUsed: 'Gradient descent in deep learning, 3D game engines (vertex shaders), quantum state vectors, and econometric forecasting.',
    howToLearn: [
      'Visualize vectors as arrows and coordinate transformations (3Blue1Brown series)',
      'Master matrix multiplication, determinants, inverses, eigenvalues, and eigenvectors',
      'Understand partial derivatives and the gradient vector in multivariable calculus',
      'Implement basic matrix multiplication and dot products from scratch in code'
    ],
    beginnerResources: [
      { title: 'Essence of Linear Algebra (Animated Visuals)', url: 'https://www.3blue1brown.com/topics/linear-algebra', platform: '3Blue1Brown', isFree: true },
      { title: 'MIT 18.06: Linear Algebra by Prof. Gilbert Strang', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', platform: 'MIT OpenCourseWare', isFree: true },
      { title: 'Khan Academy Multivariable Calculus', url: 'https://www.khanacademy.org/math/multivariable-calculus', platform: 'Khan Academy', isFree: true }
    ],
    practiceIdeas: [
      'Calculate the 2D rotation matrix for a 45-degree turn by hand and verify with code',
      'Find the eigenvalues of a 2x2 covariance matrix to grasp Principal Component Analysis',
      'Derive the partial derivatives for a simple 2-variable loss function: L = (w*x + b - y)^2'
    ],
    projectIdeas: [
      'Build a 3D wireframe cube renderer in HTML5 Canvas using pure matrix projections',
      'Code a toy gradient descent visualizer in Python showing a ball rolling into a local minimum'
    ]
  },
  {
    id: 'statistics-probability',
    name: 'Probability & Inferential Statistics',
    category: 'Analytical',
    status: 'Developing',
    proficiency: 68,
    relatedCareers: ['Artificial Intelligence', 'Finance', 'Science & Research', 'Medicine & Healthcare'],
    whyItMatters: 'In an uncertain world, statistics allows you to separate real scientific signals from random noise, calculate risk, and make evidence-based decisions.',
    whereItIsUsed: 'Clinical medical trials, A/B testing in software apps, financial option pricing, and generative model probability distributions.',
    howToLearn: [
      'Understand discrete vs continuous probability distributions (Normal, Poisson, Binomial)',
      'Master Bayes’ Theorem: updating beliefs based on new evidence',
      'Learn hypothesis testing: p-values, null hypotheses, and confidence intervals',
      'Conduct statistical simulations with Python NumPy / SciPy'
    ],
    beginnerResources: [
      { title: 'StatQuest with Josh Starmer', url: 'https://statquest.org/', platform: 'YouTube / StatQuest', isFree: true },
      { title: 'Khan Academy AP Statistics Track', url: 'https://www.khanacademy.org/math/statistics-probability', platform: 'Khan Academy', isFree: true },
      { title: 'Seeing Theory: A Visual Introduction to Probability', url: 'https://seeing-theory.brown.edu/', platform: 'Brown University', isFree: true }
    ],
    practiceIdeas: [
      'Simulate the Monty Hall problem 10,000 times in Python to prove why switching doors wins 2/3 of the time',
      'Calculate the conditional probability of disease given a positive test with 99% accuracy in a 0.1% prevalent population'
    ],
    projectIdeas: [
      'Analyze historical sports or cricket match statistics to model win probabilities',
      'Build an interactive A/B test sample size and statistical power calculator'
    ]
  },
  {
    id: 'machine-learning-deep-learning',
    name: 'Machine Learning & Deep Neural Networks',
    category: 'Technical',
    status: 'Explore',
    proficiency: 52,
    relatedCareers: ['Artificial Intelligence', 'Computer Science & IT', 'Cybersecurity'],
    whyItMatters: 'Machine Learning powers autonomous systems, real-time speech translation, medical diagnostics, and personalized recommendations.',
    whereItIsUsed: 'Convolutional neural networks for imaging, transformers for language models, and reinforcement learning for robotics.',
    howToLearn: [
      'Understand supervised learning (Regression, Classification) and unsupervised clustering',
      'Learn PyTorch tensor fundamentals, autograd, and training loops',
      'Build a Multilayer Perceptron (MLP) from scratch to understand forward pass and backpropagation',
      'Fine-tune open-source pretrained models (ResNet, Hugging Face transformers)'
    ],
    beginnerResources: [
      { title: 'Practical Deep Learning for Coders', url: 'https://course.fast.ai/', platform: 'Fast.ai', isFree: true },
      { title: 'Neural Networks: Zero to Hero by Andrej Karpathy', url: 'https://karpathy.ai/zero-to-hero.html', platform: 'YouTube', isFree: true },
      { title: 'Machine Learning Specialization by Andrew Ng', url: 'https://www.deeplearning.ai/', platform: 'Coursera / DeepLearning.AI', isFree: true }
    ],
    practiceIdeas: [
      'Train a handwritten digit recognizer on MNIST achieving 98%+ test accuracy in PyTorch',
      'Implement k-means clustering in Python without using Scikit-Learn'
    ],
    projectIdeas: [
      'Crop leaf disease classifier deployed on Streamlit',
      'Real-time sign-language recognition app using MediaPipe and PyTorch'
    ]
  },
  {
    id: 'sql-database-design',
    name: 'SQL & Relational Data Architecture',
    category: 'Technical',
    status: 'Strong',
    proficiency: 82,
    relatedCareers: ['Computer Science & IT', 'Finance', 'Business & Management', 'Artificial Intelligence'],
    whyItMatters: 'Nearly every corporate transaction, bank ledger, patient record, and user account lives inside a relational or distributed database.',
    whereItIsUsed: 'PostgreSQL, MySQL, BigQuery, Snowflake, and enterprise data warehouses.',
    howToLearn: [
      'Learn SQL querying: SELECT, WHERE, GROUP BY, HAVING, ORDER BY',
      'Master multi-table JOINs (INNER, LEFT, RIGHT, FULL) and subqueries',
      'Understand relational schema design, primary & foreign keys, and normal forms (1NF, 2NF, 3NF)',
      'Learn indexing strategies (B-Trees) and EXPLAIN query plan optimization'
    ],
    beginnerResources: [
      { title: 'SQLBolt: Interactive SQL Lessons', url: 'https://sqlbolt.com/', platform: 'SQLBolt (Interactive)', isFree: true },
      { title: 'Select Star SQL: Interactive Case Study', url: 'https://selectstarsql.com/', platform: 'SelectStarSQL', isFree: true },
      { title: 'PostgreSQL Official Tutorial', url: 'https://www.postgresqltutorial.com/', platform: 'Postgres Tutorial', isFree: true }
    ],
    practiceIdeas: [
      'Write complex analytical SQL queries with window functions (ROW_NUMBER, RANK, DENSE_RANK)',
      'Design a database schema for an online bookstore handling orders, customers, and inventory'
    ],
    projectIdeas: [
      'School Examination Results & Analytics Portal with PostgreSQL',
      'E-commerce transactional database with stored procedures and audit logs'
    ]
  },
  {
    id: 'communication-storytelling',
    name: 'Communication & Technical Storytelling',
    category: 'Soft & Leadership',
    status: 'Strong',
    proficiency: 85,
    relatedCareers: ['Business & Management', 'Law', 'Government & Public Services', 'Design & Media', 'All'],
    whyItMatters: 'Brilliant technical ideas remain invisible unless you can articulate their value clearly to team members, clients, and decision-makers.',
    whereItIsUsed: 'Executive boardroom pitches, technical white papers, court oral advocacy, and team leadership.',
    howToLearn: [
      'Practice explaining complex technical concepts to a 10-year-old (Feynman Technique)',
      'Master the Pyramid Principle: deliver the headline conclusion first, followed by supporting pillars',
      'Record your own presentations to review body language, vocal pacing, and filler words',
      'Write concise technical documentation and project post-mortems'
    ],
    beginnerResources: [
      { title: 'TED Masterclass: The Official TED Guide to Public Speaking', url: 'https://www.ted.com/', platform: 'TED / Chris Anderson', isFree: true },
      { title: 'The Pyramid Principle by Barbara Minto', url: 'https://www.mckinsey.com/', platform: 'McKinsey & Co Guide', isFree: true }
    ],
    practiceIdeas: [
      'Deliver a 3-minute lightning talk explaining how Wi-Fi works without using acronyms',
      'Condense a 10-page research article into a 3-bullet executive summary'
    ],
    projectIdeas: [
      'Start a technical career blog or YouTube channel sharing weekly project learnings',
      'Lead a student workshop teaching 20 peers how to code their first HTML page'
    ]
  },
  {
    id: 'algorithmic-problem-solving',
    name: 'Algorithmic Problem Solving & Data Structures',
    category: 'Analytical',
    status: 'Developing',
    proficiency: 78,
    relatedCareers: ['Computer Science & IT', 'Artificial Intelligence', 'Cybersecurity'],
    whyItMatters: 'Writing code that works is simple; writing code that executes in 2 milliseconds on 100 million records requires algorithmic discipline.',
    whereItIsUsed: 'High-frequency trading, search engine indexing, GPS pathfinding (Dijkstra/A*), and top-tier software interviews.',
    howToLearn: [
      'Master Big-O time and space complexity notation',
      'Implement core data structures: Arrays, Hash Tables, Linked Lists, Stacks, Queues, Binary Trees, Heaps, Graphs',
      'Learn algorithmic paradigms: Two Pointers, Sliding Window, Divide & Conquer, Dynamic Programming'
    ],
    beginnerResources: [
      { title: 'NeetCode Roadmap & Video Walkthroughs', url: 'https://neetcode.io/', platform: 'NeetCode (Free)', isFree: true },
      { title: 'Grokking Algorithms by Aditya Bhargava', url: 'https://www.manning.com/books/grokking-algorithms', platform: 'Illustrated Book', isFree: false }
    ],
    practiceIdeas: [
      'Implement binary search from memory and solve the Two Sum problem in O(N) time with a hash map',
      'Traverse a binary tree using Depth-First Search (DFS) and Breadth-First Search (BFS)'
    ],
    projectIdeas: [
      'Interactive visual maze generator and pathfinder comparing A* and Dijkstra’s algorithms',
      'Lossless Huffman file compression and decompression utility in C++ or Python'
    ]
  },
  {
    id: 'system-design-cloud',
    name: 'System Design & Distributed Cloud Architecture',
    category: 'Technical',
    status: 'Explore',
    proficiency: 60,
    relatedCareers: ['Computer Science & IT', 'Cybersecurity', 'Artificial Intelligence'],
    whyItMatters: 'Understanding how multiple servers, caches, message queues, and databases coordinate without data loss or downtime.',
    whereItIsUsed: 'Cloud providers (AWS, GCP, Azure), high-scale websites (Netflix, Uber, WhatsApp), and microservice backends.',
    howToLearn: [
      'Learn client-server architecture, HTTP/HTTPS, DNS, and load balancers',
      'Understand caching strategies with Redis, CDN edge delivery, and database replication',
      'Study CAP theorem, eventual consistency, and asynchronous message queues (Kafka)',
      'Analyze architectural case studies of real-world planet-scale systems'
    ],
    beginnerResources: [
      { title: 'System Design Primer (100k+ GitHub stars)', url: 'https://github.com/donnemartin/system-design-primer', platform: 'GitHub Open Source', isFree: true },
      { title: 'ByteByteGo System Design YouTube Channel', url: 'https://bytebytego.com/', platform: 'ByteByteGo', isFree: true }
    ],
    practiceIdeas: [
      'Sketch an architecture diagram for a URL shortener like bit.ly handling 10,000 writes/sec',
      'Calculate the bandwidth and storage required to store 500 million YouTube video thumbnails'
    ],
    projectIdeas: [
      'Deploy a containerized microservice on AWS or DigitalOcean with Docker Compose and Nginx reverse proxy',
      'Build a serverless image resizer triggered automatically upon cloud storage upload'
    ]
  }
];

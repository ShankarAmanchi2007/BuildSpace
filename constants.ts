
import { Developer, Project } from './types';

export const MOCK_DEVELOPERS: Developer[] = [
  {
    id: 'dev-1',
    name: 'Alex Rivera',
    avatar: 'https://picsum.photos/seed/alex/200/200',
    skills: ['React', 'Node.js', 'Tailwind', 'Three.js'],
    bio: 'Passionate full-stack developer building immersive web experiences. Always exploring the intersection of design and code.',
    githubUrl: 'https://github.com/alexrivera',
    projectsCount: 12
  },
  {
    id: 'dev-2',
    name: 'Sarah Chen',
    avatar: 'https://picsum.photos/seed/sarah/200/200',
    skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
    bio: 'Backend architect focused on scalable systems and clean API design. Open source contributor.',
    githubUrl: 'https://github.com/sarahchen',
    projectsCount: 8
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Dash',
    shortDescription: 'A futuristic project management dashboard with real-time analytics.',
    longDescription: 'Neon Dash is a comprehensive dashboard built for modern teams who value speed and aesthetics. It features real-time data synchronization, customizable widgets, and a unique neon-inspired interface that reduces eye strain during long coding sessions.',
    image: 'https://picsum.photos/seed/neon/800/600',
    techStack: ['React', 'Firebase', 'Chart.js', 'Tailwind'],
    type: 'Paid',
    price: '$29',
    developerId: 'dev-1',
    demoUrl: 'https://example.com/demo/neon',
    likes: 1240
  },
  {
    id: '2',
    title: 'Vibe Player',
    shortDescription: 'Minimalist music player with dynamic background matching.',
    longDescription: 'Vibe Player is more than just a music app. It uses advanced canvas manipulation to analyze album art in real-time and adapt the entire UI theme to match the current tracks "vibe". Seamless, fluid, and beautiful.',
    image: 'https://picsum.photos/seed/vibe/800/600',
    techStack: ['TypeScript', 'Canvas API', 'Web Audio'],
    type: 'Free',
    developerId: 'dev-1',
    demoUrl: 'https://example.com/demo/vibe',
    likes: 856
  },
  {
    id: '3',
    title: 'Cloud Architect',
    shortDescription: 'Visual infrastructure diagram tool for AWS and Azure.',
    longDescription: 'Cloud Architect allows you to drag and drop cloud components to generate infrastructure-as-code snippets automatically. It supports multi-cloud environments and complex network topologies.',
    image: 'https://picsum.photos/seed/cloud/800/600',
    techStack: ['Go', 'React', 'React Flow', 'Terraform'],
    type: 'Paid',
    price: '$49',
    developerId: 'dev-2',
    demoUrl: 'https://example.com/demo/cloud',
    likes: 2103
  },
  {
    id: '4',
    title: 'Code Snippets Pro',
    shortDescription: 'A browser extension for managing and sharing dev snippets.',
    longDescription: 'Tired of losing your favorite utility functions? Snippets Pro organizes your code blocks with AI-powered tagging and instant search across all your devices.',
    image: 'https://picsum.photos/seed/code/800/600',
    techStack: ['Svelte', 'Chrome Extension API', 'Redis'],
    type: 'Free',
    developerId: 'dev-2',
    demoUrl: 'https://example.com/demo/snippets',
    likes: 420
  }
];

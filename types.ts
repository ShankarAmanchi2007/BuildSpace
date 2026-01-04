
export interface Developer {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  bio: string;
  githubUrl: string;
  projectsCount: number;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  techStack: string[];
  type: 'Free' | 'Paid';
  price?: string;
  developerId: string;
  demoUrl: string;
  likes: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isDeveloper: boolean;
}

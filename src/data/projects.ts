export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'mobile' | 'system' | 'ai';
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'A real-time data visualization platform leveraging machine learning for predictive analysis.',
    image: '/assets/projects/ai-dashboard.webp',
    tags: ['React', 'TypeScript', 'Python', 'TensorFlow'],
    category: 'ai',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/ai-dashboard',
  },
  {
    id: '2',
    title: 'Distributed File System',
    description: 'A high-performance distributed storage system designed for scalability and fault tolerance.',
    image: '/assets/projects/dfs.webp',
    tags: ['Rust', 'gRPC', 'Docker', 'Linux'],
    category: 'system',
    liveUrl: '',
    repoUrl: 'https://github.com/example/dfs',
  },
  {
    id: '3',
    title: 'E-commerce Mobile Experience',
    description: 'A modern mobile shopping application with seamless payment integration and intuitive UI.',
    image: '/assets/projects/ecommerce-app.webp',
    tags: ['React Native', 'Redux', 'Firebase'],
    category: 'mobile',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/ecommerce-app',
  },
  {
    id: '4',
    title: 'Enterprise Resource Planner',
    description: 'A comprehensive ERP solution for medium-sized businesses to manage operations and finances.',
    image: '/assets/projects/erp.webp',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    category: 'web',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/erp',
  },
];

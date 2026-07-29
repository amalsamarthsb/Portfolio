import type { LucideIcon } from 'lucide-react'
import {
  BrainCircuit,
  Cloud,
  Cpu,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'

export interface Project {
  title: string
  description: string
  features: string[]
  tech: string[]
  icon: LucideIcon
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
}

export interface CertificationItem {
  name: string
  issuer: string
}

export const heroRoles = [
  'AI Engineer',
  'GenAI Developer',
  'Python Developer',
  'FastAPI Developer',
  'ML Enthusiast',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amal-samarth/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Email', href: 'mailto:amal.samarthsb@gmail.com' },
  { label: 'Resume', href: '/AMAL-SAMARTH-RESUME.pdf' },
]

export const skillSections = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Flask', 'REST APIs'],
  },
  {
    title: 'AI/ML',
    items: ['LangChain', 'RAG', 'Hugging Face', 'Gemini API', 'OpenAI API', 'Prompt Engineering', 'FAISS'],
  },
  {
    title: 'Cloud',
    items: ['Azure', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Tools',
    items: ['Git', 'VS Code', 'Postman', 'Figma'],
  },
]

export const projects: Project[] = [
  {
    title: 'RAG PDF Assistant',
    description:
      'An intelligent document assistant that uploads PDFs, retrieves semantic chunks, and answers questions with grounded AI responses.',
    features: [
      'Multiple PDF upload',
      'Semantic search',
      'FAISS vector search',
      'LangChain pipeline',
      'Streaming responses',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Gemini', 'React', 'Tailwind'],
    icon: BrainCircuit,
  },
  {
    title: 'Complaint Management System',
    description:
      'A full-stack support platform with role-based access, ticket tracking, analytics, and modern admin workflows.',
    features: [
      'Secure auth',
      'Role-based access',
      'Dashboard analytics',
      'Real-time updates',
      'Responsive interface',
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker'],
    icon: Workflow,
  },
  {
    title: 'Enterprise AI Platform',
    description:
      'A scalable enterprise AI workspace that brings document intelligence and modular assistants into business processes.',
    features: [
      'Enterprise assistant',
      'Knowledge base',
      'Modular services',
      'Azure-ready deployment',
      'RESTful APIs',
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'Azure AI', 'OpenAI', 'LangChain', 'Docker'],
    icon: Cpu,
  },
]


export const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science          (2019 – 2023)',
    institution: 'Kerala Technical University',
    period: 'Grade: 7.3 CGPA',
  },
 
]

export const certifications: CertificationItem[] = [
  { name: 'Gen AI Fundamentals', issuer: 'Microsoft' },
  { name: 'Python for Data Science', issuer: 'IBM' },
]

export const stats = [
  { value: '8+', label: 'Projects completed' },
  { value: '20+', label: 'Technologies learned' },
  { value: '3+', label: 'GitHub repositories' },
  { value: '3', label: 'Certificates' },
]

export const milestones = [
  { icon: Sparkles, title: 'AI-first product thinking' },
  { icon: ShieldCheck, title: 'Reliable, secure systems' },
  { icon: MonitorSmartphone, title: 'Polished user experiences' },
  { icon: Cloud, title: 'Cloud-native delivery' },
]

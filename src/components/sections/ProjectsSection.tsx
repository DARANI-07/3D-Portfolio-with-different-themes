import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  sectionsRef: React.MutableRefObject<{ [key: string]: HTMLElement | null }>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sectionsRef }) => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A innovative project showcasing modern development practices and creative problem-solving approaches.',
      tech: 'HTML',
      stars: 1,
      forks: 0
    },
    {
      title: 'Social Media Platform',
      description: 'A innovative project showcasing modern development practices and creative problem-solving approaches.',
      tech: 'JavaScript',
      stars: 0,
      forks: 0
    },
    {
      title: 'Katomaran Todo App',
      description: 'This project is a part of Hackathon run by https://www.katomaran.com',
      tech: 'TypeScript',
      stars: 0,
      forks: 0
    },
    {
      title: 'AI/ML Project',
      description: 'An innovative AI/ML project leveraging machine learning algorithms for intelligent data analysis and predictions.',
      tech: 'Python',
      stars: 0,
      forks: 0
    },
    {
      title: 'Task Management System',
      description: 'A innovative project showcasing modern development practices and creative problem-solving approaches.',
      tech: 'Python',
      stars: 0,
      forks: 0
    },
    {
      title: 'Number Puzzle Game',
      description: 'A innovative project showcasing modern development practices and creative problem-solving approaches.',
      tech: 'JavaScript',
      stars: 0,
      forks: 0
    }
  ];

  return (
    <section 
      ref={(el) => sectionsRef.current.projects = el}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore my portfolio of innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="glow-card p-6 group hover:scale-105 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>⭐ {project.stars}</span>
                    <span>🍴 {project.forks}</span>
                  </div>
                </div>
                
                <Badge variant="secondary" className="w-fit">
                  {project.tech}
                </Badge>
                
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                
                <Button variant="outline" className="w-full glow-border group-hover:animate-glow">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open('https://github.com/DARANI-07', '_blank')}
            className="neon-gradient animate-glow"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
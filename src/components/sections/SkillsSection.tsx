import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillsSectionProps {
  sectionsRef: React.MutableRefObject<{ [key: string]: HTMLElement | null }>;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ sectionsRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skills = [
    { name: 'HTML5', percentage: 95, category: 'Frontend' },
    { name: 'CSS3', percentage: 90, category: 'Frontend' },
    { name: 'JavaScript', percentage: 88, category: 'Frontend' },
    { name: 'React', percentage: 85, category: 'Frontend' },
    { name: 'Node.js', percentage: 85, category: 'Backend' },
    { name: 'Python', percentage: 80, category: 'Backend' },
    { name: 'MongoDB', percentage: 75, category: 'Backend' },
    { name: 'Java', percentage: 78, category: 'Backend' },
    { name: 'Git', percentage: 90, category: 'Tools' },
    { name: 'Docker', percentage: 70, category: 'Tools' },
    { name: 'AWS', percentage: 65, category: 'Tools' },
    { name: 'Figma', percentage: 85, category: 'Tools' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={(el) => {
        sectionsRef.current.skills = el;
        sectionRef.current = el;
      }}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            My <span className="glow-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Frontend', 'Backend', 'Tools'].map((category) => (
            <Card key={category} className="glow-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">
                {category} Development
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="progress-bar h-2 rounded-full transition-all duration-1000 delay-300"
                          style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6 glow-text">Tech Stack Highlights</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'Python', 'Java', 'MongoDB', 'Docker', 'AWS', 'Git'].map((tech) => (
              <Badge key={tech} variant="outline" className="glow-border px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
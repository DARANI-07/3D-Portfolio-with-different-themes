import React from 'react';
import { Badge } from '@/components/ui/badge';

interface AboutSectionProps {
  sectionsRef: React.MutableRefObject<{ [key: string]: HTMLElement | null }>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ sectionsRef }) => {
  return (
    <section 
      ref={(el) => sectionsRef.current.about = el}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden relative" style={{
              background: 'linear-gradient(135deg, hsl(var(--neon-blue)), hsl(var(--neon-blue) / 0.8))',
              padding: '6px',
              boxShadow: '0 0 30px hsl(var(--neon-blue) / 0.6), 0 0 50px hsl(var(--neon-blue) / 0.4), inset 0 0 20px hsl(var(--neon-blue) / 0.3)'
            }}>
              <img 
                src="/lovable-uploads/dc41d8f8-d6ba-4fe0-86d8-9d90c2f164e7.png"
                alt="Daranidaran S - Profile Picture"
                className="w-full h-full object-cover rounded-full"
                style={{
                  filter: 'brightness(1.1) contrast(1.1)'
                }}
              />
            </div>
            <div className="text-center space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="glow-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="glow-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="glow-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              About <span className="glow-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating immersive digital experiences that combine functionality 
              with stunning visual design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend development, I bring ideas 
              to life through clean code, innovative solutions, and attention to detail. I'm 
              constantly exploring new technologies to push the boundaries of what's possible on the web.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Frontend', 'Backend', 'Full Stack', 'UI/UX'].map((tag) => (
                <Badge key={tag} variant="secondary" className="glow-border">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from 'react';
import { Button } from '@/components/ui/button';

interface HomeSectionProps {
  sectionsRef: React.MutableRefObject<{ [key: string]: HTMLElement | null }>;
  scrollToSection: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ sectionsRef, scrollToSection }) => {
  return (
    <section 
      ref={(el) => sectionsRef.current.home = el}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 50%, hsl(var(--glow-primary) / 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 20% 70%, hsl(var(--glow-secondary) / 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 40% 30% at 80% 30%, hsl(var(--neon-cyan) / 0.08) 0%, transparent 50%),
          linear-gradient(135deg, hsl(var(--dark-bg)) 0%, hsl(var(--background)) 100%)
        `
      }}
    >
      <div className="text-center space-y-6 animate-fadeInUp">
        <h1 className="text-4xl md:text-7xl font-bold">
          Hi, I'm <span className="glow-text">Daranidaran</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Full Stack Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Crafting immersive digital experiences with cutting-edge technology and creative innovation
        </p>
        <Button 
          onClick={() => scrollToSection('about')}
          className="mt-8 neon-gradient animate-glow"
        >
          Discover My Journey
        </Button>
      </div>
    </section>
  );
};

export default HomeSection;
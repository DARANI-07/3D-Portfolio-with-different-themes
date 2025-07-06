import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, ExternalLink, Menu, X } from 'lucide-react';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Loading animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'awards', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

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

  const achievements = [
    {
      category: 'Certifications',
      items: [
        { title: 'Industry 4.0 and IoT', org: 'NPTEL', year: '2024' },
        { title: 'Java Programming', org: 'NPTEL', year: '2024' },
        { title: 'Human Computer Interaction', org: 'NPTEL', year: '2024' }
      ]
    },
    {
      category: 'Co-Curricular',
      items: [
        { title: 'Paper Presentation', org: '8th Edition TECHgium', year: 'Nov 2024' },
        { title: 'International Conference', org: 'Dubai', year: 'Dec 2024' },
        { title: 'Carta Presentra', org: 'Sri Krishna College of Technology', year: 'Apr 2024' },
        { title: 'Web Emersion Workshop', org: 'Sri Krishna College', year: 'Apr 2024' }
      ]
    }
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold glow-text">
            DARANIDARAN S
          </h1>
          <div className="w-80 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full loading-bar rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xl text-muted-foreground">{progress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dark min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold glow-text">DS</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Awards', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() 
                      ? 'text-primary glow-text' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4">
              {['Home', 'About', 'Skills', 'Awards', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() 
                      ? 'text-primary glow-text' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section 
        ref={(el) => sectionsRef.current.home = el}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--glow-primary) / 0.1) 0%, transparent 70%)'
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

      {/* About Section */}
      <section 
        ref={(el) => sectionsRef.current.about = el}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-80 h-80 mx-auto rounded-full glow-border bg-muted flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
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

      {/* Skills Section */}
      <section 
        ref={(el) => sectionsRef.current.skills = el}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="glow-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Frontend', 'Backend', 'Tools'].map((category) => (
              <Card key={category} className="glow-card p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">
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
                            style={{ width: `${skill.percentage}%` }}
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

      {/* Awards Section */}
      <section 
        ref={(el) => sectionsRef.current.awards = el}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Certificates & <span className="glow-text">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my professional certifications, academic achievements, and extracurricular accomplishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((category, idx) => (
              <Card key={idx} className="glow-card p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full neon-gradient flex items-center justify-center mr-4">
                    {category.category === 'Certifications' ? '🏆' : '📚'}
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="glow-border rounded-lg p-4 bg-background/50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.org}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.year}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section 
        ref={(el) => sectionsRef.current.contact = el}
        className="min-h-screen flex items-center py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="glow-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's collaborate and create something amazing together
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="glow-card p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full neon-gradient flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Let's Connect</h3>
                <p className="text-muted-foreground">
                  Ready to start your next project? Drop me a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your Name" className="glow-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="your.email@example.com" className="glow-border" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Discussion" className="glow-border" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    className="glow-border min-h-32"
                  />
                </div>

                <Button className="w-full neon-gradient animate-glow">
                  Send Message
                </Button>

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-4">Or reach me directly at:</p>
                  <a 
                    href="mailto:daranidaran08@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium text-lg glow-text"
                  >
                    daranidaran08@gmail.com
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Daranidaran S. Crafted with ❤️ and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
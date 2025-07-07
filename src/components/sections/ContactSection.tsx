import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin } from 'lucide-react';

interface ContactSectionProps {
  sectionsRef: React.MutableRefObject<{ [key: string]: HTMLElement | null }>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ sectionsRef }) => {
  return (
    <section 
      ref={(el) => sectionsRef.current.contact = el}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
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
              <h3 className="text-2xl font-semibold mb-2 text-white">Let's Connect</h3>
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
                <div className="space-y-2 mb-6">
                  <a 
                    href="mailto:daranidaran08@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium text-lg glow-text block"
                  >
                    daranidaran08@gmail.com
                  </a>
                  <a 
                    href="tel:+918610156399"
                    className="text-primary hover:text-primary/80 font-medium text-lg glow-text block"
                  >
                    +91 8610156399
                  </a>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glow-border"
                    onClick={() => window.open('https://github.com/DARANI-07', '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glow-border"
                    onClick={() => window.open('https://www.linkedin.com/in/daranidaran-s-263700328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
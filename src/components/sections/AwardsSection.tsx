import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AwardsSectionProps {
  sectionsRef: React.MutableRefObject<{ [key: string]: HTMLElement | null }>;
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ sectionsRef }) => {
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

  return (
    <section 
      ref={(el) => sectionsRef.current.awards = el}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
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
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
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
  );
};

export default AwardsSection;
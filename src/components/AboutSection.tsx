import { useEffect, useRef, useState } from 'react';
import { Users, Target, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const values = [
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe in the power of partnership, working closely with your team to understand your unique voice and vision."
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Every piece of content serves a purpose, driving your brand toward measurable growth and meaningful connections."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "We push boundaries and explore new possibilities to ensure your brand stands out in a crowded marketplace."
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "Our mission is your elevation - we're committed to taking your brand to new heights through proven strategies."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A collective of storytellers, strategists, and creators dedicated to amplifying brands 
            through authentic content and innovative marketing solutions.
          </p>
        </div>

        {/* Story content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-semibold mb-6 gradient-text">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Born from the belief that every brand has a unique story worth telling, 
                Gear Up Marketing Solutions emerged as a creative force dedicated to 
                elevating businesses through strategic content and authentic storytelling.
              </p>
              <p>
                We understand that in today's digital landscape, it's not enough to simply 
                create content – it must resonate, inspire, and drive action. Our team combines 
                creative excellence with data-driven insights to craft campaigns that not only 
                capture attention but create lasting connections.
              </p>
              <p>
                From startups finding their voice to established brands seeking reinvention, 
                we partner with businesses ready to rise above the noise and make their mark.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-semibold mb-6 gradient-text">Our Mission</h3>
            <div className="premium-card p-8 rounded-2xl">
              <blockquote className="text-2xl font-medium text-center leading-relaxed">
                "To empower brands with the voice, vision, and velocity needed to thrive 
                in an ever-evolving digital world."
              </blockquote>
              <div className="mt-8 flex justify-center">
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={value.title}
                className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${700 + index * 200}ms` }}
              >
                <div className="premium-card p-8 rounded-2xl text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
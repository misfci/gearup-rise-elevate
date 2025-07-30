import { useEffect, useRef, useState } from 'react';
import { Palette, PenTool, Search, BarChart3, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand development from logo design to visual guidelines that capture your essence.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Compelling content that tells your story and engages your audience across all platforms.",
      features: ["Social Media Content", "Blog Writing", "Video Production", "Graphic Design"]
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Strategic optimization and marketing to increase your visibility and reach your target audience.",
      features: ["SEO Optimization", "PPC Campaigns", "Social Media Ads", "Analytics"]
    },
    {
      icon: BarChart3,
      title: "Growth Strategy",
      description: "Data-driven strategies and consulting to scale your business and maximize your marketing ROI.",
      features: ["Market Analysis", "Campaign Strategy", "Performance Tracking", "Consulting"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive marketing solutions designed to elevate your brand and accelerate your growth
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="premium-card p-8 rounded-2xl group h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm">
                            <ArrowUpRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA section */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1100ms' }}>
          <div className="premium-card p-12 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-6 gradient-text">
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business reach new heights. 
              Every great journey starts with a single conversation.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 glow-effect"
            >
              Start Your Project
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { useEffect, useRef, useState } from 'react';

const OurClientsSection = () => {
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

  // Sample client logos/brands - in a real app, these would come from your data
  const clients = [
    { name: "Nike", logo: "https://images.unsplash.com/photo-1562171984-06bf4d4b0e65?w=200&h=100&fit=crop&crop=center" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop&crop=center" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop&crop=center" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=100&fit=crop&crop=center" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop&crop=center" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&crop=center" },
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=100&fit=crop&crop=center" },
  ];

  return (
    <section 
      id="our-clients"
      ref={sectionRef} 
      className="py-24 px-6 bg-muted/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Our Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Trusted by leading brands worldwide to elevate their digital presence
          </p>
        </div>

        {/* Horizontal scrolling clients showcase */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Gradient overlays for smooth scroll appearance */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-8 py-8 px-4 animate-scroll-horizontal">
                {/* Duplicate the array to create seamless loop */}
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 w-48 h-24 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center p-4 group"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "200+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "3+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
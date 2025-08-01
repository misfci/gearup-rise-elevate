import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const OurClientsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample client logos/brands - in a real app, these would come from your data
  const clients = [
    { name: "Nike", logo: "https://images.unsplash.com/photo-1562171984-06bf4d4b0e65?w=400&h=200&fit=crop&crop=center" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=200&fit=crop&crop=center" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=200&fit=crop&crop=center" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=400&h=200&fit=crop&crop=center" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&h=200&fit=crop&crop=center" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop&crop=center" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&crop=center" },
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=200&fit=crop&crop=center" },
  ];

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

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const nextClient = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevClient = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const scrollToClient = (index: number) => {
    if (containerRef.current) {
      const clientWidth = 380; // Updated width including gap
      containerRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToClient(currentIndex);
  }, [currentIndex]);

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

        {/* Client showcase with navigation */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/10"
              onClick={prevClient}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/10"
              onClick={nextClient}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div 
                ref={containerRef}
                className="flex gap-12 py-8 px-4 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {clients.map((client, index) => (
                  <div
                    key={client.name}
                    className={`flex-shrink-0 w-80 h-48 bg-background/80 backdrop-blur-sm rounded-2xl border transition-all duration-500 flex items-center justify-center p-6 group ${
                      index === currentIndex 
                        ? 'border-primary/60 shadow-lg scale-105 animate-pulse' 
                        : 'border-border/30 hover:border-primary/40 hover:scale-102'
                    }`}
                    style={{
                      transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className={`max-w-full max-h-full object-contain transition-all duration-500 ${
                        index === currentIndex 
                          ? 'filter-none opacity-100' 
                          : 'filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {clients.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary shadow-lg' 
                      : 'bg-border hover:bg-primary/60'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
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
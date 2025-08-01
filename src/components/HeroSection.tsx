import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, TrendingUp, Zap } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float opacity-30">
        <ArrowUp className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-40 right-32 animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
        <Zap className="w-10 h-10 text-primary" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'rise-animation' : 'opacity-0'}`}>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/a076f2e0-db85-4c93-b4d8-f479c4c3aaf3.png" 
              alt="Gear Up Marketing Solutions Logo" 
              className="w-24 h-24 md:w-32 md:h-32 animate-pulse-glow"
            />
          </div>

          {/* Company name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Gear Up
            <span className="block gradient-text">Marketing</span>
            <span className="block text-4xl md:text-5xl font-medium text-muted-foreground">
              Solutions
            </span>
          </h1>

          {/* Main tagline */}
          <div className="mb-8 space-y-4">
            <p className="text-2xl md:text-3xl font-light text-muted-foreground">
              Our Content Creators
            </p>
            <p className="text-3xl md:text-4xl font-semibold gradient-text">
              Raise Your Brand's Voice
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We transform brands through strategic storytelling, dynamic content creation, 
            and data-driven marketing solutions that elevate your presence in the digital landscape.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('our-clients');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowUp className="w-4 h-4 rotate-180" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
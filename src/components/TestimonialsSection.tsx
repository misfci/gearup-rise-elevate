import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Gear Up Marketing Solutions transformed our brand completely. Their creative approach and strategic thinking helped us achieve a 300% increase in engagement within just three months.",
      author: "Sarah Chen",
      position: "CEO",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      quote: "The team's ability to understand our vision and translate it into compelling content is remarkable. They don't just create marketing – they create connections.",
      author: "Marcus Rodriguez",
      position: "Marketing Director",
      company: "Urban Wellness Co.",
      rating: 5
    },
    {
      quote: "Working with Gear Up was a game-changer. Their content strategy elevated our brand voice and helped us reach audiences we never thought possible.",
      author: "Emily Watson",
      position: "Founder",
      company: "GreenSpace Innovations",
      rating: 5
    },
    {
      quote: "Professional, creative, and results-driven. The ROI on our investment with Gear Up has exceeded all expectations. Highly recommended!",
      author: "David Kim",
      position: "CMO",
      company: "Digital Horizon",
      rating: 5
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it – hear from the brands we've helped elevate
          </p>
        </div>

        {/* Testimonial display */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="premium-card p-12 rounded-3xl text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            {/* Stars */}
            <div className="flex justify-center mb-8">
              {[...Array(currentData.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-foreground">
              "{currentData.quote}"
            </blockquote>

            {/* Author info */}
            <div className="space-y-2">
              <p className="text-xl font-semibold gradient-text">{currentData.author}</p>
              <p className="text-muted-foreground">
                {currentData.position} at {currentData.company}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className={`grid md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: "150+", label: "Brands Elevated", suffix: "" },
            { number: "500", label: "Average Growth", suffix: "%" },
            { number: "98", label: "Client Satisfaction", suffix: "%" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
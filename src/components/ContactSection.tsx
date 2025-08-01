import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUpRight, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@gearupmarketing.com",
      href: "mailto:hello@gearupmarketing.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: "#"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-muted/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Rise?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Let's start the conversation about elevating your brand. Every journey begins with a single step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="premium-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <Input 
                    id="company" 
                    placeholder="Your Company" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project and goals..." 
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold transition-all duration-300 hover:scale-105 glow-effect"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact info and CTA */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            {/* Contact information */}
            <div className="premium-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a 
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional CTA */}
            <div className="premium-card p-8 rounded-2xl text-center">
              <h4 className="text-xl font-semibold mb-4">Prefer Contact on WhatsApp?</h4>
              <p className="text-muted-foreground mb-6">
                Let's talk directly on WhatsApp and explore how we can elevate your brand together.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/201008165790" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="premium-card p-12 rounded-3xl">
            <h3 className="text-4xl font-bold mb-4 gradient-text">
              Your Brand's Journey Starts Here
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join the brands that have chosen to rise above the competition. Let's create something extraordinary together.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Mail, Linkedin, Github, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * INFERNUM PREMIUM PORTFOLIO
 * Design Philosophy: Van Gogh's emotional expressionism + Apple's premium glassmorphism
 * + Infernum's character art aesthetic
 * 
 * Features:
 * - Single-page layout with smooth scroll animations
 * - Advanced parallax and stagger effects
 * - Side-sliding animations for portfolio items
 * - Glass-effect cards with frosted blur
 * - Client-focused CTAs for commissions
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const portfolioRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavSticky(window.scrollY > 50);

      // Trigger animations for visible items
      portfolioRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            setVisibleItems((prev) => new Set(prev).add(idx));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioItems = [
    {
      title: "Character Design - Pixel",
      category: "Digital Illustration",
      image: "/manus-storage/IMG-20250712-WA00071_61904abc.jpg",
      description: "A vibrant character design showcasing expressive line work and dynamic composition",
    },
    {
      title: "Character Portrait - Casual",
      category: "Character Art",
      image: "/manus-storage/IMG-20250727-WA0033_a8c326f1.jpg",
      description: "Intimate character study with attention to detail and emotional depth",
    },
    {
      title: "Dynamic Pose Study",
      category: "Illustration",
      image: "/manus-storage/IMG-20250824-WA0000_77cb01d1.jpg",
      description: "Bold character pose with striking color palette and confident line work",
    },
    {
      title: "Character Concept",
      category: "Design",
      image: "/manus-storage/IMG-20250809-WA0055_987580b2.jpg",
      description: "Detailed character concept with rich storytelling through visual design",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isNavSticky
            ? "glass py-3 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-primary">INFERNUM</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#portfolio" className="text-foreground/70 hover:text-foreground transition-smooth text-sm font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-smooth text-sm font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-smooth text-sm font-medium">
              Contact
            </a>
            <Button
              className="bg-primary hover:bg-primary/90 text-white transition-smooth"
              size="sm"
            >
              Commission
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Content */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div
              className="space-y-8"
              style={{
                animation: "fadeInLeft 0.8s ease-out",
              }}
            >
              <div className="space-y-4">
                <div className="inline-block glass px-4 py-2 text-sm font-semibold text-primary">
                  ✨ Digital Character Artist
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                  Crafting <span className="text-primary">Characters</span> That Live
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                  Bringing imagination to life through expressive character design, vibrant illustrations, and compelling visual storytelling. Ready to bring your vision to reality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white transition-smooth hover:scale-105 active:scale-95"
                >
                  Get Commission
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/30 hover:bg-white/10 transition-smooth"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                {[
                  { number: "50+", label: "Projects" },
                  { number: "30+", label: "Clients" },
                  { number: "5+", label: "Years" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Featured Artwork */}
            <div
              className="relative h-96 md:h-full min-h-96"
              style={{
                animation: "fadeInRight 0.8s ease-out",
              }}
            >
              <div className="glass p-4 h-full overflow-hidden rounded-3xl">
              <img
                src="/manus-storage/IMG-20250727-WA0033_a8c326f1.jpg"
                alt="Featured Work"
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  transform: `translateY(${scrollY * 0.3}px)`,
                }}
              />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass px-6 py-3 rounded-full shadow-premium">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-semibold text-sm">Premium Artist</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/40 w-6 h-6" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
              Featured Works
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              A selection of character designs and illustrations that showcase artistic vision and technical excellence
            </p>
          </div>

          {/* Portfolio Grid with advanced animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  portfolioRefs.current[idx] = el;
                }}
                className={`group glass overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-premium hover:scale-105 ${
                  visibleItems.has(idx) ? "animate-in" : "opacity-0"
                }`}
                style={{
                  animation: visibleItems.has(idx)
                    ? `slideIn${idx % 2 === 0 ? "Left" : "Right"} 0.6s ease-out ${idx * 0.1}s both`
                    : "none",
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-80 md:h-96">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                    {item.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-smooth">
                    View Details <ChevronDown className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div
              className="glass p-8 h-96 flex items-center justify-center overflow-hidden rounded-3xl"
              style={{
                animation: "fadeInLeft 0.8s ease-out",
              }}
            >
              <img
                src="/manus-storage/IMG-20250712-WA00071_61904abc.jpg"
                alt="About"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right: Content */}
            <div
              style={{
                animation: "fadeInRight 0.8s ease-out",
              }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
                About <span className="text-primary">Infernum</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                I'm a passionate digital character artist dedicated to creating compelling, expressive characters that tell stories. With a focus on vibrant color palettes, dynamic poses, and meticulous attention to detail, I bring imagination to life.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                My work spans character design, illustration, and concept art. Whether you're looking for a unique character for your project or a custom commission, I'm here to collaborate and create something extraordinary.
              </p>

              {/* Skills */}
              <div className="space-y-4 mb-8">
                {[
                  "Character Design & Illustration",
                  "Digital Painting & Concept Art",
                  "Custom Commission Work",
                  "Animation & Storyboarding",
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white transition-smooth hover:scale-105 active:scale-95"
              >
                Start a Commission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
              Let's Create Together
            </h2>
            <p className="text-xl text-foreground/60">
              Ready to commission your next character? Get in touch and let's bring your vision to life.
            </p>
          </div>

          {/* Contact Form */}
          <div className="glass p-12 rounded-3xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
              </div>
              <input
                type="text"
                placeholder="Project Title"
                className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              />
              <textarea
                placeholder="Tell me about your project, character ideas, style preferences, and timeline..."
                rows={6}
                className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white transition-smooth hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Commission Request
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: Mail, href: "mailto:infernum@example.com", label: "Email" },
              { icon: Linkedin, href: "https://discord.gg/WVB3J5xzA", label: "Discord" },
              { icon: Github, href: "https://www.instagram.com/atharva_devrajan", label: "Instagram" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 hover:bg-primary hover:text-white transition-smooth hover:scale-110 active:scale-95"
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-foreground/10 py-8">
        <div className="container text-center text-foreground/60 text-sm">
          <p>© 2026 Infernum - Premium Character Artist. All rights reserved.</p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation: fadeIn 0.6s ease-out;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Focus styles for accessibility */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }

        /* Hover lift effect */
        .group:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </div>
  );
}

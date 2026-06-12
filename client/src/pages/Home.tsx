import { useState, useEffect } from "react";
import { ChevronDown, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Luminous Impressionism
 * Van Gogh's emotional expressionism + Apple's premium glassmorphism
 * - Painterly backgrounds with soft, blurred brushstrokes
 * - Sharp glass-effect cards with frosted blur
 * - Deep indigos, warm golds, muted teals
 * - Layered depth through parallax and staggered animations
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioItems = [
    {
      title: "Starry Visions",
      category: "Digital Art",
      description: "An exploration of impressionist techniques in modern digital media",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/accent-gradient-orbs-XPKWowsLQdyHMZGDreRKrf.webp",
    },
    {
      title: "Chromatic Harmony",
      category: "Color Study",
      description: "A deep dive into color theory and emotional resonance",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/accent-gradient-orbs-XPKWowsLQdyHMZGDreRKrf.webp",
    },
    {
      title: "Ethereal Landscapes",
      category: "Mixed Media",
      description: "Blending traditional and digital techniques for immersive experiences",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/accent-gradient-orbs-XPKWowsLQdyHMZGDreRKrf.webp",
    },
    {
      title: "Abstract Narratives",
      category: "Installation Art",
      description: "Interactive installations that tell stories through form and color",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/accent-gradient-orbs-XPKWowsLQdyHMZGDreRKrf.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isNavSticky
            ? "glass py-3 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            <span className="font-display">A</span>rtistry
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
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/hero-background-van-gogh-hCXUEccVmyTqDApr56a2Ys.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background/80" />

        {/* Content */}
        <div className="container relative z-10 text-center">
          <div
            className="glass p-12 md:p-16 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Where Art Meets <span className="text-primary">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 font-light">
              Crafting visual experiences that blend classical artistry with contemporary design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white transition-smooth"
              >
                Explore Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/30 hover:bg-white/10 transition-smooth"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60 w-6 h-6" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-background relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A curated selection of projects that showcase artistic vision and technical excellence
            </p>
          </div>

          {/* Portfolio Grid - Asymmetric Masonry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className={`group glass overflow-hidden cursor-pointer transition-smooth hover:shadow-premium hover:scale-105 ${
                  idx === 0 || idx === 3 ? "lg:col-span-1 lg:row-span-2" : ""
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 md:h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-smooth duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-smooth">
                    View Project <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/2 -right-32 w-64 h-64 opacity-30 pointer-events-none">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/accent-gradient-orbs-XPKWowsLQdyHMZGDreRKrf.webp"
            alt=""
            className="w-full h-full"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="glass p-8 h-96 flex items-center justify-center overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/accent-gradient-orbs-XPKWowsLQdyHMZGDreRKrf.webp"
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                About My Journey
              </h2>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                With over a decade of experience in visual arts, I've dedicated myself to exploring the intersection of classical techniques and contemporary design. My work draws inspiration from the emotional depth of impressionism while embracing the precision of modern aesthetics.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Every project is an opportunity to tell a story through color, form, and composition—creating experiences that resonate with viewers on both intellectual and emotional levels.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: "150+", label: "Projects" },
                  { number: "50+", label: "Clients" },
                  { number: "12", label: "Awards" },
                ].map((stat, idx) => (
                  <div key={idx} className="glass p-4 text-center">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-foreground/60 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white transition-smooth"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Let's Create Together
            </h2>
            <p className="text-lg text-foreground/60">
              Have a project in mind? I'd love to hear from you
            </p>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
              </div>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white transition-smooth"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: Mail, href: "mailto:hello@artistry.com" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="glass p-4 hover:bg-primary hover:text-white transition-smooth"
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
          <p>© 2026 Artistic Portfolio. Crafted with passion and precision.</p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
          animation: fadeInUp 0.8s ease-out;
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .slide-in-from-bottom-4 {
          animation: slideInFromBottom 0.8s ease-out;
        }

        @keyframes slideInFromBottom {
          from {
            transform: translateY(16px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Hover effects for portfolio items */
        .group:hover {
          transform: translateY(-8px);
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
      `}</style>
    </div>
  );
}

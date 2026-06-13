import { useState, useEffect, useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

/**
 * INFERNUM MINIMALIST PORTFOLIO
 * Design: Starry Night (Van Gogh) background + horizontal scroll gallery
 * Young artist (17, Class 12, Varanasi) - minimal UI, maximum art focus
 * 
 * Features:
 * - Animated starry night background
 * - Hero intro section
 * - Horizontal scroll gallery with curve effect (frames side-by-side)
 * - Multiple scroll animations (vertical + horizontal)
 * - Mobile-optimized responsive design
 * - Social links section
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (galleryRef.current) {
        setScrollX(galleryRef.current.scrollLeft);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const artworks = [
    {
      title: "Pixel",
      image: "/manus-storage/IMG-20250712-WA00071_61904abc.jpg",
    },
    {
      title: "Casual",
      image: "/manus-storage/IMG-20250727-WA0033_a8c326f1.jpg",
    },
    {
      title: "Dynamic",
      image: "/manus-storage/IMG-20250824-WA0000_77cb01d1.jpg",
    },
    {
      title: "Concept",
      image: "/manus-storage/IMG-20250809-WA0055_987580b2.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Starry Night Background */}
      <div className="fixed inset-0 z-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#1a1a3e] to-[#0f0f1e]" />
        
        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomSize = Math.random() * 2 + 0.5;
            const randomDuration = Math.random() * 3 + 2;
            const randomDelay = Math.random() * 2;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                  width: `${randomSize}px`,
                  height: `${randomSize}px`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animation: `twinkle ${randomDuration}s ease-in-out ${randomDelay}s infinite`,
                }}
              />
            );
          })}
        </div>

        {/* Floating nebula orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-center">
          <div
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0.3, 1 - scrollY / 800),
            }}
            className="transition-all duration-300"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              INFERNUM
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-2 font-light">
              Character Artist
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-8">
              Varanasi • Class 12 • JEE & UCEED Prep
            </p>
            <div className="text-gray-400 text-sm md:text-base">
              ↓ Scroll to explore ↓
            </div>
          </div>
        </section>

        {/* Horizontal Scroll Gallery Section */}
        <section className="relative py-20 md:py-32 px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Featured Works
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Scroll horizontally to explore →
            </p>
          </div>

          {/* Gallery Container with Horizontal Scroll */}
          <div
            ref={galleryRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-8 scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Spacer for mobile */}
            <div className="flex-shrink-0 w-4 md:w-8" />

            {artworks.map((art, idx) => {
              // Calculate rotation based on scroll position
              const rotationAngle = (scrollX / 100 + idx) * 5;

              return (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{
                    width: "clamp(280px, 80vw, 500px)",
                    perspective: "1200px",
                  }}
                >
                  {/* Frame with curve effect */}
                  <div
                    className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
                    style={{
                      transform: `rotateY(${rotationAngle}deg) rotateX(${
                        Math.sin(scrollX / 200 + idx) * 5
                      }deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Frame border */}
                    <div className="absolute inset-0 border-8 md:border-12 border-gray-800/80 rounded-2xl pointer-events-none z-10 bg-gradient-to-br from-white/5 to-transparent" />

                    {/* Image */}
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {art.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Spacer for mobile */}
            <div className="flex-shrink-0 w-4 md:w-8" />
          </div>

          {/* Scroll hint for mobile */}
          <div className="text-center mt-8 md:hidden">
            <p className="text-gray-500 text-xs animate-pulse">
              ← Swipe to see more →
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 max-w-2xl mx-auto">
          <div
            style={{
              opacity: Math.min(1, (scrollY - 1200) / 400),
              transform: `translateY(${Math.max(0, (1200 - scrollY) * 0.2)}px)`,
            }}
            className="transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              I'm a 17-year-old digital character artist from Varanasi, currently in Class 12 while preparing for JEE and UCEED. My passion lies in creating expressive character designs with vibrant colors and dynamic poses.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Through my art, I explore storytelling, emotion, and visual design. Every piece is a journey of learning and growth.
            </p>
          </div>
        </section>

        {/* Social Section */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div
            style={{
              opacity: Math.min(1, (scrollY - 1600) / 400),
            }}
            className="transition-all duration-300"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connect
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Follow my journey and stay updated
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12">
              {[
                {
                  name: "Instagram",
                  icon: Github,
                  href: "https://www.instagram.com/atharva_devrajan",
                  color: "from-pink-500 to-purple-500",
                },
                {
                  name: "Discord",
                  icon: Mail,
                  href: "https://discord.gg/WVB3J5xzA",
                  color: "from-blue-500 to-indigo-500",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  {/* Glowing background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                  />

                  {/* Button */}
                  <div className="relative px-8 py-4 md:px-10 md:py-5 border border-gray-600 rounded-full hover:border-white transition-all duration-300 group-hover:bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      <span className="text-white font-medium text-sm md:text-base">
                        {social.name}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 md:py-16 px-4 md:px-8 text-center border-t border-gray-800/30">
          <p className="text-gray-500 text-xs md:text-sm">
            © 2026 Infernum • Varanasi, India
          </p>
        </footer>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar for gallery but keep functionality */
        .overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }

        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: transparent;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          body {
            -webkit-user-select: none;
            user-select: none;
          }

          a, button {
            -webkit-user-select: text;
            user-select: text;
          }
        }

        /* Smooth transitions */
        * {
          transition-property: opacity, transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Focus styles */
        a:focus-visible,
        button:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

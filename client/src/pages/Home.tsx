import { useState, useEffect, useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

/**
 * INFERNUM MINIMALIST PORTFOLIO
 * Design: Van Gogh's Starry Night painting + vibrant typography
 * Young artist (17, Class 12, Varanasi) - minimal UI, maximum art focus
 * 
 * Features:
 * - Van Gogh Starry Night background with swirling brushstrokes
 * - Vibrant, popping text colors (golden yellows, bright whites)
 * - Hero intro section with parallax
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Van Gogh Starry Night Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/van-gogh-starry-night-bg-K4Gs2NjCjM27YRSfwu7qvf.webp"
          alt="Van Gogh Starry Night Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
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
            {/* Main Title - Soft Golden with subtle glow */}
            <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-tight drop-shadow-lg"
              style={{
                color: "#E8D5B7",
                textShadow: "0 0 15px rgba(232, 213, 183, 0.4), 0 0 30px rgba(232, 213, 183, 0.2)",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.05em",
                fontWeight: "700",
              }}
            >
              INFERNUM
            </h1>

            {/* Subtitle - Soft White */}
            <p className="text-lg md:text-2xl mb-2 font-light drop-shadow-lg"
              style={{
                color: "#F5F5F0",
                textShadow: "0 0 8px rgba(245, 245, 240, 0.3)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Character Artist
            </p>

            {/* Location & Status - Muted Blue */}
            <p className="text-sm md:text-base mb-8 drop-shadow-lg"
              style={{
                color: "#A8C5DD",
                textShadow: "0 0 8px rgba(168, 197, 221, 0.3)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              Varanasi • Class 12 • JEE & UCEED Prep
            </p>

            {/* Scroll indicator - Soft Gold */}
            <div className="text-sm md:text-base drop-shadow-lg"
              style={{
                color: "#D4AF9F",
                textShadow: "0 0 8px rgba(212, 175, 159, 0.3)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              ↓ Scroll to explore ↓
            </div>
          </div>
        </section>

        {/* Horizontal Scroll Gallery Section */}
        <section className="relative py-20 md:py-32 px-4 md:px-8">
          <div className="mb-12 text-center">
            {/* Section Title - Soft Gold */}
            <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg"
              style={{
                color: "#E8D5B7",
                textShadow: "0 0 12px rgba(232, 213, 183, 0.3)",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.02em",
              }}
            >
              Featured Works
            </h2>
            {/* Subtitle - Muted Blue */}
            <p className="text-sm md:text-base drop-shadow-lg"
              style={{
                color: "#A8C5DD",
                textShadow: "0 0 8px rgba(168, 197, 221, 0.3)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
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
                      boxShadow: "0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(0, 217, 255, 0.2)",
                    }}
                  >
                    {/* Frame border with gradient */}
                    <div className="absolute inset-0 border-8 md:border-12 rounded-2xl pointer-events-none z-10"
                      style={{
                        borderColor: "#D4AF9F",
                        background: "linear-gradient(135deg, rgba(232, 213, 183, 0.08) 0%, rgba(168, 197, 221, 0.04) 100%)",
                        boxShadow: "inset 0 0 15px rgba(232, 213, 183, 0.1)",
                      }}
                    />

                    {/* Image */}
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                    {/* Title - Soft Gold */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-lg md:text-xl font-semibold drop-shadow-lg"
                        style={{
                          color: "#E8D5B7",
                          textShadow: "0 0 8px rgba(232, 213, 183, 0.4)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
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
            <p className="text-xs animate-pulse drop-shadow-lg"
              style={{
                color: "#00D9FF",
                textShadow: "0 0 10px rgba(0, 217, 255, 0.6)",
              }}
            >
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
            {/* Section Title - Soft Gold */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg"
              style={{
                color: "#E8D5B7",
                textShadow: "0 0 12px rgba(232, 213, 183, 0.3)",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.02em",
              }}
            >
              About
            </h2>

            {/* Body Text - Soft White */}
            <p className="text-base md:text-lg leading-relaxed mb-4 drop-shadow-lg"
              style={{
                color: "#F5F5F0",
                textShadow: "0 0 8px rgba(245, 245, 240, 0.2)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.7",
              }}
            >
              I'm a 17-year-old digital character artist from Varanasi, currently in Class 12 while preparing for JEE and UCEED. My passion lies in creating expressive character designs with vibrant colors and dynamic poses.
            </p>
            <p className="text-base md:text-lg leading-relaxed drop-shadow-lg"
              style={{
                color: "#F5F5F0",
                textShadow: "0 0 8px rgba(245, 245, 240, 0.2)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.7",
              }}
            >
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
              {/* Section Title - Soft Gold */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg"
                style={{
                  color: "#E8D5B7",
                  textShadow: "0 0 12px rgba(232, 213, 183, 0.3)",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.02em",
                }}
              >
                Connect
              </h2>
              {/* Subtitle - Muted Blue */}
              <p className="text-sm md:text-base drop-shadow-lg"
                style={{
                  color: "#A8C5DD",
                  textShadow: "0 0 8px rgba(168, 197, 221, 0.3)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
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
                  className="group relative transition-all duration-300 hover:scale-110"
                >
                  {/* Glowing background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                  />

                  {/* Button */}
                  <div className="relative px-8 py-4 md:px-10 md:py-5 rounded-full hover:backdrop-blur-sm transition-all duration-300"
                    style={{
                      border: "2px solid #D4AF9F",
                      background: "rgba(232, 213, 183, 0.08)",
                      boxShadow: "0 0 12px rgba(232, 213, 183, 0.15)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: "#E8D5B7" }} />
                      <span className="font-medium text-sm md:text-base drop-shadow-lg"
                        style={{
                          color: "#E8D5B7",
                          textShadow: "0 0 8px rgba(232, 213, 183, 0.4)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
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
        <footer className="py-12 md:py-16 px-4 md:px-8 text-center border-t drop-shadow-lg"
          style={{
            borderColor: "rgba(232, 213, 183, 0.15)",
          }}
        >
          <p className="text-xs md:text-sm drop-shadow-lg"
            style={{
              color: "#A8C5DD",
              textShadow: "0 0 8px rgba(168, 197, 221, 0.3)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            © 2026 Infernum • Varanasi, India
          </p>
        </footer>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar for gallery but keep functionality */
        .overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 215, 0, 0.4) transparent;
        }

        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: transparent;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(232, 213, 183, 0.3);
          border-radius: 2px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(232, 213, 183, 0.5);
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
          outline: 2px solid rgba(232, 213, 183, 0.6);
          outline-offset: 2px;
        }

        /* Subtle text glow effect */
        h1, h2 {
          animation: textGlow 4s ease-in-out infinite;
        }

        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 12px rgba(232, 213, 183, 0.3), 0 0 24px rgba(232, 213, 183, 0.15);
          }
          50% {
            text-shadow: 0 0 18px rgba(232, 213, 183, 0.4), 0 0 36px rgba(232, 213, 183, 0.2);
          }
        }
      `}</style>
    </div>
  );
}

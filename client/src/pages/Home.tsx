import { useState, useEffect, useRef } from "react";
import { Mail, Github } from "lucide-react";

/**
 * INFERNUM PORTFOLIO - CORRECTED DESIGN
 * 
 * SECTION 1 (Hero): Van Gogh Starry Night background
 * SECTION 2 (Gallery): Clean WHITE background with horizontal scrolling frames
 *                      Smooth reveal animations as frames enter viewport
 * SECTION 3 (Social): Van Gogh Irises painting background
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [frameVisibility, setFrameVisibility] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (galleryRef.current) {
        setScrollX(galleryRef.current.scrollLeft);
      }

      // Check frame visibility
      if (galleryRef.current) {
        const frames = galleryRef.current.querySelectorAll('[data-frame]');
        const visibility = Array.from(frames).map((frame) => {
          const rect = frame.getBoundingClientRect();
          return rect.left < window.innerWidth && rect.right > 0;
        });
        setFrameVisibility(visibility);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
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
    <div className="relative">
      {/* ===== SECTION 1: HERO - VAN GOGH STARRY NIGHT ===== */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/van-gogh-starry-night-bg-K4Gs2NjCjM27YRSfwu7qvf.webp')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* Hero Content */}
        <div className="relative z-10">
          <div
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0.3, 1 - scrollY / 800),
            }}
            className="transition-all duration-300"
          >
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
        </div>
      </section>

      {/* ===== SECTION 2: GALLERY - WHITE BACKGROUND ===== */}
      <section 
        className="relative min-h-screen py-20 md:py-32 px-4 md:px-8 overflow-hidden"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Gallery Content */}
        <div className="relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg"
              style={{
                color: "#2C3E50",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.02em",
              }}
            >
              Featured Works
            </h2>
            <p className="text-sm md:text-base"
              style={{
                color: "#5D6D7B",
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
            <div className="flex-shrink-0 w-4 md:w-8" />

            {artworks.map((art, idx) => {
              const rotationAngle = (scrollX / 100 + idx) * 5;

              return (
                <div
                  key={idx}
                  data-frame={idx}
                  className="flex-shrink-0"
                  style={{
                    width: "clamp(280px, 80vw, 500px)",
                    perspective: "1200px",
                    opacity: frameVisibility[idx] ? 1 : 0.3,
                    transform: frameVisibility[idx] 
                      ? "translateY(0) scale(1)" 
                      : "translateY(30px) scale(0.95)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Museum Frame Container */}
                  <div
                    className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
                    style={{
                      transform: `rotateY(${rotationAngle}deg) rotateX(${
                        Math.sin(scrollX / 200 + idx) * 5
                      }deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Outer Frame - Wood */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #8B7355 0%, #A0826D 50%, #8B7355 100%)",
                        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.3), inset 0 -1px 3px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.4)",
                        padding: "12px",
                      }}
                    >
                      {/* Inner Mat - Cream */}
                      <div className="absolute inset-0 rounded"
                        style={{
                          background: "linear-gradient(135deg, #F5F1E8 0%, #E8DFD3 100%)",
                          padding: "16px",
                          margin: "12px",
                          boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {/* Image Container */}
                        <div className="w-full h-full rounded overflow-hidden"
                          style={{
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <img
                            src={art.image}
                            alt={art.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-20" />

                    {/* Title Plate - Museum Style */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent z-30">
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

            <div className="flex-shrink-0 w-4 md:w-8" />
          </div>

          <div className="text-center mt-8 md:hidden">
            <p className="text-xs animate-pulse"
              style={{
                color: "#5D6D7B",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              ← Swipe to see more →
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: ABOUT - WHITE BACKGROUND ===== */}
      <section 
        className="relative py-20 md:py-32 px-4 md:px-8 max-w-2xl mx-auto"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="relative z-10">
          <div
            style={{
              opacity: Math.min(1, (scrollY - 1200) / 400),
              transform: `translateY(${Math.max(0, (1200 - scrollY) * 0.2)}px)`,
            }}
            className="transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                color: "#2C3E50",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.02em",
              }}
            >
              About
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-4"
              style={{
                color: "#34495E",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.7",
              }}
            >
              I'm a 17-year-old digital character artist from Varanasi, currently in Class 12 while preparing for JEE and UCEED. My passion lies in creating expressive character designs with vibrant colors and dynamic poses.
            </p>
            <p className="text-base md:text-lg leading-relaxed"
              style={{
                color: "#34495E",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.7",
              }}
            >
              Through my art, I explore storytelling, emotion, and visual design. Every piece is a journey of learning and growth.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SOCIAL - VAN GOGH IRISES ===== */}
      <section 
        className="relative min-h-screen py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663489963298/TeLdSdeGEfskEZUP2A7r4H/van-gogh-irises-bg-cReXPctTGUJbXcSepvkgpx.webp')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Social Content */}
        <div className="relative z-10">
          <div
            style={{
              opacity: Math.min(1, (scrollY - 1600) / 400),
            }}
            className="transition-all duration-300"
          >
            <div className="text-center mb-12">
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                  />

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
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 md:py-16 px-4 md:px-8 text-center border-t drop-shadow-lg bg-black/80"
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

      {/* CSS Animations */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(44, 62, 80, 0.4) transparent;
        }

        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: transparent;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(44, 62, 80, 0.3);
          border-radius: 2px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(44, 62, 80, 0.5);
        }

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

        * {
          transition-property: opacity, transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        a:focus-visible,
        button:focus-visible {
          outline: 2px solid rgba(232, 213, 183, 0.6);
          outline-offset: 2px;
        }

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

import { useState, useEffect } from "react";
import { Mail, Github } from "lucide-react";
import GarageGallery from "@/components/GarageGallery";

/**
 * INFERNUM PORTFOLIO - FINAL VERSION
 * 
 * SECTION 1 (Hero): Van Gogh Starry Night background
 * SECTION 2 (Gallery): GTA Garage with spotlight effect (Three.js)
 * SECTION 3 (About): Elegant white background with improved text
 * SECTION 4 (Social): Van Gogh Irises painting background (PEAK - UNCHANGED)
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
              Digital Character Artist
            </p>

            <p className="text-sm md:text-base mb-8 drop-shadow-lg"
              style={{
                color: "#A8C5DD",
                textShadow: "0 0 8px rgba(168, 197, 221, 0.3)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              Varanasi • Class 12 • JEE & UCEED Aspirant
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

      {/* ===== SECTION 2: GALLERY - GTA GARAGE WITH SPOTLIGHT ===== */}
      <section className="relative">
        <GarageGallery artworks={artworks} />
      </section>

      {/* ===== SECTION 3: ABOUT - ELEGANT WHITE BACKGROUND ===== */}
      <section 
        className="relative py-20 md:py-32 px-4 md:px-8"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            style={{
              opacity: Math.min(1, (scrollY - 1600) / 400),
              transform: `translateY(${Math.max(0, (1600 - scrollY) * 0.2)}px)`,
            }}
            className="transition-all duration-300"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8"
              style={{
                color: "#2C3E50",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.02em",
              }}
            >
              About My Work
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed"
                style={{
                  color: "#34495E",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                }}
              >
                I'm a 17-year-old digital character artist from Varanasi, currently in Class 12 while preparing for JEE and UCEED. My passion lies in creating expressive, dynamic character designs that tell stories through visual language—vibrant colors, dynamic poses, and emotional depth.
              </p>

              <p className="text-lg leading-relaxed"
                style={{
                  color: "#34495E",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                }}
              >
                Every piece I create is an exploration of emotion, movement, and artistic growth. I blend traditional art principles with digital techniques to craft characters that resonate. Whether it's a casual sketch or a fully rendered character design, each work represents my journey as an artist.
              </p>

              <p className="text-lg leading-relaxed"
                style={{
                  color: "#34495E",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                }}
              >
                I'm constantly learning, experimenting, and pushing my creative boundaries. My work draws inspiration from anime, concept art, and real-world character design. I'm available for commissions and collaborations—let's create something amazing together.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t"
              style={{
                borderColor: "rgba(44, 62, 80, 0.1)",
              }}
            >
              {[
                { number: "17", label: "Years Old" },
                { number: "4+", label: "Years Experience" },
                { number: "100+", label: "Artworks" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2"
                    style={{
                      color: "#E8D5B7",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-sm md:text-base"
                    style={{
                      color: "#5D6D7B",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SOCIAL - VAN GOGH IRISES (PEAK - UNCHANGED) ===== */}
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
              opacity: Math.min(1, (scrollY - 2200) / 400),
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

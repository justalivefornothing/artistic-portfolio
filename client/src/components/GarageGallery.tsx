import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface GarageGalleryProps {
  artworks: Array<{
    title: string;
    image: string;
  }>;
}

export default function GarageGallery({ artworks }: GarageGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const spotlightRef = useRef<THREE.SpotLight | null>(null);
  const planesRef = useRef<THREE.Mesh[]>([]);
  const currentIndexRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Wait for container to have proper dimensions
    const initScene = () => {
      const width = containerRef.current?.clientWidth || 0;
      const height = containerRef.current?.clientHeight || 0;

      if (width === 0 || height === 0) {
        requestAnimationFrame(initScene);
        return;
      }

      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf5f5f5);
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      rendererRef.current = renderer;

      // Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      const spotlight = new THREE.SpotLight(0xffffff, 2, 50, Math.PI / 4, 0.8, 2);
      spotlight.position.set(0, 8, 5);
      spotlight.target.position.set(0, 0, 0);
      scene.add(spotlight);
      scene.add(spotlight.target);
      spotlightRef.current = spotlight;

      // Create textured planes for artwork
      const textureLoader = new THREE.TextureLoader();
      let loadedCount = 0;

      artworks.forEach((artwork, index) => {
        textureLoader.load(artwork.image, (texture: THREE.Texture) => {
          const geometry = new THREE.PlaneGeometry(3, 4);
          const material = new THREE.MeshStandardMaterial({
            map: texture,
            emissive: 0x222222,
            emissiveIntensity: 0.3,
          });
          const plane = new THREE.Mesh(geometry, material);

          // Position planes in a circle around the center
          const angle = (index / artworks.length) * Math.PI * 2;
          const radius = 8;
          plane.position.x = Math.cos(angle) * radius;
          plane.position.z = Math.sin(angle) * radius;
          plane.rotation.y = -angle;

          scene.add(plane);
          planesRef.current[index] = plane;

          loadedCount++;
          if (loadedCount === artworks.length) {
            setIsLoading(false);
          }
        });
      });

      // Handle scroll
      const handleScroll = () => {
        if (!containerRef.current) return;

        const sectionTop = containerRef.current.offsetTop;
        const sectionHeight = containerRef.current.offsetHeight;
        const scrollTop = window.scrollY;
        const relativeScroll = scrollTop - sectionTop;
        const progress = Math.max(0, Math.min(1, relativeScroll / sectionHeight));

        const newIndex = Math.floor(progress * artworks.length);
        currentIndexRef.current = Math.min(newIndex, artworks.length - 1);
        setCurrentIndex(currentIndexRef.current);

        // Rotate spotlight based on scroll
        if (spotlightRef.current) {
          const angle = progress * Math.PI * 2;
          spotlightRef.current.position.x = Math.sin(angle) * 10;
          spotlightRef.current.position.z = Math.cos(angle) * 5 + 5;
        }
      };

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;

        cameraRef.current.aspect = newWidth / newHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(newWidth, newHeight);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Initial calls
      handleScroll();
      handleResize();

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate planes slowly and highlight current
        planesRef.current.forEach((plane, index) => {
          if (!plane) return;
          plane.rotation.z += 0.001;

          // Highlight current plane
          if (index === currentIndexRef.current) {
            plane.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
          } else {
            plane.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          }
        });

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        
        // Proper cleanup
        planesRef.current.forEach((plane) => {
          if (plane) {
            if (plane.geometry) plane.geometry.dispose();
            if (plane.material) {
              if (Array.isArray(plane.material)) {
                plane.material.forEach((m) => m.dispose());
              } else {
                plane.material.dispose();
              }
            }
          }
        });
        renderer.dispose();
      };
    };

    initScene();
  }, [artworks]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Loading gallery...</p>
          </div>
        </div>
      )}

      {/* Overlay info */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="text-center">
          <h3
            className="text-2xl md:text-4xl font-bold mb-2 transition-all duration-500"
            style={{
              color: "#2C3E50",
              fontFamily: "'Playfair Display', serif",
              opacity: 0.9,
            }}
          >
            {artworks[currentIndex]?.title || ""}
          </h3>
          <p
            className="text-sm md:text-base transition-all duration-500"
            style={{
              color: "#5D6D7B",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {currentIndex + 1} / {artworks.length}
          </p>
        </div>
      </div>

      {/* Spotlight indicator */}
      <div className="absolute top-8 left-8 z-10">
        <div
          className="text-sm font-semibold drop-shadow-lg"
          style={{
            color: "#E8D5B7",
            textShadow: "0 0 8px rgba(232, 213, 183, 0.4)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          ↓ Scroll to illuminate ↓
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
  tagline: string;
  subTagline: string;
  duration?: number;
  accent: string;
  eyebrow: string;
}

const slides: Slide[] = [
  {
    tagline: "We Don't Just Build Websites. We Build Empires.",
    subTagline: 'Immersive design, flawless code, and a user experience that turns visitors into obsessed fans.',
    duration: 8000,
    accent: '#8B5CF6',
    eyrow: 'Web & Digital'
  } as any, // fallback for matching interface exactly
  {
    tagline: 'Invisibility is Not an Option.',
    subTagline: 'Climb the rankings and claim your throne. We turn search engines into your most powerful growth engine.',
    duration: 6000,
    accent: '#22D3EE',
    eyrow: 'Search Engine Marketing'
  } as any,
  {
    tagline: 'Stop the Scroll. Start the Conversation.',
    subTagline: "From viral visuals to strategic storytelling, we amplify your brand's voice in a noisy digital world.",
    duration: 6000,
    accent: '#EC4899',
    eyrow: 'Social Media'
  } as any
];

// Map slides to correct Slide shape to meet instruction interface exactly
const slidesList: Slide[] = slides.map(s => ({
  tagline: s.tagline,
  subTagline: s.subTagline,
  duration: s.duration,
  accent: s.accent,
  eyebrow: (s as any).eyrow
}));

const ACCENT_RGBS = [
  '139, 92, 246', // Purple
  '34, 211, 238', // Cyan
  '236, 72, 153'  // Pink
];

const ArrowButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20 ${direction === 'left' ? 'left-2 md:left-5' : 'right-2 md:right-5'} group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-end`}
    aria-label={direction === 'left' ? 'Previous Slide' : 'Next Slide'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      {direction === 'left' ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
    </svg>
  </button>
);

interface CircuitNode {
  x: number;
  y: number;
  color: string;
  pulsePhase: number;
}

interface CircuitEdge {
  from: CircuitNode;
  to: CircuitNode;
  color: string;
  progress: number;
  speed: number;
}

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const parseHexToRgb = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};

const getLastWord = (text: string) => {
  const trimmed = text.trim();
  const lastSpace = trimmed.lastIndexOf(' ');
  return lastSpace === -1 ? trimmed : trimmed.substring(lastSpace + 1);
};

// Math for Regular 3D Icosahedron
const phi = (1 + Math.sqrt(5)) / 2;
const scale = 1 / Math.sqrt(1 + phi * phi);
const valPhi = phi * scale;
const valOne = 1 * scale;

const vertices0 = [
  [-valOne, valPhi, 0], [valOne, valPhi, 0], [-valOne, -valPhi, 0], [valOne, -valPhi, 0],
  [0, -valOne, valPhi], [0, valOne, valPhi], [0, -valOne, -valPhi], [0, valOne, -valPhi],
  [valPhi, 0, -valOne], [valPhi, 0, valOne], [-valPhi, 0, -valOne], [-valPhi, 0, valOne]
];

const edges0: [number, number][] = [];
for (let i = 0; i < vertices0.length; i++) {
  const neighbors: { index: number; distSq: number }[] = [];
  for (let j = 0; j < vertices0.length; j++) {
    if (i === j) continue;
    const dx = vertices0[i][0] - vertices0[j][0];
    const dy = vertices0[i][1] - vertices0[j][1];
    const dz = vertices0[i][2] - vertices0[j][2];
    const distSq = dx * dx + dy * dy + dz * dz;
    neighbors.push({ index: j, distSq });
  }
  neighbors.sort((a, b) => a.distSq - b.distSq);
  for (let k = 0; k < 5; k++) {
    const nextIdx = neighbors[k].index;
    if (i < nextIdx) {
      edges0.push([i, nextIdx]);
    }
  }
}

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const canvasBgRef = useRef<HTMLCanvasElement>(null);
  const canvas3DRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const angleYRef = useRef<number>(0);

  const currentSlideColorRef = useRef<[number, number, number]>([139, 92, 246]);
  const targetColorRef = useRef<[number, number, number]>([139, 92, 246]);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesList.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesList.length) % slidesList.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('open-lead-modal'));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // 1. All keyframe animations in head
  useEffect(() => {
    let styleTag = document.getElementById('banner-styles');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'banner-styles';
      styleTag.innerHTML = `
        @media (prefers-reduced-motion: no-preference) {
          @keyframes bannerFadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes bannerDrawLine {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          @keyframes bannerGlowPulse {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.85;
            }
          }
          @keyframes bannerFloatY {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .banner-slide .anim-fade-up {
            opacity: 0;
            will-change: transform, opacity;
          }
          .banner-slide.slide-active .anim-fade-up-1 {
            animation: bannerFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.15s;
          }
          .banner-slide.slide-active .anim-fade-up-2 {
            animation: bannerFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.25s;
          }
          .banner-slide.slide-active .anim-fade-up-3 {
            animation: bannerFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s;
          }
          .banner-slide.slide-active em::after {
            animation: bannerDrawLine 0.55s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.35s;
          }
          .banner-float {
            animation: bannerFloatY 6s ease-in-out infinite;
          }
          .banner-glow-pulse {
            animation: bannerGlowPulse 3s ease-in-out infinite;
          }
        }
        
        .banner-slide em::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 3px;
          border-radius: 2px;
          background-color: var(--ac);
          width: 0;
        }
      `;
      document.head.appendChild(styleTag);
    }
  }, []);

  // 1b. Update active color targets on slide change
  useEffect(() => {
    targetColorRef.current = parseHexToRgb(slidesList[currentIndex].accent);
  }, [currentIndex]);

  // 2. Class active list controller
  useEffect(() => {
    slideRefs.current.forEach((el, idx) => {
      if (!el) return;
      el.classList.remove('slide-active');
      if (idx === currentIndex) {
        void el.offsetHeight; // Force reflow
        el.classList.add('slide-active');
      }
    });
  }, [currentIndex]);

  // 3. Slideshow auto-advance timing
  useEffect(() => {
    if (isPaused) return;
    const slideDuration = slidesList[currentIndex].duration || 7000;
    const timer = setTimeout(() => {
      nextSlide();
    }, slideDuration);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide, isPaused]);

  // 4. Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // 5. Unified Animation Loop Canvas background & 3D rotating wireframe icosahedron
  useEffect(() => {
    const bgCanvas = canvasBgRef.current;
    if (!bgCanvas) return;

    // A. Init circuit board nodes & edges
    const initCircuitBoard = (canvas: HTMLCanvasElement) => {
      const width = canvas.width = canvas.offsetWidth || window.innerWidth;
      const height = canvas.height = canvas.offsetHeight || window.innerHeight;
      const nodes: CircuitNode[] = [];
      const edges: CircuitEdge[] = [];
      const gridSize = 90;
      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          if (Math.random() < 0.5) {
            nodes.push({
              x: c * gridSize + (Math.random() * 30 - 15),
              y: r * gridSize + (Math.random() * 30 - 15),
              color: ACCENT_RGBS[Math.floor(Math.random() * 3)],
              pulsePhase: Math.random() * Math.PI * 2
            });
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && Math.random() < 0.4) {
            edges.push({
              from: n1,
              to: n2,
              color: n1.color,
              progress: Math.random(),
              speed: 3 + Math.random() * 5
            });
          }
        }
      }
      return { nodes, edges };
    };

    let boardData = initCircuitBoard(bgCanvas);
    let lastTime = performance.now();

    const render = (now: number) => {
      const deltaTime = (now - lastTime) / 1000;
      lastTime = now;

      // Draw background circuit
      const bgCtx = bgCanvas.getContext('2d');
      if (bgCtx) {
        bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        boardData.edges.forEach(edge => {
          edge.progress += deltaTime / edge.speed;
          if (edge.progress >= 1) edge.progress = 0;

          bgCtx.beginPath();
          bgCtx.moveTo(edge.from.x, edge.from.y);
          bgCtx.lineTo(edge.to.x, edge.to.y);
          const edgeOpacity = 0.08 + Math.sin(edge.progress * Math.PI) * 0.1;
          bgCtx.strokeStyle = `rgba(${edge.color}, ${edgeOpacity})`;
          bgCtx.lineWidth = 0.5;
          bgCtx.stroke();

          // Pulse Dot
          const px = edge.from.x + (edge.to.x - edge.from.x) * edge.progress;
          const py = edge.from.y + (edge.to.y - edge.from.y) * edge.progress;
          const dotOpacity = 0.5 * Math.sin(edge.progress * Math.PI);
          bgCtx.beginPath();
          bgCtx.arc(px, py, 1.5, 0, Math.PI * 2);
          bgCtx.fillStyle = `rgba(${edge.color}, ${dotOpacity})`;
          bgCtx.fill();
        });

        boardData.nodes.forEach(node => {
          node.pulsePhase += deltaTime * 2;
          if (node.pulsePhase > Math.PI * 2) node.pulsePhase -= Math.PI * 2;
          const nodeOpacity = 0.1 + (Math.sin(node.pulsePhase) + 1) * 0.05;
          const size = 1 + (Math.sin(node.pulsePhase) + 1) * 0.5;
          bgCtx.beginPath();
          bgCtx.arc(node.x, node.y, size, 0, Math.PI * 2);
          bgCtx.fillStyle = `rgba(${node.color}, ${nodeOpacity})`;
          bgCtx.fill();
        });
      }

      // Draw 3D wireframe icosahedron
      const threedCanvas = canvas3DRef.current;
      const threedCtx = threedCanvas ? threedCanvas.getContext('2d') : null;
      if (threedCanvas && threedCtx) {
        angleYRef.current += 0.008;
        const angleY = angleYRef.current;
        const angleX = angleY * 0.7;

        // Lerp color vectors
        const curColor = currentSlideColorRef.current;
        const targetColor = targetColorRef.current;
        const lerpSpeed = 0.04;
        curColor[0] += (targetColor[0] - curColor[0]) * lerpSpeed;
        curColor[1] += (targetColor[1] - curColor[1]) * lerpSpeed;
        curColor[2] += (targetColor[2] - curColor[2]) * lerpSpeed;

        const rgbStr = `${Math.round(curColor[0])}, ${Math.round(curColor[1])}, ${Math.round(curColor[2])}`;
        const ringColor = `rgba(${rgbStr}, 0.07)`;

        const width = threedCanvas.width;
        const height = threedCanvas.height;
        threedCtx.clearRect(0, 0, width, height);

        const projectedVertices = vertices0.map(v => {
          const cosY = Math.cos(angleY);
          const sinY = Math.sin(angleY);
          const x1 = v[0] * cosY - v[2] * sinY;
          const z1 = v[0] * sinY + v[2] * cosY;

          const cosX = Math.cos(angleX);
          const sinX = Math.sin(angleX);
          const y2 = v[1] * cosX - z1 * sinX;
          const z2 = v[1] * sinX + z1 * cosX;

          const cameraDist = 3.2;
          const proj = cameraDist / (cameraDist - z2);
          return {
            x: width / 2 + x1 * proj * 100,
            y: height / 2 + y2 * proj * 100,
            z: z2
          };
        });

        const drawRing = (tiltX: number, tiltZ: number, rotAngle: number) => {
          const steps = 60;
          threedCtx.beginPath();
          for (let i = 0; i <= steps; i++) {
            const theta = (i / steps) * Math.PI * 2;
            const radius = 1.35;
            const rx = Math.cos(theta) * radius;
            const ry = Math.sin(theta) * radius;

            const cosRot = Math.cos(rotAngle);
            const sinRot = Math.sin(rotAngle);
            const r_x1 = rx * cosRot - ry * sinRot;
            const r_y1 = rx * sinRot + ry * cosRot;

            const cosTiltX = Math.cos(tiltX);
            const sinTiltX = Math.sin(tiltX);
            const r_y2 = r_y1 * cosTiltX;
            const r_z2 = r_y1 * sinTiltX;

            const cosTiltZ = Math.cos(tiltZ);
            const sinTiltZ = Math.sin(tiltZ);
            const r_x3 = r_x1 * cosTiltZ - r_y2 * sinTiltZ;
            const r_y3 = r_x1 * sinTiltZ + r_y2 * cosTiltZ;

            const cosCameraY = Math.cos(angleY);
            const sinCameraY = Math.sin(angleY);
            const r_x4 = r_x3 * cosCameraY - r_z2 * sinCameraY;
            const r_z4 = r_x3 * sinCameraY + r_z2 * cosCameraY;

            const cosCameraX = Math.cos(angleX);
            const sinCameraX = Math.sin(angleX);
            const r_y4 = r_y3 * cosCameraX - r_z4 * sinCameraX;
            const r_z5 = r_y3 * sinCameraX + r_z4 * cosCameraX;

            const r_proj = 3.2 / (3.2 - r_z5);
            const screenX = width / 2 + r_x4 * r_proj * 100;
            const screenY = height / 2 + r_y4 * r_proj * 100;

            if (i === 0) threedCtx.moveTo(screenX, screenY);
            else threedCtx.lineTo(screenX, screenY);
          }
          threedCtx.strokeStyle = ringColor;
          threedCtx.lineWidth = 0.5;
          threedCtx.stroke();
        };

        drawRing(Math.PI / 6, Math.PI / 5, angleY * 2);
        drawRing(-Math.PI / 5, Math.PI / 6, -angleY * 2);

        // Sort and draw edges
        const edgeList = edges0.map(([i, j]) => ({
          from: projectedVertices[i],
          to: projectedVertices[j],
          avgZ: (projectedVertices[i].z + projectedVertices[j].z) / 2
        }));
        edgeList.sort((a, b) => a.avgZ - b.avgZ);

        edgeList.forEach(edge => {
          const t = (edge.avgZ + 1) / 2;
          const strokeWidth = 0.4 + t * 1.0;
          const opacity = 0.15 + t * 0.60;
          threedCtx.beginPath();
          threedCtx.moveTo(edge.from.x, edge.from.y);
          threedCtx.lineTo(edge.to.x, edge.to.y);
          threedCtx.strokeStyle = `rgba(${rgbStr}, ${opacity})`;
          threedCtx.lineWidth = strokeWidth;
          threedCtx.stroke();
        });

        // Vertices
        const vertexList = projectedVertices.map((v, idx) => ({ ...v, idx }));
        vertexList.sort((a, b) => a.z - b.z);
        vertexList.forEach(v => {
          const t = (v.z + 1) / 2;
          const radius = 1.0 + t * 2.5;
          const opacity = 0.15 + t * 0.70;

          threedCtx.beginPath();
          threedCtx.arc(v.x, v.y, radius, 0, Math.PI * 2);
          threedCtx.fillStyle = `rgba(${rgbStr}, ${opacity})`;
          threedCtx.fill();

          if (t > 0.6) {
            threedCtx.beginPath();
            threedCtx.arc(v.x, v.y, radius * 0.4, 0, Math.PI * 2);
            threedCtx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.9})`;
            threedCtx.fill();
          }
        });
      }

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    animationFrameIdRef.current = requestAnimationFrame(render);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        boardData = initCircuitBoard(bgCanvas);
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const renderTagline = (tagline: string, emWord: string) => {
    const wordIndex = tagline.lastIndexOf(emWord);
    if (wordIndex === -1) return tagline;
    const before = tagline.substring(0, wordIndex);
    return (
      <>
        {before}
        <em className="relative inline-block not-italic text-white">
          {emWord}
        </em>
      </>
    );
  };

  const glowBackground = `radial-gradient(circle, ${hexToRgba(slidesList[currentIndex].accent, 0.35)} 0%, transparent 70%)`;

  return (
    <div
      className="relative w-full h-[85vh] md:h-[95vh] min-h-[85vh] md:min-h-[95vh] overflow-hidden bg-brand-primary group border-b border-white/20 aspect-video md:aspect-auto"
      aria-roledescription="carousel"
      aria-label="Highlighted Services"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {slidesList.length}: {slidesList[currentIndex].tagline}
      </div>

      {/* Layer 1 - Background grid */}
      <canvas
        ref={canvasBgRef}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Layer 2 - Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 20%, rgba(2, 2, 4, 0.82) 100%)'
        }}
      />

      {/* Left Column Text Container */}
      <div className="absolute left-0 top-0 w-full md:w-[52%] h-full z-10">
        {slidesList.map((slide, index) => {
          const isActive = index === currentIndex;
          const emWord = getLastWord(slide.tagline);
          return (
            <div
              key={index}
              ref={el => { slideRefs.current[index] = el; }}
              className={`banner-slide absolute inset-0 flex flex-col justify-center px-6 md:px-0 md:pl-[52px] md:pr-12 transition-opacity duration-[700ms] ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              style={{ '--ac': slide.accent } as React.CSSProperties}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slidesList.length}`}
              aria-hidden={!isActive}
            >
              {/* Decorative Eyebrow */}
              <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium mb-4">
                <span className="w-7 h-[0.5px]" style={{ backgroundColor: slide.accent }} />
                <span className="px-2 py-0.5 rounded-full text-[9px] border"
                  style={{
                    borderColor: hexToRgba(slide.accent, 0.4),
                    color: hexToRgba(slide.accent, 0.8),
                    borderWidth: '0.5px'
                  }}>
                  {slide.eyebrow}
                </span>
              </div>

              {/* Headline */}
              {index === 0 ? (
                <h1 className="text-white font-black leading-[1.1] tracking-tight mt-4 anim-fade-up anim-fade-up-1" style={{ fontSize: 'clamp(26px, 3.8vw, 42px)' }}>
                  {renderTagline(slide.tagline, emWord)}
                </h1>
              ) : (
                <h2 className="text-white font-black leading-[1.1] tracking-tight mt-4 anim-fade-up anim-fade-up-1" style={{ fontSize: 'clamp(26px, 3.8vw, 42px)' }}>
                  {renderTagline(slide.tagline, emWord)}
                </h2>
              )}

              {/* Subheadline */}
              <p className="text-[13px] text-brand-light/45 leading-[1.75] mt-4 max-w-[340px] font-light anim-fade-up anim-fade-up-2">
                {slide.subTagline}
              </p>

              {/* Button Row */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-[26px] anim-fade-up anim-fade-up-3 w-full sm:w-auto">
                <button
                  onClick={openModal}
                  className="relative overflow-hidden group bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold py-3 px-8 rounded-full text-sm shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent-middle focus:ring-offset-black"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                    Get a Quote
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
                </button>

                <Link
                  to="/services/website-packages"
                  className="relative overflow-hidden group bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-3 px-8 rounded-full text-sm hover:bg-white/20 hover:border-brand-accent-end/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent-end focus:ring-offset-black"
                >
                  <span className="relative z-10" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Explore Packages</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column 3D Visual Container */}
      <div className="absolute right-0 top-0 w-[48%] h-full hidden md:flex items-center justify-center z-10">
        <div className="relative flex items-center justify-center banner-float">
          {/* A. Glow halo */}
          <div
            className="absolute w-[320px] h-[320px] rounded-full filter blur-[50px] banner-glow-pulse"
            style={{
              background: glowBackground,
              transition: 'background 1.2s ease',
              pointerEvents: 'none'
            }}
          />

          {/* B. 3D wireframe canvas */}
          <canvas
            ref={canvas3DRef}
            width={260}
            height={260}
            className="relative z-10 w-[260px] h-[260px]"
          />
        </div>
      </div>

      <ArrowButton direction="left" onClick={prevSlide} />
      <ArrowButton direction="right" onClick={nextSlide} />

      {/* Navigation & Controls */}
      <button
        onClick={togglePause}
        className="absolute bottom-6 left-6 z-50 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white backdrop-blur-sm transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-accent-end"
        aria-label={isPaused ? "Pause slideshow" : "Play slideshow"}
      >
        {isPaused ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
        )}
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-1 z-40">
        {slidesList.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="w-11 h-11 flex items-center justify-center focus:outline-none group rounded-full focus-visible:ring-2 focus-visible:ring-brand-accent-end focus-visible:ring-offset-1 focus-visible:ring-offset-black"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          >
            <span
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'bg-brand-accent-end w-8' : 'bg-white/30 group-hover:bg-white/70 w-2.5'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;

# Scroll-Driven Video Portfolio

A high-performance personal portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**, featuring a synchronized **300-frame scroll-based video animation** running on a hardware-accelerated HTML5 Canvas.

---

## Table of Contents
1. [Overview & Concept](#overview--concept)
2. [Architecture & Layering](#architecture--layering)
3. [Scroll Animation Engine](#scroll-animation-engine)
   - [Retina & HiDPI Cover-Fit](#1-retina--hidpi-cover-fit)
   - [Physics & Exponential Smoothing](#2-physics--exponential-smoothing)
   - [Zero-Ghosting Frame Renderer](#3-zero-ghosting-frame-renderer)
   - [Dynamic Priority Preloader & Async Decoding](#4-dynamic-priority-preloader--async-decoding)
4. [Component Hierarchy & UI Design](#component-hierarchy--ui-design)
5. [Project Structure](#project-structure)
6. [Tech Stack](#tech-stack)
7. [Getting Started](#getting-started)
   - [Quick Start (Windows)](#quick-start-windows)
   - [Development Server](#development-server)
   - [Production Build](#production-build)

---

## Overview & Concept

The goal of this project is to blend an Apple-style scroll-driven frame animation with a fully responsive, rich portfolio webpage. 

As the visitor scrolls down through the portfolio sections (from the Hero at the top to the Footer at the bottom), 300 individual high-definition video frames scrub forward and backward in exact unison with the scroll position. The page content floats above this animation with a subtle translucent glassmorphic backdrop, allowing the motion of the landscape video to shine through behind every card and text block.

---

## Architecture & Layering

The application is structured into two primary layers:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Interactive UI Layer (z-index: 10)                       │
│    - Sticky Glassmorphic Navbar                             │
│    - Neumorphic Sections (Hero, Features, Portfolio, etc.)  │
│    - Modals & Interactive Overlays                          │
│    - Semi-transparent backdrop (bg-[#ECF0F3]/80 + blur)     │
├─────────────────────────────────────────────────────────────┤
│ 2. Background Animation Canvas Layer (z-index: -10, fixed)  │
│    - Fullscreen Fixed HTML5 Canvas                          │
│    - 300-Frame Synchronized Video Playback Engine           │
│    - HiDPI Retina Backing Store                             │
└─────────────────────────────────────────────────────────────┘
```

1. **Background Layer (`ScrollAnimationCanvas.tsx`)**:
   - Fixed to the viewport (`fixed inset-0 w-screen h-screen -z-10`).
   - Ignores pointer events (`pointer-events-none`) so clicks, drags, and text selection pass through without interference.
2. **Foreground Content Layer (`App.tsx`)**:
   - Positioned relatively above the canvas (`relative z-10`).
   - Employs a subtle translucent background (`bg-[#ECF0F3]/80 backdrop-blur-[1px]`), ensuring strong contrast and readability for all text and neumorphic cards while letting the video motion show through dynamically.

---

## Scroll Animation Engine

The scroll animation system is implemented in [`src/components/ScrollAnimationCanvas.tsx`](src/components/ScrollAnimationCanvas.tsx) and includes several performance optimizations:

### 1. Retina & HiDPI Cover-Fit
Standard `<canvas>` elements become blurry on high-resolution displays (MacBook Retina, 4K monitors, modern smartphones). 
- The canvas dimensions are dynamically scaled using `window.devicePixelRatio` (capped at `2` for optimal memory usage and 60fps rasterization):
  ```typescript
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(window.innerWidth * dpr);
  canvas.height = Math.round(window.innerHeight * dpr);
  ```
- **Cover-Fit Algorithm**: The 1920×1080 source frames are scaled and centered so they fill 100% of the viewport on any aspect ratio (ultrawide, portrait, mobile) without distortion:
  ```typescript
  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  const dx = (canvas.width - dw) * 0.5;
  const dy = (canvas.height - dh) * 0.5;
  ctx.drawImage(img, dx, dy, dw, dh);
  ```

### 2. Physics & Exponential Smoothing
Directly mapping mouse wheel ticks to frame indices causes jerky, stepped motion. To create a silky, cinematic feel:
- Scroll progress is calculated as:
  $$\text{ratio} = \frac{\text{window.scrollY}}{\text{scrollHeight} - \text{innerHeight}}$$
  $$\text{targetProgress} = \text{ratio} \times (\text{TOTAL\_FRAMES} - 1)$$
- In the `requestAnimationFrame` render loop, frame-rate independent exponential easing is applied:
  ```typescript
  const speed = 14;
  const factor = 1 - Math.exp(-dt * speed);
  currentProgress += (targetProgress - currentProgress) * factor;
  ```
- Redundant GPU draws are skipped when the animation is at rest (`delta < 0.002`).

### 3. Zero-Ghosting Frame Renderer
Many scroll libraries blend adjacent frames with `ctx.globalAlpha = t`. In real-world video footage with camera motion, this creates double edges and motion blur. 
- Our engine computes the exact discrete frame (`Math.round(currentProgress)`).
- If the target frame is still downloading, it immediately displays the nearest loaded frame (`findBestFrameIndex`), ensuring the screen never blinks or shows empty black frames during fast scrubbing.

### 4. Dynamic Priority Preloader & Async Decoding
Downloading all 300 frames (~68 MB) sequentially would leave later sections blank if the user scrolls down quickly. 
- **Immediate Frame 1**: Frame 1 is fetched first and displayed immediately with an opacity fade-in.
- **Scroll-Proximity Priority Queue**: A pool of 6 concurrent workers dynamically queries which unrequested frame is closest to the user's active scroll target:
  ```typescript
  function getNextIndexToLoad() {
    let bestIndex = -1;
    let minDistance = Infinity;
    const center = Math.round(targetProgress);
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (!requested[i]) {
        const dist = Math.abs(i - center);
        if (dist < minDistance) {
          minDistance = dist;
          bestIndex = i;
        }
      }
    }
    return bestIndex;
  }
  ```
- **Off-Thread JPEG Decoding**: Every loaded image calls `img.decode()` before being handed to the canvas. This offloads JPEG decompression from the main UI thread to browser background threads, eliminating micro-stutters during scrolling.

---

## Component Hierarchy & UI Design

The portfolio interface is designed with a **Neumorphic & Glassmorphic** visual aesthetic (soft shadows, inset borders, and accent colors):

- [`Navbar`](src/components/Navbar.tsx): Sticky navigation bar with active section indicator, profile badge, social shortcuts, and mobile drawer menu.
- [`HeroSection`](src/components/HeroSection.tsx): Identity introduction with an animated typewriter role cycler, bio, download links (CV & Resume), and high-resolution portrait.
- [`FeaturesSection`](src/components/FeaturesSection.tsx): "What I'm Learning & Doing" grid with interactive feature cards.
- [`PortfolioSection`](src/components/PortfolioSection.tsx): Grid showcasing internship projects, competitions, and initiatives with interactive graphics and modal triggers.
- [`ResumeSection`](src/components/ResumeSection.tsx): Interactive tabbed interface for:
  - Academic Background & Certifications
  - Professional Skills (Sales, Marketing, Technical, Analytics)
  - Work Experience & Key Projects
  - Activities, Awards, Languages & Interests
- [`TestimonialSection`](src/components/TestimonialSection.tsx): Mentorship endorsements and testimonials.
- [`ClientsSection`](src/components/ClientsSection.tsx): Institutional partnerships and corporate engagement logos.
- [`CourseworkSection`](src/components/CourseworkSection.tsx): Selected university coursework at IIM Bangalore and BHU.
- [`BlogSection`](src/components/BlogSection.tsx): Articles, case studies, and editorial thought pieces.
- [`ContactSection`](src/components/ContactSection.tsx): Neumorphic contact form with validation and direct communication links.
- [`Footer`](src/components/Footer.tsx): Brand lockup, copyright, and smooth scroll-to-top button.
- [`DetailModal`](src/components/DetailModal.tsx): Reusable modal dialog for reading full project details, blog articles, or scheduling consultations.
- [`ScrollProgressBar`](src/components/ScrollProgressBar.tsx): Slim top progress bar indicating total page scroll completion.

---

## Project Structure

```
Porti/
├── dist/                             # Compiled production build
│   ├── assets/                       # Bundled JS/CSS and images
│   ├── frames/                       # 300 video frames for production
│   └── index.html                    # Production HTML entry point
├── public/                           # Static public assets
│   ├── assets/                       # Portraits, logos, PDF CVs
│   └── frames/                       # 300 video frames (frame_0001.jpg - frame_0300.jpg)
├── scroll_site/                      # Standalone pure canvas scroll implementation
│   ├── frames/                       # Frame assets
│   ├── index.html                    # Pure canvas animation (no UI components)
│   └── serve.py                      # Dedicated runner
├── src/                              # React application source code
│   ├── components/
│   │   ├── BlogSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CourseworkSection.tsx
│   │   ├── DetailModal.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── ScrollAnimationCanvas.tsx # Background scroll video engine
│   │   ├── ScrollProgressBar.tsx
│   │   ├── SectionDivider.tsx
│   │   └── TestimonialSection.tsx
│   ├── data/
│   │   └── portfolioData.ts          # Central data source for portfolio content
│   ├── utils/
│   │   └── portfolioLogic.ts         # Utility functions
│   ├── App.tsx                       # Main application shell
│   ├── index.css                     # Tailwind CSS & Neumorphic styling rules
│   └── main.tsx                      # React root entry point
├── index.html                        # Vite HTML entry point
├── package.json                      # Project dependencies and npm scripts
├── serve.py                          # Cross-platform Python HTTP local server
├── start-windows.bat                 # One-click Windows launcher
├── tsconfig.json                     # TypeScript configuration
└── vite.config.ts                    # Vite build configuration
```

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component rendering |
| **TypeScript** | Type-safe development across data models and components |
| **Tailwind CSS v4** | Utility-first CSS styling and custom theme tokens |
| **HTML5 Canvas 2D** | Hardware-accelerated 60/120fps video frame rendering |
| **Vite 8** | Next-generation frontend tooling and bundler |
| **Lucide React** | Clean, modern iconography |

---

## Getting Started

### Quick Start (Windows)
Double-click `start-windows.bat` in the root folder. This automatically launches the built production website and opens it in your default browser.

Alternatively, from PowerShell:
```powershell
python serve.py
```

### Development Server
To run the project in development mode with Hot Module Replacement (HMR):
```powershell
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build:
```powershell
npm run build
```
The output will be placed in the `dist/` directory. You can preview it with:
```powershell
npm run preview
```


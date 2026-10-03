import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CareerNodeData {
  id: string;
  name: string;
  category: string;
  color: string;
  desc: string;
  pos: [number, number, number];
  size: number;
}

const CAREER_NODES: CareerNodeData[] = [
  { id: 'ai-engineer', name: 'AI & Technology', category: 'Artificial Intelligence', color: '#38bdf8', desc: 'Neural architectures, autonomous agents & foundation models', pos: [0, 1.2, 0.5], size: 1.1 },
  { id: 'cardiothoracic-surgeon', name: 'Medicine & Healthcare', category: 'Medicine', color: '#f43f5e', desc: 'Robotic precision surgery, bioprinting & life-saving diagnostics', pos: [-2.6, 1.8, -1.2], size: 1.0 },
  { id: 'robotics-engineer', name: 'Engineering & Robotics', category: 'Engineering', color: '#f59e0b', desc: 'Bipedal humanoids, mechatronic kinematics & spatial perception', pos: [2.5, 1.6, -1.0], size: 1.0 },
  { id: 'investment-banker-fintech', name: 'Finance & FinTech', category: 'Finance', color: '#eab308', desc: 'Algorithmic markets, tokenized assets & global capital structures', pos: [-3.2, -0.6, 0.2], size: 0.95 },
  { id: 'cybersecurity-specialist', name: 'Cybersecurity', category: 'Cyber Defense', color: '#10b981', desc: 'Zero-trust architecture, ethical hacking & post-quantum defense', pos: [2.8, -0.8, 0.4], size: 0.95 },
  { id: 'cyber-corporate-lawyer', name: 'Law & Tech Policy', category: 'Law', color: '#ec4899', desc: 'AI ethics regulation, data privacy rights & corporate counsel', pos: [-1.8, -2.0, -0.8], size: 0.9 },
  { id: 'spatial-ux-designer', name: 'Design & Media', category: 'Design', color: '#8b5cf6', desc: 'Spatial computing, mixed-reality interfaces & generative 3D', pos: [1.6, -1.9, -0.6], size: 0.9 },
  { id: 'quantum-researcher', name: 'Science & Research', category: 'Quantum Science', color: '#c084fc', desc: 'Subatomic entanglement, quantum algorithms & novel materials', pos: [-0.2, -1.4, 1.2], size: 0.95 },
  { id: 'renewable-energy-engineer', name: 'CleanTech & Energy', category: 'Environment', color: '#14b8a6', desc: 'Perovskite solar arrays, grid storage & planetary decarbonization', pos: [3.8, 0.6, -1.8], size: 0.9 },
  { id: 'public-policy-director', name: 'Government & Public Services', category: 'Governance', color: '#0ea5e9', desc: 'Digital public infrastructure, civil administration & national policy', pos: [-3.9, 0.8, -1.8], size: 0.9 },
  { id: 'fullstack-software-architect', name: 'Computer Science & IT', category: 'Software', color: '#3b82f6', desc: 'Planet-scale distributed clouds, reactive UI & microservices', pos: [-1.2, 2.6, -1.5], size: 1.0 },
  { id: 'precision-mechatronics-specialist', name: 'Vocational & Mechatronics', category: 'Manufacturing', color: '#94a3b8', desc: '5-Axis CNC precision machining, industrial robotics & automation', pos: [1.3, 2.7, -1.6], size: 0.85 },
  { id: 'business-entrepreneurship', name: 'Entrepreneurship & Ventures', category: 'Business', color: '#f97316', desc: 'High-growth technology startups, product-market fit & scaling', pos: [-0.1, 3.2, -2.2], size: 0.85 },
  { id: 'biotech-genomics', name: 'Biotech & Genomics', category: 'Bio-Science', color: '#06b6d4', desc: 'CRISPR gene therapies, synthetic biology & computational genomics', pos: [0.1, -2.8, -1.8], size: 0.85 }
];

interface CareerUniverse3DProps {
  onSelectCareer?: (careerId: string) => void;
}

export const CareerUniverse3D: React.FC<CareerUniverse3DProps> = ({ onSelectCareer }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<CareerNodeData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.08);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 20);
    pointLight1.position.set(4, 5, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2.5, 20);
    pointLight2.position.set(-4, -4, 3);
    scene.add(pointLight2);

    const centralGlow = new THREE.PointLight(0x60a5fa, 1.5, 12);
    centralGlow.position.set(0, 0, 0);
    scene.add(centralGlow);

    // Starfield Background
    const starCount = 1200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = 12 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i3 + 2] = radius * Math.cos(phi);

      const colorMix = Math.random();
      if (colorMix > 0.6) {
        starColors[i3] = 0.22; starColors[i3 + 1] = 0.74; starColors[i3 + 2] = 0.97; // cyan
      } else if (colorMix > 0.3) {
        starColors[i3] = 0.65; starColors[i3 + 1] = 0.35; starColors[i3 + 2] = 0.98; // violet
      } else {
        starColors[i3] = 0.95; starColors[i3 + 1] = 0.98; starColors[i3 + 2] = 1.0; // soft white
      }
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Orbital Rings in background
    const ringGroup = new THREE.Group();
    const ringMaterial = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.15 });
    
    [3.5, 4.8, 6.2].forEach((radius, idx) => {
      const ringGeom = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 96;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius * 0.4, 0));
      }
      ringGeom.setFromPoints(points);
      const ring = new THREE.Line(ringGeom, ringMaterial);
      ring.rotation.x = Math.PI / 4 + idx * 0.2;
      ring.rotation.y = idx * 0.3;
      ringGroup.add(ring);
    });
    scene.add(ringGroup);

    // Career Nodes Mesh Creation
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    // Connecting Energy Lines between related career nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });

    const connections = [
      [0, 10], [0, 4], [0, 2], [0, 7], // AI to Software, Cyber, Robotics, Quantum
      [1, 7], [1, 13], // Medicine to Quantum, Biotech
      [2, 11], [2, 8], // Robotics to Mechatronics, CleanTech
      [3, 4], [3, 5], [3, 12], // Finance to Cyber, Law, Ventures
      [5, 9], // Law to Policy
      [6, 0], [6, 12], // Design to AI, Ventures
      [8, 2], [9, 12] // CleanTech to Robotics, Policy to Ventures
    ];

    connections.forEach(([fromIdx, toIdx]) => {
      if (CAREER_NODES[fromIdx] && CAREER_NODES[toIdx]) {
        const from = CAREER_NODES[fromIdx].pos;
        const to = CAREER_NODES[toIdx].pos;
        const geom = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...from),
          new THREE.Vector3(...to)
        ]);
        const line = new THREE.Line(geom, lineMaterial);
        nodeGroup.add(line);
      }
    });

    // Create 3D Nodes
    CAREER_NODES.forEach((node) => {
      const group = new THREE.Group();
      group.position.set(...node.pos);

      // Core glowing sphere
      const sphereGeom = new THREE.SphereGeometry(0.32 * node.size, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(node.color),
        emissive: new THREE.Color(node.color),
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8
      });
      const sphere = new THREE.Mesh(sphereGeom, sphereMat);
      sphere.userData = { nodeData: node };
      nodeMeshes.push(sphere);
      group.add(sphere);

      // Outer holographic wireframe geometric cage (Icosahedron or Octahedron)
      const cageGeom = new THREE.IcosahedronGeometry(0.48 * node.size, 1);
      const cageMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        wireframe: true,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      const cage = new THREE.Mesh(cageGeom, cageMat);
      cage.userData = { isCage: true };
      group.add(cage);

      // Subtle outer particle ring
      const ringGeom = new THREE.RingGeometry(0.55 * node.size, 0.58 * node.size, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const haloRing = new THREE.Mesh(ringGeom, ringMat);
      haloRing.rotation.x = Math.PI / 2;
      group.add(haloRing);

      nodeGroup.add(group);
    });

    // Mouse Interaction & Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);
    const targetCameraPos = new THREE.Vector3(0, 0, 8.5);

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.x = x;
      mouse.y = y;

      setMousePos({ x: event.clientX - rect.left, y: event.clientY - rect.top });

      // Parallax camera target tilt
      targetCameraPos.x = x * 1.5;
      targetCameraPos.y = y * 0.9;
    };

    const onClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const nodeData: CareerNodeData = hit.userData.nodeData;
        if (nodeData && onSelectCareer) {
          onSelectCareer(nodeData.id);
        }
      }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('click', onClick);

    // Responsive Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation toward target
      camera.position.x += (targetCameraPos.x - camera.position.x) * 0.05;
      camera.position.y += (targetCameraPos.y - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Rotate starfield slowly
      starField.rotation.y = elapsed * 0.015;
      ringGroup.rotation.z = elapsed * 0.03;

      // Rotate and animate nodes
      nodeGroup.children.forEach((child, index) => {
        if (child instanceof THREE.Group) {
          // Floating wave motion
          child.position.y += Math.sin(elapsed * 1.5 + index) * 0.0015;
          child.rotation.y += 0.005;

          // Rotate inner cage
          const cage = child.children[1];
          if (cage) {
            cage.rotation.x = elapsed * 0.4 + index;
            cage.rotation.y = elapsed * 0.3;
          }
        }
      });

      // Raycasting for Hover Detection
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        const nodeData: CareerNodeData = hit.userData.nodeData;
        setHoveredNode(nodeData);

        // Highlight hit node
        hit.scale.lerp(new THREE.Vector3(1.35, 1.35, 1.35), 0.15);
        const mat = hit.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 1.2;
        container.style.cursor = 'pointer';
      } else {
        setHoveredNode(null);
        nodeMeshes.forEach((mesh) => {
          mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.emissiveIntensity = 0.6;
        });
        container.style.cursor = 'default';
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, [onSelectCareer]);

  return (
    <div className="relative w-full h-[620px] lg:h-[720px] overflow-hidden select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Floating Holographic Tooltip HUD */}
      {hoveredNode && (
        <div
          className="absolute z-20 pointer-events-none transition-all duration-75 transform -translate-x-1/2 -translate-y-full mb-3"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y - 15}px`
          }}
        >
          <div className="glass-panel-glow px-4 py-3 rounded-2xl max-w-xs text-left backdrop-blur-xl border border-cyan-400/40 shadow-2xl shadow-cyan-500/20 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping"
                style={{ backgroundColor: hoveredNode.color }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300 font-mono">
                {hoveredNode.category}
              </span>
            </div>
            <h4 className="text-base font-bold text-white tracking-tight flex items-center justify-between">
              {hoveredNode.name}
            </h4>
            <p className="text-xs text-gray-300 mt-1 line-clamp-2 leading-relaxed">
              {hoveredNode.desc}
            </p>
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-cyan-400 font-medium">
              <span>Click to Explore Node</span>
              <span>→</span>
            </div>
          </div>
        </div>
      )}

      {/* Ambient Radial Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-gray-950/40 via-transparent to-gray-950/40" />

      {/* Interactive Helper HUD */}
      <div className="absolute bottom-4 left-6 z-10 hidden sm:flex items-center gap-2 text-xs font-mono text-gray-400 glass-pill px-3 py-1.5 rounded-full border border-white/10">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>Career Universe: Hover to inspect • Click node to preview</span>
      </div>
    </div>
  );
};

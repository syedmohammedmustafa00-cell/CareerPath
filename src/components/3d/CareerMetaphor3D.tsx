import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CareerMetaphor3DProps {
  metaphorType: 'brain' | 'shield' | 'dna' | 'rocket' | 'code' | 'atom' | 'crystal' | 'compass' | 'camera' | 'gear';
  color: string;
  secondaryColor?: string;
}

export const CareerMetaphor3D: React.FC<CareerMetaphor3DProps> = ({
  metaphorType,
  color = '#38bdf8',
  secondaryColor = '#818cf8'
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeOnly, setWireframeOnly] = useState(false);
  const wireframeRef = useRef(wireframeOnly);
  wireframeRef.current = wireframeOnly;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(new THREE.Color(color), 2.5);
    mainLight.position.set(3, 4, 5);
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(new THREE.Color(secondaryColor), 2, 10);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    const primaryColorObj = new THREE.Color(color);
    const secondaryColorObj = new THREE.Color(secondaryColor);

    // Build specific 3D geometry based on metaphor
    switch (metaphorType) {
      case 'brain': {
        // Neural network cluster
        const nodeCount = 35;
        const nodes: THREE.Vector3[] = [];
        const sphereMat = new THREE.MeshStandardMaterial({
          color: primaryColorObj,
          emissive: primaryColorObj,
          emissiveIntensity: 0.7,
          roughness: 0.2
        });

        for (let i = 0; i < nodeCount; i++) {
          const u = Math.random();
          const v = Math.random();
          const theta = u * 2.0 * Math.PI;
          const phi = Math.acos(2.0 * v - 1.0);
          const r = Math.cbrt(Math.random()) * 1.5;
          const sinPhi = Math.sin(phi);
          const x = r * sinPhi * Math.cos(theta);
          const y = r * sinPhi * Math.sin(theta) * 0.85;
          const z = r * Math.cos(phi);

          const pos = new THREE.Vector3(x, y, z);
          nodes.push(pos);

          const nodeMesh = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), sphereMat);
          nodeMesh.position.copy(pos);
          modelGroup.add(nodeMesh);
        }

        // Synaptic connection lines
        const lineMat = new THREE.LineBasicMaterial({
          color: secondaryColorObj,
          transparent: true,
          opacity: 0.35,
          blending: THREE.AdditiveBlending
        });

        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            if (nodes[i].distanceTo(nodes[j]) < 1.0) {
              const geom = new THREE.BufferGeometry().setFromPoints([nodes[i], nodes[j]]);
              const line = new THREE.Line(geom, lineMat);
              modelGroup.add(line);
            }
          }
        }

        // Central brain holographic core
        const coreMesh = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.0, 2),
          new THREE.MeshBasicMaterial({
            color: primaryColorObj,
            wireframe: true,
            transparent: true,
            opacity: 0.2
          })
        );
        modelGroup.add(coreMesh);
        break;
      }

      case 'shield': {
        // Holographic cyber shield
        const shieldShape = new THREE.Shape();
        shieldShape.moveTo(0, 1.6);
        shieldShape.quadraticCurveTo(1.4, 1.4, 1.2, 0.2);
        shieldShape.quadraticCurveTo(1.0, -1.2, 0, -1.8);
        shieldShape.quadraticCurveTo(-1.0, -1.2, -1.2, 0.2);
        shieldShape.quadraticCurveTo(-1.4, 1.4, 0, 1.6);

        const extrudeSettings = { depth: 0.2, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.05, bevelThickness: 0.05 };
        const shieldGeom = new THREE.ExtrudeGeometry(shieldShape, extrudeSettings);
        shieldGeom.center();

        const shieldMat = new THREE.MeshStandardMaterial({
          color: primaryColorObj,
          emissive: primaryColorObj,
          emissiveIntensity: 0.3,
          roughness: 0.1,
          metalness: 0.9,
          transparent: true,
          opacity: 0.85
        });
        const shieldMesh = new THREE.Mesh(shieldGeom, shieldMat);
        modelGroup.add(shieldMesh);

        // Surrounding orbital security barrier rings
        const ringMat = new THREE.LineBasicMaterial({ color: secondaryColorObj, transparent: true, opacity: 0.5 });
        const ring = new THREE.Line(new THREE.RingGeometry(1.8, 1.82, 48), ringMat);
        ring.rotation.x = Math.PI / 3;
        modelGroup.add(ring);
        break;
      }

      case 'dna': {
        // Double helix
        const pointsCount = 40;
        const sphereMat1 = new THREE.MeshStandardMaterial({ color: primaryColorObj, emissive: primaryColorObj, emissiveIntensity: 0.6 });
        const sphereMat2 = new THREE.MeshStandardMaterial({ color: secondaryColorObj, emissive: secondaryColorObj, emissiveIntensity: 0.6 });
        const rungMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 });

        for (let i = 0; i < pointsCount; i++) {
          const t = (i / pointsCount) * Math.PI * 4;
          const y = (i / pointsCount) * 3.4 - 1.7;
          const r = 0.9;

          const p1 = new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r);
          const p2 = new THREE.Vector3(Math.cos(t + Math.PI) * r, y, Math.sin(t + Math.PI) * r);

          const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), sphereMat1);
          s1.position.copy(p1);
          modelGroup.add(s1);

          const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), sphereMat2);
          s2.position.copy(p2);
          modelGroup.add(s2);

          if (i % 2 === 0) {
            const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([p1, p2]), rungMat);
            modelGroup.add(line);
          }
        }
        break;
      }

      case 'atom':
      default: {
        // Quantum atom with nucleus and intersecting elliptical orbits
        const nucleus = new THREE.Mesh(
          new THREE.SphereGeometry(0.45, 32, 32),
          new THREE.MeshStandardMaterial({
            color: primaryColorObj,
            emissive: primaryColorObj,
            emissiveIntensity: 0.8,
            roughness: 0.2
          })
        );
        modelGroup.add(nucleus);

        const orbitCount = 3;
        for (let i = 0; i < orbitCount; i++) {
          const curve = new THREE.EllipseCurve(0, 0, 1.8, 0.7, 0, 2 * Math.PI, false, 0);
          const points = curve.getPoints(64).map(p => new THREE.Vector3(p.x, p.y, 0));
          const geom = new THREE.BufferGeometry().setFromPoints(points);
          const orbitLine = new THREE.Line(geom, new THREE.LineBasicMaterial({
            color: secondaryColorObj,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
          }));

          orbitLine.rotation.x = (i * Math.PI) / 3;
          orbitLine.rotation.y = (i * Math.PI) / 4;
          modelGroup.add(orbitLine);

          // Electron particle
          const electron = new THREE.Mesh(
            new THREE.SphereGeometry(0.08, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xffffff })
          );
          electron.position.set(1.8 * Math.cos(i), 0.7 * Math.sin(i), 0);
          orbitLine.add(electron);
        }
        break;
      }
    }

    // Mouse drag interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      modelGroup.rotation.y += deltaX * 0.01;
      modelGroup.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!isDragging) {
        modelGroup.rotation.y = elapsed * 0.45;
        modelGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.2;
      }

      // Update wireframe property on child meshes if toggled
      modelGroup.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => (m.wireframe = wireframeRef.current));
          } else {
            child.material.wireframe = wireframeRef.current;
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [metaphorType, color, secondaryColor]);

  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden glass-panel border border-white/10 flex flex-col items-center justify-center">
      {/* 3D Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Control Overlay */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <button
          onClick={() => setWireframeOnly(!wireframeOnly)}
          className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border transition-all ${
            wireframeOnly
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50'
              : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
          }`}
          title="Toggle Wireframe Rendering"
        >
          {wireframeOnly ? 'Wireframe [ON]' : 'Wireframe [OFF]'}
        </button>
      </div>

      <div className="absolute bottom-2 left-3 text-[10px] font-mono text-gray-400 pointer-events-none">
        <span>Click & Drag to Inspect 3D Metaphor</span>
      </div>
    </div>
  );
};

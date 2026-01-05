"use client";

import { Html, useProgress } from "@react-three/drei";
import { memo } from "react";

const CanvasLoader = memo(() => {
  const { active } = useProgress();

  // If not loading, render nothing (important)
  if (!active) return null;

  return (
    <Html center>
      <div
        className="flex items-center justify-center"
        aria-label="Loading 3D content"
      >
        <span
          className="
            w-10 h-10
            border-4 border-white/80
            border-t-transparent
            rounded-full
            animate-spin
          "
        />
      </div>
    </Html>
  );
});

CanvasLoader.displayName = "CanvasLoader";

export default CanvasLoader;

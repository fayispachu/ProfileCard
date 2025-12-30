"use client";

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <span className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        <p className="mt-3 text-sm text-white font-medium">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;

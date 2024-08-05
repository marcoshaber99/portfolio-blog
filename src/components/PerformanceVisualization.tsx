"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PerformanceVisualization: React.FC = () => {
  const [renderCount, setRenderCount] = useState(0);
  const [isPainting, setIsPainting] = useState(false);
  const paintCountRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRenderCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const updatePaintCount = () => {
      paintCountRef.current += 1;
      animationFrameId = requestAnimationFrame(updatePaintCount);
    };
    updatePaintCount();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const togglePainting = () => {
    setIsPainting((prev) => !prev);
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Performance Visualization</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Rendering</h3>
        <p>Render Count: {renderCount}</p>
        <motion.div
          className="w-full h-4 bg-blue-200 mt-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Painting</h3>
        <p>Paint Count: {paintCountRef.current}</p>
        <button
          onClick={togglePainting}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Toggle Painting
        </button>
        {isPainting && (
          <motion.div
            className="w-32 h-32 bg-green-500 mt-4"
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </div>

      <div className="text-sm text-gray-600">
        <p>
          Note: The render count updates every second, triggering a re-render.
        </p>
        <p>
          The paint count updates on every animation frame, showing browser
          paints.
        </p>
        <p>The rotating square demonstrates painting without re-rendering.</p>
      </div>
    </div>
  );
};

export default PerformanceVisualization;

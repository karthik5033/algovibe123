"use client";


import React, { useState } from "react";
import Grid from "../components/Grid";
import Controls from "../components/Controls";
import { animateFloodFill } from "../components/FloodFillAnimator";

export default function Home() {
  const [grid, setGrid] = useState<number[][]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Generate random grid based on given rows/cols
  const handleGenerate = (rows: number, cols: number) => {
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.floor(Math.random() * 5))
    );
    setGrid(newGrid);
  };

  // Run the animated flood fill
  const handleRun = async (sr: number, sc: number, newColor: number) => {
    if (!grid.length || sr >= grid.length || sc >= grid[0].length) {
      alert("Invalid coordinates or empty grid!");
      return;
    }

    if (isRunning) return;
    setIsRunning(true);
    await animateFloodFill(
      [...grid.map((row) => [...row])],
      sr,
      sc,
      newColor,
      setGrid
    );
    setIsRunning(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
          🎨 Flood Fill Visualizer
        </h1>

        <Controls onGenerate={handleGenerate} onRun={handleRun} />

        {grid.length > 0 ? (
          <div className="mt-8 w-full overflow-auto">
            <Grid
              grid={grid}
              onCellClick={(r, c) => console.log(`Clicked cell: (${r}, ${c})`)}
            />
          </div>
        ) : (
          <p className="text-gray-600 mt-6 italic">Generate a grid to begin.</p>
        )}

        {isRunning && (
          <p className="mt-4 text-blue-500 font-medium animate-pulse">
            Filling in progress...
          </p>
        )}
      </div>
    </main>
  );

}

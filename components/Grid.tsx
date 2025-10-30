"use client";
import React from "react";

interface GridProps {
  grid: number[][];
  onCellClick?: (row: number, col: number) => void;
}

const colorMap: Record<number, string> = {
  0: "bg-white",
  1: "bg-red-400",
  2: "bg-blue-400",
  3: "bg-green-400",
  4: "bg-yellow-400",
  5: "bg-purple-400",
  6: "bg-pink-400",
  7: "bg-cyan-400",
  8: "bg-fuchsia-400",
  9: "bg-slate-400",
  10: "bg-black",
};

const Grid: React.FC<GridProps> = ({ grid, onCellClick }) => {
  if (!grid || grid.length === 0) return <div>No grid data</div>;

  return (
    <div
      className="grid justify-center mt-6"
      style={{
        gridTemplateColumns: `repeat(${grid[0].length}, 25px)`,
        gridTemplateRows: `repeat(${grid.length}, 25px)`,
      }}
    >
      {grid.map((row, rIdx) =>
        row.map((val, cIdx) => (
          <div
            key={`${rIdx}-${cIdx}`}
            className={`w-6 h-6 border border-gray-300 ${
              colorMap[val] ?? "bg-gray-200"
            }`}
            onClick={() => onCellClick?.(rIdx, cIdx)}
          />
        ))
      )}
    </div>
  );
};

export default Grid;

"use client";
import React, { useState } from "react";

interface ControlsProps {
  onGenerate: (rows: number, cols: number) => void;
  onRun: (sr: number, sc: number, newColor: number) => void;
}

const Controls: React.FC<ControlsProps> = ({ onGenerate, onRun }) => {
  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(5);
  const [sr, setSr] = useState(0);
  const [sc, setSc] = useState(0);
  const [newColor, setNewColor] = useState(2);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6 text-sm">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Rows</label>
          <input
            type="number"
            min={1}
            max={500}
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="border border-gray-600 rounded-md p-2 w-24 bg-slate-800 text-center text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Cols</label>
          <input
            type="number"
            min={1}
            max={500}
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            className="border border-gray-600 rounded-md p-2 w-24 bg-slate-800 text-center text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Start Row</label>
          <input
            type="number"
            min={0}
            value={sr}
            onChange={(e) => setSr(Number(e.target.value))}
            className="border border-gray-600 rounded-md p-2 w-24 bg-slate-800 text-center text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Start Col</label>
          <input
            type="number"
            min={0}
            value={sc}
            onChange={(e) => setSc(Number(e.target.value))}
            className="border border-gray-600 rounded-md p-2 w-24 bg-slate-800 text-center text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">New Color</label>
          <div className="flex gap-2">
            {[
              { id: 0, color: "black" },
              { id: 1, color: "red" },
              { id: 2, color: "blue" },
              { id: 3, color: "green" },
              { id: 4, color: "yellow" },
              { id: 5, color: "orange" },
              { id: 6, color: "purple" },
              { id: 7, color: "pink" },
            ].map(({ id, color }) => (
              <button
                key={id}
                onClick={() => setNewColor(id)}
                className={`w-8 h-8 rounded-md border-2 transition-transform duration-150 hover:scale-110 hover:shadow-md ${
                  newColor === id
                    ? "ring-2 ring-white scale-110 border-white"
                    : "border-gray-700"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-2">
        <button
          onClick={() => onGenerate(rows, cols)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Generate Grid
        </button>

        <button
          onClick={() => onRun(sr, sc, newColor)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Run Flood Fill
        </button>
      </div>
    </div>
  );
};

export default Controls;

"use client";
import React from "react";

export async function animateFloodFill(
  grid: number[][],
  sr: number,
  sc: number,
  newColor: number,
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>
) {
  const m = grid.length;
  const n = grid[0].length;
  const oldColor = grid[sr][sc];
  if (oldColor === newColor) return;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue: [number, number][] = [[sr, sc]];
  const visited = new Set<string>();

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    const key = `${r},${c}`;
    if (visited.has(key)) continue;
    visited.add(key);

    // bounds + color check first
    if (r < 0 || c < 0 || r >= m || c >= n) continue;
    if (grid[r][c] !== oldColor) continue;

    grid[r][c] = newColor;
    setGrid(grid.map((row) => [...row])); // re-render
    await delay(100); // slower so it’s visible

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < m &&
        nc < n &&
        grid[nr][nc] === oldColor &&
        !visited.has(`${nr},${nc}`)
      ) {
        queue.push([nr, nc]);
      }
    }
  }
}

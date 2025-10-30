export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const m = image.length;
  const n = image[0].length;
  const oldColor = image[sr][sc];

  if (oldColor === newColor) return image;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue: [number, number][] = [[sr, sc]];

  while (queue.length) {
    const [r, c] = queue.shift()!;
    if (r < 0 || c < 0 || r >= m || c >= n) continue;
    if (image[r][c] !== oldColor) continue;

    image[r][c] = newColor;

    for (const [dr, dc] of dirs) {
      queue.push([r + dr, c + dc]);
    }
  }

  return image;
}

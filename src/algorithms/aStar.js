import { resetGridProperties } from "./dijkstra";

// Idea behind astar f = g + h
// g = cost of getting to a specific node
// h = heuristic cost
// Explore node with lowest f

export const aStar = (grid, startNode, finishNode) => {
  const openList = [];
  const closedList = [];
  const visitedNodesInOrder = [];
  openList.push(startNode);
  visitedNodesInOrder.push(startNode);
  const nodesInShortestPathOrder = [];

  while (openList.length) {
    let lowestFIndex = 0;

    // Get node with lowest f
    for (let i = 0; i < openList.length; i++) {
      if (openList[i].f < openList[lowestFIndex].f) {
        lowestFIndex = i;
      }
    }

    let currentNode = openList[lowestFIndex];
    visitedNodesInOrder.push(currentNode);

    // Check if found the finish
    if (
      currentNode.row === finishNode.row &&
      currentNode.col === finishNode.col
    ) {
      let curr = currentNode;
      closedList.push(curr);

      while (curr) {
        nodesInShortestPathOrder.unshift(curr);
        curr = curr.previousNode;
      }

      grid = resetGridProperties(grid);

      return [nodesInShortestPathOrder, closedList, grid];
    }

    // If did not find finish, move currentNode from open arr to closed, get neighbors
    for (let i = 0; i < openList.length; i++) {
      if (
        openList[i].row === currentNode.row &&
        openList[i].col === currentNode.col
      ) {
        closedList.push(...openList.splice(i, 1));
      }
    }

    const neighbors = getNeighbors(grid, currentNode);

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      // If it is in the closed list of if the node is a wall continue
      if (closedList.includes(neighbor) || neighbor.isWall) continue;

      const gScore = currentNode.g + 1;
      let gScoreIsBest = false;

      // Check if this is the first time we arrived at this particular node
      // If yes, then it must be best
      if (!openList.includes(neighbor)) {
        gScoreIsBest = true;
        neighbor.h = heuristic(neighbor, finishNode);
        openList.push(neighbor);
      } else if (gScore < neighbor.g) {
        // This is when we've already visited this node but the path to this node is shorter
        gScoreIsBest = true;
      }

      if (gScoreIsBest) {
        // If this is the best path so far, save information on how we got to this node.
        neighbor.previousNode = currentNode;
        neighbor.g = gScore;
        neighbor.f = neighbor.g + neighbor.h;
      }
    }
  }

  // No result found
  grid = resetGridProperties(grid);
  return [nodesInShortestPathOrder, closedList, grid];
};

export const getNeighbors = (grid, currentNode) => {
  const neighbors = [];
  const row = currentNode.row;
  const col = currentNode.col;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors;
};

// Manhattan distance heuristic
export const heuristic = (node1, node2) => {
  const d1 = Math.abs(node1.row - node2.row);
  const d2 = Math.abs(node1.col - node2.col);
  return d1 + d2;
};

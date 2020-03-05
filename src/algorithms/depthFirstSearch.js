import { getNeighbors } from "./aStar";
import { getNodesInShortestPathOrder, resetGridProperties } from "./dijkstra";

export const depthFirstSearch = (grid, startNode, finishNode) => {
  const stack = [];
  stack.push(startNode);
  const visitedNodesInOrder = [];
  const nodesInShortestPathOrder = [];

  while (stack.length) {
    const currentNode = stack.shift();
    if (currentNode.isWall || visitedNodesInOrder.includes(currentNode)) {
      continue;
    }

    visitedNodesInOrder.push(currentNode);
    if (
      currentNode.row === finishNode.row &&
      currentNode.col === finishNode.col
    ) {
      // Found finish
      grid = resetGridProperties(grid);
      nodesInShortestPathOrder.push(...getNodesInShortestPathOrder(finishNode));
      return [nodesInShortestPathOrder, visitedNodesInOrder, grid];
    }

    // Add neighbors to the stack
    const neighbors = getNeighbors(grid, currentNode);
    for (let i = 0; i < neighbors.length; i++) {
      if (!visitedNodesInOrder.includes(neighbors[i])) {
        neighbors[i].previousNode = currentNode;
        stack.unshift(neighbors[i]);
      }
    }
  }
  grid = resetGridProperties(grid);

  return [nodesInShortestPathOrder, visitedNodesInOrder, grid];
};

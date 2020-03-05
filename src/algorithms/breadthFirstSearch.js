import { getNodesInShortestPathOrder, resetGridProperties } from "./dijkstra";
import { getNeighbors } from "./aStar";

// Idea behind Breadth First Search is to search all neighbors
// of the current node before going deeper into the graph

export const breadthFirstSearch = (grid, startNode, finishNode) => {
  const visitedNodesInOrder = [];
  const queue = [];
  queue.push(startNode);
  const nodesInShortestPathOrder = [];

  while (queue.length) {
    const currentNode = queue.shift();

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

    // Add neighbors to the queue
    const neighbors = getNeighbors(grid, currentNode);
    for (let i = 0; i < neighbors.length; i++) {
      if (!visitedNodesInOrder.includes(neighbors[i])) {
        neighbors[i].previousNode = currentNode;
        queue.push(neighbors[i]);
      }
    }
  }

  return [nodesInShortestPathOrder, visitedNodesInOrder];
};

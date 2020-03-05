import { getNodesInShortestPathOrder, resetGridProperties } from "./dijkstra";
import { getNeighbors, heuristic } from "./aStar";

// Idea behind greedy is to pick according to some heuristic the closest node
// To the finishNode (Currently using Manhattan distance heuristic)

export const greedy = (grid, startNode, finishNode) => {
  const visitedNodesInOrder = [];
  const nodesInShortestPathOrder = [];
  const queue = [];
  queue.push(startNode);

  while (queue.length) {
    // Choose node in the queue with lowest h value to be next node
    let lowestIndex = 0;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].h < queue[lowestIndex].h) {
        lowestIndex = i;
      }
    }

    const currentNode = queue[lowestIndex];
    queue.splice(lowestIndex, 1);

    if (currentNode.isWall || visitedNodesInOrder.includes(currentNode))
      continue;

    visitedNodesInOrder.push(currentNode);

    if (
      currentNode.row === finishNode.row &&
      currentNode.col === finishNode.col
    ) {
      // Found finish
      nodesInShortestPathOrder.push(...getNodesInShortestPathOrder(finishNode));
      grid = resetGridProperties(grid);
      return [nodesInShortestPathOrder, visitedNodesInOrder, grid];
    }

    // If did not find finish pick the neighbor closest to the finish according to a heuristic
    const neighbors = getNeighbors(grid, currentNode);
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (visitedNodesInOrder.includes(neighbor)) {
        continue;
      }
      neighbor.h = heuristic(neighbor, finishNode);
      neighbor.previousNode = currentNode;
      queue.push(neighbor);
    }
  }
  grid = resetGridProperties(grid);
  return [nodesInShortestPathOrder, visitedNodesInOrder, grid];
};

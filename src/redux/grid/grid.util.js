export const addWall = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall
  };

  newGrid[row][col] = newNode;

  return newGrid;
};

// g: total cost of get to a particular node
// h: Estimated time to reach finish node
// f: g + h

export const createEmptyGrid = () => {
  const initialGrid = [];
  for (let i = 0; i < 15; i++) {
    const row = [];
    for (let j = 0; j < 20; j++) {
      row.push({
        row: i,
        col: j,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
        f: 0,
        g: 0,
        h: 0
      });
    }

    initialGrid.push(row);
  }
  return initialGrid;
};

export const resetDistancesAndIsVisited = grid => {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    const row = [];
    for (let j = 0; j < grid[i].length; j++) {
      // Return the same node but with the distance and isvisited reset
      row.push({
        ...grid[i][j],
        distance: Infinity,
        isVisited: false,
        previousNode: null,
        f: 0,
        g: 0,
        h: 0
      });
    }
    newGrid.push(row);
  }

  return newGrid;
};

export const resetGridClasses = () => {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 20; j++) {
      // document
      //   .getElementById(`node-${i}-${j}-grid1`)
      //   .className.includes("node-visited");
      if (
        document
          .getElementById(`node-${i}-${j}-grid1`)
          .className.includes("node-visited")
      ) {
        document
          .getElementById(`node-${i}-${j}-grid1`)
          .classList.remove("node-visited");
      }
      if (
        document
          .getElementById(`node-${i}-${j}-grid2`)
          .className.includes("node-visited")
      ) {
        document
          .getElementById(`node-${i}-${j}-grid2`)
          .classList.remove("node-visited");
      }

      if (
        document
          .getElementById(`node-${i}-${j}-grid1`)
          .className.includes("node-shortest-path")
      ) {
        document
          .getElementById(`node-${i}-${j}-grid1`)
          .classList.remove("node-shortest-path");
      }
      if (
        document
          .getElementById(`node-${i}-${j}-grid2`)
          .className.includes("node-shortest-path")
      ) {
        document
          .getElementById(`node-${i}-${j}-grid2`)
          .classList.remove("node-shortest-path");
      }
      // document.getElementById(`node-${i}-${j}-grid2`).className -=
      //   "node-visited";
    }
  }
};

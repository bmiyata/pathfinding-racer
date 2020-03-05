import React from "react";
import Node from "./Node";

import { connect } from "react-redux";

const Grid2 = ({ grid }) => {
  // const gridContent = [];

  // for (let i = 0; i < 15; i++) {
  //   const row = [];
  //   for (let j = 0; j < 20; j++) {
  //     row.push(<Node row={i} col={j} key={[i, j]} />);
  //   }
  //   gridContent.push(row);
  // }
  const gridContent = grid.grid.map((row, rowIndex) =>
    row.map((col, colIndex) => (
      <Node
        id={`node-${rowIndex}-${colIndex}-grid2`}
        currentNode={grid.grid[rowIndex][colIndex]}
        key={[rowIndex, colIndex]}
      />
    ))
  );

  return <div className="grids__grid--2">{gridContent}</div>;
};

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(mapStateToProps)(Grid2);

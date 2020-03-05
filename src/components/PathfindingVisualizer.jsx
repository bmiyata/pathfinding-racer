import React, { Fragment } from "react";
import Header from "./Header";
import Steps from "./Steps/Steps";
import Stats from "./Stats/Stats";
import Grids from "./Grids/Grids";

const PathfindingVisualizer = () => {
  return (
    <Fragment>
      <Header />
      <Steps />
      <Stats />
      <Grids />
    </Fragment>
  );
};

export default PathfindingVisualizer;

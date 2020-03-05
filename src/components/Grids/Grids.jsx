import React from "react";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";

import { connect } from "react-redux";
import {
  doneSettingStartNode,
  doneSettingFinishNode,
  doneSettingWalls
} from "../../redux/grid/grid.actions";

const Grids = ({
  doneSettingStartNode,
  doneSettingFinishNode,
  doneSettingWalls
}) => {
  const handleOnMouseUp = () => {
    doneSettingStartNode();
    doneSettingFinishNode();
    doneSettingWalls();
  };
  return (
    <div onMouseUp={handleOnMouseUp} className="grids">
      <Grid1 />
      <Grid2 />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  doneSettingStartNode: () => dispatch(doneSettingStartNode()),
  doneSettingFinishNode: () => dispatch(doneSettingFinishNode()),
  doneSettingWalls: () => dispatch(doneSettingWalls())
});

export default connect(null, mapDispatchToProps)(Grids);

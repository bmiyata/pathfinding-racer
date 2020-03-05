import React from "react";
import sprite from "../../sprite.svg";

import { connect } from "react-redux";
import {
  updateFormattedTime1,
  resetTimer1,
  incrementSteps1
} from "../../redux/algorithm1/algorithm1.actions";
import {
  updateFormattedTime2,
  incrementSteps2
} from "../../redux/algorithm2/algorithm2.actions";
import { dijkstra } from "../../algorithms/dijkstra";

import { aStar } from "../../algorithms/aStar";
import { breadthFirstSearch } from "../../algorithms/breadthFirstSearch";
import { depthFirstSearch } from "../../algorithms/depthFirstSearch";
import { greedy } from "../../algorithms/greedy";

import { resetDistancesAndIsVisited } from "../../redux/grid/grid.actions";
import { resetGridClasses } from "../../redux/grid/grid.util";
import { isCompositeComponent } from "react-dom/test-utils";

const Step4 = ({
  algorithm1,
  algorithm2,
  updateFormattedTime1,
  updateFormattedTime2,
  grid,
  resetDistancesAndIsVisited,
  incrementSteps1,
  incrementSteps2
}) => {
  const stopwatch1 = algorithm1.stopwatch;
  const stopwatch2 = algorithm2.stopwatch;

  const animateAlgorithm = (
    visitedNodesInOrder,
    nodesInShortestPathOrder,
    gridNum,
    stopwatch
  ) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder, gridNum, stopwatch);
        }, 10 * i);
        return;
      }

      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(
          `node-${node.row}-${node.col}-grid${gridNum}`
        ).className += " node-visited ";
      }, 10 * i);
    }
  };

  const animateShortestPath = (
    nodesInShortestPathOrder,
    gridNum,
    stopwatch
  ) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        if (gridNum === 1) {
          incrementSteps1();
        } else if (gridNum === 2) {
          incrementSteps2();
        }
        document.getElementById(
          `node-${node.row}-${node.col}-grid${gridNum}`
        ).className += " node-shortest-path";
        if (i === nodesInShortestPathOrder.length - 1) {
          stopwatch.isOn = false;
        }
      }, 50 * i);
    }
  };

  const handleOnclick = () => {
    if (!algorithm1.algorithm || !algorithm2.algorithm) {
      alert("Please select two algorithms.");
      return;
    }

    if (stopwatch1.isOn || stopwatch2.isOn) {
      // race in progress
      return;
    }

    // Reset timers and classes, wins

    resetGridClasses();
    algorithm1.steps = 0;
    algorithm2.steps = 0;

    stopwatch1.reset();
    stopwatch2.reset();

    // STOPWATCH INITIALIZATION
    stopwatch1.interval = setInterval(update.bind(stopwatch1), 10);
    stopwatch1.offset = Date.now();
    stopwatch1.isOn = true;

    let nodesInShortestPathOrderGrid1, visitedNodesInOrderGrid1, newGrid1;
    let nodesInShortestPathOrderGrid2, visitedNodesInOrderGrid2, newGrid2;

    switch (algorithm1.algorithm) {
      case "Dijkstra's Algorithm":
        [
          nodesInShortestPathOrderGrid1,
          visitedNodesInOrderGrid1,
          newGrid1
        ] = dijkstra(
          grid.grid,
          grid.grid[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          grid.grid[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;

      case "A*":
        [
          nodesInShortestPathOrderGrid1,
          visitedNodesInOrderGrid1,
          newGrid1
        ] = aStar(
          grid.grid,
          grid.grid[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          grid.grid[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;

      case "Breadth-First-Search":
        [
          nodesInShortestPathOrderGrid1,
          visitedNodesInOrderGrid1,
          newGrid1
        ] = breadthFirstSearch(
          grid.grid,
          grid.grid[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          grid.grid[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;
      case "Depth-First-Search":
        [
          nodesInShortestPathOrderGrid1,
          visitedNodesInOrderGrid1,
          newGrid1
        ] = depthFirstSearch(
          grid.grid,
          grid.grid[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          grid.grid[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;
      case "Best-First-Search":
        [
          nodesInShortestPathOrderGrid1,
          visitedNodesInOrderGrid1,
          newGrid1
        ] = greedy(
          grid.grid,
          grid.grid[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          grid.grid[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;

      default:
        break;
    }

    animateAlgorithm(
      visitedNodesInOrderGrid1,
      nodesInShortestPathOrderGrid1,
      1,
      stopwatch1
    );

    stopwatch2.interval = setInterval(update.bind(stopwatch2), 10);
    stopwatch2.offset = Date.now();
    stopwatch2.isOn = true;

    // ALGORITHM 2

    console.log(newGrid1);
    switch (algorithm2.algorithm) {
      case "Dijkstra's Algorithm":
        [
          nodesInShortestPathOrderGrid2,
          visitedNodesInOrderGrid2,
          newGrid2
        ] = dijkstra(
          newGrid1,
          newGrid1[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          newGrid1[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;

      case "A*":
        [
          nodesInShortestPathOrderGrid2,
          visitedNodesInOrderGrid2,
          newGrid2
        ] = aStar(
          newGrid1,
          newGrid1[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          newGrid1[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;

      case "Breadth-First-Search":
        [
          nodesInShortestPathOrderGrid2,
          visitedNodesInOrderGrid2,
          newGrid2
        ] = breadthFirstSearch(
          newGrid1,
          newGrid1[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          newGrid1[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;
      case "Depth-First-Search":
        [
          nodesInShortestPathOrderGrid2,
          visitedNodesInOrderGrid2,
          newGrid2
        ] = depthFirstSearch(
          newGrid1,
          newGrid1[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          newGrid1[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;
      case "Best-First-Search":
        [
          nodesInShortestPathOrderGrid2,
          visitedNodesInOrderGrid2,
          newGrid2
        ] = greedy(
          newGrid1,
          newGrid1[grid.startNodeCoords[0]][grid.startNodeCoords[1]],
          newGrid1[grid.finishNodeCoords[0]][grid.finishNodeCoords[1]]
        );
        break;

      default:
        break;
    }

    animateAlgorithm(
      visitedNodesInOrderGrid2,
      nodesInShortestPathOrderGrid2,
      2,
      stopwatch2
    );

    resetDistancesAndIsVisited();
  };

  function update() {
    if (stopwatch1.isOn) {
      stopwatch1.time += stopwatch1.delta();
      // Update redux state here
      stopwatch1.formattedTime = stopwatch1.timeFormatter();
      updateFormattedTime1(stopwatch1.formattedTime);
    }

    if (stopwatch2.isOn) {
      stopwatch2.time += stopwatch2.delta();
      stopwatch2.formattedTime = stopwatch2.timeFormatter();
      updateFormattedTime2(stopwatch2.formattedTime);
    }
  }

  return (
    <div className="steps__step--4">
      <h3 className="heading-secondary">STEP 4: Start the Race!</h3>
      <svg className="logo--flag mt">
        <use href={sprite + "#finish-flag"}></use>
      </svg>
      <div onClick={handleOnclick} className="btn btn--start mt">
        Start
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  algorithm1: state.algorithm1,
  algorithm2: state.algorithm2,
  grid: state.grid
});

const mapDispatchToProps = dispatch => ({
  updateFormattedTime1: time => dispatch(updateFormattedTime1(time)),
  updateFormattedTime2: time => dispatch(updateFormattedTime2(time)),
  resetDistancesAndIsVisited: () => dispatch(resetDistancesAndIsVisited()),
  resetTimer1: () => dispatch(resetTimer1()),
  incrementSteps1: () => dispatch(incrementSteps1()),
  incrementSteps2: () => dispatch(incrementSteps2())
});

export default connect(mapStateToProps, mapDispatchToProps)(Step4);

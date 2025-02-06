import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";
import { useSelector, useDispatch } from "react-redux";
import { updateNodePosition } from "../redux/actions";

const GraphContainer: React.FC = () => {
  const graph = useSelector((state: any) => state.graph);
  const dispatch = useDispatch();

  const onNodeDragStop = (event: any, node: any) => {
    dispatch(updateNodePosition(node.id, node.position));
  };

  return (
    <div style={{ height: "500px" }}>
      <ReactFlow
        nodes={graph.nodes}
        edges={graph.edges}
        onNodeDragStop={onNodeDragStop}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default GraphContainer;

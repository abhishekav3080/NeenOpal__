import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNodeColor, updateNodeFontSize } from "../redux/actions";
import ColorPicker from "./ColorPicker";
import FontSizeControl from "./FontSizeControl";

const NodeCustomizationPanel: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const graph = useSelector((state: any) => state.graph);
  const dispatch = useDispatch();

  const selectedNodeData = selectedNode
    ? graph.nodes.find((node: any) => node.id === selectedNode)
    : null;

  const handleColorChange = (color: string) => {
    if (selectedNode) {
      dispatch(updateNodeColor(selectedNode, color));
    }
  };

  const handleFontSizeChange = (fontSize: number) => {
    if (selectedNode) {
      dispatch(updateNodeFontSize(selectedNode, fontSize));
    }
  };

  return (
    <div>
      <h3>Node Customization Panel</h3>
      <div>
        <label>Select Node:</label>
        <select
          onChange={(e) => setSelectedNode(e.target.value)}
          value={selectedNode || ""}
        >
          <option value="">None</option>
          {graph.nodes.map((node: any) => (
            <option key={node.id} value={node.id}>
              {node.data.label}
            </option>
          ))}
        </select>
      </div>
      {selectedNodeData && (
        <>
          <ColorPicker
            color={selectedNodeData.data.color}
            onColorChange={handleColorChange}
          />
          <FontSizeControl
            fontSize={selectedNodeData.data.fontSize}
            onFontSizeChange={handleFontSizeChange}
          />
        </>
      )}
    </div>
  );
};

export default NodeCustomizationPanel;

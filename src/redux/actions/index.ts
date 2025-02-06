import {
  ADD_NODE,
  UPDATE_NODE_COLOR,
  UPDATE_NODE_FONT_SIZE,
  UPDATE_NODE_POSITION,
  UNDO,
  REDO,
} from "./types";
import { Node } from "../../types";

export const addNode = (node: Node) => ({
  type: ADD_NODE,
  payload: node,
});

export const updateNodeColor = (nodeId: string, color: string) => ({
  type: UPDATE_NODE_COLOR,
  payload: { nodeId, color },
});

export const updateNodeFontSize = (nodeId: string, fontSize: number) => ({
  type: UPDATE_NODE_FONT_SIZE,
  payload: { nodeId, fontSize },
});

export const updateNodePosition = (
  nodeId: string,
  position: { x: number; y: number }
) => ({
  type: UPDATE_NODE_POSITION,
  payload: { nodeId, position },
});

export const undo = () => ({ type: UNDO });

export const redo = () => ({ type: REDO });

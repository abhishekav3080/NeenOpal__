import {
  ADD_NODE,
  UPDATE_NODE_COLOR,
  UPDATE_NODE_FONT_SIZE,
  UPDATE_NODE_POSITION,
} from "../actions/types";
import { Node, Edge } from "../../types";

const initialState = {
  nodes: [],
  edges: [],
};

const graphReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NODE:
      return {
        ...state,
        nodes: [...state.nodes, action.payload],
      };
    case UPDATE_NODE_COLOR:
      return {
        ...state,
        nodes: state.nodes.map((node: Node) =>
          node.id === action.payload.nodeId
            ? { ...node, data: { ...node.data, color: action.payload.color } }
            : node
        ),
      };
    case UPDATE_NODE_FONT_SIZE:
      return {
        ...state,
        nodes: state.nodes.map((node: Node) =>
          node.id === action.payload.nodeId
            ? {
                ...node,
                data: { ...node.data, fontSize: action.payload.fontSize },
              }
            : node
        ),
      };
    case UPDATE_NODE_POSITION:
      return {
        ...state,
        nodes: state.nodes.map((node: Node) =>
          node.id === action.payload.nodeId
            ? { ...node, position: action.payload.position }
            : node
        ),
      };
    default:
      return state;
  }
};

export default graphReducer;

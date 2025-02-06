import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import GraphContainer from "./components/GraphContainer";
import NodeCustomizationPanel from "./components/NodeCustomizationPanel";
import UndoRedoControls from "./components/UndoRedoControls";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <GraphContainer />
        <NodeCustomizationPanel />
        <UndoRedoControls />
      </div>
    </Provider>
  );
};

export default App;

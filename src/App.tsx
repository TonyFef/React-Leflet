import React from "react";
import { LeafletMap } from "./Components/LeafletMap";
import { LayerContextProvider } from "./Components/context/LayerContext";

const App: React.FC = () => {
    return (
        <LayerContextProvider>
            <LeafletMap />
        </LayerContextProvider>
    );
};

export default App;

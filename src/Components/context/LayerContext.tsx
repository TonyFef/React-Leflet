import React, { useState } from "react";

const LayerContext: any = React.createContext({});
const LayerContextProvider = ({ children }: any) => {
    const [point, setPoint] = useState([0, 0]);
    const defaultValue = { point, setPoint };

    return <LayerContext.Provider value={defaultValue}>{children}</LayerContext.Provider>;
};

//  and export both objects
export { LayerContext, LayerContextProvider };

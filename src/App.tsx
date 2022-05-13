import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LeafletMap } from "./Components/LeafletMap";
import { MarkersList } from "./Components/MarkersList";

const App: React.FC = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LeafletMap />} />
                    <Route path="/list" element={<MarkersList />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;

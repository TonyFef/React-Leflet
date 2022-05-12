import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import { MapContainer, TileLayer, LayerGroup, Marker, Popup } from "react-leaflet";

import { LayerContext } from "./context/LayerContext";
import { LayerContextProvider } from "../Components/context/LayerContext";
import { Navbar } from "./Navbar";
import { markersListState } from "../state/atoms";
import { zoom, defaultLatLng } from "../defaults";

export const LeafletMap: React.FC = () => {
    const { point } = useContext(LayerContext);
    const markersList = useRecoilValue(markersListState);
    console.log(markersList);
    

    return (
        <>
            <Navbar />
            <LayerContextProvider>
                <MapContainer id="mapId" center={defaultLatLng} zoom={zoom}>
                    <LayerGroup>{point}</LayerGroup>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    ></TileLayer>
                    {markersList.map((item) => {
                        return (
                            <Marker position={item.coordinates} key={item.id}>
                                <Popup>
                                    Name: {item.name} <br /> Description: {item.descr} <br /> Date: {item.date} <br /> Сoordinates: {item.coordinates}
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </LayerContextProvider>
        </>
    );
};

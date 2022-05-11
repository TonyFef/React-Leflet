import React, { useContext } from "react";
import { MapContainer, TileLayer, LayerGroup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { LayerContext } from "./context/LayerContext";

const defaultLatLng: LatLngTuple = [60.00748, 30.37302];
const zoom: number = 10;

export const LeafletMap: React.FC = () => {
    const { point } = useContext(LayerContext);
    return (
        <MapContainer id="mapId" center={defaultLatLng} zoom={zoom}>
            <LayerGroup>{point}</LayerGroup>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            ></TileLayer>
        </MapContainer>
    );
};

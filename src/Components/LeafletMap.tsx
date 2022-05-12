import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MapContainer, TileLayer, LayerGroup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { LayerContext } from "./context/LayerContext";
import AddMarkerButton from "./AddMarkerButton";
import { Marker, Popup } from "react-leaflet";
import { Navbar } from "./Navbar";
import { popupsDefault } from "../defaults";

const defaultLatLng: LatLngTuple = [60.00748, 30.37302];
const zoom: number = 15;

export const LeafletMap: React.FC = () => {
    const { point } = useContext(LayerContext);

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <MapContainer id="mapId" center={defaultLatLng} zoom={zoom}>
                    <AddMarkerButton />
                    <LayerGroup>{point}</LayerGroup>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    ></TileLayer>
                    {popupsDefault.map((item) => {
                        return (
                            <Marker position={item.coordinates} key={item.id}>
                                <Popup>
                                    Name: {item.name} <br /> Description: {item.descr} <br /> Date: {item.date} <br /> Сoordinates: {item.coordinates}
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </BrowserRouter>
        </>
    );
};

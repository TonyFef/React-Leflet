import React, { useContext, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { MapContainer, TileLayer, LayerGroup, Marker, Popup, useMapEvent } from "react-leaflet";

import { LayerContext } from "./context/LayerContext";
import { LayerContextProvider } from "../Components/context/LayerContext";
import { Navbar } from "./Navbar";
import { markersListState } from "../state/atoms";
import { zoom, defaultLatLng } from "../defaults";
import { LatLngExpression } from "leaflet";

export const LeafletMap: React.FC = () => {
    const { point } = useContext(LayerContext);

    const markersList = useRecoilValue(markersListState);
    const setNewItem = useSetRecoilState(markersListState);

    const [newPosition, setNewPosition] = useState<LatLngExpression>([0, 0]);

    const date: string = new Date().toLocaleDateString("ru-RU");
    const id = new Date();
    let newName: string = "";
    let newDescr: string = "";
    let positionCropped: string = "";

    const onAddToList = () => {
        setNewItem((oldList) => {
            return [...oldList, { id: +id, name: newName, descr: newDescr, date: date, coordinates: positionCropped.split(", ") }];
        });
    };

    function AddMarker() {
        useMapEvent("click", (e) => {
            setNewPosition(e.latlng);
        });
        positionCropped = newPosition.toString().slice(7).slice(0, -1);

        if (newPosition) {
            return (
                <Marker position={newPosition}>
                    <Popup>
                        <input type="text" onChange={(e) => (newName = e.target.value)} />
                        <label htmlFor="name-input" className="helper-text">
                            Type name
                        </label>
                        <input type="text" onChange={(e) => (newDescr = e.target.value)} />
                        <label htmlFor="description-input">Type description</label>
                        <input type="text" value={positionCropped} disabled />
                        <label htmlFor="coordinates-input">Coordinates</label>
                        <input type="text" value={date} disabled />
                        <label htmlFor="coordinates-input">Date</label>
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={onAddToList}>
                            Submit
                        </a>
                    </Popup>
                </Marker>
            );
        } else {
            return null;
        }
    }

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
                    <AddMarker />
                </MapContainer>
            </LayerContextProvider>
        </>
    );
};

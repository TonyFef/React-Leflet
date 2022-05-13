import React, { useContext, useState } from "react";
import { useSetRecoilState } from "recoil";
import { MapContainer, TileLayer, LayerGroup, Marker, Popup, useMapEvent } from "react-leaflet";
import { LatLngExpression } from "leaflet";

import { LayerContext } from "./context/LayerContext";
import { LayerContextProvider } from "../Components/context/LayerContext";
import { Navbar } from "./Navbar";
import { markersListState } from "../state/atoms";
import { zoom, defaultLatLng, id, date } from "../defaults";
import { PopupsList } from "./PopupsList";

export const LeafletMap: React.FC = () => {
    const { point } = useContext(LayerContext);

    const setNewItem = useSetRecoilState(markersListState);

    const [newPosition, setNewPosition] = useState<LatLngExpression>([0, 0]);
    const [error, setError] = useState<boolean>(false);

    let newName: string = "";
    let newDescr: string = "";
    let positionCropped: string = "";

    const onAddToList = () => {
        if (newName !== "") {
            setNewItem((oldList) => {
                return [...oldList, { id: +id, name: newName, descr: newDescr, date: date, coordinates: positionCropped.split(", ") }];
            });
            setError(false);
        } else {
            setError(true);
            return null;
        }
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
                        <div className="submit-btn">
                            <span>{error ? "Enter name" : ""}</span>
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={onAddToList}>
                                Submit
                            </a>
                        </div>
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
                    <PopupsList />
                    <AddMarker />
                </MapContainer>
            </LayerContextProvider>
        </>
    );
};

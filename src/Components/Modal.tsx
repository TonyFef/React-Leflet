import { useRecoilValue, useSetRecoilState } from "recoil";

import { markersListState } from "../state/atoms";
import { useState } from "react";
import { Navbar } from "./Navbar";

export const Modal = () => {
    const markersList = useRecoilValue(markersListState);
    const setMarkersList = useSetRecoilState(markersListState);

    const [name, setName] = useState("");
    const [descr, setDescr] = useState("");
    const [coordinates, setCoordinates] = useState("");

    const addItem = () => {
        if (name !== "" && coordinates !== "") {
            const date: string = new Date().toLocaleDateString("ru-RU");
            const id = new Date();

            const newItem = { id: +id, name, descr, coordinates: coordinates.split(", "), date };

            setMarkersList((oldList) => {
                return [...oldList, newItem];
            });

            setName("");
            setDescr("");
            setCoordinates("");
        }
    };

    return (
        <>
            <Navbar />
            <form id="modal1" className="modal modal-showed">
                <div className="modal-content">
                    <h4>Add new popup</h4>
                    <input
                        type="text"
                        id="name-input"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label htmlFor="name-input">Type name</label>
                    <input
                        type="text"
                        id="description-input"
                        onChange={(e) => {
                            setDescr(e.target.value);
                        }}
                    />
                    <label htmlFor="description-input">Type description</label>
                    <input
                        type="text"
                        id="coordinates-input"
                        onChange={(e) => {
                            setCoordinates(e.target.value);
                        }}
                    />
                    <label htmlFor="coordinates-input">Type coordinates</label>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={addItem}>
                        Submit
                    </a>
                </div>
            </form>
        </>
    );
};

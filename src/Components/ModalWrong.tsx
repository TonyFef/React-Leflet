import { useSetRecoilState } from "recoil";

import { markersListState } from "../state/atoms";
import { useState } from "react";
import { Navbar } from "./Navbar";

export const Modal: React.FC = () => {
    const setMarkersList = useSetRecoilState(markersListState);

    const [name, setName] = useState("");
    const [descr, setDescr] = useState("");
    const [coordinates, setCoordinates] = useState("");
    const [textName, setTextName] = useState("");
    const [textCoordinates, setTextCoordinates] = useState("");
    const [textThanks, setTextThanks] = useState("");

    const coordinatesVerification: RegExp = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    console.log(typeof coordinatesVerification);

    const addItem = () => {
        setCoordinates(coordinates.replace(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/, "hello"));

        if (name === "") {
            setTextName("Enter name, please");
        }
        if (coordinates === "" || coordinates) {
            setTextCoordinates("Enter coordinates, please");
        }

        if (name !== "") {
            setTextName("");
        }
        if (coordinates !== "") {
            setTextCoordinates("");
        }

        if (name !== "" && coordinates !== "") {
            const date: string = new Date().toLocaleDateString("ru-RU");
            const id = new Date();

            const newItem = { id: +id, name, descr, coordinates: coordinates.split(", "), date };

            setMarkersList((oldList) => {
                return [...oldList, newItem];
            });
            setTextThanks("Your popup has been added! Thank you!");

            console.log(textThanks);

            // setName("");
            // setDescr("");
            // setCoordinates("");
        }
    };

    const nameMessage = () => <span className="error-message">{textName}</span>;
    const coordinatesMessage = () => <span className="error-message">{textCoordinates}</span>;
    const bothMessage = () => (
        <>
            <span className="error-message">{textName}</span>
            <br />
            <br />
            <span className="error-message">{textCoordinates}</span>
        </>
    );
    const thanksMessage = () => {

        return <span className="success-message">{textThanks}</span>;
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
                        className="validate"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />
                    <label htmlFor="name-input" className="helper-text" data-error="wrong" data-success="right">
                        Type name
                    </label>
                    <input
                        type="text"
                        id="description-input"
                        onChange={(e) => {
                            setDescr(e.target.value);
                        }}
                        value={descr}
                    />
                    <label htmlFor="description-input">Type description</label>
                    <input
                        type="text"
                        id="coordinates-input"
                        onChange={(e) => {
                            setCoordinates(e.target.value);
                            // if (/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(e.target.value)) {
                            //     console.log('ehllo')
                            // }

                            // setCoordinates(
                            //     coordinates.replace(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/, "hello")
                            // );
                        }}
                        value={coordinates}
                    />
                    <label htmlFor="coordinates-input">Type coordinates</label>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={addItem}>
                        Submit
                    </a>
                </div>
            </form>
            <div className="form-message">
                <p>
                    {name === "" ? nameMessage() : null}
                    {coordinates === "" ? coordinatesMessage() : null}
                    {coordinates === "" && name === "" ? bothMessage() : null}
                    {coordinates !== "" && name !== "" && textThanks !== "" ? thanksMessage() : null}
                </p>
            </div>
        </>
    );
};

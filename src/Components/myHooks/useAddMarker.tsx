import { useContext, useEffect, useState, useCallback } from "react";
import { useMap, Marker } from "react-leaflet";
import L, { LeafletMouseEvent } from "leaflet";
import { LayerContext } from "../context/LayerContext";

function useAddMarker(selected: boolean) {
    const map = useMap();

    const { setPoint } = useContext(LayerContext);

    // add a state to activate the Event
    const [activate, setActivate] = useState(selected);

    // define the MouseEvent with the useCallback hook
    const markerEvent = useCallback(
        (e: LeafletMouseEvent) => {
            // if you want to use any event,
            // be sure that the default is disabled.
            e.originalEvent.preventDefault();
            // create your Marker with the react leaflet component Marker
            setPoint(<Marker position={e.latlng} />);
            e.originalEvent.stopPropagation();
        },
        [setPoint]
    );

    // activate the EventHandler with the useEffect handler
    useEffect(() => {
        map?.doubleClickZoom.disable();
        if (activate === true) {
            map?.on("dblclick", markerEvent);
        }
        return () => {
            map?.off("dblclick", markerEvent);
        };
    }, [map, activate, markerEvent]);
}

export default useAddMarker;

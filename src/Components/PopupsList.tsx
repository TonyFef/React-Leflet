import { useRecoilValue } from "recoil";
import { markersListState } from "../state/atoms";
import { Marker, Popup } from "react-leaflet";

export const PopupsList: React.FC = () => {
    const markersList = useRecoilValue(markersListState);

    return (
        <>
            {markersList.map((item) => {
                return (
                    <Marker position={item.coordinates} key={item.id}>
                        <Popup>
                            <b>Name:</b> {item.name} <br /> <b>Description:</b> {item.descr} <br /> <b>Date:</b> {item.date} <br />
                            <b>Сoordinates:</b> {item.coordinates}
                        </Popup>
                    </Marker>
                );
            })}
        </>
    );
};

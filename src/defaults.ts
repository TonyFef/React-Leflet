import { LatLngTuple } from "leaflet";

interface Ipopup {
    id: number;
    name: string;
    descr: string;
    date: string;
    coordinates: any;
}

export let popupsDefault: Ipopup[] = [
    { id: 1, name: "Main building", descr: "Made in 1899", date: "12.05.2022", coordinates: [60.00748, 30.37302] },
    { id: 2, name: "Administrative building", descr: "For submitting documents", date: "10.05.2022", coordinates: [60.008514, 30.374783] },
    { id: 3, name: "Dormitory 10", descr: "For engineers", date: "08.05.2022", coordinates: [59.99863, 30.37075] },
];

export const defaultLatLng: LatLngTuple = [60.00748, 30.37302];
export const zoom: number = 14;

export const date: string = new Date().toLocaleDateString("ru-RU");
export const id = new Date();
export let newName: string = "";
export let newDescr: string = "";
export let positionCropped: string = "";

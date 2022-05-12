import { LatLngTuple } from "leaflet";

interface Ipopup {
    id: number;
    name: string;
    descr: string;
    date: string;
    coordinates: any;
}

export let popupsDefault: Ipopup[] = [
    { id: 1, name: "Главный корпус", descr: "Made it first", date: "12.05.2022", coordinates: [60.00748, 30.37302] },
    { id: 2, name: "Первый корпус", descr: "Made it first", date: "10.05.2022", coordinates: [60.008514, 30.374783] },
    { id: 3, name: "Общежитие 10", descr: "Made it first", date: "08.05.2022", coordinates: [59.99863, 30.37075] },
];

export const defaultLatLng: LatLngTuple = [60.00748, 30.37302];
export const zoom: number = 14;

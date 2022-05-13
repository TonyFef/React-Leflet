import { atom } from "recoil";

import { popupsDefault } from "../defaults";

export const markersListState = atom({
    key: "markersListState",
    default: popupsDefault,
});

export const modalIsActiveState = atom({
    key: "modalIsActiveState",
    default: false,
});

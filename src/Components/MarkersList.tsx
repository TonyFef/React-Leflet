import { Navbar } from "./Navbar";
import { markersListState } from "../state/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const MarkersList: React.FC = () => {
    const markersList = useRecoilValue(markersListState);
    const deleteOneItem = useSetRecoilState(markersListState);

    const deleteItem = (id: any) => {
        const filteredList = markersList.filter((item) => item.id !== id);
        deleteOneItem(filteredList);
    };

    return (
        <>
            <Navbar />
            <div className="cards-grid mt-4">
                {markersList.map((item) => {
                    return (
                        <div className="card-item" key={item.id}>
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{item.name}</span>
                                    <p>
                                        {item.descr}
                                        <br />
                                        {item.date}
                                        <br />
                                        {item.coordinates.join(" ")}
                                    </p>
                                </div>
                                <div className="">
                                    <i
                                        className="material-icons"
                                        onClick={() => {
                                            deleteItem(item.id);
                                        }}
                                    >
                                        delete
                                    </i>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

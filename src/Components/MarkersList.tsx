import { Navbar } from "./Navbar";
import { markersListState } from "../state/atoms";
import { useRecoilValue } from "recoil";

export const MarkersList: React.FC = () => {
    const markersList = useRecoilValue(markersListState);

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
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

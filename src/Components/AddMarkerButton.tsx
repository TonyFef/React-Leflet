// import useAddMarker from "./myHooks/useAddMarker";

interface Props {}

const AddMarkerButton: React.FC<Props> = (props) => {
    return <button onClick={(e) => console.log(e.target)}>Add Points</button>;
};

export default AddMarkerButton;

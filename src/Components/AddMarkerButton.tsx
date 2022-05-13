import { useRecoilValue, useSetRecoilState } from "recoil";

import { modalIsActiveState } from "../state/atoms";

const AddMarkerButton: React.FC = () => {
    const showModal = useSetRecoilState(modalIsActiveState);
    const showModalValue = useRecoilValue(modalIsActiveState);

    const changeHandler = () => {
        showModal(!showModalValue);
        console.log(showModalValue);
    };

    return (
        <button onClick={changeHandler}>
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
                Add Points
            </a>
        </button>
    );
};

export default AddMarkerButton;

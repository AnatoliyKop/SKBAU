import {useState} from "react";
import beforeImg from "../../../public/assets/befor1.jpg";
import afterImg from "../../../public/assets/after1.jpg";
import CustomSlider from "./CustomSlider.tsx";


const ProjectsFotoBeforeAfter = () => {
    const [pos, setPos] = useState(20);
    const blend = 5;

    const mask =
        pos <= 0
            ? "linear-gradient(to right, transparent 0%, transparent 100%)"
            : pos >= 100
                ? "linear-gradient(to right, black 0%, black 100%)"
                : `linear-gradient(to right, black 0%, black ${pos}%, transparent ${
                    pos + blend
                }%, transparent 100%)`;

    return (
        <div className="container-wrapper">
            <div className="smooth-container">
                <img src={beforeImg} className="layer before" alt="before" />
                <img
                    src={afterImg}
                    className="layer after"
                    alt="after"
                    style={{
                        maskImage: mask,
                        WebkitMaskImage: mask,
                    }}
                />
            </div>

            <CustomSlider value={pos} onChange={setPos} />
        </div>
    );
};



export default ProjectsFotoBeforeAfter;
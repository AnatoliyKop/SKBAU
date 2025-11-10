import React, {useState} from "react";
import CustomSlider from "./CustomSlider";
import type {ProjectData} from "../../utils/typs.ts";
import "../fotoBeforeAfter/style/FotoBeforeAfterStyle.css"

interface ProjectSliderProps {
    project: ProjectData;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({project}) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [pos, setPos] = useState(20);

    const nextImage = () => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);
        setPos(20);
    };
    const prevImage = () => {
        setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
        setPos(20);
    };

    const {before, after} = project.images[currentImg];
    const blend = 5;
    const mask =
        pos <= 0
            ? "linear-gradient(to right, transparent 0%, transparent 100%)"
            : pos >= 100
                ? "linear-gradient(to right, black 0%, black 100%)"
                : `linear-gradient(to right, black 0%, black ${pos}%, transparent ${pos + blend}%, transparent 100%)`;

    return (

        <div className="project-slider">
            <h5 className="gradient">{project.title}</h5>
            <p>{project.description}</p>

            <div className="container-wrapper">
                <div className="arrow-container">
                    <button className="arrow left" onClick={prevImage}>
                        ‹
                    </button>

                    <div className="smooth-container">
                        <img src={before} className="layer before" alt="before" />
                        <img
                            src={after}
                            className="layer after"
                            alt="after"
                            style={{
                                maskImage: mask,
                                WebkitMaskImage: mask,
                            }}
                        />
                    </div>

                    <button className="arrow right" onClick={nextImage}>
                        ›
                    </button>
                </div>

                <CustomSlider value={pos} onChange={setPos} />

                <div className="dots">
                    {project.images.map((_, idx) => (
                        <span
                            key={idx}
                            className={idx === currentImg ? "active" : ""}
                            onClick={() => setCurrentImg(idx)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSlider;
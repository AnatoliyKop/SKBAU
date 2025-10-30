import { useState } from "react";


const ColorBeforeAfterDrag = () => {
    const [pos, setPos] = useState(0); // начинаем с 0 (Before)
    const blend = 5; // зона размытия

    // формируем маску
    const mask =
        pos <= 0
            ? "linear-gradient(to right, transparent 0%, transparent 100%)"
            : pos >= 100
                ? "linear-gradient(to right, black 0%, black 100%)"
                : `linear-gradient(to right, black 0%, black ${pos}%, transparent ${pos + blend}%, transparent 100%)`;

    return (
        <div className="container-wrapper">
            <div className="smooth-container">
                <div className="layer before" />
                <div
                    className="layer after"
                    style={{
                        maskImage: mask,
                        WebkitMaskImage: mask,
                    }}
                />
            </div>

            <input
                type="range"
                min="0"
                max="100"
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                className="slider-range"
            />
        </div>
    );
};

export default ColorBeforeAfterDrag;
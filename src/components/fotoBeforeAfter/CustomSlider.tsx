import React from "react";
import "../fotoBeforeAfter/style/FotoBeforeAfterStyle.css"
interface CustomSliderProps {
    value: number;
    min?: number;
    max?: number;
    onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
                                                       value,
                                                       min = 0,
                                                       max = 100,
                                                       onChange,
                                                   }) => {
    return (
        <div
            className="slider-wrapper"
            style={{ "--slider-value": `${value}` } as React.CSSProperties} // используем CSS переменную
        >
            <div className="slider-track">
                <div className="slider-fill" />
            </div>

            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="custom-slider"
            />
        </div>
    );
};

export default CustomSlider;
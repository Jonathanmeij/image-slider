import { useState } from "react";
import Overlay from "./Overlay";

export default function Slider(props) {
    const pictures = ["WLUHO9A_xik", "I7oLRdM9YIw", "YmQ0-nmWcV0", "1GcWQAm9a2I"];
    const [currentPicture, setCurrentPicture] = useState(0);

    function nextSlide() {
        if (currentPicture === pictures.length - 1) {
            setCurrentPicture(0);
            return;
        }
        setCurrentPicture((prev) => prev + 1);
    }

    function prevSlide() {
        if (currentPicture == 0) {
            setCurrentPicture(pictures.length - 1);
            return;
        }
        setCurrentPicture((prev) => prev - 1);
    }

    return (
        <div className="relative overflow-hidden=">
            <img
                src={`https://source.unsplash.com/${pictures[currentPicture]}/1600x900`}
                alt=""
            />

            <Overlay nextSlide={nextSlide} prevSlide={prevSlide} />
        </div>
    );
}

//I7oLRdM9YIw
//YmQ0-nmWcV0
//https://unsplash.com/photos/1GcWQAm9a2I

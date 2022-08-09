import { useState } from "react";
import Arrow from "./Arrow";

export default function Overlay(props) {
    const [isHovering, setIsHovering] = useState(false);

    function handleHover() {
        setIsHovering(true);
    }

    function handleHoverOut() {
        setIsHovering(false);
    }

    return (
        <div
            className="absolute top-0 left-0 w-full h-full "
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
        >
            {isHovering && (
                <div className="flex justify-between h-full">
                    <Arrow orientation="left" action={props.prevSlide} />
                    <Arrow orientation="right" action={props.nextSlide} />
                </div>
            )}
        </div>
    );
}

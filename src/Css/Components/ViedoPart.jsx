import React from "react";
import Viedo from '../Viedo/Viedo.mp4';
function ViedoPart() {
    return (
        <div className="viedo-container">
            <video width="100%" height="100%" autoPlay="autoplay" muted="muted" loop="loop" >
                <source src={Viedo} type="video/mp4" />
            </video>
        </div>
    );
}
export default ViedoPart;
import React from "react";

const CanvasComponent = (props) => {
    const { canvasRef } = props;
    return (
        <canvas ref={canvasRef} />
    );
}

export default CanvasComponent;
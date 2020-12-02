import React, { useEffect, useRef } from "react";
import { CameraComponent } from "../CameraComponent/CameraComponent";
import CanvasComponent from "../CanvasComponent/CanvasComponent";
import styled from "styled-components";
import {
    nets, loadFaceExpressionModel, matchDimensions,
    resizeResults, detectSingleFace, TinyFaceDetectorOptions,
    draw
} from "face-api.js";

const ContainerComponent = styled.div`
    position: relative;
`;

const OverlayComponent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const FaceDetectionComponent = () => {
    const videoRef = useRef();
    const canvasRef = useRef();

    const initModels = async () => {
        await nets.tinyFaceDetector.load("/models/");
        await loadFaceExpressionModel("/models/");
    }

    const startFaceDetection = async () => {
        const options = new TinyFaceDetectorOptions({ inputSize: 512, scoreThreshold: 0.5 });
        const result = await detectSingleFace(videoRef.current, options).withFaceExpressions();
        if (result) {
            const dims = matchDimensions(canvasRef.current, videoRef.current, true);
            const resizedResult = resizeResults(result, dims);
            const minConfidence = 0.05;
            draw.drawDetections(canvasRef.current, resizedResult);
            draw.drawFaceExpressions(canvasRef.current, resizedResult, minConfidence);

///// expression capture ////////

            const expressions = result.expressions;
            const maxValue = Math.max(...Object.values(expressions));
            const emotion = Object.keys(expressions).filter(
                item => expressions[item] === maxValue
            );
            setTimeout(() => {
                console.log(emotion[0])
              }, 5000);

 ///// expression capture ////////

        }
        setTimeout(() => startFaceDetection());
    };

    useEffect(() => {
        initModels();
    }, []);


    return (
        <ContainerComponent>
            <CameraComponent videoRef={videoRef} onReady={startFaceDetection} />
            <OverlayComponent>
                <CanvasComponent canvasRef={canvasRef} />
            </OverlayComponent>
        </ContainerComponent>
    );
};

export default FaceDetectionComponent;
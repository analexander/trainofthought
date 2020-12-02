import { useState, useEffect } from "react";

const  useUserMedia = (requestedMedia) => {
    const [mediaStream, setMediaStream] = useState();

    useEffect(() => {
        const enableStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
                setMediaStream(stream);
            } catch (error) {
                alert("Could not connect to camera: " + error);
            }
        };

        if (!mediaStream) {
            enableStream();
        } else {
            return () => {
                mediaStream.getTracks().forEach(track => track.stop());
            };
        }
    }, [mediaStream, requestedMedia]);

    return mediaStream;
};

export default useUserMedia;
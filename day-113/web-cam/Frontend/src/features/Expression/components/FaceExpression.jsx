import { useEffect, useRef, useState } from "react";
import { init, detect } from "../utils/utils";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Initializing...");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    init(
      landmarkerRef,
      videoRef,
      streamRef,
      setExpression,
      setIsReady
    );

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "400px",
          height: "300px",
          borderRadius: "12px",
          backgroundColor: "black",
          marginTop: "20px"
        }}
      />
      <h2>Expression: {expression}</h2>
      <button className="bg"
        disabled={!isReady}
        onClick={() =>
          detect(landmarkerRef, videoRef, setExpression)
        }
      >
        Detect Expression
      </button>
    </div>
  );
}
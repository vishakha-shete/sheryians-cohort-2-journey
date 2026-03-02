import {
    FaceLandmarker,
    FilesetResolver
  } from "@mediapipe/tasks-vision";
  
  export const init = async (
    landmarkerRef,
    videoRef,
    streamRef,
    setExpression,
    setIsReady
  ) => {
    try {
      // Load WASM
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
  
      // Create FaceLandmarker
      landmarkerRef.current = await FaceLandmarker.createFromOptions(
        vision,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
          },
          outputFaceBlendshapes: true,
          runningMode: "VIDEO",
          numFaces: 1
        }
      );
  
      // Start camera
      streamRef.current =
        await navigator.mediaDevices.getUserMedia({ video: true });
  
      videoRef.current.srcObject = streamRef.current;
      await videoRef.current.play();
  
      setExpression("Ready ✅");
      setIsReady(true);
  
    } catch (error) {
      console.error("Initialization error:", error);
      setExpression("Camera Error ❌");
      setIsReady(false);
    }
  };
  
  export const detect = (
    landmarkerRef,
    videoRef,
    setExpression
  ) => {
    if (!landmarkerRef.current) {
      setExpression("Model Not Ready ❌");
      return;
    }
  
    if (!videoRef.current) {
      setExpression("Camera Not Ready ❌");
      return;
    }
  
    const results = landmarkerRef.current.detectForVideo(
      videoRef.current,
      performance.now()
    );
  
    if (!results.faceBlendshapes?.length) {
      setExpression("No Face Detected");
      return;
    }
  
    const blendshapes = results.faceBlendshapes[0].categories;
  
    const getScore = (name) =>
      blendshapes.find((b) => b.categoryName === name)?.score || 0;
  
    const smileLeft = getScore("mouthSmileLeft");
    const smileRight = getScore("mouthSmileRight");
    const jawOpen = getScore("jawOpen");
    const browUp = getScore("browInnerUp");
    const frownLeft = getScore("mouthFrownLeft");
    const frownRight = getScore("mouthFrownRight");
  
    let currentExpression = "Neutral 😐";
  
    if (smileLeft > 0.5 && smileRight > 0.5) {
      currentExpression = "Happy 😊";
    } 
    else if (frownLeft > 0.12 && frownRight > 0.12) {
      currentExpression = "Sad 😢";
    } 
    else if (jawOpen > 0.3 && browUp > 0.3) {
      currentExpression = "Surprised 😲";
    }
  
    setExpression(currentExpression);
  };
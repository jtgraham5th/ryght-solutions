import React, { useRef, useEffect } from "react";

export function SignatureCanvas({canvasRef}) {

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas properties or initialize your drawing here

    return () => {
      // Clean up any resources here
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={400} height={300} />
    </div>
  );
}

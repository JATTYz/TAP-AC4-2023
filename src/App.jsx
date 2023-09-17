/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Replay from "./components/replay/Replay";
import "../src/main.css";
import Map from "./components/Map";

const App = () => {
  const canvasRef = useRef(null);
  const upperHalfRef = useRef(null);
  const mapRef = useRef(null);

  return (
    <div className="container">
      {/* <p style={{ textAlign: "center" }}>HELLO WORLD ^_^</p> */}
      <div className="upper_half" ref={upperHalfRef}>
        <div id="render" ref={canvasRef}>
          <Replay
            canvasRef={canvasRef}
            upperHalfRef={upperHalfRef}
            mapRef={mapRef}
          />
        </div>
        <div id="map" ref={mapRef}>
          MAP
        </div>
      </div>
      <div className="lower_half"></div>
      <Map />
    </div>
  );
};

export default App;

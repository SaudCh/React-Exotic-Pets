import React, { useRef, useEffect } from "react";

export default function Map(props) {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    getMap();
  }, [center, zoom]);

  const getMap = async () => {
    const map = await new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  };

  return (
    <div
      className="col-10 col-md-6 border"
      id="map"
      style={{ height: "50vh" }}
      ref={mapRef}
    ></div>
  );
}

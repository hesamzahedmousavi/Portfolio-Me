import Globe from "react-globe.gl";

const World = () => {
  const tehranMarker = {
    lat: 35.6895,
    lng: 51.389,
    color: "#00BFAE",
    label: "Tehran, Iran",
  };

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      labelLat={(d) => d.properties.latitude}
      labelLng={(d) => d.properties.longitude}
      labelText={(d) => d.properties.name}
      labelSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelColor={() => "rgba(255, 165, 0, 0.75)"}
      labelResolution={2}
      pointsData={[tehranMarker]}
      pointLat={(d) => d.lat}
      pointLng={(d) => d.lng}
      pointColor={(d) => d.color}
      pointLabel={(d) => d.label}
      pointRadius={5}
      width={140}
      height={158}
    />
  );
};

export default World;

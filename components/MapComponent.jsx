import React from "react";
import Iframe from "react-iframe";

function MapComponent({ width, height }) {
  return (
    <div style={{ width: "100%" }}>
      <Iframe
        className="lg:w-[550px] w-[350px]"
        url="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=csi%20junior%20school%20kireka+(CSI%20JUNIOR%20SCHOOL)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width={width}
        height={height}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      />
    </div>
  );
}

export default MapComponent;

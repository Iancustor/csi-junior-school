"use client";
import React, { useState, useEffect } from "react";
import Typed from "@/components/Typed";
import { Heading } from "@/components/Heading";

function MyComponent() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevState) => !prevState);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="bg-gray-900 bg-opacity-50 w-[90%] lg:w-[85%] h-[50vh] p-8 flex flex-col  justify-center gap-5 rounded-tl-3xl rounded-br-3xl">
          <Heading heading={"CSI JUNIOR SCHOOL KIREKA"} />
          <Typed />
        </div>
      )}
    </div>
  );
}

export default MyComponent;

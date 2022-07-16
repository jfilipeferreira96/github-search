import React from "react";
import SpinnerGif from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img src={SpinnerGif} className="text-center mx-auto" width={200} alt="Loading..." />
    </div>
  );
}

export default Spinner;

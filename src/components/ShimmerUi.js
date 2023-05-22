import React from "react";
import { ThreeDots } from "react-loader-spinner";
const ShimmerUi = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default ShimmerUi;

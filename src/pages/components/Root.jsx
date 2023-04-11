import React from "react";
import Home from "./Home";
import More from "./More";

const Root = () => {
  return (
    <div>
      <div className="home" style={{ display: "block" }}>
        <Home />
      </div>
      <div className="repo" style={{ display: "none" }}>
        <More />
      </div>
    </div>
  );
};

export default Root;

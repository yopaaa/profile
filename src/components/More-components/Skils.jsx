import React, { useState, useEffect } from "react";
import data from "../../data/data.js";

const Skils = () => {
  const [list, setList] = useState();

  useEffect(() => {
    const datas = data.skils.reverse()
    setList(
      datas.map((val) => {
        return (
          <div className="more-Link-container" key={val}>
            <span className="name" title={val}>
              {val}
            </span>
          </div>
        );
      })
    );
  }, []);
  return <>{list}</>;
}

export default Skils



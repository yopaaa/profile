import React, { useState, useEffect } from "react";
import data from "../data/data.js";

const Experience = () => {
  const [content, setcontent] = useState();

  function getcontent() {
    const datas = data.experience.reverse()
    setcontent(
      datas.map((value) => {
        return (
          <div class="card">
            <div class="card-header">
              <img
                src={value.img}
                alt="rover"
              />
            </div>
            <div class="card-body">
              <h4 title="view details" style={{fontWeight: "bold"}}>{value.name} - {value.position}</h4>
              <p style={{ fontSize: "14px" }}>{value.des}</p>
              <p style={{ fontSize: "12px" }}>{value.fromDate + " - " + value.toDate}</p>
            </div>
          </div>
        );
      })
    );
  }

  useEffect(() => {
    getcontent();
  }, []);
  return <div class="container-certificate">{content}</div>;
}

export default Experience

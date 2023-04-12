import React, { useState, useEffect } from "react";
import data from "../../data/data.js";

const Certificate = () => {
  const [content, setcontent] = useState();

  function getcontent() {
    setcontent(
      data.blog.map((value) => {
        return (
          <div class="card">
            <div class="card-header">
              <img
                src={value.img}
                alt="rover"
              />
            </div>
            <div class="card-body">
              <h4 title="view certificates" style={{fontWeight: "bold"}}>{value.name} - {value.competition}</h4>
              <p style={{ fontSize: "14px" }}>{value.des}</p>
              <a href={value.link} style={{color: "blue", fontSize: "12px"}} target="_blank" rel="noreferrer">view</a>
              <p style={{ fontSize: "12px" }}>{value.date}</p>
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
};

export default Certificate;

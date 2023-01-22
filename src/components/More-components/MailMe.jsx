import React, { useState } from "react";
import data from "../data/data.js";

const MailMe = () => {
  const [mailBody, setMailBody] = useState("");
  const [name, setName] = useState("Anonymous");

  return (
    <div className="mail-me-container">
      <div className="mail-me-name">
        <p>Name</p>
        <input
          type="text"
          onChange={(ev) => setName(ev.target.value)}
          placeholder="Name"
        />
      </div>
      <br />

      <div className="mail-me-text-area">
        <textarea
          name=""
          id=""
          onChange={(ev) => setMailBody(ev.target.value)}
        ></textarea>
      </div>

      <br />
      <a
        rel="noreferrer"
        href={`mailto:${data.email}?subject=${
          "message from " + name + " - profile.yopaaa.site"
        }&body=${mailBody}`}
        target="_blank"
      >
        Send an Email
      </a>
    </div>
  );
};

export default MailMe;

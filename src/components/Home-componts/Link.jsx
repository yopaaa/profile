import React, { useEffect, useState } from "react";
import data from "../../data/data.js";

const Link = () => {
  const [list, setList] = useState();

  useEffect(() => {
    setList(
      data.link.slice(0, 5).map((val) => {
        return (
          <a className="link" href={val.link} target="_blank" rel="noreferrer">
            <span
              className="h-6 fill-current text-gray-600 hover:text-green-700"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{val.name}</title>
              {/* <path d={val.svg} /> */}
              <img width="25px" height="25px" src={val.img} alt="logo" />
            </span>
          </a>
        );
      })
    );
  }, []);
  return (
    <div>
      <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between link-list">
        {list}
      </div>
    </div>
  );
};

export default Link;

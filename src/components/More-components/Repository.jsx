import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const Repository = () => {
  const [repoList, setRepoList] = useState();

  async function getRepo() {
    const datas = await axios.get(
      "https://api.github.com/users/yopaaa/repos?sort=pushed"
    );
    setRepoList(
      datas.data.map((val) => {
        // console.log(val);
        return (
          <div className="repository-container" key={val.full_name}>
            <span className="name" title="name">
              <a href={val.html_url} target="_blank" rel="noreferrer">
                {val.full_name}
              </a>
            </span>
            {/* <p>{val.html_url}</p> */}
            <p style={{ fontSize: "14px" }} title="description">
              {val.description}
            </p>
            <div className="repository-time">
              <p title="created at">
                created at {moment(val.created_at).startOf("second").fromNow()}
              </p>

              <p title="updated at">
                updated at {moment(val.updated_at).startOf("second").fromNow()}
              </p>

              <p title="pushed at">
                pushed at {moment(val.pushed_at).startOf("second").fromNow()}
              </p>
            </div>
          </div>
        );
      })
    );
  }
  useEffect(() => {
    getRepo();
  }, []);
  return repoList;
};

export default Repository;

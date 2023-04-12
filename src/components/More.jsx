import React, { useState, useEffect } from "react";
import Repository from "./More-components/Repository";
import MoreLink from "./More-components/Link";
import MailMe from "./More-components/MailMe";
import Certificate from "./More-components/Certificate";
import Skils from "./More-components/Skils";
import Experience from "./More-components/Experience";
import Blog from "./More-components/Blog";

const Home = () => {
  const contentList = [
    { name: "Repository", value: Repository },
    { name: "Link", value: MoreLink },
    { name: "Certificate", value: Certificate },
    { name: "Tools and Skils", value: Skils },
    { name: "Experience", value: Experience },
    { name: "Blog", value: Blog },
    { name: "Mail Me", value: MailMe },
  ];
  const [repoContentNavigation, setrepoContentNavigation] = useState();
  const [content, setcontent] = useState();

  function getNav(curretPage = "Repository") {
    setrepoContentNavigation(
      <div className="repo-content-navigation">
        <p
          onClick={() => {
            document.querySelector(".home").style.display = "block";
            document.querySelector(".repo").style.display = "none";
          }}
          className="backBtn"
        >
          Back
        </p>

        {contentList.map((val) => {
          const name = val.name;
          return (
            <p
              onClick={(ev) => {
                getNav(name);
                getContent(name);
              }}
              className={curretPage === name ? " curretPage" : ""}
              style={{cursor: "pointer"}}
            >
              {name}
            </p>
          );
        })}
      </div>
    );
  }

  function getContent(name) {
    const Result = contentList.find((value) => value.name === name).value;
    setcontent(
      <div>
        <Result />
      </div>
    );
    return true;
  }

  useEffect(() => {
    getNav();
    getContent("Repository");
  }, []);

  return (
    <>
      {repoContentNavigation}
      <div className="content">{content}</div>
    </>
  );
};

export default Home;

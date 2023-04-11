import React, { useState, useEffect } from "react";
import Repository from "./More-components/Repository";
import MoreLink from "./More-components/Link";
import MailMe from "./More-components/MailMe";
import Certificate from "./More-components/Certificate";
import Skils from "./More-components/Skils";
import Experience from "./More-components/Experience";

const Home = () => {
  const profile = "/images/profile.webp";
  const contentList = [
    {name: 'Repository', value: Repository},
    {name: "Link", value: MoreLink},
    {name: "Certificate", value: Certificate},
    {name: "Tools and Skils", value: Skils},
    {name: "Experience",value: Experience},
    {name: "Mail Me", value: MailMe},
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
          style={{
            background: "rgb(4,120,87, .8)",
            padding: "3px",
            borderRadius: "5px",
          }}
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
              className={curretPage === name ? "backBtn curretPage" : "backBtn"}
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
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left container-repo">
          {/* Image for mobile view*/}
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${profile})` }}
          />

          {repoContentNavigation}

          <div className="content">{content}</div>
        </div>
      </div>
      {/* Big profile image for side bar (desktop) */}
      <div className="w-full lg:w-2/5">
        <img
          src={profile}
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Home;

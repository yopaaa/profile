import React, { useState, useEffect } from "react";
import Repository from "./More-components/Repository";
import MoreLink from "./More-components/Link";
import MailMe from "./More-components/MailMe";
import Certificate from "./More-components/Certificate";
import Skils from "./More-components/Skils";
import Experience from "./More-components/Experience";
import Blog from "./More-components/Blog";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const page = router.query.page || "Repository";
  const isExistPage = contentList.find((value) => value.name === page)
    ? true
    : false;

  function getNav(curretPage = "Repository") {
    setrepoContentNavigation(
      <div className="repo-content-navigation">
        <p
          onClick={() => {
             router.push("/", "/", {
               shallow: true,
             });
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
                router.push(`?page=${name}`);
              }}
              className={curretPage === name ? " curretPage" : ""}
              style={{ cursor: "pointer" }}
              key={name}
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
      <>
        <Result />
      </>
    );
  }

  useEffect(() => {
    if (isExistPage) {
      getNav(page);
      getContent(page);
    } else {
      getNav("Repository");
      getContent("Repository");
      router.push(`/more?page=Repository`);
    }
  }, []);

  return (
    <>
      {repoContentNavigation}
      <div className="content">{content}</div>
    </>
  );
};

export default Home;

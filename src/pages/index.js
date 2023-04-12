import Head from "next/head";
import Home from "../components/Home";
import More from "../components/More";
import data from "../data/data";
import { getCookies, hasCookie, setCookie } from "cookies-next";
import Visitors from "../controllers/Visitors";
import { nanoid } from "nanoid";
import parser from "ua-parser-js";
import axios from "axios";

export default function Index({}) {
  return (
    <>
      <Head>
        <title>{"Profile"}</title>
        <meta
          name="description"
          content={`${data.name},${data.githubUsername} website, ${data.work},  ${data.address}, ${data.des}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/jpg" href="/images/linux.ico" />
      </Head>

      <div>
        <div className="home" style={{ display: "block" }}>
          <Home />
        </div>
        <div className="repo" style={{ display: "none" }}>
          <More />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const reqRes = {
    req: context.req,
    res: context.res,
  };
  const visitor = parser(context.req.headers["user-agent"]);
  const ipAddress =
    context.req.headers["x-forwarded-for"] ||
    context.req.connection.remoteAddress;

  if (!hasCookie("isVisitor", { ...reqRes })) {
    setCookie("isVisitor", "true", {
      httpOnly: true,
      maxAge: 60 * 60,
      ...reqRes,
    });
    console.log("new visitor found");

    visitor._id = nanoid();
    visitor.visitor = {};
    try {
    const extractIp = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
    visitor.visitor = extractIp.data;
    } catch (error) {
    visitor.visitor = ipAddress;
    }

    Visitors.insertOne(visitor);
  } else {
    console.log(ipAddress);
  }
  return {
    props: {},
  };
}

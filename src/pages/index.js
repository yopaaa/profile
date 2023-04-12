import Head from "next/head";
import Home from "../components/Home";
import More from "../components/More";
import data from "../data/data";
import parser from "ua-parser-js";

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
  const visitor = parser(context.req.headers["user-agent"]);
  const ipAddress =
    context.req.headers["x-forwarded-for"] ||
    context.req.connection.remoteAddress;
  visitor.visitor = {};
  visitor.visitor = ipAddress;
  console.log(visitor);
  return {
    props: {},
  };
}

import Head from "next/head";
import Home from "../components/Home";
import More from "../components/More";
import parser from "ua-parser-js";

export default function Index({}) {
  return (
    <>
      <Head>
        <title>{"Profile"}</title>
        <meta
          name="description"
          content="Yopa pitra ramadhani Nodejs developer Bangka-Belitung Islands, Indonesia yopaaa website"
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
  visitor.visitor.ipAddress = ipAddress

 
  // console.log(ipAddress);
  console.log(visitor);
  return {
    props: {},
  };
}


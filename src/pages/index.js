import Head from "next/head";
import Root from "./components/Root";

export default function Home({}) {
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

      <Root />
    </>
  );
}

export async function getServerSideProps(context) {
  const userAgent = context.req.headers["user-agent"];
  const ipAddress =
    context.req.headers["x-forwarded-for"] ||
    context.req.connection.remoteAddress;

  console.log(userAgent);
  console.log(ipAddress);
  return {
    props: {},
  };
}

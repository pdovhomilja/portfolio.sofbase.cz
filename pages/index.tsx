import Head from "next/head";
import Image from "next/image";
import MainPage from "../components/MainPage";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>SoftBase portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <MainPage></MainPage>
      </section>
    </div>
  );
}

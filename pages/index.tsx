import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import MainPage from "../components/MainPage";
//import Projects from "../components/Projects";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <>
      <Head>
        <title>SoftBase - Web3 agency</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen snap-y snap-proximity overflow-auto bg-black">
        <section id="Home" className="snap-start">
          <MainPage />
        </section>
        <section id="AboutUs" className="snap-start">
          <AboutUs />
        </section>
        {/*
      <section id="Projects" className="snap-start">
        <Projects />
      </section>
  */}
        <section id="Skills" className="snap-start">
          <Skill />
        </section>
        <section id="Contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </>
  );
}

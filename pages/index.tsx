import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import MainPage from "../components/MainPage";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <div className="h-screen snap-y overflow-scroll scrollbar scrollbar-track-slate-500/10 scrollbar-thumb-yellow-600/40 bg-black">
      <Head>
        <title>SoftBase portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="Home" className="snap-start">
        <MainPage />
      </section>
      <section id="AboutUs" className="snapt-start">
        <AboutUs />
      </section>
      <section id="Projects" className="snap-start">
        <Projects />
      </section>
      <section id="Skills" className="snap-start">
        <Skill />
      </section>
      <section id="Contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}

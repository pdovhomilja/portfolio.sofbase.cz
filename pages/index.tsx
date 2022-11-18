import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import MainPage from "../components/MainPage";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-slate-500/10 scrollbar-thumb-yellow-600/40">
      <Head>
        <title>SoftBase portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="Home" className="snap-start">
        <MainPage />
      </section>
      <section id="AboutUs" className="snap-start">
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

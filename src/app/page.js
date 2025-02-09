import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Nav from "./components/Nav";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary dark:bg-gray-900 dark:text-white">
      {/* <Navbar /> */}
      <Nav />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AchievementSection />
        <AboutSection id="about" />
        <ProjectSection id="project" />
        <EmailSection id="contact" />
      </div>
      <Footer />
    </main>

  );
}

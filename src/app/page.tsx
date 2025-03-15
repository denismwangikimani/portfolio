import PersonalTagCard from "@/components/Landing_part";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white">
      <section id="landing">
        <PersonalTagCard />
      </section>
      <section id="about">
        <AboutMe />
      </section>
    </main>
  );
}

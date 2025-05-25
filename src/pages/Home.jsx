// src/pages/Home.jsx
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ImageSlider from "../components/ImageSlider";
import CursorTyping from "../components/CursorTyping";

gsap.registerPlugin(ScrollTrigger);

const imagesAbout = [`${process.env.PUBLIC_URL}/images/about4.png`, `${process.env.PUBLIC_URL}/images/about2.png`, `${process.env.PUBLIC_URL}/images/about3.png`];
const imagesProjects = [
  `${process.env.PUBLIC_URL}/images/XposureDemo.gif`,
  `${process.env.PUBLIC_URL}/images/rl_highfrequency.png`,
  `${process.env.PUBLIC_URL}/images/llm.jpg`,
  `${process.env.PUBLIC_URL}/images/cnn_icarl.png`,
  `${process.env.PUBLIC_URL}/images/animation_gossip_quantifie_choco_carre.gif`,
  `${process.env.PUBLIC_URL}/images/vlasov_equations.png`
];

export default function Home() {
  useEffect(() => {
    gsap.utils.toArray(".fade-in-card").forEach((container) => {
      gsap.fromTo(
        container,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const cardClasses = `
    bg-white border border-gray-200 rounded-xl
    shadow-lg hover:shadow-2xl transition-shadow
    p-6 flex flex-col cursor-pointer
  `;

  return (
    <div className="p-6">
      {/* Hero */}
      <section className="w-full mb-12">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero.png`}
          alt="Main Visual"
          className="w-full h-[50vh] object-cover object-center rounded-lg shadow-md"
        />
      </section>

      {/* Typewriter */}
      <section className="text-center mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold">
        <CursorTyping />
        </h1>
      </section>

      {/* Mosaïque de cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-0">
        {/* About Me */}
        <div className="fade-in-card flex justify-center px-8 py-12">
          <NavLink to="/aboutme" className="w-full sm:w-auto">
            <div className={cardClasses}>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 mb-4">
                  Mathematics is my passion — implementing algorithms is my playground.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Applied Math &amp; Algorithms</strong> – Master's, École Polytechnique</li>
                <li><strong>Languages &amp; Frameworks</strong> – Python, C++/C#, Java, React</li>
                <li><strong>Data &amp; DevOps</strong> – SQL, Git, Docker</li>
              </ul>
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <ImageSlider images={imagesAbout} pause={7} speed={1} />
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Projects */}
        <div className="fade-in-card flex justify-center px-8 py-12">
        <NavLink to="/projects" className="w-full sm:w-auto">
          <div className={cardClasses}>
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-gray-700 mb-6">
              This collection of projects showcases a wide range of explorations at the intersection of
              <strong> applied mathematics</strong>, <strong>machine learning</strong>, and
              <strong> modern algorithmic techniques</strong>. Topics include the fine-tuning of
              <strong> language models on legal data</strong>, research on <strong>safe reinforcement learning</strong>,
              and the use of <strong>quantum computing frameworks</strong> for solving partial differential equations.
              Several works also address <strong>continual learning challenges</strong> and distributed optimization,
              with a focus on both theoretical contributions and practical implementation.
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <ImageSlider images={imagesProjects} pause={4} speed={1} />
              </div>
            </div>
          </div>
        </NavLink>
      </div>

      </div>
    </div>
  );
}

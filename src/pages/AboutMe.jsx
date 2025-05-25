// src/pages/AboutMe.jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  useEffect(() => {
    gsap.utils.toArray(".fade-in-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-12">
      {/* Intro */}
      <section className="fade-in-section text-center">
        <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Passionate developer with a strong background in applied mathematics
          and computer science. I thrive at the intersection of data, algorithms
          and creative problem-solving, building interactive applications and
          prototypes that bring ideas to life.
        </p>
      </section>

      {/* Education */}
      <section className="fade-in-section">
        <h2 className="text-3xl font-semibold mb-3">Education</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-bold">Master’s in Applied Mathematics</span>, École Polytechnique (IP Paris)
          </li>
          <li>
            <span className="font-bold">Officer Academy</span>, Saint-Cyr Coëtquidan – Leadership & Training
          </li>
          <li>
            <span className="font-bold">Preparatory Classes</span> (MPSI/MP*) – Lycée Henri-IV
          </li>
          <li>
            <span className="font-bold">MOOCs</span> in Deep Learning & Unity3D Game Development
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="fade-in-section">
        <h2 className="text-3xl font-semibold mb-3">Experience</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-bold">R&D Intern @ Ansys</h3>
            <p className="italic text-sm mb-1">Lyon, Franc – 2024</p>
            <p>
              Designed and implemented a compression algorithm using
              Laplace-Beltrami operators on complex geometries.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Junior Officer Training, French Army</h3>
            <p className="italic text-sm mb-1">Dieuze – 2023</p>
            <p>
              Led a section of 30 recruits; organized both physical and
              intellectual training programs.
            </p>
          </div>
          <div>
            <h3 className="font-bold">AI Automation Intern @ OpenSquare</h3>
            <p className="italic text-sm mb-1">Paris – 2018</p>
            <p>
              Developed automation scripts to streamline AI support tasks and
              data pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="fade-in-section">
        <h2 className="text-3xl font-semibold mb-3">Projects</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-bold">H-GenAI Web App:</span> PDF media review,
            sentiment analysis & AI-generated summary pipeline.
          </li>
          <li>
            <span className="font-bold">AI Hackathon Runner-Up:</span> Outfit
            makeover generator based on machine-learning image analysis.
          </li>
          <li>
            <span className="font-bold">Air-Gap Data Exfiltration PoC:</span> 
            Proof-of-concept via controlled screen luminosity variations.
          </li>
        </ul>
      </section>

      {/* Skills & Interests */}
      <section className="fade-in-section">
        <h2 className="text-3xl font-semibold mb-3">Skills &amp; Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold mb-1">Technical</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Applied Math &amp; Algorithms, Basic Cybersecurity</li>
              <li>Python, C++/C#, Java, React</li>
              <li>SQL, Git, Docker</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Languages &amp; Hobbies</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>French (native), English (fluent), Spanish (intermediate)</li>
              <li>Trekking, Volleyball, Handball, Climbing</li>
              <li>Musical Set Design &amp; Event Organization</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

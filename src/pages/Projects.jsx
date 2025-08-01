import React from "react";

const projects = [
  {
    title: "Xposure",
    description: (
      <span>
        Application developed during the <strong>H-GenAI Hackathon</strong>, designed to aggregate
        <strong> media resources</strong>, perform <strong>sentiment analysis</strong>, and deliver in-depth
        <strong> brand perception insights</strong> for Enedis using <strong>Mistral</strong>. The project involved a
        <strong> full-stack implementation</strong> using <strong>Docker</strong>, including a
        <strong> Django backend</strong>, a <strong>React frontend with WebRTC channels</strong>, and
        <strong> cloud interactions via AWS</strong>.
      </span>
    ),
    image: `${process.env.PUBLIC_URL}/images/XposureDemo.gif`,
    link: "https://github.com/Trick5t3r/Xposure",
  },  
  {
    title: "Reinforcement Learning for High Frequency Trading",
    description: (
      <span>
        This project explores the application of <strong>Reinforcement Learning (RL)</strong> for
        <strong> High-Frequency Trading (HFT)</strong>. We develop a simulated market environment and train RL agents
        using <strong>Deep Q-Learning (DQL)</strong>, <strong>Actor-Critic (AC)</strong>, and
        <strong> Proximal Policy Optimization (PPO)</strong> algorithms. The goal is to design an agent capable of
        making optimal trading decisions under a realistic market simulation.
      </span>
    ),
    image: `${process.env.PUBLIC_URL}/images/rl_highfrequency.png`,
    link: "https://github.com/edlaf/Deep-Learning-for-High-Frequency-trading",
  },  
  {
    title: "Finetune LLM for Legal Summarization",
    description:(
    <span>
      This project aims to fine-tune a <strong>Small Language Model (SLM)</strong> (e.g., <strong>mT5-Base</strong>) on a
      summarization task using a <strong>non-English dataset</strong>. We focused on legal rulings from the
      <strong>French Court of Cassation</strong> as our topic. Using both a <strong>large LLM</strong> to generate
      synthetic summaries and <strong>expert-written summaries</strong>, we were able to fine-tune our SLM and
      <strong>compare multiple results</strong> across summarization methods — all within an
      <strong>English-language training framework</strong>.
    </span>),
      image: `${process.env.PUBLIC_URL}/images/llm.jpg`,
    link: "https://github.com/Trick5t3r/Finetune-LLM-CASS",
  },
  {
    title: "Face Recognition With Continual Learning",
    description: (
      <span>
        This project implements a <strong>Face Recognition system</strong> enhanced by
        <strong> Continual Learning</strong> to improve performance over time. It leverages
        <strong> Convolutional Neural Networks (CNNs)</strong> and the
        <strong> ICaRL method</strong> to enable the model to learn incrementally without catastrophic forgetting.
      </span>
    ),
    image: `${process.env.PUBLIC_URL}/images/cnn_icarl.png`,
    link: "https://github.com/Trick5t3r/FaceRecognitionWithContinualLearning",
  },
  {
    title: "Improvement of the Choco Algorithm",
    description: (
      <span>
        I contributed to the study of a <strong>distributed learning algorithm with compressed communication</strong>,
        based on the paper <a href="https://arxiv.org/abs/1907.09356" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">CHoco-SGD</a>. We implemented the algorithm, built visualizations, and extended the theoretical framework. In particular, we generalized results to <strong>non-symmetric matrices</strong> (i.e., <strong>directed graphs</strong>) and explored performance on <strong>randomly sampled doubly stochastic matrices</strong> at each step.
      </span>
    ),
    image: `${process.env.PUBLIC_URL}/images/animation_gossip_quantifie_choco_carre.gif`,
    link: "https://github.com/Trick5t3r/Improvement-Choco-Algo",
  } ,
  {
    title: "Solving Vlasov Equations using Quantum Computing",
    description: (
      <span>
        Implementation of <strong>quantum computing algorithms</strong> to solve
        <strong> Vlasov equations</strong>, with a focus on
        <strong> 2D matrix factorization techniques</strong>. This work explores how quantum methods can support complex PDE resolution in physics and computational mathematics.
      </span>
    ),
    image: `${process.env.PUBLIC_URL}/images/vlasov_equations.png`,
    link: "https://github.com/Trick5t3r/psc_info_quantique_vlasov",
  },
  {
    title: "Internship at Ansys - Data Compression – 2024",
    description: (
      <span>
        I completed a 3-month internship at <strong>Ansys</strong>, where I developed a
        <strong> data compression algorithm</strong> using tools from
        <strong> applied mathematics</strong>, particularly the
        <strong> Laplace–Beltrami operator</strong>.
      </span>
    ),
    image: `${process.env.PUBLIC_URL}/images/ANSYS_logo.png`,
    link: "https://www.ansys.com/",
  },  
  {
    title: "Internship at CNRS@CREATE - Safe RL – 2025",
    description: (
      <span>
        I completed a research internship at <strong>CNRS@CREATE</strong>, a CNRS laboratory in
        collaboration with <strong>NUS Singapore</strong>. The work focused on the
        <strong> safety of Reinforcement Learning (RL) policies</strong> by analyzing
        <strong> polytopes in the state space</strong> and applying
        <strong> linear solvers</strong> to support formal guarantees in control environments.
      </span>
    ),
    image: `${process.env.PUBLIC_URL}/images/CNRS-CREATE.png`,
    link: "https://www.cnrsatcreate.cnrs.fr/",
  }    
];

export default function Projects() {
  return (
    <div className="p-6 space-y-16">
      <section className="fade-in-section">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-700 mb-6">
          This selection of projects highlights work at the intersection of applied mathematics,
          machine learning, and algorithmic research.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border p-4 rounded shadow hover:shadow-md transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

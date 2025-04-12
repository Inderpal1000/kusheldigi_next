"use client"
import React, { useState } from "react";
import "./more.css";

const principlesData = [
  {
    id: 1,
    title: "Global Expansion",
    content:
      "Effortlessly manage multiple online stores and expand your business globally with headless commerce, ensuring consistent branding and centralized control across various markets and regions.",
  },
  {
    id: 2,
    title: "Content Authority",
    content: "Establish content authority and maximize efficiency by creating and reusing content seamlessly across different channels and platforms with headless commerce, ensuring a consistent brand voice and message.",
  },
  {
    id: 3,
    title: "Improved Performance",
    content: "Experience blazing-fast load times and seamless user interactions, thanks to the speed and efficiency of headless commerce.",
  },
  {
    id: 4,
    title: "Multi-Channel Flexibility",
    content: "Expand your reach effortlessly by delivering consistent shopping experiences across various channels, from web and mobile to voice and IoT devices.",
  },
  {
    id: 5,
    title: "Scalability at its Best",
    content: "Scale your business effortlessly as it grows, without compromising performance or user experience, thanks to the scalability of headless commerce.",
  },
  {
    id: 6,
    title: "Streamlined Integration",
    content: "Seamlessly integrate third-party services, APIs, and tools to enhance your online store's functionality and stay ahead of the competition with headless commerce.",
  },
];

const CorePrinciples = () => {
  const [activeId, setActiveId] = useState(1);

  const togglePrinciple = (id) => {
    setActiveId(id);
  };

  return (
    <section className="core-section" id="core-principles">
    <div className="content-wrapper">
      <div className="text-content" data-aos="fade-right">
        <h2>
          Why <span className="highlight">Headless Commerce?</span>
        </h2>
        <p>
          Headless commerce is the future of digital retail. By decoupling the frontend from the backend, it enables unmatched flexibility, performance, and scalability.
        </p>
      </div>

      <div className="principles-list" data-aos="fade-left">
        {principlesData.map((item) => (
          <div
            key={item.id}
            className={`principle-box ${activeId === item.id ? "active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            <div className="number-circle">{item.id}</div>
            <div className="principle-text">
              <h3>{item.title}</h3>
              <div className={`principle-content-wrapper ${activeId === item.id ? "expanded" : ""}`}>
                <p className="principle-content">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default CorePrinciples;

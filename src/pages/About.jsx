import React from "react";
import Header from "../components/Header";
import "./About.css";
import me from "../images/teste.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <Header className="side" />
      <main>
        <h1 className="about-title">About me</h1>
        <section className="about-text-container">
          <p className="fadein5">
            I'm 32 years old, bachelor degree in biology at UNESP - Botucatu.
          </p>
          <p className="fadein10">
            Though I never went down the path of Biology, once I finished the
            university I decided to work at my Father's gas station.
          </p>
          <p className="fadein10">
            There I worked as a manager, responsible for 13 co-workers,
            finances, stock, paperwork and day to day problems.
          </p>
          <p className="fadein15">
            By the year of 2022 I decided to pursue my wish to work with
            technology, and started to learn about programming. I enrolled
            myself in Trybe's web development course. In which I learned about
            tech used to develop web applications such as JavaScript, NodeJS,
            Docker, TypeScript and many others.
          </p>
          <p className="fadein15">
            I'm quite sure that I've found what I really want to do and work
            with, and I'm now looking for a opportunity to complete this
            transition in my carrer, becomming a dev for your company! 😄
          </p>
        </section>
      </main>
      <img className="me" src={me} alt="eu" />
    </div>
  );
}

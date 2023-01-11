import React from "react";
import Header from "../components/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header className="side" />
      <main className="home">
        <section className="title-container">
          <p className="title-p fadein5">Hey! I'm</p>
          <h1 className="title-name fadein10">Thiago Durante!</h1>
          <h3 className="subtitle fadein15">I'm a digital craftsman.</h3>
          <p className="title-p fadein20">
            I'm a Backend Junior Web Developer that focuses on building
            functional, clean and easy to read code, using technologies such as
            NodeJS, Express, MongoDB, MySQL, Docker and a few more. Currently
            open for work.
          </p>
        </section>
      </main>
    </div>
  );
}

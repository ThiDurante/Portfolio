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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, assumenda. Quisquam dicta, fugiat debitis at vitae
            quaerat praesentium blanditiis temporibus quis laudantium fugit,
            nesciunt sit aliquid, tempora in sequi hic!
          </p>
        </section>
      </main>
    </div>
  );
}

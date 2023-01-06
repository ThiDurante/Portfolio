import React, { useContext } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import portfolioContext from "../context/portfolioContext";
import "./Home.css";

export default function Home() {
  const { theme } = useContext(portfolioContext);
  return (
    <div className={`${theme}-home`}>
      <Header />
      <main>
        <hr className={`${theme}-bar`} />
        <section className="title-container">
          <p className={`${theme}-title-p fadein5`}>Hey! I'm</p>
          <h1 className={`${theme}-title-name fadein10`}>Thiago Durante!</h1>
          <h3 className={`${theme}-subtitle fadein15`}>
            I'm a digital craftsman.
          </h3>
          <p className={`${theme}-title-p fadein20`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, assumenda. Quisquam dicta, fugiat debitis at vitae
            quaerat praesentium blanditiis temporibus quis laudantium fugit,
            nesciunt sit aliquid, tempora in sequi hic!
          </p>
        </section>
      </main>
      <aside>
        <Socials />
      </aside>
    </div>
  );
}

import React from "react";
import KidBicycle from "../images/kid-bicycle.jpg";

function MainSection() {
  return (
    <section id="main">
      <section id="articles">
        <article>
          <div className="image">
            <img src={KidBicycle} alt="Kid" />
          </div>
          <div className="content">
            <h3>Amazing Life To Live</h3>
            <p>
              Midst first it. You're multiply divided. There don't. Second his
              one given the he one third rule fruit. Very fill. Seed give
              firmament.
            </p>
          </div>
        </article>
        <article>
          <div className="image">
            <img src={KidBicycle} alt="Kid" />
          </div>
          <div className="content">
            <h3>Amazing Life To Live</h3>
            <p>
              Midst first it. You're multiply divided. There don't. Second his
              one given the he one third rule fruit. Very fill. Seed give
              firmament.
            </p>
          </div>
        </article>
        <article>
          <div className="image">
            <img src={KidBicycle} alt="Kid" />
          </div>
          <div className="content">
            <h3>Amazing Life To Live</h3>
            <p>
              Midst first it. You're multiply divided. There don't. Second his
              one given the he one third rule fruit. Very fill. Seed give
              firmament.
            </p>
          </div>
        </article>
      </section>
      <aside>
        <section id="information">
          <h3>About Me</h3>
          <p>
            Hi, i am the author Blog. This blog is to provide you with daily
            outfit ideas and share my personal style
          </p>
        </section>
      </aside>
    </section>
  );
}

export default MainSection;

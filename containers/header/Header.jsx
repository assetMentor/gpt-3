import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding " id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          {" "}
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing . Indulgence way everything joy
          alteration boisterous the attachment . party me years to order allow
          aaked of .{" "}
        </p>
        <div className="header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours </p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;

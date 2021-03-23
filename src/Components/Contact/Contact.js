import React from "react";
import style from "./Contact.module.css";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillPhone,
} from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div id="contact">
      <div style={{ height: "3rem" }}></div>
      <div className="section-header">
        <div>
          <h3>Contact</h3>
        </div>
        <div className="section-divider"></div>
      </div>
      <section className={style.contactlist}>
        <article>
          <AiOutlineMail size={"4rem"} /> pavankumar.kulkarni@gmail.com
        </article>
        <article>
          {" "}
          <AiFillLinkedin size={"4rem"} />
          <a
            href="https://www.linkedin.com/in/pavan-kumar-kulkarni-1a13581b/"
            target="blank"
          >
            connect
          </a>
        </article>
        <article>
          {" "}
          <AiOutlineGithub size={"4rem"} />
          <a href="https://github.com/pavankumarkulkarni" target="blank">
            Follow
          </a>
        </article>
        <article>
          <AiFillPhone size={"4rem"} /> +1 3472163601
        </article>
        <article>
          <ImLocation2 size={"4rem"} />
          New Jersey, USA
        </article>
      </section>
    </div>
  );
};

export default Contact;

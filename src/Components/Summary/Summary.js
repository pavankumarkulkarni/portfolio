import img from "../Pavan.jfif";
import style from "./Summary.module.css";
import myPic from "../images/profile.png";
const Maincontent = () => {
  return (
    <div className="main">
      <div className="section-header">
        <div>
          <h3>Summary</h3>
        </div>
        <div className="section-divider"></div>
      </div>
      <div className={style.card}>
        <h3>Pavan Kumar Kulkarni</h3>
        <div className={style.cardBody}>
          <article className={style.cardBody_text}>
            <p>
              Passionate Javascript full stack (MERN stack) developer. CSM
              certified Project Manager delivering projects in banking domain.
              15+ years of IT experience.
            </p>
            <a href="#portfolio">View Projects</a>
          </article>
          <article className={style.cardBody_image}>
            <img src={myPic} alt="Pavan" />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;

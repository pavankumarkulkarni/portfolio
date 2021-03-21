import img from "../Pavan.jfif";
import style from "./Summary.module.css";
import myPic from "../profile.png";
const Maincontent = () => {
  return (
    <div className="main">
      <div className={style.card}>
        <h3>Pavan Kumar Kulkarni</h3>
        <div className={style.cardBody}>
          <article className={style.cardBody_text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              impedit ut eos, ullam facilis hic explicabo exercitationem unde
              libero atque odio maiores aliquam ab esse praesentium molestias
              natus delectus non?
            </p>
            {/* <button type="button">Projects</button> */}
            <a href="#work">Projects</a>
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

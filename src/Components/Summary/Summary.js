import img from "../Pavan.jfif";
const Maincontent = () => {
  return (
    <div className="main">
      <div>
        <img className="myPic" src={img} alt="" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          aperiam tenetur adipisci laborum provident, aspernatur quae ex nulla
          labore. Suscipit, distinctio? Voluptas corrupti reiciendis architecto
          fugit quo nulla deleniti at!
        </p>
      </div>
    </div>
  );
};

export default Maincontent;

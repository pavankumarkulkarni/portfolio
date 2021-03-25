import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Loading from "./Components/Loading/Loading";
import React from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [projectOnModal, setProjectOnModal] = React.useState(null);

  const openModal = (project) => {
    setShowModal(true);
    setProjectOnModal(project);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            {showModal && (
              <Modal setShowModal={setShowModal} project={projectOnModal} />
            )}
            <div className="headerbg"></div>
            <Header />
            <Summary />
            <Projects openModal={openModal} />
            <Contact />
          </>
        )}
      </div>
    </>
  );
}

export default App;

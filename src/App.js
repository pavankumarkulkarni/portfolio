import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Loading from "./Components/Loading/Loading";
import React from "react";

function App() {
  const [loading, setLoading] = React.useState(true);
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
            <div className="headerbg"></div>
            <Header />
            <Summary />
            <Projects />
            <Contact />
          </>
        )}
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import subsectionImg from "./portfolio-img.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <div className="work">
          <div className="work__subsection">
            <img className="img__sub" src={subsectionImg} alt="work section" />
          </div>
          <div className="work__subsection">
            <img className="img__sub" src={subsectionImg} alt="work section" />
          </div>
          <div className="work__subsection">
            <img className="img__sub" src={subsectionImg} alt="work section" />
          </div>
          <div className="work__subsection">
            <img className="img__sub" src={subsectionImg} alt="work section" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

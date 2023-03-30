import "./App.css";
import Header from "./components/Header";
import portfolio_img from "./portfolio-img.jpeg";
import novel_img from "./novel-final.jpg";

const portfolio_grid_images=[novel_img,novel_img,novel_img,portfolio_img];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <div className="work">
          {portfolio_grid_images.map(image => {
            return (
              <div className="grid_item" key={image}>
                <img className="img__sub" src={image} alt="work section" />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
        
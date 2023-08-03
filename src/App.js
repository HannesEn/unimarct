import "./App.css";
import Nav from "./Nav";
import { Item } from "./item";
import heavy from "./falcon-heavy.jpeg";
import vertical from "./vertical.jpeg";
import starship from "./starship.jpeg";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="browse-container">
        <h1 className="browse-title">Browse</h1>
        <hr className="browse-hr" />
      </div>
      <div className="item-div">
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={heavy} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={vertical} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
        <Item title={"Hello"} price={12.5} image={starship} />
      </div>
    </div>
  );
}

export default App;

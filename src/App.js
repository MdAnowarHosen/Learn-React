import Header_Footer from "./components/Header_Footer";
import Country from "./components/Home/Country";
import Fruits from "./components/Home/Fruits";
import TwoWayDataBinding from "./components/Home/TwoWayDataBinding";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>I'm Anowar Hosen</h2>
      <div>
        <Fruits />
        <Country />
        <TwoWayDataBinding />
        <Header_Footer />
      </div>
    </div>
  );
}

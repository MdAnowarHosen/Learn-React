import HeaderFooterApp from "./components/HeaderFooterApp";
import Country from "./components/Home/Country";
import Fruits from "./components/Home/Fruits";
import TwoWayDataBinding from "./components/Home/TwoWayDataBinding";
import "./styles.css";
import "./custom_style.css";
import Posts from "./components/Home/Posts";
// import Mobile from "./components/Home/Mobile";
// import Map from "./components/Home/Map";
// import Service from "./components/Home/Service";

export default function App() {
  return (
    <div className="App">
      <div>
        {/* <Fruits />
        <Country />
        <TwoWayDataBinding />
        
        <Mobile />
        <Map /> */}

        <HeaderFooterApp />
        <Posts />
      </div>
    </div>
  );
}

import { useState } from "react";
import Info from "./components/info";
import Navbar from "./components/navbar";
import DropDown from "./components/navbar/dropdown";
import Hero from "./components/navbar/hero";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/sliderData";
import GlobalStyle from "./globalStyle";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown toggle={toggle} isOpen={isOpen} />
      <Hero slides={SliderData} />
      <Info {...InfoData} />
    </div>
  );
}

export default App;

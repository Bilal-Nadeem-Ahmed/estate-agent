import Navbar from "./components/navbar";
import Hero from "./components/navbar/hero";
import { SliderData } from "./data/sliderData";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <div className="">
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </div>
  );
}

export default App;

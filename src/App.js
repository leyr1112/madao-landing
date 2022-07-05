import Navbar from "./components/Navbar/navbar"
import Home from "./components/Home/Home"
import Artist from "./components/Artist/Artist";
import Roadmap from "./components/Roadmap/Roadmap";
import MintingSection from "./components/Minting-section/Minting-section"
function App() {
  return (
    <div className="body-bg">
     <Navbar />
     <Home />
     {/* <MintingSection/> */}
     <Artist/>
     <Roadmap/>
     {/* <Navbar /> */}
     
    </div>
  );
}

export default App;

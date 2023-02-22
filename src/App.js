import { Header } from "./compoents";
import "./index.css"
import { Routes, Route } from 'react-router-dom';
import { Home, RoadMap, AboutTheproject, Team, Rarity, WhilteList } from "./containers";
import "./containers/Global.css"
function App() {
  return (
    <>
      <section className="background__Img">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadMap" element={<RoadMap />} />
          <Route path="/About" element={<AboutTheproject />} />
          <Route path="/team" element={<Team />} />
          <Route path="/rarity" element={<Rarity />} />
          <Route path="/whitelist" element={<WhilteList />} />

        </Routes>


      </section>

    </>
  );
}

export default App;

import { ColorTheme } from "./components/ColorTheme";
import { Likebutton } from "./components/Likebutton";
import { PokeList } from "./components/PokeList";




function App() {
  return (
    <div className="App">
      <Likebutton />
      <Likebutton/>
      <ColorTheme/>
      <PokeList/>
    </div>
  );
}

export default App;

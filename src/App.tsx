import './App.css'
import {Tldraw} from "@tldraw/tldraw";
import {uiOverrides} from "./ui-overrides.ts";

function App() {
  return (
    <Tldraw
      overrides={uiOverrides}
      inferDarkMode={true}
      shareZone={<span>foo</span>}
    />
  )
}

export default App

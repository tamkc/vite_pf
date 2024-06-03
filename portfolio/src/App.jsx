import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Context from "./components/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Context />
    </div>
  );
}

export default App;

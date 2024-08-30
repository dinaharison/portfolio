import { useState } from "react";
import Home from "./home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="no-scrollbar">
        <Home></Home>
      </div>
    </>
  );
}

export default App;

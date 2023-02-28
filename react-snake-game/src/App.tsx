import React, { useEffect } from "react";
import { greet } from "rust_pkg";

const App = () => {
  useEffect(() => {
    greet("Sid");
  }, []);

  return <div className="App">Greetings!!</div>;
};

export default App;

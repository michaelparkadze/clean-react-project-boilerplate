/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

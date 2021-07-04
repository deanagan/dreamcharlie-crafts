import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClientOverview } from "./views/ClientOverview";
import { NavBar } from "./views/NavBar";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <div>
        <ClientOverview />
      </div>
    </div>
  );
}

export default App;

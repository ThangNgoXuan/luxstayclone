import React from "react";
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";

import RoutesClient from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <div className="main">
          <RoutesClient/>
        </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./styles/App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";

function App() {
  return (
    <div className="App">
      <h1>Burger Builder</h1>
      <Layout>
      	<BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;

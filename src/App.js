import React from "react";
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
import Layout from "./components/layout/Layout";
import "./sass/style.scss";

function App() {
  return (
    <Layout>
      <header className="App-header">
        <Heading title="Vegard Pihl Bratteng" />
          
        <Paragraph>
            Arrow pointing down
        </Paragraph>
      </header>
    </Layout>
  );
}

export default App;

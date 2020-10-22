import React from "react";

import Layout from "./components/Layout";
import Store from "./store";

function App() {
  return (
    <Store>
      <Layout></Layout>
    </Store>
  );
}

export default App;

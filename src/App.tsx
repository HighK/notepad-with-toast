import React, { useState } from "react";
import Layout from "./components/Layout";
import Store from "./store";
import LoginPage from "./pages/Login";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <Store>{!isLogin ? <LoginPage onLogin={setLogin} /> : <Layout />}</Store>
  );
}

export default App;

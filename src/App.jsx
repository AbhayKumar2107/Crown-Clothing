import React from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Authentication from "./routes/Authentication";

const Shop = () => {
  return (
    <div>
      <h1>I am the Shop page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

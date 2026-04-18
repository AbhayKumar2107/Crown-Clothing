import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Authentication from "./routes/Authentication";
import Shop from "./routes/Shop";
import Cart from "./routes/Cart";


const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

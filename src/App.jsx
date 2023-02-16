import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { SharedLayout } from "./components/SharedLayout";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { SingleProduct } from "./pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

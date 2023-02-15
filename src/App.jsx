import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { SharedLayout } from "./components/SharedLayout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

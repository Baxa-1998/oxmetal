import {  Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";

function App() {

  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:ProductId" element={<ProductPage />} />
          </Route>
        </Routes>
  );
}

export default App;

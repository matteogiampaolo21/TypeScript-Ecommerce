import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import SingleCategory from "./pages/SingleCategory";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

import "./styles/App.css"

function App() {
  
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<AllProducts/>} />
          <Route path="/products/:category" element={<SingleCategory/>} />
          <Route path="/product/:productID" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;

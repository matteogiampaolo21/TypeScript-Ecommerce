import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./styles/App.css"

function App() {
  
  return (
    <Router>
      <Navbar />
        <Routes>
           <Route path="/" element={<Home />}/>
          {/*<Route path="/products/:category" element={<Products/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:productID" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;

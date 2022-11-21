import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './Project/Navbar/Navbar';
import Home from './Project/Home';
import Product from './Project/Product';
import ProductDetail from './Project/ProductDetail';
import Signup from './Project/Signup';
import Body from './Project/Body';
import Footer from './Project/Footer';


function App() {
  return (
    <div className="App">
     <Router>
<Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/product" element={<Product/>}  />
     <Route path="/productdetail" element={<ProductDetail/>}  />
    <Route path="/signup" element={<Signup/>}  />
    </Routes>
      </Router>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

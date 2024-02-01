import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./content/ShoppingCartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./global.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function App() {  
  return (
    <>
      <ShoppingCartProvider>
          <Navbar />
          <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </ShoppingCartProvider>
        <ToastContainer position="bottom-right"/>
    </>
  );
}

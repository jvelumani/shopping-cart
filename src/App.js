import { Header } from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";



function App() {
  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

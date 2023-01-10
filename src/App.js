import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Footer from "./pages/Shared/Footer/Footer";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
// import Checkout from "./pages/Checkout/Checkout/Checkout";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
// import Services from "./pages/Home/Services/Services"
// import Experts from "./pages/Experts/Experts";
import HomeLibraries from "./pages/Home/homeLibraries/HomeLibraries";
import Authors from "./pages/Authors/Authors";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/books" element={<HomeLibraries />}></Route>
        
        <Route path="/writters" element={<Authors />}></Route>

        <Route path="/books/:bookId" element={<ServiceDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

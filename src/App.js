import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar_components/Navbar";
import Header from "./Pages/Headerpage/Header";
import './App.css'
import Footer from "./Pages/FooterPage/Footer";

function App() {
  return (
    <div>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

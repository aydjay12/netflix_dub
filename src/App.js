import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router basename="/netflix_dub">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/singlepage/:id"
            element={<SinglePage></SinglePage>}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

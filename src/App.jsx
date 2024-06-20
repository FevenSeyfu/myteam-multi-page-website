import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import PageTitle from "./components/common/PageTitle";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Homepage" />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <PageTitle title="About" />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <PageTitle title="Contact" />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import { Navbar } from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SignUp from "./pages/SignUp";
import Footer from "./components/footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Team from "./pages/Team";

function App() {
  return (
    <div className="app">
      <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </Container>
      <Footer />
    </div>
  );
}

export default App;
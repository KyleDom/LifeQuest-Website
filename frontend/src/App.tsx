import { Navbar } from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import Team from "./pages/Team";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

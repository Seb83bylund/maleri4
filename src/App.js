import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hem from "./pages/Hem";
import Tjänster from "./pages/Tjänster";
import Rotavdrag from "./pages/Rotavdrag";
import Pris from "./pages/Priser";



function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hem />} />
      <Route path="/tjanster" element={<Tjänster />} />
      <Route path="/rotavdrag" element={<Rotavdrag />} />
      <Route path="/priser" element={<Pris />} />
    </Routes>
  </>
  );
}

export default App;

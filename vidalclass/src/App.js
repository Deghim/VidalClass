import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ContactosPage from "./pages/ContactosPage";
import TareasPage from "./pages/TareasPage";
import Poke from "./pages/Poke";
import Chiste from "./pages/Chiste";
import Age from "./pages/Age";

// Componente funcional
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<TareasPage />}></Route>
        <Route path="/contactos" element={<ContactosPage />}></Route>
        <Route path="/poke" element={<Poke />}></Route>
        <Route path="/chiste" element={<Chiste />}></Route>
        <Route path="/age" element={<Age />}></Route>
        
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
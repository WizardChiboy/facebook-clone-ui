import "./App.css";
import Home from "./components/home/Home";
import Dashboard from "./routes/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

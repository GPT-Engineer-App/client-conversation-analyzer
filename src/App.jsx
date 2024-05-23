import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddCalorieRecord from "./pages/AddCalorieRecord.jsx";
import History from "./pages/History.jsx";
import EditRecord from "./pages/EditRecord.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add" element={<AddCalorieRecord />} />
        <Route path="/history" element={<History />} />
        <Route path="/edit/:id" element={<EditRecord />} />
      </Routes>
    </Router>
  );
}

export default App;

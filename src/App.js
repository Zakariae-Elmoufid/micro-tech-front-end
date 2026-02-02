import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <div className="App">

      <Routes>
          <Route path="/admin" element={<Dashboard />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

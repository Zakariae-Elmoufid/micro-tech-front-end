import { Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">

      <Routes>
          <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/products" element={<Products/>} />
          <Route path="/" element={<Counter/>} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CoffeeBeanForm from "./components/CoffeeBeanForm";
import CoffeeBeanList from "./pages/CoffeeBeanList";
import LoginPage from "./pages/LoginPage";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav className="fixed top-0 left-0 w-full p-4 bg-stone-400 text-white flex justify-between items-center shadow-lg z-10">
        <div className="flex gap-6">
          <Link to="/" className="text-neutral-100 hover:text-neutral-300 transition-colors duration-200">Coffee Crowd</Link>
          <Link to="/submit" className="text-neutral-100 hover:text-neutral-300 transition-colors duration-200">New Coffee</Link>
        </div>
        <div className="flex gap-6">
          <Link to="/login" className="text-neutral-100 hover:text-neutral-300 transition-colors duration-200">Login</Link>
        </div>
      </nav>

      <div className="p-4 pt-16 min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<CoffeeBeanList />} />
          <Route path="/submit" element={<CoffeeBeanForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

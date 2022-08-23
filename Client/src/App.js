import "./App.css";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<SignUp />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;

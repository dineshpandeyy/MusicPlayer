import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./output.css";
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from "./routes/Home";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        {/* <Route path="/hi" element={<div>hiiiii</div>} /> */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/home" element={<HomeComponent />} />

        

      </Routes>
      </BrowserRouter>
  );
}

export default App;

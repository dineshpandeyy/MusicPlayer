import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./output.css";
import LoginComponent from './routes/Login';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        {/* <Route path="/hi" element={<div>hiiiii</div>} /> */}
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

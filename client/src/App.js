import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

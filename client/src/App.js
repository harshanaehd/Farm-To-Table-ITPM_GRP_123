import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./pages/signIn";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

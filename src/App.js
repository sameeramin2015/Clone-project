import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./App.css";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route path="/">
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

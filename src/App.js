import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
        <Route exact path="/Header" element={<Header />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

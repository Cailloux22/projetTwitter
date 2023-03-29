import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tweets from "./components/tweets";
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tweets />} />
    </Routes>
  </BrowserRouter>;
  return <div>helloooo</div>;
}

export default App;

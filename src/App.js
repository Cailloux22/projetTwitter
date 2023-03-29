import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tweets from "./components/tweets";
function App() {
  return (  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tweets />} />
    </Routes>
  </BrowserRouter>);
  
}

export default App;

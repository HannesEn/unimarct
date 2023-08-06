import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

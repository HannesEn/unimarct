import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./profile";
import { Login } from "./login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

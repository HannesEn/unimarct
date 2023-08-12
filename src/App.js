import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./profile";
import { Login } from "./login";
import { useState, useEffect } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication failed");
        })
        .then((resObject) => {
          setUser(resObject.user);
          setIsLoading(false);
          console.log(resObject.user);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    };
    getUser();
    console.log(isLoading);
  }, []);
  if (isLoading) {
    return <div className="loading-main">Loading...</div>;
  }
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} user={user} />} />
        <Route
          path="/profile"
          element={
            user ? (
              <Profile setIsLoading={setIsLoading} isLoading={isLoading} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./profile";
import { Login } from "./login";
import { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/auth/login/success",
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const resObject = await response.json();
          setUser(resObject.user);
          setIsLoading(false);
          console.log(resObject.user);
        } else {
          throw new Error("Authentication failed");
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    console.log();
    getUser();
  }, []);
  if (isLoading & (user === null)) {
    return <div className="loading-main-app">Loading...</div>;
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

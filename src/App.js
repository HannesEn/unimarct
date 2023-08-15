import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./profile";
import { Login } from "./login";
import { useState, useEffect } from "react";
import "./app.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedOut, setLoggedOut] = useState(true);

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
        console.log(response);

        if (response.status === 200) {
          const resObject = await response.json();
          setUser(resObject.user);
          console.log(resObject.user);
        } else {
          throw new Error("Authentication failed");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, []);
  console.log(user);
  if (isLoading) {
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
              <Profile
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                loggedOut={loggedOut}
                setLoggedOut={setLoggedOut}
              />
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

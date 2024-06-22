import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Pages/Home/Home";
import Properties from "./Components/Pages/Properties/Properties";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Pages/Contact/Contact";
import Auth from "./Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { login } from "./Components/Features/userSlice";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
            photoURL: auth.currentUser.photoURL,
          })
        );
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
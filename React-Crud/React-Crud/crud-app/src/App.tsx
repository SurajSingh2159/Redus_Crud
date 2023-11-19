import "./App.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Read from "./screens/Read";
import { createContext } from "react";
import { useState } from "react";
import Create from "./screens/Create";
import Update from "./screens/Update";

export type IAuthObj = {
  auth: boolean;
  setAuth: (val: boolean) => void;
};

const initialContextState = {
  auth: false,
  setAuth: (val: boolean) => {},
};

export const AppContext = createContext<IAuthObj>(initialContextState);

const App = () => {
  let [auth, setAuth] = useState(false);

  return (
    <AppContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<LoginScreen />} />
              {auth ? 
              <>
              <Route path="/create" element={<Create />} />
              <Route path="/read" element={<Read />} />
              <Route path="/update" element={<Update />} />
              </> : <></>}
              {/* <Route path="*" element={<LoginScreen />} /> */}
            </Routes>
          </Container>
        </main>
      </Router>
    </AppContext.Provider>
  );
};

export default App;

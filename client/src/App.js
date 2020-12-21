import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { loadUser } from "./actions/authActions";
import Navbar from "./components/header/Navbar";


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

export default App;

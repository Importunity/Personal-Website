import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import { loadUser } from "./actions/authActions";


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;

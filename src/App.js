import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Display from "./components/Display";
import CatForm from "./components/CatForm";
import Category from "./components/Category"

function App() {
  const url = "http://localhost:3500";

  //set state to hold categories
  const [categs, setCategs] = useState([]);

  //function to get all categories
  const getCategs = () => {
    fetch(url + "/categories")
      .then((res) => res.json())
      .then((data) => setCategs(data));
  };

  //GET categs ON PAGE LOAD
  React.useEffect(() => {
    getCategs();
  }, []);

 

  return (
    <Switch>
     

      <div className="App">
        <h1>Your To-Do List for EVERYTHING!!</h1>
        <hr />

        <Route
          exact
          path="/"
          render={(rp) => <Display {...rp} categs={categs} />}
          />
          <Route exact path={'/categories/:category'} /><Category catName={':category'}/>
        <Route
          exact
          path="/categories/create"
          render={(rp) => <CatForm {...rp} getCategs={getCategs} url={url} />}
          />
      </div>
      
    </Switch>
  );
}

export default App;

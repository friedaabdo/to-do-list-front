import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Display from "./components/Display";
import CatForm from "./components/CatForm";

function App() {
  const url = "https://localhost:3500";

  //set state to hold categories
  const [categs, setCategs] = useState([]);

  //function to get all categories
  const getCategs = () => {
    fetch(url + "/")
      .then((res) => res.json())
      .then((data) => setCategs(data));
  };

  //GET categs ON PAGE LOAD
  React.useEffect(() => {
    getCategs();
  }, []);

  //empty categ for form
  const emptyCateg = {
    category: '',
    list: []
  }
  

  return (
    <Switch>
      <div className="App">
        <h1>Your To-Do List for EVERYTHING!!</h1>
        <hr />

        <Link exact path="/categories/create">
          <button>Add Category</button>
        </Link>
        <Route
          exact
          path="/"
          render={(rp) => <Display {...rp} categs={categs} />}
        />
        <Route exact path='/categories/create' render={(rp) => (<CatForm {...rp} categ={emptyCateg} />)} />
      </div>
    </Switch>
  );
}

export default App;
